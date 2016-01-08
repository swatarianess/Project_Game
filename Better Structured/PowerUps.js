function genPowerUp() {
    if (Math.random() * 5 < 1) {
        powerUp.visible = true;
        powerUp.type = Math.floor(Math.random() * 3);
        switch (powerUp.type) {
            case 0:
                powerUp.colour = "#6DB644";
                break;
            case 1:
                powerUp.colour = "#4985B8";
                break;
            case 2:
                powerUp.colour = "#54BBBB";
                break;
        }
    }
}

function activatePowerUp() {
    powerUp.x = 0;
    powerUp.y = 0;
    powerUp.visible = false;
    var i,
        check = false;

    switch (powerUp.type) {
        case 0:
            for (i = 0; i < objects.length; i++) {
                if (!objects[i].correct) {
                    check = true;
                    i = objects.length;
                }
            }
            if (!check) {
                break;
            }
            do {
                i = Math.floor(Math.random() * objects.length);
            } while (objects[i].correct);
            objects[i].correct = true;
            assignEquation();
            break;
        case 1:
            for (i = 0; i < objects.length; i++) {
                if (!objects[i].correct) {
                    check = true;
                    i = objects.length;
                }
            }
            if (!check) {
                break;
            }
            do {
                i = Math.floor(Math.random() * objects.length);
            } while (objects[i].correct);
            objects.splice(i, 1);
            break;
        case 2:
            player.jumpForce = -1 * scaleHeight(Math.ceil(Math.random() * 5 + 7));
            player.jumpChange = 60 * 15;
            break;
    }
}