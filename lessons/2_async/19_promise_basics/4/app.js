(function notes() {
  `
Imagine a situation where you need to clean up resources (e.g., close a file) whether an operation succeeds or fails.
Create a promise that resolves with "Operation complete" and demonstrate how to perform cleanup after the operation completes by using .finally().
  `
});


function doThing(){

  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      1 + 1 === 2 ? resolve("good") : reject("bad")
    }, 2000)
  })
}


const tests = function tests() {
  doThing()
  .then(console.log)
  .catch(console.error)
}
tests();