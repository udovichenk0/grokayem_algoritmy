const {performance} = require('node:perf_hooks')
// function sum(n){
//   if(n.length == 1) return n[0]
//   return n.shift() + sum(n)
// }


// console.log(sum([1,2,3,4,5]))// 15
function generateLargeArray(size, minValue, maxValue) {
    const array = new Array(size);
    for (let i = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    }
    return array;
}

const size = 100000;  // Adjust the size as needed
const minValue = 1;
const maxValue = 1000000;
const largeArray = generateLargeArray(size, minValue, maxValue);
function qsort(nums){
  if(nums.length == 2) {
    return nums[0] > nums[1] ? [nums[1], nums[0]] : nums
  }
  if(nums.length < 2) return nums
  const pivot = nums[Math.round(nums.length / 2)]
  // console.log(pivot)
  const less = nums.filter((n) => n < pivot)
  const greater = nums.filter((n) => n > pivot)
  return qsort(less).concat(pivot, qsort(greater))
}
performance.mark('qsort_start');
qsort(largeArray) //47.271699999999996
// largeArray.sort((a, b) => a - b)
performance.mark('qsort_end');

console.log(performance.measure('qsort', 'qsort_start', 'qsort_end').duration)