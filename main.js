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

const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 50;

const currentFrame = (index) => `./best-ball/${(index + 1).toString()}.jpg`;

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: true,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});
var x = 0;
function chartSet(myCallback) {
  x = 1;
  if (x = 1) {
    myCallback;
  }
}

function chart() {
      
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Percentage of Americans who suffer from sleep deprevation"
    },
    data: [{
      type: "pie",
      startAngle: 25,
      toolTipContent: "<b>{label}</b>: {y}%",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: [
        { y: 79.4, label: "Not-affected" },
        { y: 20.6, label: "Affected" }
      ]
    }]
  });
  chart.render();
  }

  // function chartDeset() {
  //   x = 0;
  // }

      // document.getElementById("chartContainer").onmouseenter = chart;



gsap.from(".navbar", {opacity:0, scrub:true, 
    scrollTrigger: {duration:1, scrub:true, start:"600%", end:"650%"}})

// gsap.from(".crisistext", {opacity:0, scrub:true, scrollTrigger:{duration:1, scrub: true, start(180000)}})

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}

