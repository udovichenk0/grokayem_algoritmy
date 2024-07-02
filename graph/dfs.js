const graph = new Map()

graph.set('denis', ['ira', 'roma'])
graph.set('roma', ['vlad', 'olga'])
graph.set('ira', ['denis', 'kriss', 'sveta'])
graph.set('kriss', [])
graph.set('sveta', ['vladeron'])

function dfs(graph, start_node){
  const visited = new Map()

  let start = graph.get(start_node)
  visited.set(start_node, true)
  for(let i = 0; i < start.length; i++){
    const node = start[i]
    const nodes = graph.get(node)
    if(nodes && nodes.length){
      const searchedNode = treverse(graph, nodes, visited)
      if(searchedNode){
        console.log("Node found: ", searchedNode)
        break
      }
    }
  }
}

function treverse(graph, nodes, visited, found){
  let searchedNode
  for(let i = 0; i < nodes.length; i++){
    const node = nodes[i]
    console.log(node)
    const children = graph.get(node)
    if(node == 'vladeron') {
      searchedNode = node
      break
    }
    if(visited.get(node) || !children || (children && !children.length)){
      continue
    }
    visited.set(node, true)

    const isFound = treverse(graph, children, visited, searchedNode)
    if(isFound){
      searchedNode = isFound
      break
    }
  }
  return searchedNode
}


dfs(graph, 'denis')