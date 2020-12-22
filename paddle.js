class Paddle {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 125, 20, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("black");
        rect(pos.x, pos.y, 125, 20);
        pop();
    }
};