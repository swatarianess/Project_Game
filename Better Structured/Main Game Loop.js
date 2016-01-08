window.onload = function() {
    window.addEventListener("keydown", keyDownHandler, false);
    window.addEventListener("keyup", keyUpHandler, false);

    update();
};

function update() {
    var animFrame = window.requestAnimationFrame(update);

    switch (gameState) {
        case TITLE:
            document.getElementById("GameSizeButton").disabled = false;
            lvl = 1;
            window.cancelAnimationFrame(animFrame);
            titleScreen();
            break;
        case BUILD_MAP:
            document.getElementById("GameSizeButton").disabled = true;
            resetObjects();
            buildLevel();
            levelSpecificStuff();
            if (gameState === BUILD_MAP) {
                gameState = PLAYING;
            }
            break;
        case PLAYING:
            drawFrame();
            break;
        case OVER:
            gameOver();
            break;
        case WON:
            lvl++;
            wonLevel(false);
            break;
        case DONE:
            gameWon();
            break;
        case PAUSED:
            window.cancelAnimationFrame(animFrame);
            drawPause();
            break;
    }
}

/**
 * Sets the players move properties to true when the relevant buttons are pressed. Also resets the level when R is pressed.
 * @param event
 */
function keyDownHandler(event) {
    switch (event.keyCode) {
        case keycode.UP:
        case keycode.W:
        case keycode.SPACE:
            player.jump = true;
            break;
        case keycode.LEFT:
        case keycode.A:
            player.moveLeft = true;
            break;
        case keycode.RIGHT:
        case keycode.D:
            player.moveRight = true;
            break;
        case keycode.ENTER:
        case keycode.R:
            gameState = OVER;
            break;
        case keycode.SHIFT:
            if (gameState === PAUSED) {
                gameState = PLAYING;
                update();
            } else if (gameState === PLAYING) {
                gameState = PAUSED;
            }
            break;
    }
}

/**
 * Sets the players move properties to false when the relevant buttons are released.
 * @param event
 */
function keyUpHandler(event) {
    switch (event.keyCode) {
        case keycode.UP:
        case keycode.W:
        case keycode.SPACE:
            player.jump = false;
            break;
        case keycode.LEFT:
        case keycode.A:
            player.moveLeft = false;
            break;
        case keycode.RIGHT:
        case keycode.D:
            player.moveRight = false;
            break;
    }
}