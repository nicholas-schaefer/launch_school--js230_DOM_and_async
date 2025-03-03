(function questions() {
  const q1 = `Write some JavaScript code to retrieve a word count for each h2 heading on the page.`

  const q2 = `The page has a table of contents with the title "Contents" and links to the different content sections on "Naming and etymology,"
  "Taxonomy and evolution," etc.
  Use three different DOM methods to retrieve a reference to the div element that contains the table of contents.`

  const q3 = `Write some JavaScript code to change the color for every odd indexed link in the table of contents to green.`

  const q4 = `Write some JavaScript code to retrieve the text of every thumbnail caption on the page.`

  const q5 = `You can think of the scientific classification of an animal as a series of key-value pairs.
  Here, the keys are taxonomic ranks (Kingdom, Phylum, Class, etc.).
  The values are the specific groups to which the animal belongs.

  Write JavaScript code that extracts the classification of animals from the web page and logs an Object that uses the ranks as keys and the groups as values.
  You may assume the taxonomic ranks to use as keys is provided for you as an array.`

})

function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

const question1 = function question1() {
  const wordCounts = [];

  walk(document.body, node => {
    if (node.nodeName === "H2"){
      const h1Text = node.textContent;
      const wordCount = h1Text.split(' ').length;
      wordCounts.push({h1Text, wordCount});
    }
  });
  return wordCounts
}

const question2 = function question2() {

  const solutions = []

  walk(document.body, node => {
    if (node.nodeName === 'H2' && node.textContent === 'Contents'){
      solutions.push(node.parentElement);
    }
  });
  walk(document.body, node => {
    if (node.id === 'toc'){
      solutions.push(node);
    }
  });

  walk(document.body, node => {
    if (node.className === 'toc'){
      solutions.push(node);
    }
  });
  return solutions
}

const question3 = function question1() {
  const tocDiv = document.getElementById('toc');
  const ul = tocDiv.children[1];

  for (let i = 0, length = ul.children.length; i < length; i+= 1 ){
    if (i % 2 === 1) continue;
    const oddListItems = ul.children[i];
    const oddAnchor = oddListItems.children[0];
    oddAnchor.style.color = 'green';
  }
}

const question4 = function question4() {
  const captions = [];
  const captionEls = document.getElementsByClassName('thumbcaption');

  for (let i = 0; i < captionEls.length; i += 1){
    const captionText = captionEls[i].innerText
    captions.push(captionText);
  }

  return captions;
}


const runTests = function runTests() {
  // console.log(question1())
  // console.log(question2())
  // question3();
  console.log(question4())
}
runTests()