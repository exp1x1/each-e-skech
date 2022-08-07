const container = document.querySelector(".container");
const button = document.querySelector(".butt");

const div = document.createElement("div");
div.classList.add("box");
div.style.backgroundColor = "grey";
div.style.width = "25px";
div.style.height = "25px";
div.innerText = "1";

let boxNumber = 256;

createDiv();

button.addEventListener("click", () => {
    boxnum = prompt("enter the box number: ", "");
    boxNumber = boxnum * boxnum;
  removeDivChild();
  createDiv(getSize(boxNumber),getSize(boxNumber));
  console.log('box number is :' ,boxNumber);
  console.log('box sixe is :' ,getSize(boxNumber));
});

function getSize(size){
   let eachcell = 640000 / size;
   return Math.round(Math.sqrt(eachcell)); 
}


function removeDivChild(){
    const list = document.querySelectorAll('.box');
    list.forEach(list => {list.remove()})
}

function createDiv(h = 50,w = 50) {
  for (let i = 1; i <= boxNumber; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.style.height = `${h}px`;
    div.style.width = `${w}px`;

    container.appendChild(div);
  }

  const box = document.querySelectorAll(".box");

  box.forEach((box) => box.addEventListener("mouseover", changeColor));
}
function changeColor() {
  this.style.backgroundColor = `#${randomColor()}`;
}

function randomColor() {
  return Math.floor(Math.random() * 0xffffff).toString(16);
}
