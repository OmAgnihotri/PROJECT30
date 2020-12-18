class Box{
    constructor(x,y,w,h){
    var options={
        restitution:0.5,friction:0.6
      }    
    this.body =Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.body);
    this.width=w;
    this.height=h;
    this.visiblity=255;
    }  
  display(){
    if(this.body.speed>3){
      this.body.visiblity=this.body.visiblity-5;
       World.remove(world,this.body);
     }
  else{
    push ();
    var pos=this.body.position;   
    var angle=this.body.angle;

    push ();
    translate(pos.x,pos.y)
    rotate (angle);
    fill("yellow");
    rectMode(CENTER);  
    rect(0,0,this.width,this.height);  
   

  pop ();
  }
    }  
  
    }