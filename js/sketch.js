let currentEffect = 1; // effet actif (1 à 7)
let zoom= 0.01;
let amp;
let time =0;
let marge1 = 60
grille = 10
// let effet1Play = true
// let effet2Play = true
// let effet4Play = true
// let effet5Play = true
// let effet6Play = true
// let effet7Play = true
function preload(){
   img = loadImage('victorkk.png')
   img2 = loadImage('dague.png')
   sound = loadSound('joydivision.mp3')
   video = createVideo('gothdance.mov')
}


let marge = 120;
function setup() {
 createCanvas(windowWidth, windowHeight);
 //background (56,98,35)
//noStroke()
 colorMode(HSL)
 amp = new p5.Amplitude();
 angleMode(DEGREES);
 img.resize(width,0)
 img2.resize(140,0)
 video.hide()
 video.loop()
 video.size(width,AUTO)

}
function resetGraphics() {
  blendMode(BLEND);
  noTint();
  noStroke();
  fill(255);
}


function draw() {
  let level = amp.getLevel();
  time += level * 0.2; 

  background(0);             // ← UNIQUEMENT ICI
resetGraphics();
  switch (currentEffect) {
    case 1: resetGraphics(); effet1(); break;
    case 2: resetGraphics(); effet2(); break;
    case 3: resetGraphics(); effet3(); break;
    case 4: resetGraphics(); effet4(); break;
    case 5: resetGraphics(); effet5(); break;
    case 6: resetGraphics(); effet6(); break;
    case 7: resetGraphics(); effet7(); break;
    case 8: resetGraphics(); effet8(); break;
    case 9: resetGraphics(); effet9(); break;
  }
}



 
 
function mousePressed(){
    //sound.play()
    if(sound.isPlaying() == false)
      sound.play()
    }

function keyPressed(){
  if (key >= '1' && key <= '9') {
    currentEffect = int(key);
  }

  if (key === ' ') {
    if (!sound.isPlaying()) {
      sound.play();
    }
  }
}

function effet1(){
  let cnv = select('body');
  cnv.style('background-image', "url('redspiderweb.jpg')");
    image(video,0,0)
    noStroke()
  for (let x =0; x<width; x+=grille) 
      for (let y =0; y<height; y+=grille){ 
       
         let paramX=x*zoom;
         let paramY =y*zoom;
         let s= noise(x*zoom,y*zoom,time)*50;
         
         let filtre = noise(paramX,paramY,time)///valeurs entre 0 et 1

         let noise3d = noise(paramX,paramY,time)*360
        if(filtre>0.5){
         blendMode(REMOVE)
         textSize(30)
       text('*',x,y)
        
        }
      }  
       blendMode(BLEND)  
   }



function effet2(){
    let ecart = 350// modifier cette variable pour avoir de plus grandes variations
let level = amp.getLevel();
   time+=level*0.5;
 for (let y = marge; y <height-marge; y+=grille) {
    beginShape()
    strokeWeight(1)
    stroke(255)
    for (let x = marge; x<width-3*marge; x+=grille) {
       noFill()
      
       let paramX=x*zoom;
       let paramY =y*zoom;
       let noise3d = noise(paramX,paramY,time)//obtenir des valeurs négatives et positives
       noise3d = map(noise3d,0,2,3,ecart)
      
     if(noise3d>0.5 || x>width-grille-marge-0.5 || x==marge){
            vertex(x,y*0.8+noise3d)// desssiner chaque points de la ligne
     }
 }
endShape()
} }

function effet3(){
       for (let x = marge1; x <width-marge1; x+=grille) {
      for (let y =marge1; y<height-marge1; y+=grille) {
     let paramX=x*zoom;
     let paramY =y*zoom;
    let noise3d = noise(paramX,paramY,time)*100
   stroke(1,noise3d,noise3d)
   strokeWeight(7)
push()
   translate(x,y)
   rotate(noise3d)
   line(0,0,0,grille*7 )
pop()}
      }
   }


function effet4(){
   clear()
   let grille5 =170
   let cnv = select('body');
  cnv.style('background-image', "url('viande.jpg')");
  blendMode(BLEND)
        //image(img2,0,0)
    noStroke()
  for (let x =0; x<width; x+=grille5) 
      for (let y =0; y<height; y+=grille5){ 
       
         let paramX=x*zoom*2;
         let paramY =y*zoom*2;
         //let s= noise(x*zoom,y*zoom,time)*50;
         
         let filtre = noise(paramX,paramY,time)///valeurs entre 0 et 1

         let noise3d = noise(paramX,paramY,time)*360

        if(filtre>0.5){
push();

    let taille = map(
          noise(x * 0.9, y * 0.9),
          0, 1,
          0., 1.9
        );

         translate(x + img2.width/2, y + img2.height/2);
         rotate(x*y)
imageMode(CENTER)
 
let w = img2.width * taille;
        let h = img2.height * taille;

      image(img2,0,0,w,h)
      pop();
      
        }
      }  
   } 




function effet5(){
   for (let x = marge1; x <width-marge1; x+=grille) {
      for (let y =marge1; y<height-marge1; y+=grille) {
     let paramX=x*zoom;
         let paramY =y*zoom;
    let noise3d = noise(paramX,paramY,time)*360
   stroke(0 ,80,28 )
   strokeWeight(2)
push()
   translate(x,y)
   rotate(noise3d)
   line(0,0,0,grille*2 )
pop()

         
      }
     
 }
}
function effet6(){
   let grille4 =40;
      for (let x = 0; x <width; x+=grille4) {
    for (let y = 0; y <height; y+=grille4) {
       let paramX=x*zoom;
         let paramY =y*zoom;
      let noise3d = noise(paramX,paramY,time)*90
        //let color = noise(time)
        fill(0,0,noise3d)
      //fill(26,38,80)
        let s= noise(x*zoom,y*zoom,time)*70
        let m= noise(x*zoom,y*zoom,time)*20
       //fill(m+0,79,36)
    square(x,y,grille4)
   
    }
 }
}



function effet7(){
   let cnv = select('body');
  cnv.style('background-image', "url('creature.png')");
    blendMode(BLEND)
    image(img,0,0)
    noStroke()
  for (let x =0; x<width; x+=grille) 
      for (let y =0; y<height; y+=grille){ 
       
         let paramX=x*zoom;
         let paramY =y*zoom;
         
         let filtre = noise(paramX,paramY,time)///valeurs entre 0 et 1

         let noise3d = noise(paramX,paramY,1)*360
        if(filtre>0.45){
         blendMode(REMOVE)
         square(x,y,grille)
        }
      }  
       blendMode(BLEND)  
   }

function effet8(){
   for (let x = 0; x <width; x+=30) {
    for (let y = 0; y <height; y+=30) {
        let color = noise(time)
        //fill(color,30,47)
      //fill(26,38,80)
        let s= noise(x*zoom,y*zoom,time)*70
        let m= noise(x*zoom,y*zoom,time)*90
       fill(0,m,m)
    //square(x,y,s)
    textSize(int(s))*2
    text('?!',x,y)
    }
 }
}


function effet9(){
   let grille9=700
   background(0)
for (let x =0; x<width; x+=grille9) 
      for (let y =0; y<height; y+=grille){ 
       
         let paramX=x*zoom;
         let paramY =y*zoom;
         let s=(x*zoom,y*zoom,time)*40;
         
         let filtre = noise(paramX,paramY,time)///valeurs entre 0 et 1

         let noise3d = noise(paramX,paramY,time)*360
        if(filtre>0.5){
         fill(0,100,29)
         textSize(int(s)%120)
       text('she lost control',x,y)
        
        }
      }  
       blendMode(BLEND)  
   }
