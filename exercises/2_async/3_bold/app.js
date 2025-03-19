(function question(){
  `
Implement a function that makes an element bold
and allows the user of the function to optionally do something else with it.
  `
});

document.addEventListener("DOMContentLoaded", (event) =>{

  document.addEventListener('click', (event) =>{
    if(event.target.tagName === "P"){
      console.log(event.target.style.fontWeight = "bold")
    }
  })
})