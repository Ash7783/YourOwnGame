class Brick {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 65, 35, options)
        this.image1 = loadImage("brickImg.png")
        this.image2 = loadImage("crackedBrickImg.png")
        World.add(world, this.body)
    }
    display() {
        push()
        imageMode(CENTER)
        image(this.image1, this.body.position.x, this.body.position.y, 65, 35)
        pop()
    }
}