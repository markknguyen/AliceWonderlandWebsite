const header = document.querySelector('.Crisis');
const text = ['We spend a third of our lives in a state of inactivity. Yet, during this time... Something truly magical happens.'];
let index = 0;
let letterIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const speed = 50; // Adjust the typing speed in milliseconds here
  const wait = 1000000; // Adjust the waiting time in milliseconds here

  if (index == text.length) {
    index = 0;
  }

  currentText = text[index];

  if (isDeleting) {
    currentText = currentText.substring(0, currentText.length - 1);
    letterIndex--;
  } else {
    currentText = text[index].substring(0, letterIndex + 1);
    letterIndex++;
  }

  header.innerHTML = currentText;

  if (!isDeleting && currentText === text[index]) {
    isDeleting = true;
    setTimeout(() => {
      isDeleting = false;
      index++;
      letterIndex = 0;
    }, wait);
  } else if (isDeleting && currentText === '') {
    isDeleting = false;
    index++;
    letterIndex = 0;
  }

  setTimeout(type, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 2000); // Adjust the initial waiting time in milliseconds here
});

var canvas = document.getElementById("introCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = '#FF0000';
ctx.fillRect(1,1,150,75); 