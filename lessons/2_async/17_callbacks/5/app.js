(function notes() {
  `
  Consider the function startCounter that accepts a callback.
  It should use setInterval to call the callback every second, incrementing and logging a counter variable each time.
  Also, provide a way for the callback to stop the counter after reaching a specified value.
  `
});


function startCounter(cb){
  let counter = 0;
  const intervalId = setInterval(()=>{
    // This callback is added to the event loop queue every second
    counter += 1;
    cb(counter) && clearInterval(intervalId) // If cb returns true, clearInterval is called
  }, 1000)

  setTimeout(()=>{
    // This callback is added to the event loop queue after 1.5 seconds
    console.log(intervalId)
  }, 1500)
}

const tests = function tests() {
  // Example usage:
  startCounter((count) => {
    console.log(count); // Logs the current count
    return count === 5; // Stops the counter when count reaches 5
  });
  // Logs 1, 2, 3, 4, 5, then stops
}
tests();