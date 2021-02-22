class Paper {
    constructor(x,y,radius){
        var options={
        isStatic: false,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2
        }
       this.body=Bodies.circle(x,y,radius,options)
       this.radius = radius+30;
       this.image = loadImage("sprites/paper.png");
       World.add(world,this.body)
    }
        
    display(){
        push();
        fill("purple")
        imageMode(CENTER);
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}