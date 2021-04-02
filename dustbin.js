class Dustbin{
    constructor (x,y){
        this.x = x,
        this.y = y,
        this.angle = 0
this.image = loadImage("dustbingreen.png")
        this.bottomBody = Bodies.rectangle(this.x, this.y, 200, 20,{isStatic : true})
        this.leftBody = Bodies.rectangle(this.x-100, this.y-106, 20, 213,{isStatic : true})
        Matter.Body.setAngle(this.leftBody, this.angle)

        this.rightBody = Bodies.rectangle(this.x+100, this.y-106, 20, 213,{isStatic : true})
        Matter.Body.setAngle(this.rightBody, -1*this.angle)
    }
    
    display(){
        push()
        translate(this.leftBody.position.x, this.leftBody.position.y)
        angleMode(RADIANS)
        rotate(this.angle)
        pop()

        push()
        translate(this.rightBody.position.x, this.rightBody.position.y)
        angleMode(RADIANS)
        rotate(-1*this.angle)
        pop()

        push()
        translate(this.bottomBody.position.x, this.bottomBody.position.y)
        angleMode(RADIANS)
        rotate(this.angle)
        imageMode(CENTER)
        image(this.image, 0, -106, 200, 213)
        pop()
    }
}