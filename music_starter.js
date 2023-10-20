
let firstRun = true
let ball = [];
let b_ball = [];
let paper = []; 
let disco = [];
let p_ball = [];



// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  
  
// background(0,100)
  




    
  
    if (firstRun) {
      rectMode(CENTER);
      ball.push(loadImage('ball_0.png'));
      ball.push(loadImage('ball_1.png'));
      ball.push(loadImage('ball_2.png'));
      ball.push(loadImage('ball_3.png'));
      ball.push(loadImage('ball_4.png'));
      ball.push(loadImage('ball_5.png'));

      b_ball.push(loadImage('b_ball_0.png'));
      b_ball.push(loadImage('b_ball_1.png'));
      b_ball.push(loadImage('b_ball_2.png'));
      b_ball.push(loadImage('b_ball_3.png'));

      p_ball.push(loadImage('p_ball_0.png'));
      p_ball.push(loadImage('p_ball_1.png'));
      p_ball.push(loadImage('p_ball_2.png'));
      p_ball.push(loadImage('p_ball_3.png'));


      disco.push(loadImage('disco_0.png'));
      disco.push(loadImage('disco_1.png'));




      
      paper.push(loadImage('paper.png'));
     


      firstRun = false;
    }

   
    
  if (song.currentTime()>=0 && song.currentTime()<39.3){
    // if (song.currentTime()>=0 && song.currentTime()<1){

    background(230,223,212,50);
    
    
     
  
   
      
  
    fill(0);
    ellipse(width/2.1+5,height/2.1+6,328)//mirrorball black bg
    
    let DrumFrame = int(map(drum, 0, 100, 0, 6));
    console.log(DrumFrame);
    push();
    scale(0.6);
    image(ball[DrumFrame], width/1.9, height /1.9);
    pop();

    

    
    
    let bassWidth = map(bass, 0,100, 200,5)
    let ballSize = 60;
    let balleffect = map(bass,0,100,0,ballSize+150)
    let bassWidth2 = map(bass, 0,100,700,900)
    
    stroke(114,163,136)
    fill(114,163,136);
    ellipse(bassWidth+100, height/8, ballSize);//greenball

    noStroke();
    fill(114,163,136,90);
    ellipse(bassWidth+100, height/8, balleffect);//greenballbg



    stroke(228,188,64)
    fill(228,188,64);
    ellipse(bassWidth2-120, height/4, ballSize-15);//yellowball

    noStroke();
    fill(228,188,6,60);
    ellipse(bassWidth2-120, height/4, balleffect-25)//yellowballbg



    stroke(168,62,72)
    fill(168,62,72);
    ellipse(bassWidth2-600, height/1.25, ballSize+5);//redball

    noStroke();
    fill(168,62,72,50);
    ellipse(bassWidth2-600, height/1.25, balleffect+5)//redballbg

 
    stroke(168,62,72)
    fill(168,62,72);
    ellipse(bassWidth+700, height/2.5, ballSize/2);//redball2

    noStroke();
    fill(168,62,72,50);
    ellipse(bassWidth+700, height/2.5, balleffect/2)//redballbg2

    stroke(83,104,104)
    fill(83,104,104);
    ellipse(bassWidth2-50, height-290, ballSize-10);//blueball

    noStroke();
    fill(83,104,104,50);
    ellipse(bassWidth2-50, height-290, balleffect-10)//blueballbg
    
    stroke(201,115,67,200)
    fill(201,115,67,200);
    ellipse(bassWidth2-600, height/3, ballSize/2);//orangeball

    noStroke();
    fill(201,115,67,50);
    ellipse(bassWidth2-600, height/3, balleffect/2);//orangeball


    stroke(80,61,90,)
    fill(80,61,90,);
    ellipse(bassWidth+500, height-80, ballSize/2);//purpleball

    noStroke();
    fill(80,61,90,50);
    ellipse(bassWidth+500, height-80, balleffect/2);//purpleball

    stroke(228,188,64)
    fill(228,188,64);
    ellipse(bassWidth+50, height/1.9, ballSize/2-5);//yellow2ball

    noStroke();
    fill(228,188,64,50);
    ellipse(bassWidth+50, height/1.9, balleffect/2-5);//yellow2ball

    noStroke();
    fill(201,115,67,200);
    ellipse(bassWidth+500,height/15,ballSize/2-10)//

    noStroke();
    fill(201,115,67,50);
    ellipse(bassWidth+500,height/15,balleffect/2-10)
    

    let BG = int(map(0,100,0,1));
      console.log(BG);
      push();
      scale(1.4);
      image(paper[BG],0,5);
      
      pop();
      
    
  }

    




    if(song.currentTime() >= 39.3 && song.currentTime()<86) {
      // if(song.currentTime() >= 1 && song.currentTime()<2) {
        
        background(0);


        
        
        noStroke()
        fill(drum,drum,180,drum+50);
        // ellipse(500,height-150,650,110)
        ellipse(500,height-150,550,90)
        ellipse(500,height-150,500,70)
        ellipse(500,height-150,450,50)
        ellipse(500,height-150,400,30)  // shadow
  
        noStroke();
        fill(drum,drum,200,drum)
        quad(450,0,550,0,700,850,300,850)
        quad(-10,10,100,-10,700,850,300,850)
        quad(900,-10,990,10,700,850,300,850)
        fill(255,other-70)
        quad(480,0,520,0,700,850,300,850)
        quad(20,10,70,-10,700,850,300,850)
        quad(930,-10,960,10,700,850,300,850)
        ellipse(500,height-1500,550,90)

  

      let discoballHeight = map(vocal,0,100,height/0.8,400) 
      
      let DrumFrame = int(map(drum, 0, 100, 0, 3));
      console.log(DrumFrame);
      push();
      scale(0.45);
      image(b_ball[DrumFrame], 825, discoballHeight+60);
      pop();
      
    

     
      let text = int(map(drum,0,100,0,2));
      console.log(text);
      push();
      scale(0.9);
      image(disco[text],190,90);
      
      pop();

    

      let volume = map(bass,0,100,0,90);
    
      // let volumeWidth = 50;
      
   
      for(let i =1; i <=volume ; i++){
        let volumeStep = i *8;
        strokeWeight(5)
        
        strokeCap(SQUARE);
        stroke(255,drum,130,120)
        line(40,volumeStep+400,60,volumeStep+400);
        line(80,volumeStep+300,100,volumeStep+300);
        line(120,volumeStep+200,140,volumeStep+200);
        line(160,volumeStep+100,180,volumeStep+100);
        stroke(130,230,drum,120)
        // stroke(230,230,drum,90)
        line(840,volumeStep+100,860,volumeStep+100);
        line(880,volumeStep+200,900,volumeStep+200);
        line(920,volumeStep+300,940,volumeStep+300);
        line(960,volumeStep+400,980,volumeStep+400);

      
       
   
      }
    }

    if (song.currentTime()>=86 && song.currentTime()<116){
      // if (song.currentTime()>=0 && song.currentTime()<1){

      background(0,drum);
     



    

      fill(0);
      ellipse(width/2.1+5,height/2.1+6,328)//mirrorball black bg
      
      let DrumFrame = int(map(drum, 0, 100, 0, 6));
      console.log(DrumFrame);
      push();
      scale(0.6);
      image(ball[DrumFrame], width/1.9, height /1.9);
      pop();
  
      
  
      
      
      let bassWidth = map(bass, 0,100, 200,5)
      let ballSize = 60;
      let balleffect = map(bass,0,100,0,ballSize+150)
      let bassWidth2 = map(bass, 0,100,700,900)
      let whitelight = map(other,0,100,0,800)
      
      stroke(114,163,136)
      fill(114,163,136);
      ellipse(bassWidth+100, height/8, ballSize);//greenball
      
  
      noStroke();
      fill(114,163,136,60);
      ellipse(bassWidth+100, height/8, balleffect);//greenballbg
      fill(114,163,136,10);
      ellipse(bassWidth+100, height/8, balleffect*2);//greenballbg2
      fill(114,163,136,40);
      ellipse(bassWidth+100, height/8, balleffect*1.5);//greenballbg1.5
      fill(114,163,136,10);
      ellipse(bassWidth+100, height/8, balleffect*5);//greenballbg3
  
  
  
      noStroke();
      fill(80,61,90);
      ellipse(bassWidth2+50,height/11,ballSize-10)//purpleball2
      fill(80,61,90,40);
      ellipse(bassWidth2+50,height/11,balleffect/1.5)//purpleballbg1
      fill(80,61,90,40);
      ellipse(bassWidth2+50,height/11,balleffect)//purpleballbg2
      fill(80,61,90,10);
      ellipse(bassWidth2+50,height/11,balleffect*3)//purpleballbg3
  
  
      stroke(228,188,64)
      fill(228,188,64);
      ellipse(bassWidth2-120, height/4, ballSize-15);//yellowball
  
      noStroke();
      fill(228,188,6,40);
      ellipse(bassWidth2-120, height/4, balleffect-50)//yellowballbg
      fill(228,188,6,20);
      ellipse(bassWidth2-120, height/4, balleffect)//yellowballbg1.5
      fill(228,188,6,10);
      ellipse(bassWidth2-120, height/4, balleffect*1.5)//yellowballbg1.5
      fill(228,188,6,10);
      ellipse(bassWidth2-120, height/4, balleffect*4)//yellowballbg1.5
  
   
  
      stroke(168,62,72)
      fill(168,62,72);
      ellipse(bassWidth2-600, height/1.32, ballSize+5);//redball
  
      noStroke();
      
      fill(168,62,72,20);
      ellipse(bassWidth2-600, height/1.32, balleffect-10)//redballbg
      fill(168,62,72,10);
      ellipse(bassWidth2-600, height/1.32, balleffect*1.3)//redballbg2
      fill(168,62,72,5);
      ellipse(bassWidth2-600, height/1.32, balleffect*2)//redballbg3
      fill(168,62,72,20);
      ellipse(bassWidth2-600, height/1.32, balleffect*5)//redballbg3
  
  
      stroke(168,62,72)
      fill(168,62,72);
      ellipse(bassWidth+700, height/2.5, ballSize/2);//redball2
  
      noStroke();
      fill(168,62,72,50);
      ellipse(bassWidth+700, height/2.5, balleffect/2)//redballbg2
  
      stroke(83,104,104)
      fill(83,104,104);
      ellipse(bassWidth2-50, height-290, ballSize-10);//blueball
  
      noStroke();
      fill(83,104,104,50);
      ellipse(bassWidth2-50, height-290, balleffect-30)//blueballbg
      fill(83,104,104,20);
      ellipse(bassWidth2-50, height-290, balleffect+20)//blueballbg2
      fill(83,104,104,10);
      ellipse(bassWidth2-50, height-290, balleffect+60)//blueballbg3
      fill(83,104,104,15);
      ellipse(bassWidth2-50, height-290, balleffect*4)//blueballbg3
      
      stroke(201,115,67,200)
      fill(201,115,67,200);
      ellipse(bassWidth2-600, height/3, ballSize/2);//orangeball2
  
      noStroke();
      fill(201,115,67,50);
      ellipse(bassWidth2-600, height/3, balleffect/2);//orangeballbg
  
  
      stroke(80,61,90,)
      fill(80,61,90,);
      ellipse(bassWidth+500, height-80, ballSize/2);//purpleball
  
      noStroke();
      fill(80,61,90,50);
      ellipse(bassWidth+500, height-80, balleffect/2);//purpleballbg
      fill(80,61,90,30);
      ellipse(bassWidth+500, height-80, balleffect/1.2);//purpleballbg
      fill(80,61,90,10);
      ellipse(bassWidth+500, height-80, balleffect*1.5);//purpleballbg
  
      stroke(228,188,64)
      fill(228,188,64);
      ellipse(bassWidth+50, height/1.9, ballSize/2-5);//yellow2ball
  
      noStroke();
      fill(228,188,64,50);
      ellipse(bassWidth+50, height/1.9, balleffect/2-5);//yellow2ball
  
      noStroke();
      fill(201,115,67,200);
      ellipse(bassWidth+400,height/15,ballSize/2-10)//orangeball1
  
      noStroke();
      fill(201,115,67,50);
      ellipse(bassWidth+400,height/15,balleffect/1.5)//orangeballbg
      fill(201,115,67,40);
      ellipse(bassWidth+400,height/15,balleffect/2-10)//orangeballbg2
      fill(201,115,67,10);
      ellipse(bassWidth+400,height/15,balleffect*1.5)//orangeballbg
  
  
      fill(241,242,242,30);
      ellipse(bassWidth2-700, height/2.2, whitelight)
      ellipse(bassWidth+800, height-100, whitelight)//whiteeffect
  
  
  
  
    
      
    }
      
    
    if(song.currentTime() >= 116 && song.currentTime()<163) {
      // if(song.currentTime() >= 2 && song.currentTime()<100) {

      background('#deacac');

      

      

    
    let whiteCircle = map(bass,0,100,50,200);

    for(let ii = 1; ii <= 18; ii++){
      let yStep = ii*50
      for (let i = 1; i <= 19; i++){
        stroke(255);
        strokeWeight(0.5)
        fill(255,20);
        ellipse(51*i, yStep, whiteCircle)
      }
    }

          let volume = map(vocal,0,100,10,90);

      for(let i =1; i <=volume ; i++){
        let volumeStep = i *7;
        strokeWeight(5)
        
        strokeCap(SQUARE);
        stroke('#deacac')
        line(480,508-volumeStep,510,508-volumeStep);
        line(480,500+volumeStep,510,500+volumeStep);
        
      }

      let volume1 = map(vocal,0,100,10,70);

      for(let i =1; i <=volume1 ; i++){
        let volumeStep = i *7;
        strokeWeight(3)
        
        strokeCap(SQUARE);
        stroke('#deacac')
        line(430,508-volumeStep,460,508-volumeStep);
        line(430,500+volumeStep,460,500+volumeStep);
        line(530,508-volumeStep,560,508-volumeStep);
        line(530,500+volumeStep,560,500+volumeStep);
        
      }

      let volume2 = map(vocal,0,100,10,50);
      for(let i =1; i <=volume2 ; i++){
        let volumeStep = i *7;
        strokeWeight(5)
        
        strokeCap(SQUARE);
        stroke('#deacac')
        line(380,508-volumeStep,410,508-volumeStep);
        line(380,500+volumeStep,410,500+volumeStep);
        line(580,508-volumeStep,610,508-volumeStep);
        line(580,500+volumeStep,610,500+volumeStep);
        
      }

      let volume3 = map(vocal,0,100,10,40);
      for(let i =1; i <=volume3 ; i++){
        let volumeStep = i *7;
        strokeWeight(3)
        
        strokeCap(SQUARE);
        stroke('#deacac')
        line(330,508-volumeStep,360,508-volumeStep);
        line(330,500+volumeStep,360,500+volumeStep);
        line(630,508-volumeStep,660,508-volumeStep);
        line(630,500+volumeStep,660,500+volumeStep);
        
      }

      let volume4 = map(vocal,0,100,10,30);
      for(let i =1; i <=volume4 ; i++){
        let volumeStep = i *7;
        strokeWeight(5)
        
        strokeCap(SQUARE);
        stroke('#deacac')
        line(280,508-volumeStep,310,508-volumeStep);
        line(280,500+volumeStep,310,500+volumeStep);
        line(680,508-volumeStep,710,508-volumeStep);
        line(680,500+volumeStep,710,500+volumeStep);
        
      }


      let volume5 = map(vocal,0,100,10,20);
      for(let i =1; i <=volume5 ; i++){
        let volumeStep = i *7;
        strokeWeight(3)
        
        strokeCap(SQUARE);
        stroke('#deacac')
        line(230,508-volumeStep,260,508-volumeStep);
        line(230,500+volumeStep,260,500+volumeStep);
        line(730,508-volumeStep,760,508-volumeStep);
        line(730,500+volumeStep,760,500+volumeStep);
      }


      let volume6 = map(vocal,0,100,10,15);
      for(let i =1; i <=volume6 ; i++){
        let volumeStep = i *7;
        strokeWeight(5)

        line(180,508-volumeStep,210,508-volumeStep);
        line(180,500+volumeStep,210,500+volumeStep);
        line(780,508-volumeStep,810,508-volumeStep);
        line(780,500+volumeStep,810,500+volumeStep);
      }

        let volume7 = map(vocal,0,100,8,12);
        for(let i =1; i <=volume7 ; i++){
          let volumeStep = i *7;
          strokeWeight(3)

        line(130,508-volumeStep,160,508-volumeStep);
        line(130,500+volumeStep,160,500+volumeStep);
        line(830,508-volumeStep,860,508-volumeStep);
        line(830,500+volumeStep,860,500+volumeStep);

        line(80,508-volumeStep,110,508-volumeStep);
        line(80,500+volumeStep,110,500+volumeStep);
        line(880,508-volumeStep,910,508-volumeStep);
        line(880,500+volumeStep,910,500+volumeStep);
        
        
      }



      let pinkballHeight = map(bass,0,100,height,600) 
      
      let DrumFrame = int(map(drum, 0, 100, 0, 4));
      console.log(DrumFrame);
      push();
      scale(0.45);
      image(p_ball[DrumFrame], 725, pinkballHeight);
      
      pop();

      





    }


    if (song.currentTime()>=163 && song.currentTime()<281){
      // if (song.currentTime()>=0 && song.currentTime()<1){
      
      background(0,drum);
     



    

      fill(0);
      ellipse(width/2.1+5,height/2.1+6,328)//mirrorball black bg
      
      let DrumFrame = int(map(drum, 0, 100, 0, 6));
      console.log(DrumFrame);
      push();
      scale(0.6);
      image(ball[DrumFrame], width/1.9, height /1.9);
      pop();
  
      
  
      
      
      let bassWidth = map(bass, 0,100, 200,5)
      let ballSize = 60;
      let balleffect = map(bass,0,100,0,ballSize+150)
      let bassWidth2 = map(bass, 0,100,700,900)
      let whitelight = map(other,0,100,0,800)
      
      stroke(114,163,136)
      fill(114,163,136);
      ellipse(bassWidth+100, height/8, ballSize);//greenball
      
  
      noStroke();
      fill(114,163,136,60);
      ellipse(bassWidth+100, height/8, balleffect);//greenballbg
      fill(114,163,136,10);
      ellipse(bassWidth+100, height/8, balleffect*2);//greenballbg2
      fill(114,163,136,40);
      ellipse(bassWidth+100, height/8, balleffect*1.5);//greenballbg1.5
      fill(114,163,136,10);
      ellipse(bassWidth+100, height/8, balleffect*5);//greenballbg3
  
  
  
      noStroke();
      fill(80,61,90);
      ellipse(bassWidth2+50,height/11,ballSize-10)//purpleball2
      fill(80,61,90,40);
      ellipse(bassWidth2+50,height/11,balleffect/1.5)//purpleballbg1
      fill(80,61,90,40);
      ellipse(bassWidth2+50,height/11,balleffect)//purpleballbg2
      fill(80,61,90,10);
      ellipse(bassWidth2+50,height/11,balleffect*3)//purpleballbg3
  
  
      stroke(228,188,64)
      fill(228,188,64);
      ellipse(bassWidth2-120, height/4, ballSize-15);//yellowball
  
      noStroke();
      fill(228,188,6,40);
      ellipse(bassWidth2-120, height/4, balleffect-50)//yellowballbg
      fill(228,188,6,20);
      ellipse(bassWidth2-120, height/4, balleffect)//yellowballbg1.5
      fill(228,188,6,10);
      ellipse(bassWidth2-120, height/4, balleffect*1.5)//yellowballbg1.5
      fill(228,188,6,10);
      ellipse(bassWidth2-120, height/4, balleffect*4)//yellowballbg1.5
  
   
  
      stroke(168,62,72)
      fill(168,62,72);
      ellipse(bassWidth2-600, height/1.32, ballSize+5);//redball
  
      noStroke();
      
      fill(168,62,72,20);
      ellipse(bassWidth2-600, height/1.32, balleffect-10)//redballbg
      fill(168,62,72,10);
      ellipse(bassWidth2-600, height/1.32, balleffect*1.3)//redballbg2
      fill(168,62,72,5);
      ellipse(bassWidth2-600, height/1.32, balleffect*2)//redballbg3
      fill(168,62,72,20);
      ellipse(bassWidth2-600, height/1.32, balleffect*5)//redballbg3
  
  
      stroke(168,62,72)
      fill(168,62,72);
      ellipse(bassWidth+700, height/2.5, ballSize/2);//redball2
  
      noStroke();
      fill(168,62,72,50);
      ellipse(bassWidth+700, height/2.5, balleffect/2)//redballbg2
  
      stroke(83,104,104)
      fill(83,104,104);
      ellipse(bassWidth2-50, height-290, ballSize-10);//blueball
  
      noStroke();
      fill(83,104,104,50);
      ellipse(bassWidth2-50, height-290, balleffect-30)//blueballbg
      fill(83,104,104,20);
      ellipse(bassWidth2-50, height-290, balleffect+20)//blueballbg2
      fill(83,104,104,10);
      ellipse(bassWidth2-50, height-290, balleffect+60)//blueballbg3
      fill(83,104,104,15);
      ellipse(bassWidth2-50, height-290, balleffect*4)//blueballbg3
      
      stroke(201,115,67,200)
      fill(201,115,67,200);
      ellipse(bassWidth2-600, height/3, ballSize/2);//orangeball2
  
      noStroke();
      fill(201,115,67,50);
      ellipse(bassWidth2-600, height/3, balleffect/2);//orangeballbg
  
  
      stroke(80,61,90,)
      fill(80,61,90,);
      ellipse(bassWidth+500, height-80, ballSize/2);//purpleball
  
      noStroke();
      fill(80,61,90,50);
      ellipse(bassWidth+500, height-80, balleffect/2);//purpleballbg
      fill(80,61,90,30);
      ellipse(bassWidth+500, height-80, balleffect/1.2);//purpleballbg
      fill(80,61,90,10);
      ellipse(bassWidth+500, height-80, balleffect*1.5);//purpleballbg
  
      stroke(228,188,64)
      fill(228,188,64);
      ellipse(bassWidth+50, height/1.9, ballSize/2-5);//yellow2ball
  
      noStroke();
      fill(228,188,64,50);
      ellipse(bassWidth+50, height/1.9, balleffect/2-5);//yellow2ball
  
      noStroke();
      fill(201,115,67,200);
      ellipse(bassWidth+400,height/15,ballSize/2-10)//orangeball1
  
      noStroke();
      fill(201,115,67,50);
      ellipse(bassWidth+400,height/15,balleffect/1.5)//orangeballbg
      fill(201,115,67,40);
      ellipse(bassWidth+400,height/15,balleffect/2-10)//orangeballbg2
      fill(201,115,67,10);
      ellipse(bassWidth+400,height/15,balleffect*1.5)//orangeballbg
  
  
      fill(241,242,242,30);
      ellipse(bassWidth2-700, height/2.2, whitelight)
      ellipse(bassWidth+800, height-100, whitelight)//whiteeffect
  
  
  
  
    
      
    }
    



  
  

    }



  
  
 
   
