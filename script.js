const gridContainer = document.querySelector('#gridContainer');
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', reset);

function makeGridColums(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function makeGrid(size) {
    for(let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.classList = 'cell';
        cell.addEventListener('mouseover', on);
        gridContainer.appendChild(cell);
    }
}

function deleteGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function on(e) {
    e.target.style.backgroundColor = 'darkorange';
}

function reset() {
    let newSize = prompt('Enter new size');
    if (newSize < 1 || newSize > 64) {
        alert('Size must be between 1 and 64');
        reset();
    } else {
        deleteGrid();
        makeGridColums(newSize);
        makeGrid(newSize);
    }
}



let size = 16;
makeGridColums(size);
makeGrid(size);





