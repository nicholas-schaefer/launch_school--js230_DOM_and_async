(function questions() {
  const q1 = ` Starting with the document node,
  use the lastChild and childNodes properties to change the text color
  to red on the On the River heading and set its font size 48 pixels.`

  const q2 = `Count the paragraphs on the page, and then log the result.`

  const q3 = `Retrieve the first word from each paragraph on the page and log the entire list.`

  const q4 = `Add the class stanza to each paragraph except the first.`

  const q5 = `Count the images on the page, then count the PNG images. Log both results.`

  const q6 = `Change the link color to red for every link on the page.`

})

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

const question5 = function question5() {
  let imgTagCount = 0;
  let pngCount = 0;

  walk(document.body, node => {
    if (node.nodeName === "IMG"){
      imgTagCount++;
      const img = node;
      const src = img.src;
      const srcChunked = src.split('.');
      const extension = srcChunked[srcChunked.length -1];
      extension === 'png' && pngCount++;
    }
  });
  return {imgTagCount, pngCount};
}

const question6 = function question6() {
  walk(document.body, node => {
    if (node.nodeName === "A"){
      node.style.color = 'red'
    }
  });
}


const runTests = function runTests() {
  // console.log('question 5', question5())
  // question6();
}
runTests()