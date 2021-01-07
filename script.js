const gridContainer = document.querySelector('.grid-container');
const sizeButton = document.querySelector('#size-button');

function deleteGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function makeGridColumns(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function makeGrid(size) {
    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.classList = 'cell';
        cell.addEventListener('mouseover', gridOn);
        gridContainer.appendChild(cell);
    }
}

function randomRGB() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function gridOn(e) {
    let randomColor = randomRGB();
    e.target.style.backgroundColor = 'orange'; // Choose color here or 'randomColor' for random

//Uncomment for 10% opacity increment each mouseover 
/* 
    if (e.target.style.opacity === '') { 
        e.target.style.opacity = 0.1;
    } else {
        e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.2;
    } 
*/

} 

function changeSize() {
    let newSize = prompt('Enter new size');  
    if ( isNaN(newSize) ) {
        alert('Size must be between 1 and 100');
        changeSize();
    } else if (newSize < 1 || newSize > 100) {
        alert('Size must be between 1 and 100');
        changeSize();
    } else {
        deleteGrid();
        makeGridColumns(newSize);
        makeGrid(newSize);
    }
}

sizeButton.addEventListener('click', changeSize);

let size = 16;
let opacity = 0;

makeGridColumns(size);
makeGrid(size);