function Box (width, height, color) {
    if (width === undefined) { width = 50; }
    if (height === undefined) { height = 50; }
    if (color === undefined) { color = Math.random() * 0xffffff; }
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
    this.speedLimit = scaleWidth(3);
    this.friction = 0.8;
    this.gravity = scaleHeight(0.3);
    this.width = width;
    this.height = height;
    this.color = utils.parseColor(color);
    this.lineWidth = 0;
    this.src = "";
    this.sourceX = 0;
    this.sourceY = 0;
    this.sourceWidth = 70;
    this.sourceHeight = 70;
    this.visible = true;

    this.centerX = function() {
        return this.x + (this.width / 2);
    };
    this.centerY = function() {
        return this.y + (this.height / 2);
    };
    this.halfWidth = function() {
        return this.width / 2;
    };
    this.halfHeight = function() {
        return this.height / 2;
    };
}