var wave;
var button;
var playing = false;
function setup() {
  createCanvas(720,256);
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.freq(440);
  wave.amp(0);
  
    
  button = createButton('play/pause');
  button.mousePressed(toggle);
}

function draw() {
  wave.freq(ampValue);
}

function toggle(){
  if(!playing){
    wave.start();
      wave.amp(0.3, 1);
      playing = true;
  }else {
    ampValue =0;
    playing = false;
  }
}
  
function devicedMoved(){
  ampValue = accelerationX*1000;
  background(255,255,255);
  text(accelerationX*2, 10, 10);
}