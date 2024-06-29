const graph = new Map()
// graph.set('a', new Map())
// graph.set('b', new Map())
// graph.set('c', new Map())
// graph.set('d', new Map())
// graph.set('e', new Map())
// graph.set('f', new Map())
// graph.get('a').set('b', 5)
// graph.get('b').set('c', 1)
// graph.get('b').set('d', 2)
// // graph.get('e').set('d', -1) // with negative cycle
// graph.get('c').set('e', 1)
// graph.get('d').set('f', 2)
// graph.get('f').set('e', -3)

//test 2

graph.set('a', new Map())
graph.set('b', new Map())
graph.set('c', new Map())
graph.set('d', new Map())

graph.get('a').set('b', 2)
graph.get('b').set('c', 4)
graph.get('c').set('d', 4)
graph.get('d').set('b', -20)


function bfa(graph, start_node){
  const dist = nullVertices(graph)
  const V = dist.size
  const edges = getEdges(graph)
  for(let i = 1; i <= V - 1; i++){
    edges.forEach((weight, {src, dest}) => {
      if(isFinite(dist.get(src)) && dist.get(src) + weight < dist.get(dest)){
        dist.set(dest, dist.get(src) + weight)
      }
    })
  }
  edges.forEach((weight, {src, dest}) => {
    if(isFinite(dist.get(src)) && dist.get(src) + weight < dist.get(dest)){
      console.log('Graph contains negative weight cycle')
      return
    }
  })
  console.log(dist)
}
function getEdges(graph){
  const edges = new Map()

  graph.forEach((edge, a) => {
    if(edge){
      edge.forEach((e, v) => {
        edges.set({src: a, dest: v}, e)
      })
    }
  })
  return edges
}

function nullVertices(graph){
  const dist = new Map()
  graph.forEach((_, v) => {
    dist.set(v, Infinity)
  })
  dist.set('a', 0)
  return dist
}
function getNumberOfEdges(graph){
  let num = 0
  graph.forEach((edge) => {
    num += edge.size
  })
  return num
}

bfa(graph, 'a')