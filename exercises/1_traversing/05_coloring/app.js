const _question = function(){
  `

  Coloring

  Write a function that colors a specific generation of the DOM tree.
  A generation is a set of elements that are on the same level of indentation.

  We'll be using a "styled" HTML for this exercise to better visualize the generations.
  You may use the .generation-color class to color the specific generation.

  You can assume that only non-negative integers will be provided as arguments.
  Following are some sample output to help you test your code:
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

document.addEventListener("DOMContentLoaded", ()=>{
  colorGeneration(3)
})