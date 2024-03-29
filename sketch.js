const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var ground, miniG, miniG2

var block1, Block2, block3,block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15,block16

var block17,  block18, block19, Block20, Block21, Block22, Block23, Block24, Block25

var hexa_image, hexa

var chain


function preload(){
    hexa_image=loadImage("polygon.png")
}
function setup(){
createCanvas(800,600);

engine=Engine.create();
world=engine.world;

ground = new Ground(400,580,1000,20)
miniG = new Ground(640,250,220,20)
miniG2 = new Ground(330,450,250,20)

block1 = new Block(240,425,30,30)
Block2 = new Block(270,425,30,30)
block3 = new Block(300,425,30,30)
block4 = new Block(330,425,30,30)
block5 = new Block(360,425,30,30)
block6 = new Block(390,425,30,30)
block7 = new Block(420,425,30,30)

block8 = new Block(270,395,30,30)
block9 = new Block(300,395,30,30)
block10 = new Block(330,395,30,30)
block11= new Block(360,395,30,30)
block12= new Block(390,395,30,30)

block13= new Block(300,365,30,30)
block14= new Block(330,365,30,30)
block15= new Block(360,365,30,30)

block16= new Block(330,335,30,30)

block17= new Block(580,225,30,30)
block18= new Block(610,225,30,30)
block19= new Block(640,225,30,30)
Block20= new Block(670,225,30,30)
Block21= new Block(700,225,30,30)

Block22= new Block(610,195,30,30)
Block23 = new Block(640,195,30,30)
Block24= new Block(670,195,30,30)

Block25 = new Block(640,165,30,30)

hexa=Bodies.circle(50,200,20)
World.add(world,hexa)


chain=new Chain(hexa,{x:150,y:200})




Engine.run(engine);

}

function draw(){
    rectMode(CENTER);
    background (rgb(146,227,102));

    ground.display()
    miniG.display()
    miniG2.display()

    block1.display()
    Block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    Block20.display()
    Block21.display()
    Block22.display()
    Block23.display()
    Block24.display()
    Block25.display()

    chain.display()
    



    imageMode(CENTER)
    image(hexa_image,hexa.position.x,hexa.position.y,40,40)

    drawSprites();
}


function mouseDragged(){
    Matter.Body.setPosition(hexa , {x : mouseX , y : mouseY});
}

function mouseReleased(){
    chain.fly();
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if (keyCode===32){
    chain.attach(hexa)
}
}