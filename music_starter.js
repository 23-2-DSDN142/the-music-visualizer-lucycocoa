
// vocal, drum, bass, and other are volumes ranging from 0 to 100

function mouseClicked() {
  if (song.isPlaying()){
    song.pause()
    noLoop()
  } else {
    song.play()
    loop()
  }
}


function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(	0)
  
  console.log (width)
  let fft
  fft = new p5.FFT()

  

  stroke(255);
  noFill();
  translate(width /2, height/2)

let wave = fft.waveform()

beginShape()
for (let i = 0; i <= 360; i++) {
  let index = floor(map (drum, 0, 360, 0, wave.length-1))
 
  let r = map(wave[index], -1,1,150,350)

  let x = r * sin(i)
  let y = r * cos(i)
  vertex (x,y)
}
endShape()


}




//    let moonSize = map(vocal, 0,100,20+vocal,50+vocal)
//    let moonHeight = map(vocal, 0,100, (20+vocal)*2,height/3 )
//    let bassMap = map (bass, 0,100, 10,90);

//   fill(0,40);
//   noStroke();

//   for (let ii = 1; ii<= 10; ii++){
//    let yStep = ii * 62;
//    for(let i = 1; i <= 11; i++){
//      ellipse(104 * i, yStep, moonHeight)
//  } 
// }
 
// fill(255, 255, 0,100);
// noStroke();

// for (let ii = 1; ii<= 10; ii++){
//  let yStep = ii * 62;
//  for(let i = 1; i <= 11; i++){
//    ellipse(104 * i, yStep, moonSize)
// }
// }
// colorMode (HSB, 20);

// strokeWeight(2);
// stroke(bassMap,100,100);
// for (var i = 10; i <= bassMap; i++){
//   let bassH = i*9;
//   line (110, bassH, 100, bassH)
// }


// colorMode (HSB, 80);

// strokeWeight(5);
// stroke(bassMap,100,100);
// for (var i = 10; i <= bassMap; i++){
//   let bassH = i*12;
//   line (210, bassH, 200, bassH)}

//  colorMode (HSB, 100);

//   strokeWeight(2);
//   stroke(bassMap,100,100);
//   for (var i = 20; i <= bassMap; i++){
//     let bassH = i*9;
//     line (310, bassH, 300, bassH)}
 
  //  // Sea
  //  fill(50, 50, 240);
   
  //  rect(width/2, height/2,width,bass/2);
   
  //  rect(width/2, height/2+50,width/2+400,bass/2 );
   
  //  rect(width/2, height/2+100,width/2+200,bass/2 );
   
 
  //  // other bar is white
  //  fill(	202,	166	,128);
  //  rect(width/2,700,width,200+other);
  
  
 
   
