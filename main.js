import './style.css'

const workTime = .1;
let startingWorkTime = workTime * 60;

const pauseTime = .1;
let startingPauseTime = pauseTime * 60;

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timers');
const title = document.getElementById('title');


var interval ;

let work = false;
let manualStop = false; 

start.addEventListener('click', () => {
  if(work === false && manualStop == false ){
    interval = setInterval(countDownWork, 1000);
    work = true;
    manualStop = false;
  }
  else if(work === true && manualStop == false ) {
    interval = setInterval(countDownPause, 1000);
    work = false;
    manualStop = false;
  }
  else if(work === true && manualStop == true ) {
    interval = setInterval(countDownWork, 1000);
    manualStop = false;
  }
  else if(work === false && manualStop == true ) {
    interval = setInterval(countDownPause, 1000);
    manualStop = false;
  }

})

stop.addEventListener('click', () =>{
  clearInterval(interval);
  manualStop = true;
})

reset.addEventListener('click', () => {
  
})


function countDownWork() {

  const workMinutes = Math.floor(startingWorkTime / 60);
  let workSecondes = startingWorkTime % 60;
  
  timer.innerHTML = `${workMinutes}:${workSecondes}`;
  title.innerHTML = 'Work time';
  startingWorkTime --;

  if( workMinutes == 0 && workSecondes == 0){
    startingWorkTime = workTime * 60;
    clearInterval(interval)
    countDownPause();
  }
} 

function countDownPause() {
  const pauseMinute = Math.floor(startingPauseTime / 60);
  let pauseSecondes = startingPauseTime % 60;
  
  
  timer.innerHTML = `${pauseMinute}:${pauseSecondes}`;
  title.innerHTML = 'Pause time';
  startingPauseTime --;

  if( pauseMinute == 0 && pauseSecondes == 0){
      startingPauseTime = workTime * 60;
      clearInterval(interval);
      countDownWork();
  }
}

