(function notes() {
  `
Practice chaining promises by creating a promise chain that involves four promises.
The first promise should resolve with a number, then the chain should double the number and add 5 in successive .then() calls.
Log the result after the final operation.

Promise Basics

  `
});

function firstPromise(num){
  return new Promise((resolve, reject)=>{
    resolve(num);
  });
}

function secondPromise(num){
  return new Promise((resolve, reject)=>{
    resolve(num * 2);
  });
}

function thirdPromise(num){
  return new Promise((resolve, reject)=>{
    resolve(num + 5)
  });
}

function fourthPromise(num){
  return new Promise((resolve, reject)=>{
    resolve(num)
  });
}


const tests = function tests() {
  firstPromise(3)
  .then()
}
tests();