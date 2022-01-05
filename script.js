let colorUnits = document.querySelectorAll(".color-unit");
let unitOne = document.getElementById("color-unit-1");
let unitTwo = document.getElementById("color-unit-2");
let unitThree = document.getElementById("color-unit-3");
console.log(colorUnits)

function colorGenerator() {
  let h = Math.floor(Math.random()*360);
  let s = Math.floor(Math.random()*100);
  let l = Math.floor(Math.random()*100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}



function changeColor(colorBlock){
colorBlock.style.backgroundColor = colorGenerator();
}

function colorChanger() {
  changeColor(unitOne);
  changeColor(unitTwo);
  changeColor(unitThree);
}

unitOne.addEventListener('click', colorGenerator)
unitOne.addEventListener('click', colorChanger)
/*
function should take background color of unit,
access it in the form HSL, 
then randomise those three numbers
*/