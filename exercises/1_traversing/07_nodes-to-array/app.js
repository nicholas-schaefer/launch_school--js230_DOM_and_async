const _question = function(){
  `

  Nodes to Array

  Implement a function that converts the DOM, starting from the body, to nested arrays.
  Each element in the DOM is represented as ["PARENT_TAG_NAME", [children]]
  where children are elements as well and as such follow the same format.
  When an element has no children, it's represented as ["PARENT_TAG_NAME", []].
  For instance, if the HTML doesn't have any elements inside the body, the result array would be: ["BODY", []].
  Likewise, if the HTML only has a div element as its content, the result array would be: ["BODY", [["DIV", []]]].

  Go over the examples below to better visualize how the DOM is represented as nested arrays.

  = ["BODY",
  [
    ["HEADER", []],
    ["MAIN", []],
    ["FOOTER", []]]
  ]
  `
};


const colorGeneration = function colorGeneration(generation){
  const body = document.body;
  const generations = [[body]]

  for (let i = 0; i < generation; i++){
    const lastGeneration = generations[generations.length - 1];

    const nextGeneration = lastGeneration.reduce((nextGeneration, el)=>{
      nextGeneration.push(...el.children);
      return nextGeneration;
    },[]);

    nextGeneration.length > 0 && generations.push(nextGeneration);
  }

  if (generation === 0 || generation >= generations.length) return;

  const targetGeneration = generations[generations.length - 1];

  targetGeneration.forEach((element)=>{
    element.classList.add('generation-color');
  })
}

const nodeSwap = function nodeSwap(id1, id2){
  const SWAP_NOT_PERMITTED = undefined;

  const node1 = document.getElementById(id1);
  const node2 = document.getElementById(id2);

  //at least one of the id attributes doesn't exist
  if (!node1 || !node2) return SWAP_NOT_PERMITTED;
  // at least one of the nodes is a "child" of the other
  if (node1.contains(node2) || node2.contains(node1)) return SWAP_NOT_PERMITTED;

  const clonedNode1 = node1.cloneNode(true);
  const clonedNode2 = node2.cloneNode(true);

  node1.id = 'temp1';
  node2.id = 'temp2';

  node1.replaceWith(clonedNode2);
  node2.replaceWith(clonedNode1);

  return true;
}

const nodesToArr = function nodesToArr(){
  // const generations = [[document.body]];
  // const nextGen = [];
  // do {
  //   nextGen.length = 0
  //   const currGeneration = generations[generations.length-1];


  //   currGeneration.forEach((el)=> nextGen.push(...el.children))
  //   generations.push([...nextGen]);
  // } while(generations[generations.length-1].length > 0);

  // console.log(generations)

}

document.addEventListener("DOMContentLoaded", ()=>{
  nodesToArr()
})