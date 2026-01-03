const inc_btn = document.getElementById('more');
const dec_btn = document.getElementById('less');

const time = document.getElementById('time');

const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let mins = 0;
let secs = 0;
let interval = false;

function updateTime() {
  const x = mins.toString().padStart(2, '0');
  const y = secs.toString().padStart(2, '0');
  time.innerText = `${x}:${y}`;
}

updateTime();

inc_btn.addEventListener('click',()=>{
    mins +=1;
    time.innerText = `${mins}:${secs}`;
    updateTime();
})
dec_btn.addEventListener('click',()=>{
    mins -=1;
    if(mins <1) return;
    time.innerText = `${mins}:${secs}`;
    updateTime();
})


function startCountdown() {
  if (interval) return; // Prevent multiple intervals

  interval = setInterval(() => {
    if (secs === 0 && mins === 0) {
      clearInterval(interval);
      interval = null;
      alert('Time is up!');
      return;
    }

    if (secs === 0) {
      secs = 59;
      mins -= 1;
    } else {
      secs -= 1;
    }

    updateTime();
  }, 1000);
}

// Example: start countdown when you click the display
start.addEventListener('click', startCountdown);
stop.addEventListener('click',()=>{
    clearInterval(interval);
    interval = null;
})

reset.addEventListener('click',()=>{
    clearInterval(interval);
    interval = null;
    mins=0;
    secs=0;
    updateTime();
})
