const STOP_WATCH = document.getElementById('stop_watch');
const START = document.getElementById('start');
const STOP = document.getElementById('stop');
const CLEAR = document.getElementById('clear');

let seconds = 0;
let milliseconds = 0;
let minutes = 0;
let hours = 0;



let stopWatch = () => {
  milliseconds++;  
 
  if (milliseconds === 100 ) {   
  seconds++;  //+1
  milliseconds = 0;    //0
  }
  
  if (seconds === 60) {
  minutes++;
  seconds = 0; 
  }
  
  if (minutes === 60) {
  hours++;
  minutes = 0; 
  }

  STOP_WATCH.innerHTML = ('00' + hours).slice(-2) + ':' + ('00' + minutes).slice(-2) + ':' + ('00' + seconds).slice(-2) + '.' + ('00' + milliseconds).slice(-2)
}


let interval;

START.addEventListener('click' , () => {

//スタート
  interval = setInterval(stopWatch,10);
  START.disabled = true;  //無効化 
  STOP.disabled = false;  //有効化
  CLEAR.disabled = false; //有効化 
})

//ストップ
STOP.addEventListener('click' , () => {
  clearInterval(interval);
  START.disabled = false;
  STOP.disabled = true;
  CLEAR.disabled = false;
})


//リセット
CLEAR.addEventListener('click' , () => {
  STOP_WATCH.innerHTML = '00:00:00.00';
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  clearInterval(interval);
  START.disabled = false;
  STOP.disabled = true;
  CLEAR.disabled = true;
})
