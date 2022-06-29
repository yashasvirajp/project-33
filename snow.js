class Snow{
    constructor(x,y,radius){
        var options={
            restitution:0.1,
            frictionAir:0.05,
            isStatic:false

        }
        this.radius=radius;
        this.image=loadImage("snow4.webp");
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body)
    }

display(){
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,0,0,this.radius*2,this.radius*2)
    pop()
}
}