/**
 * Checks for a collision of two objects. Moves objectA if side is a string with the word move.
 * @param objectA The object that needs to move.
 * @param objectB The object that needs to block.
 * @param side If true, makes return a string. If "move", moves objectA.
 * @returns {*} String if side evaluates to true, otherwise boolean.
 */
function checkCollision(objectA, objectB, side) {
    if (side) {
        var vx = objectA.centerX() - objectB.centerX(),
            vy = objectA.centerY() - objectB.centerY(),

            combinedHalfWidths = objectA.halfWidth() + objectB.halfWidth(),
            combinedHalfHeights = objectA.halfHeight() + objectB.halfHeight(),

            collisionSide = "";

        if (Math.abs(vx) < combinedHalfWidths && Math.abs(vy) < combinedHalfHeights) {
            var overlapX = combinedHalfWidths - Math.abs(vx),
                overlapY = combinedHalfHeights - Math.abs(vy);

            if (overlapX > overlapY) {
                if (vy > 0) {
                    if (side === "move") {
                        objectA.vy = objectB.vy;
                        objectA.y += overlapY;
                    }

                    collisionSide = "top";
                } else {
                    if (side === "move") {
                        objectA.vy = objectB.vy;
                        objectA.y -= overlapY;
                    }

                    collisionSide = "bottom";
                }
            } else {
                if (vx > 0) {
                    if (side === "move") {
                        objectA.vx = objectB.vx;
                        objectA.x += overlapX;
                    }

                    collisionSide = "left";
                } else {
                    if (side === "move") {
                        objectA.vx = objectB.vx;
                        objectA.x -= overlapX;
                    }

                    collisionSide = "right";
                }
            }
        }
        return collisionSide;
    } else {
        return !(objectA.x + objectA.width < objectB.x ||
        objectB.x + objectB.width < objectA.x ||
        objectA.y + objectA.height < objectB.y ||
        objectB.y + objectB.height < objectA.y);
    }
}

function doCollisionChecks() {
    var checkPush = false;
    player.isOnGround = false;
    for (var i = 0; i < solids.length; i++) {
        if (checkCollision(player, solids[i], "move") === "bottom"){
            player.isOnGround = true;
            player.state = player.STANDING;
            if (solids[i].vx) {
                if (solids[i].vx !== player.extraVX) {
                    player.extraVX = solids[i].vx
                }
            } else {
                player.extraVX = 0;
            }
        }
    }
    for (i = 0; i < objects.length; i++) {
        if (checkCollision(objects[i], player, true) === "right" || checkCollision(objects[i], player, true) === "left") {
            player.speedLimit = scaleWidth(2);
            objects[i].speedLimit = scaleWidth(2);
            checkPush = true;
        }

        //Letting the player move boxes, while avoiding a "box hop" bug.
        if (checkCollision(objects[i], player, true) === "top") {
            player.y = objects[i].y - player.height;
        } else if (checkCollision(objects[i], player, true) === "bottom") {
            player.y = objects[i].y + objects[i].height;
        } else if (player.centerY() > objects[i].y + objects[i].height * 0.1 && player.centerY() < objects[i].y + objects[i].height * 0.9) {
            checkCollision(objects[i], player, "move");
        }

        for (var j = 0; j < solids.length; j++) {
            if (checkCollision(objects[i], solids[j], "move") === "bottom" && solids[j].vx) {
                objects[i].extraVX = solids[j].vx;
            } else {
                objects[i].extraVX = 0;
            }
            checkCollision(objects[i], solids[j], "move");
        }

        for (j = 0; j < objects.length; j++) {
            if (j !== i) {
                //Avoids boxes falling through one another.
                if (checkCollision(objects[i], objects[j], true) === "top") {
                    checkCollision(objects[j], objects[i], "move");
                } else {
                    checkCollision(objects[i], objects[j], "move");
                }
            }
        }

        if (checkCollision(player, objects[i], true) === "bottom") {
            player.isOnGround = true;
            player.state = player.STANDING;
            player.extraVX = objects[i].extraVX;
        } else if (checkCollision(player, objects[i], true) === "top") {
            score -= 50;
            gameState = OVER;
        }
        checkCollision(player, objects[i], "move");

        if (objects[i].y > c.height) {
            if (objects[i].correct) {
                score += 100;
                objects.splice(i, 1);
                checkWin();
            } else {
                fRed = 0;
                score -= 100;
                objects.splice(i, 1);
            }
        }
    }

    for (i = 0; i < enemies.length; i++) {
        if (checkCollision(enemies[i], player)) {
            score -= 50;
            gameState = OVER;
        }
        j = 0;
        while (enemies[i] && j < objects.length) {
            if (checkCollision(objects[j], enemies[i], true) === "bottom") {
                score += 75;
                objects[j].vy = -1 * scaleHeight(6);
                enemies.splice(i, 1);
                //score++
            }
            j++;
        }
    }
    if (checkCollision(player, powerUp)) {
        score += 25;
        activatePowerUp();
    }
    if (!checkPush) {
        player.speedLimit = scaleWidth(3);
        for (i = 0; i < objects.length; i++) {
            objects[i].speedLimit = scaleWidth(3);
        }
    }
}