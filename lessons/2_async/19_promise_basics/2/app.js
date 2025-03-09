(function notes(){
  `
Convert the processData function from Q3 of this assignment to a new function named processDataPromise that uses promises.
This function should return a promise that processes an array of numbers after a delay, utilizing the .then() method for logging the altered array.
  `
});

function processDataPromise(arr, func){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(arr.map((el)=> func(el)));
    }, 1000)
    .then((result)=>{
      console.log(result)
    })
  })
}

function processDataPromise(numbers, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processed = numbers.map(callback);
      resolve(processed);
    }, 1000);
  });
}

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