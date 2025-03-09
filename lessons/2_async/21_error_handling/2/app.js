(function notes(){
  `
Suppose you are fetching user data from an API.
Handle the error thrown by this fetchUserData function, catch it and log only the error message
Then, use .finally() to log "Fetching complete".
  `
});

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "User not found" }), 500);
  });
}

const tests = function tests() {
  fetchUserData()
  .then(()=> console.log('success'))
  .catch((obj) => console.log(`Error: ${obj.error}`))
  .finally(()=> console.log("Fetching complete"))
}
tests();