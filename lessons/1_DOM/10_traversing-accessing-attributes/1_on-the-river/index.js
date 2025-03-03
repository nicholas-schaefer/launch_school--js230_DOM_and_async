(function questions() {
  const q1 = ` Starting with the document node,
  use the lastChild and childNodes properties to change the text color
  to red on the On the River heading and set its font size 48 pixels.`

  const q2 = `Count the paragraphs on the page, and then log the result.`

  const q3 = `Retrieve the first word from each paragraph on the page and log the entire list.`

  const q4 = `Add the class stanza to each paragraph except the first.`

})

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

const question1 = function question1() {
  const html = document.childNodes[1];
  const body = html.lastChild;
  const heading = body.childNodes[1];

  heading.style.color = 'red';
  heading.style.fontSize = '48px';
}

const question2 = function question2() {
  let paragraphTagCount = 0;

  walk(document.body, node => {
    node.nodeName === "P" && paragraphTagCount++;
  });
  return paragraphTagCount;
}

const question3 = function question3() {
  const firstWords = [];
  walk(document.body, node => {
    if (node.nodeName === "P") {
      firstWords.push(node.textContent.trimStart().split(' ')[0]);
    }
  });

  return firstWords;
}

const question4 = function question4() {
  let pTagCounter = 0;
  walk(document.body, node => {
    if (node.nodeName === "P") {
      pTagCounter += 1;
      pTagCounter > 1 && node.classList.add('stanza');
    }
  });

}





const runTests = function runTests() {
  // question1();
  // console.log('question 2', question2())
  // console.log('question 3', question3());
  // question4();
}
runTests()