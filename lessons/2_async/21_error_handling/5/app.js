(function notes() {
  `
Implement a loadData function that fetches data but sometimes fails.
It should return a promise that either fulfils with "Data loaded" or rejects with "Network error".

Use a .catch() block to return a recovery promise that resolves with "Using cached data" in case of failure.
  `
});

function loadData(){

  return new Promise((resolve, reject)=>{
    const success = Math.round(Math.random());

    success ? resolve('Data Loaded') : reject('Network error')
  })
}

const tests = function tests() {
  loadData()
  .then(console.log)
  .catch(new Promise((resolve) => resolve("Using cached data")))
}
tests();