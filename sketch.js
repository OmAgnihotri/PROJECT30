const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;

var polygon,polygon_img;
function preload() {
 polygon_img=loadImage("polygon.png")

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600,550,1200,20);
   
    base1= new Ground(450,430,180,10);
    base2= new Ground(740,340,140,10);

    block1= new Box(390,410,20,30);
    block2= new Box(410,410,20,30);
    block3= new Box(430,410,20,30);
    block4= new Box(450,410,20,30);
    block5= new Box(470,410,20,30);
    block6= new Box(490,410,20,30);
    block7= new Box(510,410,20,30);
   
    block17= new Box(700,320,20,30);
    block18= new Box(720,320,20,30);
    block19= new Box(740,320,20,30);
    block20= new Box(760,320,20,30);
    block21= new Box(780,320,20,30);

    block8= new Box2(415,390,20,30);
    block9= new Box2(435,390,20,30);
    block10= new Box2(455,390,20,30);
    block11= new Box2(475,390,20,30);
    block12= new Box2(495,390,20,30);
   
    block13= new Box3(440,370,20,30);
    block14= new Box3(460,370,20,30);
    block15= new Box3(480,370,20,30);

    block22= new Box3(720,290,20,30);
    block23= new Box3(740,290,20,30);
    block24= new Box3(760,290,20,30);

    block16= new Box4(460,350,20,30);

    block25= new Box4(740,260,20,30);

    polygon= Bodies.circle(50,200,20);
    World.add(world,polygon)

    rope = new SlingShot(polygon,{x:100,y:200});
}

function draw(){
    background("black");
    Engine.update(engine);
    
    rope.display();

    ground.display();
  
    base1.display();
    base2.display();
  

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

   
  image(polygon_img,polygon.position.x,polygon.position.y,40,40)
}
function mouseDragged(){
    Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});


}
function mouseReleased(){
    rope.fly();
}
