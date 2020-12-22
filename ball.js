class Ball {
    constructor(x, y, color) {
        var options = {
            restitution: 1.30
        }
        this.body = Bodies.circle(x, y, 15, options);
        this.x = x;
        this.y = y;
        this.color = color;
        World.add(world, this.body);
    }
    display() {
        push();
        noStroke();
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, 30, 30);
        pop();
    }
}