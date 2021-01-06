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
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function gridOn(e) {
   let cellColor = randomRGB(); 
    e.target.style.backgroundColor = cellColor; // Choose color here or 'cellColor' for random
}

function changeSize() {
    let newSize = prompt('Enter new size');
    if (newSize < 1 || newSize > 100) {
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

makeGridColumns(size);
makeGrid(size);