const _question = function(){
  `
  Tracing the DOM Tree

  Write a JavaScript function that takes an element's id and returns the DOM tree of the element in a two-dimensional array.
  The first subarray contains the element and its siblings, the second contains the parent of the element and its siblings,
  so on and so forth, all the way up to the "grandest" parent.

  Assume that the grandest parent is the element with an id of "1".
  Use the following HTML and test cases to test your code:

  `
};

// console.log(document.getElementById('4'))
// console.log(document.getElementById('4').previousSibling)

const getSiblings = function getSiblings(el){
  const siblings = new Set();

  let curr = el;

  while(curr){
    siblings.add(curr);
    curr = curr.previousSibling;
  };

  curr = el;

  while(curr){
    siblings.add(curr);
    curr = curr.nextSibling;
  };

  return [...siblings];
}

const getParents = function getParents(el){
  let curr = el;
  const parents = [];

  while (curr){
    parents.push(curr)
    curr = curr.parentElement;
  }

  return parents;
}

const traceDOMTree = function traceDOMTree(id){
  const el = document.getElementById(id);

  el.addEventListener('click', (e) =>{
    e.preventDefault();
    const lineage = getParents(el);
    const tree = lineage.map((el)=> getSiblings(el));

    console.log(tree)
  })

}

traceDOMTree('4');
