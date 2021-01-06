const gridContainer = document.querySelector('.grid-container');
const button = document.querySelector('.button');

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

function gridOn(e) {
    e.target.style.backgroundColor = 'darkorange';
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

button.addEventListener('click', changeSize);


let size = 16;

makeGridColumns(size);
makeGrid(size);