/**
 * Moves all objects and draws them.
 */
function drawFrame() {
    ctx.clearRect(0, 0, c.width, c.height);
    drawBackground();
    drawHUD();
    moveAll();
    drawGoalFrame();
    drawPowerupFrame();
    doCollisionChecks();
    drawAll();
}

function flashRed() {
    ctx.save();
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.restore();
}

function drawAll() {
    for (var i = 0; i < solids.length; i++) {
        solids[i].draw();
    }
    for (i = 0; i < objects.length; i++) {
        objects[i].draw();
        drawEquation(objects[i]);
    }
    for (i = 0; i < enemies.length; i++) {
        enemies[i].draw();
    }
    theGoal.draw();
    drawAnswer();
    player.draw();
    if (fRed < 5) {
        flashRed();
        fRed++;
    }
    powerUp.draw();
}

function drawEquation(theBox) {
    ctx.save();
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(theBox.equation, theBox.x + theBox.halfWidth(), theBox.y + theBox.halfHeight() * 1.5, theBox.width);
    ctx.restore();
}

function drawAnswer() {
    ctx.save();
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText(theGoal.ans, theGoal.x + theGoal.halfWidth(), theGoal.y + theGoal.halfHeight() * 1.5);
    ctx.restore();
}

function drawPause() {
    ctx.save();
    ctx.fillStyle = utils.colorToRGB("#aaaaaa");
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.font = "60px \"" + font + "\" Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = utils.colorToRGB("#ffffff", 1);

    ctx.fillText("Paused", c.width / 2, c.height / 2 + c.height * 0.04);
    ctx.restore();
}

function drawBackground(yOffset) {
    var background = new Box(c.width, c.height);
    background.src = bg;
    background.sourceHeight = background.src.height / 4;
    background.sourceWidth = background.src.width;

    switch (yOffset - 1 || (lvl - 1) % 4) {
        case 1:
            background.sourceY = background.src.height / 4;
            break;
        case 2:
            background.sourceY = background.src.height / 2;
            break;
        case 3:
            background.sourceY = background.src.height / 4 * 3;
    }
    background.draw();
}

Box.prototype.draw = function () {
    if (this.visible) {
        if (this.src === "") {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.lineWidth = this.lineWidth;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.rect(0, 0, this.width, this.height);
            ctx.closePath();
            ctx.fill();
            if (this.lineWidth > 0) {
                ctx.stroke();
            }
            ctx.restore();
        } else {
            ctx.drawImage(this.src,
                this.sourceX, this.sourceY,
                this.sourceWidth, this.sourceHeight,
                Math.floor(this.x), Math.floor(this.y),
                this.width, this.height);
        }
    }
};