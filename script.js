const spans = document.getElementsByClassName('span');

const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

const redText = document.getElementById('red-text');
const greenText = document.getElementById('green-text');
const blueText = document.getElementById('blue-text');

let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;

let selectedSpan = ``;

redText.textContent = inputRed.value;
greenText.textContent = inputGreen.value;
blueText.textContent = inputBlue.value;

for (const span of spans) {
  span.addEventListener('click', (e) => {
    e.target.style.backgroundColor = selectedSpan;
  });
}

function updateColor (red, green, blue) {
  selectedSpan = `rgb(${red}, ${green}, ${blue})`;
}

inputRed.addEventListener('change', (e) => {
  red = e.target.value;
  redText.textContent = red;
  updateColor(red, green, blue);
});

inputGreen.addEventListener('change', (e) => {
  green = e.target.value;
  greenText.textContent = green;
  updateColor(red, green, blue);
});

inputBlue.addEventListener('change', (e) => {
  blue = e.target.value;
  blueText.textContent = blue;
  updateColor(red, green, blue);
});
