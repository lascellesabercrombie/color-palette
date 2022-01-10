let colorUnits = document.querySelectorAll(".color-unit");
let unitOne = document.getElementById("color-unit-1");
let unitTwo = document.getElementById("color-unit-2");
let unitThree = document.getElementById("color-unit-3");
let button = document.querySelector("button")
let answer = document.querySelector(".answer")
let color1JSON = document.getElementById("color1JSON")
let color2JSON = document.getElementById("color2JSON")
let color3JSON = document.getElementById("color3JSON")


function colorGenerator() {
  let h = Math.floor(Math.random()*360);
  let s = Math.floor(Math.random()*100);
  let l = Math.floor(Math.random()*100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}



function changeColor(colorBlock){
colorBlock.style.backgroundColor = colorGenerator();
}

function changeUnitOneColor() {
  changeColor(unitOne);
  color1JSON.innerText = `{"color1":"${unitOne.style.backgroundColor}"},`
}
function changeUnitTwoColor() {
  changeColor(unitTwo);
  color2JSON.innerText = `{"color1":"${unitTwo.style.backgroundColor}"},`
}
function changeUnitThreeColor() {
  changeColor(unitThree);
  color3JSON.innerText = `{"color1":"${unitThree.style.backgroundColor}"},`
}

unitOne.addEventListener('click', changeUnitOneColor);
unitTwo.addEventListener('click', changeUnitTwoColor);
unitThree.addEventListener('click', changeUnitThreeColor);
button.addEventListener('click', function(){
  changeUnitOneColor();
  changeUnitTwoColor();
  changeUnitThreeColor();
})



