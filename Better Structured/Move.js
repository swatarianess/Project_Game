/**
 * Will define the move methods for the player, boxes, and enemies.
 */
function defineMoveMethods() {
    player.move = function() {
        if (this.jumpChange > 0) {
            this.jumpChange--;
        } else {
            this.jumpForce = -1 * scaleHeight(9);
        }
        if (this.jump && this.isOnGround) {
            this.vy = this.jumpForce;
            this.friction = 1;
            this.isOnGround = false;
            this.state = this.JUMPING;
        }
        if (this.moveLeft && !this.moveRight) {
            this.ax = -1 * scaleWidth(0.2);
            this.friction = 1;
            if (this.isOnGround) {
                this.state = this.WALKING;
                this.ax = -this.xAcc;
            }
        }
        if (this.moveRight && !this.moveLeft) {
            this.ax = scaleWidth(0.2);
            this.friction = 1;
            if (this.isOnGround) {
                this.state = this.WALKING;
                this.ax = this.xAcc;
            }
        }

        if (!this.moveLeft && !this.moveRight) {
            this.ax = 0;
            if (this.isOnGround) {
                this.friction = this.oldFriction;
            }
        }

        this.vx += this.ax;
        this.vy += this.ay;

        if (this.vx < 0) {
            this.facing = this.LEFT;
        } else if (this.vx > 0) {
            this.facing = this.RIGHT;
        } else if (this.isOnGround) {
            this.state = this.STANDING;
        }

        if (this.isOnGround) {
            this.vx *= this.friction;
        }

        this.vy += this.gravity;

        if (this.vx > this.speedLimit - this.extraVX) {
            this.vx = this.speedLimit - this.extraVX;
        } else if (this.vx < -this.speedLimit + this.extraVX) {
            this.vx = -this.speedLimit + this.extraVX;
        }
        if (this.vy > this.speedLimit * 2) {
            this.vy = this.speedLimit * 2;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.x += this.extraVX;

        if (this.x < 0) {
            this.x = 0;
        } else if (this.x > c.width - this.width) {
            this.x = c.width - this.width;
        }
        if (this.y < 0) {
            this.y = 0;
        } else if (this.y > c.height) {
            score -= 50;
            console.log("Game over.");
            gameState = OVER;
        }

        this.sourceY = this.state * this.src.spriteHeight;
        if (this.state === this.WALKING && this.currentFrame < this.numberOfFrames) {
            this.sourceX = this.facing * this.src.spriteWidth * 3 + (Math.floor(this.currentFrame) * this.src.spriteWidth);
            this.currentFrame += 0.2;
        } else {
            this.sourceX = this.facing * this.src.spriteWidth * 3;
            this.currentFrame = 0;
        }
    };

    box.move = function() {
        this.vx *= this.friction;

        this.vy += this.gravity;

        if (this.vx > this.speedLimit) {
            this.vx = this.speedLimit;
        } else if (this.vx < -this.speedLimit) {
            this.vx = -this.speedLimit;
        }
        if (this.vy > this.speedLimit * 2) {
            this.vy = this.speedLimit * 2;
        }

        this.x += this.vx;
        this.y += this.vy;

        this.x += this.extraVX;
    };

    enemyCircle.move = function() {
        this.y = this.linkedObject.centerY() + this.radius * Math.sin((Math.PI / 64) * this.frame);

        switch (this.side) {
            case this.LEFT:
                this.x = this.linkedObject.x + this.radius * Math.cos((Math.PI / 64) * this.frame);
                break;
            case this.RIGHT:
                this.x = this.linkedObject.x + this.linkedObject.width + this.radius * Math.cos((Math.PI / 64) * this.frame);
                break;
        }

        this.frame++;
    };

    enemyPlatform.move = function() {
        if (this.x === 0 && this.y === 0) {
            this.x = this.linkedObject.x - this.width;
            this.y = this.linkedObject.y - this.height;
        }

        switch (this.direction) {
            case this.RIGHT:
                this.y = this.linkedObject.y - this.height;
                this.x += this.speed;
                if (this.x > this.linkedObject.x + this.linkedObject.width) {
                    this.x = this.linkedObject.x + this.linkedObject.width;
                    this.direction = this.DOWN;
                }
                break;
            case this.DOWN:
                this.x = this.linkedObject.x + this.linkedObject.width;
                this.y += this.speed;
                if (this.y > this.linkedObject.y + this.linkedObject.height) {
                    this.y = this.linkedObject.y + this.linkedObject.height;
                    this.direction = this.LEFT;
                }
                break;
            case this.LEFT:
                this.y = this.linkedObject.y + this.linkedObject.height;
                this.x -= this.speed;
                if (this.x < this.linkedObject.x - this.width) {
                    this.x = this.linkedObject.x - this.width;
                    this.direction = this.UP;
                }
                break;
            case this.UP:
                this.x = this.linkedObject.x - this.width;
                this.y -= this.speed;
                if (this.y < this.linkedObject.y - this.height) {
                    this.y = this.linkedObject.y - this.height;
                    this.direction = this.RIGHT;
                }
                break;
        }
    };

    platformVert.move = function() {
        if (this.y < this.highest) {
            this.y = this.highest;
            this.vy *= -1;
        } else if (this.y > this.highest + this.moveHeight) {
            this.y = this.highest + this.moveHeight;
            this.vy *= -1;
        }

        this.y += this.vy;
    };

    platformHor.move = function() {
        if (this.x < this.leftest) {
            this.x = this.leftest;
            this.vx *= -1;
        } else if (this.x > this.leftest + this.moveWidth) {
            this.x = this.leftest + this.moveWidth;
            this.vx *= -1;
        }

        this.x += this.vx;
    }
}

function moveAll() {
    player.move();
    for (var i = 0; i < solids.length; i++) {
        if (solids[i].move) {
            solids[i].move();
        }
    }
    for (i = 0; i < objects.length; i++) {
        objects[i].move();
    }
    for (i = 0; i < enemies.length; i++) {
        enemies[i].move();
    }
}