const container = document.querySelector('.container');


const div = document.createElement('div');
div.classList.add('box');
div.style.backgroundColor = 'grey';
div.style.width = '25px';
div.style.height = '25px';
div.innerText = '1';

for (let i = 1; i <= 64; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.innerText = i;
    
    container.appendChild(div);
}

const box = document.querySelectorAll('.box');

box.forEach(box => box.addEventListener("mouseover",  changeColor ));
 

function changeColor(){
    console.log(this)
    this.style.backgroundColor = 'grey';
}