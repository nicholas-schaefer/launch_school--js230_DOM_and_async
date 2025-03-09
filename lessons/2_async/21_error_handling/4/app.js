(function notes() {
  `
Imagine an async operation represented by mockAsyncOp promise that can either resolve or reject.
You want to ensure that no matter the outcome, you log "Operation attempted" after the operation has been completed.
  `
});

function mockAsyncOp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Operation succeeded");
      } else {
        reject("Operation failed");
      }
    }, 1000);
  });
}

const tests = function tests() {
  mockAsyncOp()
  .then(console.log)
  .catch(console.error)
  .finally(()=>{
    console.log("Operation attempted")
  })
}
tests();