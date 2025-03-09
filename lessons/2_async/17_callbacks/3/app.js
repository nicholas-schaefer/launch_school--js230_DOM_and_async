(function notes() {
  `
  Write a function processData that takes in two parameters:
    - an array of numbers
    - a callback function.
  This function should use setTimeout to simulate a time-consuming computation by waiting 1 second.

  After the delay, it should apply the callback to each number in the array, and then log the new array.
  `
});

function processData(arr, func){
  setTimeout(()=>{
    console.log(arr.map((el)=> func(el)));
  }, 1000)
}


const tests = function tests() {
  // Example usage:
  processData([1, 2, 3], (number) => number * 2);
  // After 1 second, logs: [2, 4, 6]
}
tests();