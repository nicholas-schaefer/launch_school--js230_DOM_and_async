(function notes() {
  `
  Write a function basicCallback
  - that receives a callback function and a numeric argument.
  This function should execute the callback after 2 seconds, passing it the number it received as an argument.
  `
});

const basicCallback = function basicCallback(cb, number){
  setTimeout(() =>{
    cb(number)
  }, 2000);
}





const tests = function tests() {
  // Example usage:
  basicCallback((number) => {
    console.log(number * 2);
  }, 5);
  // After 2 seconds, logs: 10
}
tests();