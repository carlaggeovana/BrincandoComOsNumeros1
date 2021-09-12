var tela = 1;
var altura = 50;
var largura = 280;
var xmenu = 110;
var ymenu1 = 240;
var ymenu2 = 310;
var ymenu3 = 380;
var ymenu4 = 20;
var largurav = 80;
var alturav = 25;
var xmenuvoltar = 20;
var ymenuvoltar = 460;
var largurav2 = 125;
var alturav2 = 40;
var xmenuvoltar2 = 190;
var ymenuvoltar2 = 280;
var largurat = 430;
var alturat = 50;
var xtext = 30;
var ytext = 20;
var largurat2 = 500;
var alturat2 = 330;
var xtext2 = 0;
var ytext2 = 95;
var largurat3 = 490;
var alturat3 = 150;
var xtext3 = 5;
var ytext3 = 50;
var alturaop = 135;
var larguraop = 135;
var xsoma = 70;
var ysoma = 100;
var xsub = 290;
var ysub = 100;
var xmult = 70;
var ymult = 290;
var xdiv = 290;
var ydiv = 290;
var altura1 = 120;
var largura1 = 120;
var x1 = 90;
var y1 = 135;
var x2 = 295;
var y2 = 135;
var alturar = 90;
var largurar = 90;
var y3 = 330;
var x3 = 60;
var x4 = 205;
var x5 = 350;
var y4 = 300;
var alturagameover = 160;
var larguragameover = 320;
var xgame =100;
var ygame = 100;
var alturaganhou = 160;
var larguraganhou = 320;

var gameover = [];
var contador = 0;
var tempo = 0;
var som;


let img;
let myfont;
let myfont2;

function preload() {
  img = loadImage("image/tela.jpg");
  img1 = loadImage("image/tela2.jpg");
  img2 = loadImage("image/soma.png");
  img3 = loadImage("image/sub.png");
  img4 = loadImage("image/mult.png");
  img5 = loadImage("image/div.png");
  img6 = loadImage("image/soma1.png");
  img7 = loadImage("image/sub1.png");
  img8 = loadImage("image/mult1.png");
  img9 = loadImage("image/div1.png");
  img10 = loadImage("image/foto.png");
  
  gameover[0] = loadImage("image/g1.png");
  gameover[1] = loadImage("image/g2.png");
  gameover[2] = loadImage("image/g3.png");
 
  soundFormats('wav');
  som = loadSound('music/audio1', loadOpen);

  myfont = loadFont("font/Chalkaholic DEMO.otf");
  myfont2 = loadFont("font/Numero.ttf");
}

function setup() {
  createCanvas(500, 500);
}
function loadOpen(){
    som.play();
}

function mouseClicked(){
     if(tela==2){
  if (mouseX > xdiv && mouseX < xdiv + larguraop && mouseY > ydiv &&
      mouseY < ydiv + alturaop) { 
        tela = 8;
      }
}
  
    if(tela == 5){
    if (mouseX > xmenuvoltar && mouseX < xmenuvoltar + largurav && mouseY > ymenuvoltar && mouseY < ymenuvoltar + alturav) {
      tela = 2;
    }
  }
  
     if(tela==2){
  if (mouseX > xdiv && mouseX < xdiv + larguraop && mouseY > ydiv &&
      mouseY < ydiv + alturaop) {    
        tela = 6;
      }
}
  
    if(tela == 6){
    if (mouseX > xmenuvoltar && mouseX < xmenuvoltar + largurav && mouseY > ymenuvoltar && mouseY < ymenuvoltar + alturav) {
      tela = 2;
    }
  }
  
     if(tela==2){
  if (mouseX > xmult && mouseX < xmult + larguraop && mouseY > ymult &&
      mouseY < ymult + alturaop) {     
        tela = 7;
      }
}
  
    if(tela == 7){
    if (mouseX > xmenuvoltar && mouseX < xmenuvoltar + largurav && mouseY > ymenuvoltar && mouseY < ymenuvoltar + alturav) {
      tela = 2;
    }
  }
  
  if(tela==2){
  if (mouseX > xdiv && mouseX < xdiv + larguraop && mouseY > ydiv &&
      mouseY < ydiv + alturaop) {    
        tela = 8;
      }
}
  
    if(tela == 8){
    if (mouseX > xmenuvoltar && mouseX < xmenuvoltar + largurav && mouseY > ymenuvoltar && mouseY < ymenuvoltar + alturav) {
      tela = 2;
    }
  }
  
    if(tela == 5){
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      tela = 9;
    }
  }
   
     if(tela == 5){
     if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      tela = 11;
    }
  }
  
    if(tela == 5){
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      tela = 9;
    }
  }
 
   if(tela == 6){
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      tela = 9;
    }
  }
   
     if(tela == 6){
     if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      tela = 12;
    }
  }
  
    if(tela == 6){
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      tela = 9;
    }
  }
  
   if(tela == 7){
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      tela = 13;
    }
  }
   
     if(tela == 7){
     if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      tela = 9;
    }
  }
  
    if(tela == 7){
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      tela = 9;
    }
  }
   if(tela == 8){
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      tela = 9;
    }
  }
   
     if(tela == 8){
     if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      tela = 14;
    }
  }
  
    if(tela == 8){
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      tela = 9;
    }
  }
  
    if(tela == 9){
    if (mouseX > xmenuvoltar2 && mouseX < xmenuvoltar2 + largurav2 && mouseY > ymenuvoltar2 && mouseY < ymenuvoltar2 + alturav2) {
      tela = 1;
    }
  }
  
   if(tela == 10){
    if (mouseX > xmenuvoltar2 && mouseX < xmenuvoltar2 + largurav2 && mouseY > ymenuvoltar2 && mouseY < ymenuvoltar2 + alturav2) { 
      tela = 1;
    }
   }
}
  
function draw() {
  background(240);

  //Tela menu
  if (tela == 1) {
    textStyle(BOLD);
    background(20);
    textAlign(CENTER);
    textFont(myfont);
    image(img, 0, 0);
    textSize(60);
    fill(255, 255, 255);
    rect(xtext3, ytext3, largurat3, alturat3, 25);
    fill(0, 0, 0);
    text("Brincando", 240, 110);
    text("com os números!", 240, 180);

    //iniciar
    textSize(40);
    stroke(0);
    fill(160, 32, 240);
    rect(xmenu, ymenu1, largura, altura, 25);
    if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu1 &&
      mouseY < ymenu1 + altura) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenu, ymenu1, largura, altura, 25);
      if (mouseIsPressed) {
        tela = 2;
      }
    }
    fill(0);
    noStroke();
    text("Iniciar", 245, 280);

    // inst
    stroke(0);
    fill(160, 32, 240);
    rect(xmenu, ymenu2, largura, altura, 25);
    if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu2 &&
      mouseY < ymenu2 + altura) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenu, ymenu2, largura, altura, 25);
      if (mouseIsPressed) {
        tela = 3;
      }
    }
    fill(0);
    noStroke();
    text("Instruções", 245, 350);

    //cred
    stroke(0);
    fill(160, 32, 240);
    rect(xmenu, ymenu3, largura, altura, 25);
    if (mouseX > xmenu && mouseX < xmenu + largura && mouseY > ymenu3 &&
      mouseY < ymenu3 + altura) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenu, ymenu3, largura, altura, 25);
      if (mouseIsPressed) {
        tela = 4;
      }
    }
    fill(0);
    noStroke();
    text("Créditos", 245, 420);
  }
  //Tela jogo
  else if (tela == 2) {
    image(img, 0, 0);
    textAlign(CENTER);
    textStyle(BOLD);
    textSize(40);
    fill(255, 255, 255);
    rect(xtext, ytext, largurat, alturat, 25);
    fill(0, 0, 0);
    text("Escolha uma opção:", 250, 60);

    image(img2, 70, 100);
    image(img3, 290, 100);
    image(img4, 70, 290);
    image(img5, 290, 290);

    noFill();
    if (mouseX > xsoma && mouseX < xsoma + larguraop && mouseY > ysoma &&
      mouseY < ysoma + alturaop) {
      image(img2, 70, 100);
      rect(xsoma, ysoma, larguraop, alturaop, 25);
      if (mouseIsPressed) {
        tela = 5;
      }
    }

    noFill();
    if (mouseX > xsub && mouseX < xsub + larguraop && mouseY > ysub &&
      mouseY < ysub + alturaop) {
      image(img3, 290, 100);
      rect(xsub, ysub, larguraop, alturaop, 25);
      if (mouseIsPressed) {
        tela = 6;
      }
    }

    noFill();
    if (mouseX > xmult && mouseX < xmult + larguraop && mouseY > ymult &&
      mouseY < ymult + alturaop) {
      image(img4, 70, 290);
      rect(xmult, ymult, larguraop, alturaop, 25);
    }

    noFill();
    if (mouseX > xdiv && mouseX < xdiv + larguraop && mouseY > ydiv &&
      mouseY < ydiv + alturaop) {
      image(img5, 290, 290);
      rect(xdiv, ydiv, larguraop, alturaop, 25);
    }

    stroke(0);
    fill(255.255, 255);
    rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
    if (mouseX > xmenuvoltar && mouseX < xmenuvoltar + largurav && mouseY > ymenuvoltar && mouseY < ymenuvoltar + alturav) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
      if (mouseIsPressed) {
        tela = 1;
        
      }
    }
    textSize(20);
    noStroke(0);
    fill(0, 0, 0);
    text("Voltar", 55, 480);
  }

  //Tela instruções
  else if (tela == 3) {
    image(img, 0, 0);
    textAlign(CENTER);
    textSize(40);
    stroke(0);
    fill(0, 191, 255);
    rect(xmenu, ymenu4, largura, altura, 25);
    noStroke();
    fill(0, 0, 0);
    text("Instruções", 255, 60);

    textSize(20);
    fill(255, 255, 255);
    rect(xtext2, ytext2, largurat2, alturat2, 25);
    fill(0, 0, 0);
    text("- Use o mouse para selecionar uma das opções (Iniciar, Instruções ou Créditos.)",10, 120, 460);
    text("- Ao escolher iniciar, selecione com qual operador deseja brincar.",10, 180, 460);
    text("- O objetivo do jogo é associar o número ao resultado da operação.", 10, 240, 460);
    text("- Clique em voltar para voltar ao menu.", 10, 300, 460);
    
    textSize(16);
    textAlign(LEFT);
    text("BRINCANDO COM OS NÚMEROS é um jogo educacional que aborda as quatro operações matemáticas básicas (adição, subtração, multiplicação e divisão), destinado a alunos do terceiro ano do ensino fundamental.", 25, 350, 460);

    stroke(0);
    fill(0, 191, 255);
    rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
    if (mouseX > xmenuvoltar && mouseX < xmenuvoltar + largurav && mouseY > ymenuvoltar && mouseY < ymenuvoltar + alturav) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
    textSize(20);
    textAlign(CENTER);
    noStroke();
    fill(0, 0, 0);
    text("Voltar", 55, 480);
  }

  //Tela creditos
  else if (tela == 4) {
    image(img, 0, 0);
    textAlign(CENTER);
    textSize(40);
    stroke(0);
    fill(255, 165, 0);
    rect(xmenu, ymenu4, largura, altura, 25);
    noStroke();
    fill(0, 0, 0);
    text("Créditos", 255, 60);

    textSize(20);
    fill(255, 255, 255);
    rect(xtext2, ytext2, largurat2, alturat2, 25);
    fill(0, 0, 0);
    
    image(img10, 30, 110);
    
    textSize(25);
    text("CARLA GEOVANA", 300,225);
    textSize(20);
    text("Função: Programadora", 305,250);
    textSize(15);    
    text("Estudante de Bacharelado em Ciências e Tecnologia", 250, 355);
    text("na Universidade Federal do Rio Grande do Norte.(UFRN)",250, 375);
    

    stroke(0);
    fill(255, 165, 0);
    rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
    if (mouseX > xmenuvoltar && mouseX < xmenuvoltar + largurav && mouseY > ymenuvoltar && mouseY < ymenuvoltar + alturav) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
      if (mouseIsPressed) {
        tela = 1;
      }
    }
    textSize(20);
    noStroke();
    fill(0, 0, 0);
    text("Voltar", 55, 480);
  }
  //soma
  else if (tela == 5) {
    image(img1, 0, 0);
    textAlign(CENTER);
    textFont(myfont);
    textSize(40);
    stroke(0);
    fill(255, 110, 180);
    rect(xmenu, ymenu4, largura, altura, 25);
    noStroke();
    fill(0, 0, 0);
    text("Soma", 240, 60);

    stroke(0);
    fill(255, 110, 180);
    rect(x1, y1, largura1, altura1, 80);
    if (mouseX > x1 && mouseX < x1 + largura1 && mouseY > y1 && mouseY < y1 + altura1) {
      rect(x1, y1, largura1, altura1, 80);
    }

    stroke(0);
    fill(255, 110, 180);
    rect(x2, y2, largura1, altura1, 80);
    if (mouseX > x2 && mouseX < x2 + largura1 && mouseY > y2 && mouseY < y2 + altura1) {
      rect(x2, y2, largura1, altura1, 80);
    }

    textFont(myfont2);
    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("2", 150, 225);

    image(img6, 195, 145);

    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("7", 355, 225);

    stroke(0);
    fill(255, 110, 180);
    rect(x3, y3, largurar, alturar, 30);
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
       stroke(0);
      fill(232, 232, 232);
      rect(x3, y3, largurar, alturar, 30);
    }

    stroke(0);
    fill(255, 110, 180);
    rect(x4, y3, largurar, alturar, 30);
    if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
       stroke(0);
      fill(232, 232, 232);
      rect(x4, y3, largurar, alturar, 30);
    }

    stroke(0);
    fill(255, 110, 180);
    rect(x5, y3, largurar, alturar, 30);
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
       stroke(0);
      fill(232, 232, 232);
      rect(x5, y3, largurar, alturar, 30);
    }

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("10", 105, 395);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("9", 250, 395);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("6", 395, 395);

    stroke(0);
    fill(255, 110, 180);
    rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
    if (mouseX > xmenuvoltar && mouseX < xmenuvoltar + largurav && mouseY > ymenuvoltar && mouseY < ymenuvoltar + alturav) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
      }
   
    textFont(myfont);
    textSize(20);
    noStroke(0);
    fill(0, 0, 0);
    text("Voltar", 55, 480);
  }

  //subtração
  else if (tela == 6) {
    image(img1, 0, 0);
    textAlign(CENTER);
    textFont(myfont);
    textSize(40);
    stroke(0);
    fill(162, 205, 90);
    rect(xmenu, ymenu4, largura, altura, 25);
    noStroke();
    fill(0, 0, 0);
    text("Subtração", 240, 60);

    stroke(0);
    fill(162, 205, 90);
    rect(x1, y1, largura1, altura1, 80);
    if (mouseX > x1 && mouseX < x1 + largura1 && mouseY > y1 && mouseY < y1 + altura1) {
      rect(x1, y1, largura1, altura1, 80);
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x2, y2, largura1, altura1, 80);
    if (mouseX > x2 && mouseX < x2 + largura1 && mouseY > y2 && mouseY < y2 + altura1) {
      rect(x2, y2, largura1, altura1, 80);
    }
    textFont(myfont2);
    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("13", 150, 225);

    image(img7, 200, 145);

    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("2", 355, 225);

    stroke(0);
    fill(162, 205, 90);
    rect(x3, y3, largurar, alturar, 30);
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x3, y3, largurar, alturar, 30);
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x4, y3, largurar, alturar, 30);
    if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x4, y3, largurar, alturar, 30);
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x5, y3, largurar, alturar, 30);
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x5, y3, largurar, alturar, 30);
    }
    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("6", 105, 395);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("11", 250, 395);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("5", 395, 395);

    stroke(0);
    fill(162, 205, 90);
    rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
    if (mouseX > xmenuvoltar && mouseX < xmenuvoltar + largurav && mouseY > ymenuvoltar && mouseY < ymenuvoltar + alturav) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
      }
    
    textFont(myfont);
    textSize(20);
    noStroke(0);
    fill(0, 0, 0);
    text("Voltar", 55, 480);
  }

  //multiplicação
  else if (tela == 7) {
    image(img1, 0, 0);
    textAlign(CENTER);
    textFont(myfont);
    textSize(40);
    stroke(0);
    fill(255, 110, 180);
    rect(xmenu, ymenu4, largura, altura, 25);
    noStroke();
    fill(0, 0, 0);
    text("Multiplicação", 240, 60);

    stroke(0);
    fill(255, 110, 180);
    rect(x1, y4, largura1, altura1, 80);
    if (mouseX > x1 && mouseX < x1 + largura1 && mouseY > y4 && mouseY < y4 + altura1) {
      rect(x1, y4, largura1, altura1, 80);
    }

    stroke(0);
    fill(255, 110, 180);
    rect(x2, y4, largura1, altura1, 80);
    if (mouseX > x2 && mouseX < x2 + largura1 && mouseY > y4 && mouseY < y4 + altura1) {
      rect(x2, y4, largura1, altura1, 80);
    }
    textFont(myfont2);
    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("7", 150, 390);

    image(img8, 200, 320);

    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("3", 355, 390);

    stroke(0);
    fill(255, 110, 180);
    rect(x3, y1, largurar, alturar, 30);
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x3, y1, largurar, alturar, 30);
    }

    stroke(0);
    fill(255, 110, 180);
    rect(x4, y1, largurar, alturar, 30);
    if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x4, y1, largurar, alturar, 30);
    }

    stroke(0);
    fill(255, 110, 180);
    rect(x5, y1, largurar, alturar, 30);
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x5, y1, largurar, alturar, 30);
    }
    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("21", 105, 205);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("13", 250, 205);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("16", 395, 205);

    stroke(0);
    fill(255, 110, 180);
    rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
    if (mouseX > xmenuvoltar && mouseX < xmenuvoltar + largurav && mouseY > ymenuvoltar && mouseY < ymenuvoltar + alturav) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
      }
  
    textFont(myfont);
    textSize(20);
    noStroke(0);
    fill(0, 0, 0);
    text("Voltar", 55, 480);
  }

  //divisão
  else if (tela == 8) {
    image(img1, 0, 0);
    textAlign(CENTER);
    textFont(myfont);
    textSize(40);
    stroke(0);
    fill(162, 205, 90);
    rect(xmenu, ymenu4, largura, altura, 25);
    noStroke();
    fill(0, 0, 0);
    text("Divisão", 240, 60);

    stroke(0);
    fill(162, 205, 90);
    rect(x1, y4, largura1, altura1, 80);
    if (mouseX > x1 && mouseX < x1 + largura1 && mouseY > y4 && mouseY < y4 + altura1) {
      rect(x1, y4, largura1, altura1, 80);
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x2, y4, largura1, altura1, 80);
    if (mouseX > x2 && mouseX < x2 + largura1 && mouseY > y4 && mouseY < y4 + altura1) {
      rect(x2, y4, largura1, altura1, 80);
    }
    textFont(myfont2);
    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("32", 150, 390);

    image(img9, 200, 320);

    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("4", 355, 390);

    stroke(0);
    fill(162, 205, 90);
    rect(x3, y1, largurar, alturar, 30);
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x3, y1, largurar, alturar, 30);
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x4, y1, largurar, alturar, 30);
    if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x4, y1, largurar, alturar, 30);
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x5, y1, largurar, alturar, 30);
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x5, y1, largurar, alturar, 30);
    }
    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("5", 105, 205);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("8", 250, 205);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("7", 395, 205);

    stroke(0);
    fill(162, 205, 90);
    rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
    if (mouseX > xmenuvoltar && mouseX < xmenuvoltar + largurav && mouseY > ymenuvoltar && mouseY < ymenuvoltar + alturav) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenuvoltar, ymenuvoltar, largurav, alturav, 25);
      }
    
    textFont(myfont);
    textSize(20);
    noStroke(0);
    fill(0, 0, 0);
    text("Voltar", 55, 480);
  }
  
    //game over
    else if (tela == 9){
    textFont(myfont)
    textSize(40);
    image(img, 0, 0);
    fill(0,0,0);
    rect(xgame, ygame, larguragameover, alturagameover, 25);
    fill(255,255,255);
      contador++;
      tempo++;
      image(gameover[contador%3], 110, 105);
        if(tempo>3){
        contador++;
          tempo = 0;
      }
    textSize(30);
    text("Tente novamente", 255, 200);
    text("com outro operador!!", 255, 225);
      
    stroke(0);
    fill(0, 0, 0);
    rect(xmenuvoltar2, ymenuvoltar2, largurav2, alturav2, 25);
      if (mouseX > xmenuvoltar2 && mouseX < xmenuvoltar2 + largurav2 && mouseY > ymenuvoltar2 && mouseY < ymenuvoltar2 + alturav2) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenuvoltar2, ymenuvoltar2, largurav2, alturav2, 25);
      }
      
    textFont(myfont);
    textSize(35);
    stroke(0);
    fill(255,255,255);
    text("Inicio", 250, 310);
  }
  
  //ganhou
  else if (tela == 10){
    textFont(myfont)
    textSize(40);
    image(img, 0, 0);
    fill(220,20,60);
    rect(xgame, ygame, larguraganhou, alturaganhou , 25);
    fill(255,255,255);
    text("Parabéns!!!!", 260, 145);
    textSize(30);
    text("Você ganhou, ", 255, 200);
    text("jogue novamente!", 255, 225);
      
    stroke(0);
    fill(220,20,60);
    rect(xmenuvoltar2, ymenuvoltar2, largurav2, alturav2, 25);
      if (mouseX > xmenuvoltar2 && mouseX < xmenuvoltar2 + largurav2 && mouseY > ymenuvoltar2 && mouseY < ymenuvoltar2 + alturav2) {
      stroke(0);
      fill(232, 232, 232);
      rect(xmenuvoltar2, ymenuvoltar2, largurav2, alturav2, 25);
      }
      
    textFont(myfont);
    textSize(35);
    stroke(0);
    fill(255,255,255);
    text("Inicio", 250, 310);
}

  
  // fase2 soma
  else if (tela == 11) {
    image(img1, 0, 0);
    textAlign(CENTER);
    textFont(myfont);
    textSize(40);
    stroke(0);
    fill(255, 110, 180);
    rect(xmenu, ymenu4, largura, altura, 25);
    noStroke();
    fill(0, 0, 0);
    text("Soma", 240, 60);

    stroke(0);
    fill(255, 110, 180);
    rect(x1, y1, largura1, altura1, 80);
    if (mouseX > x1 && mouseX < x1 + largura1 && mouseY > y1 && mouseY < y1 + altura1) {
      rect(x1, y1, largura1, altura1, 80);
    }

    stroke(0);
    fill(255, 110, 180);
    rect(x2, y2, largura1, altura1, 80);
    if (mouseX > x2 && mouseX < x2 + largura1 && mouseY > y2 && mouseY < y2 + altura1) {
      rect(x2, y2, largura1, altura1, 80);
    }

    textFont(myfont2);
    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("11", 150, 225);

    image(img6, 195, 145);

    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("8", 355, 225);

    stroke(0);
    fill(255, 110, 180);
    rect(x3, y3, largurar, alturar, 30);
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y3 && mouseY < y3 + alturar){
      stroke(0);
      fill(232, 232, 232);
      rect(x3, y3, largurar, alturar, 30);
      if (mouseIsPressed) {
      tela = 10;    
    }
    }
  
  
    stroke(0);
    fill(255, 110, 180);
    rect(x4, y3, largurar, alturar, 30);
    if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y3 && mouseY < y3 + alturar){
     stroke(0);
      fill(232, 232, 232);
      rect(x4, y3, largurar, alturar, 30);
     if (mouseIsPressed) {
      tela = 9;    
    }
    } 
  

    stroke(0);
    fill(255, 110, 180);
    rect(x5, y3, largurar, alturar, 30);
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y3 && mouseY < y3 + alturar){
      stroke(0);
      fill(232, 232, 232);
      rect(x5, y3, largurar, alturar, 30); 
      if (mouseIsPressed) {
      tela = 9;    
    }
    }

    
    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("19", 105, 395);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("15", 250, 395);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("9", 395, 395);

}

    //fase2 subtração
  else if (tela == 12) {
    image(img1, 0, 0);
    textAlign(CENTER);
    textFont(myfont);
    textSize(40);
    stroke(0);
    fill(162, 205, 90);
    rect(xmenu, ymenu4, largura, altura, 25);
    noStroke();
    fill(0, 0, 0);
    text("Subtração", 240, 60);

    stroke(0);
    fill(162, 205, 90);
    rect(x1, y1, largura1, altura1, 80);
    if (mouseX > x1 && mouseX < x1 + largura1 && mouseY > y1 && mouseY < y1 + altura1) {
      rect(x1, y1, largura1, altura1, 80);
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x2, y2, largura1, altura1, 80);
    if (mouseX > x2 && mouseX < x2 + largura1 && mouseY > y2 && mouseY < y2 + altura1) {
      rect(x2, y2, largura1, altura1, 80);
    }
    textFont(myfont2);
    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("25", 150, 225);

    image(img7, 200, 145);

    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("8", 355, 225);

    stroke(0);
    fill(162, 205, 90);
    rect(x3, y3, largurar, alturar, 30);
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x3, y3, largurar, alturar, 30);
       if (mouseIsPressed) {
      tela = 9;    
    }
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x4, y3, largurar, alturar, 30);
    if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x4, y3, largurar, alturar, 30);
       if (mouseIsPressed) {
      tela = 10;    
    }
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x5, y3, largurar, alturar, 30);
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y3 && mouseY < y3 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x5, y3, largurar, alturar, 30);
       if (mouseIsPressed) {
      tela = 9;    
    }
    }
    
    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("15", 105, 395);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("17", 250, 395);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("10", 395, 395);
}
  
  //fase2 multiplicação
   else if (tela == 13) {
    image(img1, 0, 0);
    textAlign(CENTER);
    textFont(myfont);
    textSize(40);
    stroke(0);
    fill(255, 110, 180);
    rect(xmenu, ymenu4, largura, altura, 25);
    noStroke();
    fill(0, 0, 0);
    text("Multiplicação", 240, 60);

    stroke(0);
    fill(255, 110, 180);
    rect(x1, y4, largura1, altura1, 80);
    if (mouseX > x1 && mouseX < x1 + largura1 && mouseY > y4 && mouseY < y4 + altura1) {
      rect(x1, y4, largura1, altura1, 80);
    }

    stroke(0);
    fill(255, 110, 180);
    rect(x2, y4, largura1, altura1, 80);
    if (mouseX > x2 && mouseX < x2 + largura1 && mouseY > y4 && mouseY < y4 + altura1) {
      rect(x2, y4, largura1, altura1, 80);
    }
    textFont(myfont2);
    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("9", 150, 390);

    image(img8, 200, 320);

    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("6", 355, 390);

    stroke(0);
    fill(255, 110, 180);
    rect(x3, y1, largurar, alturar, 30);
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x3, y1, largurar, alturar, 30);
       if (mouseIsPressed) {
      tela = 9;    
    }
    }

    stroke(0);
    fill(255, 110, 180);
    rect(x4, y1, largurar, alturar, 30);
    if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x4, y1, largurar, alturar, 30);
       if (mouseIsPressed) {
      tela = 9;    
    }
    }

    stroke(0);
    fill(255, 110, 180);
    rect(x5, y1, largurar, alturar, 30);
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x5, y1, largurar, alturar, 30);
       if (mouseIsPressed) {
      tela = 10;    
    }
    }
    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("45", 105, 205);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("38", 250, 205);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("54", 395, 205);
   }
  
  //fase2 divisão
   else if (tela == 14) {
    image(img1, 0, 0);
    textAlign(CENTER);
    textFont(myfont);
    textSize(40);
    stroke(0);
    fill(162, 205, 90);
    rect(xmenu, ymenu4, largura, altura, 25);
    noStroke();
    fill(0, 0, 0);
    text("Divisão", 240, 60);

    stroke(0);
    fill(162, 205, 90);
    rect(x1, y4, largura1, altura1, 80);
    if (mouseX > x1 && mouseX < x1 + largura1 && mouseY > y4 && mouseY < y4 + altura1) {
      rect(x1, y4, largura1, altura1, 80);
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x2, y4, largura1, altura1, 80);
    if (mouseX > x2 && mouseX < x2 + largura1 && mouseY > y4 && mouseY < y4 + altura1) {
      rect(x2, y4, largura1, altura1, 80);
    }
    textFont(myfont2);
    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("70", 150, 390);

    image(img9, 200, 320);

    textSize(100);
    noStroke();
    fill(0, 0, 0);
    text("5", 355, 390);

    stroke(0);
    fill(162, 205, 90);
    rect(x3, y1, largurar, alturar, 30);
    if (mouseX > x3 && mouseX < x3 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x3, y1, largurar, alturar, 30);
       if (mouseIsPressed) {
      tela = 10;    
    }
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x4, y1, largurar, alturar, 30);
    if (mouseX > x4 && mouseX < x4 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x4, y1, largurar, alturar, 30);
       if (mouseIsPressed) {
      tela = 9;    
    }
    }

    stroke(0);
    fill(162, 205, 90);
    rect(x5, y1, largurar, alturar, 30);
    if (mouseX > x5 && mouseX < x5 + largurar && mouseY > y1 && mouseY < y1 + alturar) {
      stroke(0);
      fill(232, 232, 232);
      rect(x5, y1, largurar, alturar, 30);
       if (mouseIsPressed) {
      tela = 9;    
    }
    }
    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("14", 105, 205);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("10", 250, 205);

    textSize(80);
    noStroke();
    fill(0, 0, 0);
    text("17", 395, 205);
}
}
    