function checkWin() {
    var check = true;
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].correct) {
            check = false;
        }
    }
    if (check) {
        gameState = WON;
    }
}

function gameOver() {
    solids.splice(5, solids.length - 5);
    enemies = [];
    objects = [];
    gameState = BUILD_MAP;
}

function wonLevel(endgame) {
    solids.splice(5, solids.length - 5);
    enemies = [];
    objects = [];
    if (endgame) {
        gameState = DONE;
    } else {
        gameState = BUILD_MAP;
    }
}

function gameWon() {
    solids.splice(5, solids.length - 5);
    enemies = [];
    objects = [];
    alert("Congraturation! You beat the game! Your score was: " + score);
    score = 0;
    gameState = TITLE;
}