/**
 * Resets various properties for a new level.
 */
function resetObjects() {
    player.state = player.JUMPING;
    player.facing = player.RIGHT;
    player.jump = false;
    player.moveLeft = false;
    player.moveRight = false;
    player.isOnGround = undefined;
    player.friction = 0.8;
    player.jumpForce = -1 * scaleHeight(9);
    player.ax = 0;
    player.ay = 0;
    player.vx = 0;
    player.vy = 0;

    powerUp.visible = false;
}

function levelSpecificStuff() {
    var check = false;

    if (objects.length > 0) {
        for (var i = 0; i < objects.length; i++) {
            objects[i].correct = Math.floor(Math.random() * 2);
            if (objects[i].correct) {
                check = true;
            }
        }
    } else {
        wonLevel(true);
        check = true;
    }
    if (!check) {
        i = Math.floor(Math.random() * objects.length);
        objects[i].correct = true;
    }

    assignEquation();
    genPowerUp();

    solids[0].sourceY = solids[0].src.spriteHeight * ((lvl - 1) % 4);
    solids[1].sourceY = solids[1].src.spriteHeight * ((lvl - 1) % 4);
    for (i = 5; i < solids.length; i++) {
        solids[i].sourceY = solids[i].src.spriteHeight * ((lvl - 1) % 4);
    }

    if ((lvl - 1) % 4 === 3) {
        player.friction = 0.95;
        player.oldFriction = 0.95;
        for (i = 0; i < objects.length; i++) {
            objects[i].friction = 0.98;
        }

        player.xAcc = scaleWidth(0.05);
    } else {
        player.friction = 0.8;
        player.oldFriction = 0.8;
        for (i = 0; i < objects.length; i++) {
            objects[i].friction = 0.8;
        }

        player.xAcc = scaleWidth(0.2);
    }
}