class Paper {

constructor(x,y,r){

    var options = {
        isStatic : false,
        restitution :0.03,
        density : 1.2
    }
    this.x = x;
    this.y = y;
    this.r = r;

    this.body = Bodies.circle(x,y,r,options);

    this.image = loadImage("paper.png");

    World.add(world,this.body);
}

display(){

    var paperPosition = this.body.position;
    push()
    translate(paperPosition.x,paperPosition.y);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop()
    
}
}