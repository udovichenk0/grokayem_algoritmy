const graph = new Map()
//test 1
graph.set('start', new Map())
graph.get('start').set('a', 8)
graph.get('start').set('b', 9)
graph.set('a', new Map())
graph.set('b', new Map())
graph.get('b').set('a', 8)
graph.set('c', new Map())
graph.set('d', new Map())
graph.get('a').set('c', 4)
graph.get('b').set('d', 7)
graph.get('c').set('d', 6)
graph.get('a').set('d', 2)
graph.get('c').set('end', 3)
graph.get('d').set('end', 1)
graph.set('end', new Map())


function dijkstra(graph, start_node){
  const costs = new Map()
  const parents = new Map()
  const visited = new Map()

  const start = graph.get(start_node)

  setCosts(costs, start)
  setParents(parents, start, start_node)

  let node = findTheLowestCost(costs, visited)
  while(node){
    const neighbors = graph.get(node)
    const cost = costs.get(node)
    if(!neighbors) break
    neighbors.forEach((_, n) => {
      const new_cost = cost + neighbors.get(n)
      if(new_cost < costs.get(n) || !costs.get(n)){
        costs.set(n, new_cost)
        parents.set(n, node)
      }
    })
    visited.set(node, 1)
    node = findTheLowestCost(costs, visited)
  }
  console.log(costs)
}

function findTheLowestCost(graph, visited){
  let lowest 
  let lastNode

  graph.forEach((cost, node) => {
    if(!visited.get(node)) {
      if(!lowest || cost < lowest){
        lowest = cost
        lastNode = node
      }
    }
  });
  return lastNode
}

function setCosts(costs, nodes){
  nodes.forEach((cost, node) => {
    costs.set(node, cost)
  })
}

function setParents(parents, children, parent){
  children.forEach((_, child) => {
    parents.set(child, parent)
  })
}

dijkstra(graph, 'start')