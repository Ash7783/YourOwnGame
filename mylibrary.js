function detectCollision(stone, mango) {

    mPos = mango.body.position;
    sPos = stone.body.position;

    var distance = dist(sPos.x, sPos.y, mPos.x, mPos.y);

    if (distance <= 30) {
        Matter.Body.setAngle(mango.body, PI / 3);
    }
}
