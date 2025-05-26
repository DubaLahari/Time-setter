let timerDisplay = document.getElementById("timer");
let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");
let minutesInput = document.getElementById("minutes");

let timer;
let isRunning = false;
let remainingSeconds = 25 * 60;

function updateDisplay() {
  let mins = Math.floor(remainingSeconds / 60);
  let secs = remainingSeconds % 60;
  timerDisplay.textContent = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function toggleTimer() {
  if (isRunning) {
    clearInterval(timer);
    startStopBtn.textContent = "Start";
  } else {
    timer = setInterval(() => {
      if (remainingSeconds > 0) {
        remainingSeconds--;
        updateDisplay();
      } else {
        clearInterval(timer);
        alert("Time's up!");
        isRunning = false;
        startStopBtn.textContent = "Start";
      }
    }, 1000);
    startStopBtn.textContent = "Pause";
  }
  isRunning = !isRunning;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  startStopBtn.textContent = "Start";
  remainingSeconds = parseInt(minutesInput.value) * 60;
  updateDisplay();
}

minutesInput.addEventListener("change", () => {
  if (!isRunning) {
    remainingSeconds = parseInt(minutesInput.value) * 60;
    updateDisplay();
  }
});

startStopBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", resetTimer);

// Initial display
updateDisplay();
