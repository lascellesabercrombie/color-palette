let colorUnits = document.querySelectorAll(".color-unit");
let unitOne = document.getElementById("color-unit-1");
let unitTwo = document.getElementById("color-unit-2");
let unitThree = document.getElementById("color-unit-3");
let button = document.querySelector("button")




function colorGenerator() {
  let h = Math.floor(Math.random()*360);
  let s = Math.floor(Math.random()*100);
  let l = Math.floor(Math.random()*100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}



function changeColor(colorBlock){
colorBlock.style.backgroundColor = colorGenerator();
}

// function colorChanger() {
//   changeColor(unitOne);
//   changeColor(unitTwo);
//   changeColor(unitThree);
// }

function changeUnitOneColor() {
  changeColor(unitOne);
}
function changeUnitTwoColor() {
  changeColor(unitTwo);
}
function changeUnitThreeColor() {
  changeColor(unitThree);
}

unitOne.addEventListener('click', changeUnitOneColor);
unitTwo.addEventListener('click', changeUnitTwoColor);
unitThree.addEventListener('click', changeUnitThreeColor);
button.addEventListener('click', function(){
  changeUnitOneColor();
  changeUnitTwoColor();
  changeUnitThreeColor();
})

/*
function should take background color of unit,
access it in the form HSL, 
then randomise those three numbers
*/