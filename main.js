const STOP_WATCH = document.getElementById('stop_watch');
const START = document.getElementById('start');
const STOP = document.getElementById('stop');
const CLEAR = document.getElementById('clear');

let seconds = 0;    //分を表示する変数seconds  初期値を0とする
let milliseconds = 0;
let minutes = 0;


let stopWatch = () => {
 milliseconds++;  //+1
  if (milliseconds % 1 === 0) {   //1で割ってあまり0
  seconds++;  //+1
  milliseconds = 0;    //0
  }
  
  if (seconds % 600 === 0) {
  minutes++;
  seconds = 0; 
  milliseconds = 0;
  }

  STOP_WATCH.innerHTML = ('0' + minutes).slice(-1) + ':' + ('00' + seconds).slice(-3,-2) + ':' + ('0' + seconds).slice(-2,-1) + ':' + ('0' + seconds).slice(-1)
}

let interval;

START.addEventListener('click' , () => {

//スタート
  interval = setInterval(stopWatch, 100);
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
  STOP_WATCH.innerHTML = '0:0:0:0';
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  clearInterval(interval);
  START.disabled = false;
  STOP.disabled = true;
  CLEAR.disabled = true;
})
