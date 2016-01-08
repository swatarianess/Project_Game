function scaleHor() { return c.width / 2048 }
function scaleVert() { return c.height / 1152 }
function scaleWidth(num) { return c.width * (num / 1024) }
function scaleHeight(num) { return c.height * (num / 576) }

function changeScale() {
    var oldHeight = c.height;
    c.height = prompt("WARNING: Doing this will change the font size back to its default value." +
                      "\nPlease enter a new height (must be an integer greater than or equal to 576):", c.height.toString());

    if (c.height === 0 || !(c.height - 0.1) || c.height % 1 !== 0 || c.height < 576) {
        if (c.height === 0) {
            c.height = oldHeight;
        } else if (!(c.height - 0.1)) {
            alert("Not a number. Reversing changes.");
            c.height = oldHeight;
        } else if (c.height % 1 !== 0) {
            alert("Not an integer. Reversing changes.");
            c.height = oldHeight;
        } else if (c.height < 576) {
            alert("That's too low. Reversing changes.");
            c.height = oldHeight;
        } else {
            c.height = oldHeight;
        }
        titleScreen();
    } else {
        fontSize = scaleHeight(27);
        fontChanged = true;
        redefRelVar();
    }
}

function redefRelVar() {
    c.width = scaleHeight(1024);

    player.width = playerSheet.spriteWidth * scaleHor();
    player.height = playerSheet.spriteHeight * scaleVert();
    player.speedLimit = scaleWidth(3);
    player.gravity = scaleHeight(0.3);

    theGoal.width = thingSheet.spriteWidth * scaleVert() * 2;
    theGoal.height = scaleHeight(50);
    theGoal.x = c.width / 5 * 3;
    theGoal.y = c.height - theGoal.height;

    box.width = thingSheet.spriteWidth * scaleHor();
    box.height = thingSheet.spriteHeight * scaleVert();
    box.speedLimit = scaleWidth(3);
    box.gravity = scaleHeight(0.3);

    enemyCircle.width = thingSheet.spriteWidth * scaleHor();
    enemyCircle.height = thingSheet.spriteHeight * scaleVert();
    enemyPlatform.width = thingSheet.spriteWidth * scaleHor();
    enemyPlatform.height = thingSheet.spriteHeight * scaleVert();

    platform.width = thingSheet.spriteWidth * 3 * scaleHor();
    platform.height = thingSheet.spriteHeight * scaleVert();
    platformVert.width = thingSheet.spriteWidth * 3 * scaleHor();
    platformVert.height = thingSheet.spriteHeight * scaleVert();
    platformVert.vy = scaleHeight(2);
    platformHor.width = thingSheet.spriteWidth * 3 * scaleHor();
    platformHor.height = thingSheet.spriteHeight * scaleVert();
    platformHor.vx = scaleWidth(2);

    powerUp.width = scaleWidth(20);
    powerUp.height = scaleHeight(20);

    solids[0].width = c.width / 5 * 3;
    solids[0].height = scaleHeight(50);
    solids[0].y = c.height - solids[0].height;
    solids[1].width = c.width - (theGoal.x + theGoal.width);
    solids[1].height = scaleHeight(50);
    solids[1].x = solids[0].width + theGoal.width;
    solids[2].width = c.width - scaleWidth(100);
    solids[2].x = scaleWidth(50);
    solids[2].y = scaleHeight(49);
    solids[3].height = c.height - scaleWidth(100);
    solids[3].x = scaleWidth(49);
    solids[3].y = scaleHeight(50);
    solids[4].height = c.height - scaleWidth(100);
    solids[4].x = c.width - scaleWidth(50);
    solids[4].y = scaleHeight(50);

    titleScreen();
}