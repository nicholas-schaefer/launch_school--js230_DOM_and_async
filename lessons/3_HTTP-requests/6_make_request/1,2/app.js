(function question() {
  `
Write JavaScript code that makes a GET request to this URL: https://api.github.com/repos/rails/rails.
What property will contain the response body after the request from the previous problem completes?
  `
});



const tests = function tests() {
  const request = new XMLHttpRequest();

  request.open("GET", 'https://api.github.com/repos/rails/rails');
  request.send();

  console.log(request.responseText)
}
tests();