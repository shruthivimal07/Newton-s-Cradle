class Bob{
    constructor(x, y){
        var options={
            restitution:1,
            friction:0,
            density:7.8
            

        } 
        this.radius = 25;
        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(254, 0, 255);
        ellipse(0, 0, 25, 25);
         pop();

            }
   }
