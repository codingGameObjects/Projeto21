var tela;
var bloco1,bloco2,bloco3,bloco4;
var bola, arestas;
var music;
var canvasX = 800;
var canvasY = 600;



function preload(){
    // carregue o som aqui
    music = loadSound("music.mp3");
}

function setup(){
    tela = createCanvas(canvasX, canvasY);

    bloco1 = createSprite(0, 580, 360, 30);
    bloco1.shapeColor = "blue";

    bloco2 = createSprite(295, 580, 200, 30);
    bloco2.shapeColor = "red";
    
    //crie aqui mais dois blocos, ou seja, bloco3 e bloco4
    bloco3 = createSprite(510, 580, 200, 30);
    bloco3.shapeColor = "green";

    bloco4 = createSprite(805, 580, 360, 30);
    bloco4.shapeColor = "orange";


    bola = createSprite(random(20,750),100, 40,40);
    bola.shapeColor = rgb(255,255,255);
    //escreva o código para adicionar velocityX e velocityY
    bola.velocityX = 4;
    bola.velocityY = 4;
}

function draw() {
    background(0);

    
    //escreva o código de ricochete de bola para bloco1 
    if(bloco1.isTouching(bola)){
        
        bola.shapeColor = "blue";
        bola.velocityY = bola.velocityY * (-1);
        music.play();
        
    }

    if(bloco2.isTouching(bola)){
        bola.shapeColor = "red";
        //escreva o código para definir velocityX e velocityY da bola como 0
        bola.velocityX = 0
        bola.velocityY = 0
        //escreva o código para parar a música
        music.play();
    }

    //escreva o código de ricochete de bola para bloco3
    if(bloco3.isTouching(bola)){
        bola.velocityY = bola.velocityY * (-1);
        bola.shapeColor = "green";
        music.play();
    }

    //escreva o código de ricochete de bola para bloco4
    if(bloco4.isTouching(bola)){
        bola.shapeColor = "orange";
        bola.velocityY = bola.velocityY * (-1);
        music.play();
    }

    if (bola.y >= canvasY){
        bola.velocityY = bola.velocityY * (-1);
        music.play();
    }
    if (bola.y <= (canvasY - canvasY)){
        bola.velocityY = bola.velocityY * (-1);
        music.play();
    }

    if (bola.x >= canvasX){
        bola.velocityX = bola.velocityX * (-1);
        music.play();
    }

    if (bola.x <= (canvasX - canvasX)){
        bola.velocityX = bola.velocityX * (-1);
        music.play();
    }


    drawSprites();
}