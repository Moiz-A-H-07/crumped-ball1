class Paper { 
  constructor(x,y,raduis) {
    var options = { 
      isStatic: false, 
      restitution:0.3, 
      friction:0.5,
       density:1.2 } 
       this.x= x;
        this.y= y; 
        this.raduis=raduis; 
        this.body = Bodies.circle(x,y,this.raduis/2,options);
         World.add(world, this.body); 
        } 
        display(){
           var pos =this.body.position;
            push()
             translate(pos.x, pos.y);
              rectMode(CENTER); 
              fill("brown");
               ellipse(0,0, this.raduis, this.raduis); 
               pop() 
              }
               };