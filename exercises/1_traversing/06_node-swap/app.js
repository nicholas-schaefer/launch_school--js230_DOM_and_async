const _question = function(){
  `

  Node Swap

  Write a function that takes two element ids as arguments and swaps the positions of the elements represented by the ids.
  The function returns true for valid swaps and undefined for invalid.
  you can assume that nodes will have a value for the id attribute and two arguments will always be provided.
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

  const clonedNode1 = node1.cloneNode();
  const clonedNode2 = node2.cloneNode();

  node1.id = 'temp1';
  node2.id = 'temp2';

  node1.replaceWith(clonedNode2);
  node2.replaceWith(clonedNode1);
}

document.addEventListener("DOMContentLoaded", ()=>{
  // nodeSwap(1, 2);

  // multiple swaps
  nodeSwap(3, 1);
  nodeSwap(7, 9);
})