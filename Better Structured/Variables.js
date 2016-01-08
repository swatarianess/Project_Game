var lvl = 1,
    diff = 1,
    score = 0,
    c = document.getElementById("Game"),
    ctx = c.getContext("2d"),
    fRed = 5,
    incAns,
    solids = [],
    objects = [],
    enemies = [],
    playerSheet = new Image(),
    thingSheet = new Image(),
    emptyScroll = new Image(),
    bg = new Image(),
    logo = new Image(),
    buttons = new Image(),
    TITLE = 0,
    BUILD_MAP = 1,
    PLAYING = 2,
    OVER = 3,
    WON = 4,
    DONE = 5,
    PAUSED = 6,
    gameState = TITLE,
    INSTR = 1,
    CREDITS = 2,
    DIFF_SEL = 3,
    titleState = TITLE,
    goalCanvas = document.createElement("canvas"),
    goalContext = goalCanvas.getContext("2d"),
    powerupCanvas = document.createElement("canvas"),
    powerupContext = powerupCanvas.getContext("2d"),
    lines,
    parsPerPage = [],
    font = "Old English Text MT",
    fontSize,
    fontChanged = true;

c.height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 576);
if (c.height !== 576) {
    c.height *= 0.95;
} else if (c.height < 576) {
    c.height = 576;
}
//c.width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 1024) * 0.95;
c.width = scaleHeight(1024);

fontSize = scaleHeight(27);

powerupCanvas.width = 100;
powerupCanvas.height = 100;

playerSheet.src = "../Sheet.png";
playerSheet.spriteWidth = 50;
playerSheet.spriteHeight = 70;
thingSheet.src = "../StuffSheet.png";
thingSheet.spriteWidth = 70;
thingSheet.spriteHeight = 70;
emptyScroll.src = "../Empty Scroll.png";
bg.src = "../Background sprite vertical.png";
logo.src = "../Logo.png";
buttons.src = "../Buttons.png";
buttons.spriteHeight = buttons.height / 9;

var player = new Box(playerSheet.spriteWidth * scaleHor(), playerSheet.spriteHeight * scaleVert()),
    theGoal = new Box(thingSheet.spriteWidth * scaleVert() * 2, scaleHeight(50)),
    box = new Box(thingSheet.spriteWidth * scaleHor(), thingSheet.spriteHeight * scaleVert()),
    enemyCircle = new Box(thingSheet.spriteWidth * scaleHor(), thingSheet.spriteHeight * scaleVert()),
    enemyPlatform = new Box(thingSheet.spriteWidth * scaleHor(), thingSheet.spriteHeight * scaleVert()),
    platform = new Box(thingSheet.spriteWidth * 3 * scaleHor(), thingSheet.spriteHeight * scaleVert()),
    platformVert = Object.create(platform),
    platformHor = Object.create(platform),
    powerUp = new Box(scaleWidth(20), scaleHeight(20));

defineMoveMethods();

player.src = playerSheet;
player.sourceHeight = 70;
player.sourceWidth = 50;
player.WALKING = 0;
player.STANDING = 1;
player.JUMPING = 2;
player.RIGHT = 0;
player.LEFT = 1;
player.currentFrame = 0;
player.numberOfFrames = 3;
player.extraVX = 0;

theGoal.src = goalCanvas;
theGoal.sourceHeight = goalCanvas.height;
theGoal.sourceWidth = goalCanvas.width;
theGoal.x = c.width / 5 * 3;
theGoal.y = c.height - theGoal.height;
theGoal.transp = 1;
theGoal.topColour = 0;
theGoal.diff = 0.3;
theGoal.numberOfFrames = 59;
theGoal.currentFrame = 0;
theGoal.forward = true;
theGoal.updateAnimation = function() {
    if (this.forward) {
        this.transp = this.transp - (this.diff / this.numberOfFrames);
        this.topColour = this.topColour + (this.diff / this.numberOfFrames);
        if (this.topColour > this.diff) {
            this.topColour = this.diff;
        }
        this.currentFrame++;
    } else {
        this.transp += this.diff / this.numberOfFrames;
        this.topColour -= this.diff / this.numberOfFrames;
        if (this.topColour < 0) {
            this.topColour = 0;
        }
        this.currentFrame--;
    }
    if (this.currentFrame === 0) {
        this.forward = true;
    } else if (this.currentFrame === this.numberOfFrames) {
        this.forward = false;
    }
};

box.equation = "";
box.correct = true;
box.src = thingSheet;
box.sourceY = 4 * thingSheet.spriteHeight;
box.extraVX = 0;

enemyCircle.radius = 100;
enemyCircle.frame = 0;
enemyCircle.LEFT = 0;
enemyCircle.RIGHT = 1;
enemyCircle.side = enemyCircle.LEFT;
enemyCircle.src = thingSheet;
enemyCircle.sourceX = 70;
enemyCircle.sourceY = 4 * 70;

enemyPlatform.RIGHT = 0;
enemyPlatform.DOWN = 1;
enemyPlatform.LEFT = 2;
enemyPlatform.RIGHT = 3;
enemyPlatform.direction = enemyPlatform.RIGHT;
enemyPlatform.speed = 2.5;
enemyPlatform.src = thingSheet;
enemyPlatform.sourceX = 70;
enemyPlatform.sourceY = 4 * 70;

platform.src = thingSheet;
platform.sourceWidth = thingSheet.spriteWidth * 3;

platformVert.highest = 50;
platformVert.moveHeight = 100;
platformVert.vy = scaleHeight(2);

platformHor.leftest = 50;
platformHor.moveWidth = 100;
platformHor.vx = scaleWidth(2);

solids[0] = new Box(c.width / 5 * 3, scaleHeight(50), "#00ff00");
solids[0].src = thingSheet;
solids[0].sourceWidth = thingSheet.spriteWidth * 3;
solids[0].y = c.height - solids[0].height;
solids[1] = Object.create(solids[0]);
solids[1].width = c.width - (theGoal.x + theGoal.width);
solids[1].x = solids[0].width + theGoal.width;
solids[2] = new Box(c.width - scaleWidth(100), 1, "#00ff00");
solids[2].x = scaleWidth(50);
solids[2].y = scaleHeight(49);
solids[3] = new Box(1, c.height - scaleWidth(100), "#00ff00");
solids[3].x = scaleWidth(49);
solids[3].y = scaleHeight(50);
solids[4] = new Box(1, c.height - scaleWidth(100), "#00ff00");
solids[4].x = c.width - scaleWidth(50);
solids[4].y = scaleHeight(50);

powerUp.src = powerupCanvas;
powerUp.sourceHeight = powerupCanvas.height;
powerUp.sourceWidth = powerupCanvas.width;
powerUp.radius = powerupCanvas.width / 2;
powerUp.diff = 30;
powerUp.numberOfFrames = 59;
powerUp.currentFrame = 59;
powerUp.forward = false;
powerUp.colour = utils.parseColor("black");
powerUp.updateAnimation = function() {
    if (this.forward) {
        this.radius += this.diff / this.numberOfFrames;
        if (this.radius > powerupCanvas.width / 2) {
            this.radius = powerupCanvas.width / 2;
        }
        this.currentFrame++;
    } else {
        this.radius -= this.diff / this.numberOfFrames;
        if (this.topColour < powerupCanvas.width / 2 - this.diff) {
            this.topColour = powerupCanvas.width / 2 - this.diff;
        }
        this.currentFrame--;
    }
    if (this.currentFrame === 0) {
        this.forward = true;
    } else if (this.currentFrame === this.numberOfFrames) {
        this.forward = false;
    }
};