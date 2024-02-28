let hitatButton1Color = "white";
let hitatButton1isOn = false;

let hitatButton2Color = "white";
let hitatButton2isOn = false;

let hitatButton3Color = "white";
let hitatButton3isOn = false;

let hitatButton4Color = "white";
let hitatButton4isOn = false;

let hitatButton5Color = "white";
let hitatButton5isOn = false;

let hitatButton6Color = "white";
let hitatButton6isOn = false;

let hitatButton7Color = "white";
let hitatButton7isOn = false;

let hitatButton8Color = "white";
let hitatButton8isOn = false;

let snareButton1Color = "white";
let snareButton1isOn = false;

let snareButton2Color = "white";
let snareButton2isOn = false;

let snareButton3Color = "white";
let snareButton3isOn = false;

let snareButton4Color = "white";
let snareButton4isOn = false;

let snareButton5Color = "white";
let snareButton5isOn = false;

let snareButton6Color = "white";
let snareButton6isOn = false;

let snareButton7Color = "white";
let snareButton7isOn = false;

let snareButton8Color = "white";
let snareButton8isOn = false;

let kickButton1Color = "white";
let kickButton1isOn = false;

let kickButton2Color = "white";
let kickButton2isOn = false;

let kickButton3Color = "white";
let kickButton3isOn = false;

let kickButton4Color = "white";
let kickButton4isOn = false;

let kickButton5Color = "white";
let kickButton5isOn = false;

let kickButton6Color = "white";
let kickButton6isOn = false;

let kickButton7Color = "white";
let kickButton7isOn = false;

let kickButton8Color = "white";
let kickButton8isOn = false;

let snare, kick, hitat, myPart;
let snarePat = [0, 0, 0, 0, 0, 0, 0, 0]; //snare
let kickPat = [0, 0, 0, 0, 0, 0, 0, 0]; //kick
let hitatPat = [0, 0, 0, 0, 0, 0, 0, 0]; //hitat
let MyTempo;

function preload() {
  snare = loadSound("assets/snare.mp3");
  kick = loadSound("assets/kick.mp3");
  hitat = loadSound("assets/hitat.mp3");
  Desk = loadImage("assets/BackgroundImage.png")
}

MyTempo = 50;

function setup() {
  createCanvas(400*2, 400*2);

  background(220);
image(Desk,0,0,800,800)
  let snarePhrase = new p5.Phrase("snare", playSnare, snarePat);
  let kickPhrase = new p5.Phrase("kick", playKick, kickPat);
  let hitatPhrase = new p5.Phrase("hitat", playHitat, hitatPat);
  myPart = new p5.Part();
  myPart.addPhrase(snarePhrase);
  myPart.addPhrase(kickPhrase);
  myPart.addPhrase(hitatPhrase);
  myPart.setBPM(MyTempo);

  fill("black");
  textSize(20);
  text("Welcome to your new drum machine! Tap any of the pads to create a beat. Feel free to adjust the tempo, then hit start to hear your creation! You can edit the pattern at any point during your experience.",40,40,720,100)
}

//tells the computer how to play the sound
function playSnare(time, playbackRate) {
  snare.rate(playbackRate);
  snare.play(time);
}

function playKick(time, playbackRate) {
  kick.rate(playbackRate);
  kick.play(time);
}

function playHitat(time, playbackRate) {
  hitat.rate(playbackRate);
  hitat.play(time);
}

//function that starts the playback
function playMyPart() {
  userStartAudio();

  myPart.loop();
}

//function that stops playback
function stopMyPart() {
  myPart.stop();
}

//draws the gui
function draw() {
  noStroke();
  print(MyTempo);

  


 
  //titles
  fill("black");
  textSize(16*2);
  textStyle(BOLD);
  textFont("Helvetica Neue");
  text("THE DRUM MACHINE", 28*2, 105*2);

  textSize(12*2);
  textStyle(BOLD);
  textFont("Courier New");
  text("hitat", 30*2, 125*2);

  textSize(12*2);
  textStyle(BOLD);
  textFont("Courier New");
  text("snare", 30*2, 182*2);

  textSize(12*2);
  textStyle(BOLD);
  textFont("Courier New");
  text("kick", 30*2, 239*2);

  //hitat buttons
  fill(hitatButton1Color);
  rect(30*2, 130*2, 30*2, 30*2, 5*2);

  fill(hitatButton2Color);
  rect(74*2, 130*2, 30*2, 30*2, 5*2);

  fill(hitatButton3Color);
  rect(118*2, 130*2, 30*2, 30*2, 5*2);

  fill(hitatButton4Color);
  rect(162*2, 130*2, 30*2, 30*2, 5*2);

  fill(hitatButton5Color);
  rect(207*2, 130*2, 30*2, 30*2, 5*2);

  fill(hitatButton6Color);
  rect(251*2, 130*2, 30*2, 30*2, 5*2);

  fill(hitatButton7Color);
  rect(295*2, 130*2, 30*2, 30*2, 5*2);

  fill(hitatButton8Color);
  rect(339*2, 130*2, 30*2, 30*2, 5*2);

  //snare buttons
  fill(snareButton1Color);
  rect(30*2, 187*2, 30*2, 30*2, 5*2);

  fill(snareButton2Color);
  rect(74*2, 187*2, 30*2, 30*2, 5*2);

  fill(snareButton3Color);
  rect(118*2, 187*2, 30*2, 30*2, 5*2);

  fill(snareButton4Color);
  rect(162*2, 187*2, 30*2, 30*2, 5*2);

  fill(snareButton5Color);
  rect(207*2, 187*2, 30*2, 30*2, 5*2);

  fill(snareButton6Color);
  rect(251*2, 187*2, 30*2, 30*2, 5*2);

  fill(snareButton7Color);
  rect(295*2, 187*2, 30*2, 30*2, 5*2);

  fill(snareButton8Color);
  rect(339*2, 187*2, 30*2, 30*2, 5*2);

  //kick buttons
  fill(kickButton1Color);
  rect(30*2, 244*2, 30*2, 30*2, 5*2);

  fill(kickButton2Color);
  rect(74*2, 244*2, 30*2, 30*2, 5*2);

  fill(kickButton3Color);
  rect(118*2, 244*2, 30*2, 30*2, 5*2);

  fill(kickButton4Color);
  rect(162*2, 244*2, 30*2, 30*2, 5*2);

  fill(kickButton5Color);
  rect(207*2, 244*2, 30*2, 30*2, 5*2);

  fill(kickButton6Color);
  rect(251*2, 244*2, 30*2, 30*2, 5*2);

  fill(kickButton7Color);
  rect(295*2, 244*2, 30*2, 30*2, 5*2);

  fill(kickButton8Color);
  rect(339*2, 244*2, 30*2, 30*2, 5*2);

  //start button

  fill("#78cc4b");
  rect(30*2, 292*2, 74*2, 20*2);
  fill("black");
  textSize(12*2);
  textStyle(BOLD);
  textFont("Courier New");
  text("START", 49*2, 305*2);
//stop button
  fill("#b54b3f");
  rect(118*2, 292*2, 74*2, 20*2);
  fill("black");
  textSize(12*2);
  textStyle(BOLD);
  textFont("Courier New");
  text("STOP", 142*2, 305*2);

  //tempo up button

  fill("#a2a5b3");
  rect(200*2, 277*2, 175*2, 50*2);

  fill("#f2b23a");
  rect(207*2, 292*2, 74*2, 20*2);
  fill("black");
  textSize(12*2);
  textStyle(BOLD);
  textFont("Courier New");
  text("DOWN", 229*2, 305*2);
  text("TEMPO", 207*2, 287*2);

  //tempo down button
  fill("#f2b23a");
  rect(295*2, 292*2, 74*2, 20*2);
  fill("black");
  textSize(12*2);
  textStyle(BOLD);
  textFont("Courier New");
  text("UP", 325*2, 305*2);

  //code that changes hitat button colors
  if (hitatButton1isOn) {
    hitatButton1Color = "#fffd80";
  } else {
    hitatButton1Color = "white";
  }

  if (hitatButton2isOn) {
    hitatButton2Color = "#fffd80";
  } else {
    hitatButton2Color = "white";
  }

  if (hitatButton3isOn) {
    hitatButton3Color = "#fffd80";
  } else {
    hitatButton3Color = "white";
  }

  if (hitatButton4isOn) {
    hitatButton4Color = "#fffd80";
  } else {
    hitatButton4Color = "white";
  }

  if (hitatButton5isOn) {
    hitatButton5Color = "#fffd80";
  } else {
    hitatButton5Color = "white";
  }

  if (hitatButton6isOn) {
    hitatButton6Color = "#fffd80";
  } else {
    hitatButton6Color = "white";
  }

  if (hitatButton7isOn) {
    hitatButton7Color = "#fffd80";
  } else {
    hitatButton7Color = "white";
  }

  if (hitatButton8isOn) {
    hitatButton8Color = "#fffd80";
  } else {
    hitatButton8Color = "white";
  }

  //changes snare button colors

  if (snareButton1isOn) {
    snareButton1Color = "#fffd80";
  } else {
    snareButton1Color = "white";
  }

  if (snareButton2isOn) {
    snareButton2Color = "#fffd80";
  } else {
    snareButton2Color = "white";
  }

  if (snareButton3isOn) {
    snareButton3Color = "#fffd80";
  } else {
    snareButton3Color = "white";
  }

  if (snareButton4isOn) {
    snareButton4Color = "#fffd80";
  } else {
    snareButton4Color = "white";
  }

  if (snareButton5isOn) {
    snareButton5Color = "#fffd80";
  } else {
    snareButton5Color = "white";
  }

  if (snareButton6isOn) {
    snareButton6Color = "#fffd80";
  } else {
    snareButton6Color = "white";
  }

  if (snareButton7isOn) {
    snareButton7Color = "#fffd80";
  } else {
    snareButton7Color = "white";
  }

  if (snareButton8isOn) {
    snareButton8Color = "#fffd80";
  } else {
    snareButton8Color = "white";
  }

  //changes kick button colors

  if (kickButton1isOn) {
    kickButton1Color = "#fffd80";
  } else {
    kickButton1Color = "white";
  }

  if (kickButton2isOn) {
    kickButton2Color = "#fffd80";
  } else {
    kickButton2Color = "white";
  }

  if (kickButton3isOn) {
    kickButton3Color = "#fffd80";
  } else {
    kickButton3Color = "white";
  }

  if (kickButton4isOn) {
    kickButton4Color = "#fffd80";
  } else {
    kickButton4Color = "white";
  }

  if (kickButton5isOn) {
    kickButton5Color = "#fffd80";
  } else {
    kickButton5Color = "white";
  }

  if (kickButton6isOn) {
    kickButton6Color = "#fffd80";
  } else {
    kickButton6Color = "white";
  }

  if (kickButton7isOn) {
    kickButton7Color = "#fffd80";
  } else {
    kickButton7Color = "white";
  }

  if (kickButton8isOn) {
    kickButton8Color = "#fffd80";
  } else {
    kickButton8Color = "white";
  }
  
  //changes cursor to hand
   if (mouseX > 30*2 && mouseX < 60*2 && mouseY > 130*2 && mouseY < 160*2 || mouseX > 74*2 && mouseX < 104*2 && mouseY > 130*2 && mouseY < 160*2||mouseX > 118*2 && mouseX < 148*2 && mouseY > 130*2 && mouseY < 160*2 ||mouseX > 162*2 && mouseX < 192*2 && mouseY > 130*2 && mouseY < 160*2 ||mouseX > 207*2 && mouseX < 237*2 && mouseY > 130*2 && mouseY < 160*2 ||mouseX > 251*2 && mouseX < 281*2 && mouseY > 130*2 && mouseY < 160*2||mouseX > 295*2 && mouseX < 325*2 && mouseY > 130*2 && mouseY < 160*2||mouseX > 339*2 && mouseX < 369*2 && mouseY > 130*2 && mouseY < 160*2||mouseX > 30*2 && mouseX < 60*2 && mouseY > 187*2 && mouseY < 217*2 ||mouseX > 74*2 && mouseX < 104*2 && mouseY > 187*2 && mouseY < 217*2 ||mouseX > 118*2 && mouseX < 148*2 && mouseY > 187*2 && mouseY < 217*2||mouseX > 162*2 && mouseX < 192*2 && mouseY > 187*2 && mouseY < 217*2||mouseX > 162*2 && mouseX < 192*2 && mouseY > 187*2 && mouseY < 217*2 ||mouseX > 207*2 && mouseX < 237*2 && mouseY > 187*2 && mouseY < 217*2 ||mouseX > 251*2 && mouseX < 281*2 && mouseY > 187*2 && mouseY < 217*2||mouseX > 295*2 && mouseX < 325*2 && mouseY > 187*2 && mouseY < 217*2||mouseX > 339*2 && mouseX < 369*2 && mouseY > 187*2 && mouseY < 217*2||mouseX > 30*2 && mouseX < 60*2 && mouseY > 244*2 && mouseY < 275*2 ||mouseX > 74*2 && mouseX < 104*2 && mouseY > 244*2 && mouseY < 275*2 ||mouseX > 118*2 && mouseX < 148*2 && mouseY > 244*2 && mouseY < 275*2||mouseX > 162*2 && mouseX < 192*2 && mouseY > 244*2 && mouseY < 275*2||mouseX > 207*2 && mouseX < 237*2 && mouseY > 244*2 && mouseY < 275*2||mouseX > 251*2 && mouseX < 281*2 && mouseY > 244*2 && mouseY < 275*2||mouseX > 295*2 && mouseX < 325*2 && mouseY > 244*2 && mouseY < 275*2 ||mouseX > 339*2 && mouseX < 369*2 && mouseY > 244*2 && mouseY < 275*2||mouseX > 30*2 && mouseX < 105*2 && mouseY > 292*2 && mouseY < 312*2||mouseX > 118*2 && mouseX < 192*2 && mouseY > 292*2 && mouseY < 312*2||mouseX > 295*2 && mouseX < 369*2 && mouseY > 292*2 && mouseY < 312*2||mouseX > 207*2 && mouseX < 281*2 && mouseY > 292*2 && mouseY < 312*2 ) 
       
       {cursor(HAND)}
  else{cursor(ARROW)}
  
}



function mouseClicked() {
  //code for the first hitat//
  if (mouseX > 30*2 && mouseX < 60*2 && mouseY > 130*2 && mouseY < 160*2) {
    hitatPat[0] = 1; //sets 1st hitat beat to on//
    if (hitatButton1isOn == true) (hitatButton1isOn = false), (hitatPat[0] = 0);
    else hitatButton1isOn = true;
  }

  if (mouseX > 74*2 && mouseX < 104*2 && mouseY > 130*2 && mouseY < 160*2) {
    hitatPat[1] = 1;
    if (hitatButton2isOn == true) (hitatButton2isOn = false), (hitatPat[1] = 0);
    else hitatButton2isOn = true;
  }

  if (mouseX > 118*2 && mouseX < 148*2 && mouseY > 130*2 && mouseY < 160*2) {
    hitatPat[2] = 1;
    if (hitatButton3isOn == true) (hitatButton3isOn = false), (hitatPat[2] = 0);
    else hitatButton3isOn = true;
  }

  if (mouseX > 162*2 && mouseX < 192*2 && mouseY > 130*2 && mouseY < 160*2) {
    hitatPat[3] = 1;
    if (hitatButton4isOn == true) (hitatButton4isOn = false), (hitatPat[3] = 0);
    else hitatButton4isOn = true;
  }

  if (mouseX > 207*2 && mouseX < 237*2 && mouseY > 130*2 && mouseY < 160*2) {
    hitatPat[4] = 1;
    if (hitatButton5isOn == true) (hitatButton5isOn = false), (hitatPat[4] = 0);
    else hitatButton5isOn = true;
  }

  if (mouseX > 251*2 && mouseX < 281*2 && mouseY > 130*2 && mouseY < 160*2) {
    hitatPat[5] = 1;
    if (hitatButton6isOn == true) (hitatButton6isOn = false), (hitatPat[5] = 0);
    else hitatButton6isOn = true;
  }

  if (mouseX > 295*2 && mouseX < 325*2 && mouseY > 130*2 && mouseY < 160*2) {
    hitatPat[6] = 1;
    if (hitatButton7isOn == true) (hitatButton7isOn = false), (hitatPat[6] = 0);
    else hitatButton7isOn = true;
  }

  if (mouseX > 339*2 && mouseX < 369*2 && mouseY > 130*2 && mouseY < 160*2) {
    hitatPat[7] = 1;
    if (hitatButton8isOn == true) (hitatButton8isOn = false), (hitatPat[7] = 0);
    else hitatButton8isOn = true;
  }

  //code for snares

  if (mouseX > 30*2 && mouseX < 60*2 && mouseY > 187*2 && mouseY < 217*2) {
    snarePat[0] = 1; //sets 1st hitat beat to on//
    if (snareButton1isOn == true) (snareButton1isOn = false), (snarePat[0] = 0);
    else snareButton1isOn = true;
  }

  if (mouseX > 74*2 && mouseX < 104*2 && mouseY > 187*2 && mouseY < 217*2) {
    snarePat[1] = 1; //sets 1st hitat beat to on//
    if (snareButton2isOn == true) (snareButton2isOn = false), (snarePat[1] = 0);
    else snareButton2isOn = true;
  }

  if (mouseX > 118*2 && mouseX < 148*2 && mouseY > 187*2 && mouseY < 217*2) {
    snarePat[2] = 1; //sets 1st hitat beat to on//
    if (snareButton3isOn == true) (snareButton3isOn = false), (snarePat[2] = 0);
    else snareButton3isOn = true;
  }

  if (mouseX > 162*2 && mouseX < 192*2 && mouseY > 187*2 && mouseY < 217*2) {
    snarePat[3] = 1; //sets 1st hitat beat to on//
    if (snareButton4isOn == true) (snareButton4isOn = false), (snarePat[3] = 0);
    else snareButton4isOn = true;
  }

  if (mouseX > 207*2 && mouseX < 237*2 && mouseY > 187*2 && mouseY < 217*2) {
    snarePat[4] = 1; //sets 1st hitat beat to on//
    if (snareButton5isOn == true) (snareButton5isOn = false), (snarePat[4] = 0);
    else snareButton5isOn = true;
  }

  if (mouseX > 251*2 && mouseX < 281*2 && mouseY > 187*2 && mouseY < 217*2) {
    snarePat[5] = 1; //sets 1st hitat beat to on//
    if (snareButton6isOn == true) (snareButton6isOn = false), (snarePat[5] = 0);
    else snareButton6isOn = true;
  }

  if (mouseX > 295*2 && mouseX < 325*2 && mouseY > 187*2 && mouseY < 217*2) {
    snarePat[6] = 1; //sets 1st hitat beat to on//
    if (snareButton7isOn == true) (snareButton7isOn = false), (snarePat[6] = 0);
    else snareButton7isOn = true;
  }

  if (mouseX > 339*2 && mouseX < 369*2 && mouseY > 187*2 && mouseY < 217*2) {
    snarePat[7] = 1; //sets 1st hitat beat to on//
    if (snareButton8isOn == true) (snareButton8isOn = false), (snarePat[7] = 0);
    else snareButton8isOn = true;
  }

  //code for kicks

  if (mouseX > 30*2 && mouseX < 60*2 && mouseY > 244*2 && mouseY < 275*2) {
    kickPat[0] = 1; //sets 1st hitat beat to on//
    if (kickButton1isOn == true) (kickButton1isOn = false), (kickPat[0] = 0);
    else kickButton1isOn = true;
  }

  if (mouseX > 74*2 && mouseX < 104*2 && mouseY > 244*2 && mouseY < 275*2) {
    kickPat[1] = 1; //sets 1st hitat beat to on//
    if (kickButton2isOn == true) (kickButton2isOn = false), (kickPat[1] = 0);
    else kickButton2isOn = true;
  }

  if (mouseX > 118*2 && mouseX < 148*2 && mouseY > 244*2 && mouseY < 275*2) {
    kickPat[2] = 1; //sets 1st hitat beat to on//
    if (kickButton3isOn == true) (kickButton3isOn = false), (kickPat[2] = 0);
    else kickButton3isOn = true;
  }
  if (mouseX > 162*2 && mouseX < 192*2 && mouseY > 244*2 && mouseY < 275*2) {
    kickPat[3] = 1; //sets 1st hitat beat to on//
    if (kickButton4isOn == true) (kickButton4isOn = false), (kickPat[3] = 0);
    else kickButton4isOn = true;
  }
  if (mouseX > 207*2 && mouseX < 237*2 && mouseY > 244*2 && mouseY < 275*2) {
    kickPat[4] = 1; //sets 1st hitat beat to on//
    if (kickButton5isOn == true) (kickButton5isOn = false), (kickPat[4] = 0);
    else kickButton5isOn = true;
  }
  if (mouseX > 251*2 && mouseX < 281*2 && mouseY > 244*2 && mouseY < 275*2) {
    kickPat[5] = 1; //sets 1st hitat beat to on//
    if (kickButton6isOn == true) (kickButton6isOn = false), (kickPat[5] = 0);
    else kickButton6isOn = true;
  }
  if (mouseX > 295*2 && mouseX < 325*2 && mouseY > 244*2 && mouseY < 275*2) {
    kickPat[6] = 1; //sets 1st hitat beat to on//
    if (kickButton7isOn == true) (kickButton7isOn = false), (kickPat[6] = 0);
    else kickButton7isOn = true;
  }
  if (mouseX > 339*2 && mouseX < 369*2 && mouseY > 244*2 && mouseY < 275*2) {
    kickPat[7] = 1; //sets 1st hitat beat to on//
    if (kickButton8isOn == true) (kickButton8isOn = false), (kickPat[7] = 0);
    else kickButton8isOn = true;
  }

  //code for the start button//
  else if (mouseX > 30*2 && mouseX < 105*2 && mouseY > 292*2 && mouseY < 312*2) {
    playMyPart();
  }

  //code for the stop button//
  else if (mouseX > 118*2 && mouseX < 192*2 && mouseY > 292*2 && mouseY < 312*2) {
    stopMyPart();
  }

  //tempo up
  if (mouseX > 295*2 && mouseX < 369*2 && mouseY > 292*2 && mouseY < 312*2) {
    MyTempo = MyTempo + 10;
    myPart.setBPM(MyTempo);
  }

  //tempo down
  if (mouseX > 207*2 && mouseX < 281*2 && mouseY > 292*2 && mouseY < 312*2 && MyTempo>10) {
    MyTempo = MyTempo - 10;
    myPart.setBPM(MyTempo);
  }
}

