(function notes() {
  `
Rewrite the downloadFile callback function you created in this assignment's Q2, as a new promise-based function called downloadFilePromise.
Instead of using a callback, it should return a promise that resolves with the message "Download complete!" after a delay.
  `
});

function downloadFilePromise(callback){
  console.log("Downloading file...");
  new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve("Download complete!");
    }, 1500);
  })
  .then((result)=>{
    callback(result)
  })
}


function downloadFile(callback) {
  console.log("Downloading file...");
  setTimeout(() => {
    callback("Download complete!");
  }, 1500);
}

const logger = function logger(el){
  console.log(el)
}

const tests = function tests() {
  // downloadFile((el)=>console.log(el))
  downloadFilePromise((el)=>console.log(el))
}
tests();