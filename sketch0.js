var wave;
var playing = false;
function setup(){
  createCanvas (720, 256);
  wave = new p5.Oscillator();
  wave.setType('sine');
  // wave.start();
  wave.freq(440); /*음정*/
  wave.amp(0); /*볼륨*/

  button = createButton('play/pause');
  button.mousePressed(toggle);
}

function draw(){
}

function toggle(){
  if (!playing) {
    wave.start();
    wave.amp(0.5, 1);
    playing = true;
  } else {
    wave.amp(0,1);
    playing = false;
  }
  }
