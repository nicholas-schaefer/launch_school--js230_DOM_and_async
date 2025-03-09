(function notes() {
  `
Create a promise called flakyService that simulates a service that sometimes fails.
The promise should resolve with "Operation successful" or reject with "Operation failed" randomly.
Use .then() for a successful operation log and .catch() for logging a failed operation.
  `
});

function flakyService(cb, msg){

  return new Promise((resolve, reject)=>{
    const isServiceSuccess = Math.floor(Math.random() * 2) === 1;
    isServiceSuccess ? resolve("Success!") : reject("Failure")
  })
}

const tests = function tests() {
  flakyService()
    .then(console.log)
    .catch(console.error)
}
tests();