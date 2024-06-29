const graph = new Map()

graph.set('denis', ['ira', 'roma'])
graph.set('roma', ['vlad', 'olga'])
graph.set('ira', ['denis', 'kriss', 'sveta'])
graph.set('kriss', [])
graph.set('sveta', ['vladeron'])

function bfs(graph, start_node){
  const start = graph.get(start_node)
  if(!start || start.length < 1) return
  const searchQueue = start
  const visited = new Map()
  while(searchQueue.length > 0){
    const name = searchQueue.shift()
    if(visited.get(name)) continue
    console.log(name)
    visited.set(name, true)
    const check = isVladeron(name)
    if(check){
      console.log('Found ', name)
      break
    } else {
      const friends = graph.get(name)
      if(!friends) continue
      if(friends.length > 0){
        searchQueue.push(...friends)
      }
    }
  }
}

function isVladeron(name){
  return name == 'vladeron'
}

bfs(graph, 'denis')

