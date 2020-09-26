class Ball{

    constructor(x, y, radius){
        var ball_options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x, y, radius, ball_options)
        this.radius=radius
        World.add(world, this.body)
        this.image=loadImage("paper.png");
    }

    display(){
        image(this.image,this.body.position.x, this.body.position.y, this.radius,this.radius)
    }
    
    }
    