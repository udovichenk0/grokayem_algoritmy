const {performance} = require('node:perf_hooks')

const longList = []

for (let i = 1; i <= 1000000; i++) {
  longList.push(i);
}

function binarySearch(list, target){
  let low = 0
  let high = list.length - 1
  let iter = 0
  while(low <= high){
    iter++
    let middle = Math.floor((low + high) / 2)
    const guess = list[middle]
    // console.table({low, high, middle, guess})
    if(guess == target){
      break
    }
    if(guess > target){
      high = middle - 1
    } else {
      low = middle + 1
    }
  }
}

function longSearch(list, target){
  return list.find((value) => value == target)
}
performance.mark('binary_search_start');
// binarySearch(longList, 999990) //0.15110000000000312
// longSearch(longList, 999990) //3.7806999999999995
performance.mark('binary_search_end');
console.log(performance.measure('A to B', 'binary_search_start', 'binary_search_end').duration)


