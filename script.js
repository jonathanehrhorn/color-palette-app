const addButton = document.getElementById('add');
const colorPalette = document.getElementById('palette');

addButton.style.backgroundColor = `rgb(255, 255, 255)`;

function setColor() {

    let red = document.getElementById('red').value;
    let green = document.getElementById('green').value;
    let blue = document.getElementById('blue').value;

    const color = `rgb(${red}, ${green}, ${blue})`;

    addButton.style.backgroundColor = color;
}

document.getElementById('red').addEventListener('input', setColor);
document.getElementById('green').addEventListener('input', setColor);
document.getElementById('blue').addEventListener('input', setColor);

function addColor() {

    let currentColor = addButton.style.backgroundColor;

    let newColor = document.createElement('div');
    newColor.classList.add('color-span');

    let colorSpan = document.createElement('span');

    newColor.style.backgroundColor = currentColor;
    newColor.innerHTML = currentColor;

    newColor.appendChild(colorSpan);

    let remove = document.createElement('i');
    remove.classList.add('bi', 'bi-x-circle', 'remove-icon');
    remove.addEventListener('click', removeColor);

    newColor.append(remove);

    colorPalette.appendChild(newColor);
}

function removeColor(e) {
    let colorToRemove = e.target.parentNode;
    colorToRemove.remove();
}

addButton.addEventListener('click', addColor);

let toggle = document.getElementById('toggle');
let labelToggle = document.getElementById('label-toggle');

toggle.addEventListener('change', (e) => {
    let checked = e.target.checked;
    document.body.classList.toggle('dark');
    if (checked == true) {
        labelToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        labelToggle.style.color = `rgb(35, 35, 35)`;
    } else {
        labelToggle.innerHTML = '<i class="bi bi-moon-stars-fill">';    
        labelToggle.style.color = `rgb(35, 35, 35)`;
    }
});