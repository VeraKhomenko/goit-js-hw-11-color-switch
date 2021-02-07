const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const bodyRef = document.body;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colorInterval = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      changeBodyColor();
    }, 1000);
  },

  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
  },
};

startBtn.addEventListener('click', colorInterval.start.bind(colorInterval));
stopBtn.addEventListener('click', colorInterval.stop.bind(colorInterval));

function changeBodyColor() {
  const randomColor = colors[randomIntegerFromInterval(0, 5)];
  bodyRef.style.backgroundColor = randomColor;
}
