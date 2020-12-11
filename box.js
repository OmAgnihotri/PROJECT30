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
    var pos=this.body.position;   
    var angle=this.body.angle;
    translate(pos.x,pos.y)
    rotate (angle);
    fill("yellow");
    rectMode(CENTER);  
    rect(0,0,this.width,this.height);  
    if(this.body.y<=450){
      tint(255,this.visiblity);
      this.visiblity=this.visiblity-5;
     
      
    
  
    }
  
    }  
    }