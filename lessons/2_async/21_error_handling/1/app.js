(function notes() {
  `
Use the flakyService function from the last practice problem to handle errors gracefully
by logging "An error occurred" in a .catch() block, instead of logging "Operation failed" directly.
  `
});

function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed")
    }
  });
}


const tests = function tests() {
  flakyService()
  .then(console.log)
  .catch((error) => console.log('an error occurred'))
}
tests();