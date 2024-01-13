import InputManager from '../InputManager.js';

import getPlayerConfig from '../../utils/getPlayerConfig.js';

import playerSprites from '../../spritesheets/player/PlayerSprites.js';

const inputManager = new InputManager();
inputManager.bindKeys();

const movementDirections = ['up', 'down', 'left', 'right'];
const diagonalMovementDirections = [['up', 'left'], ['up', 'right'], ['down', 'left'], ['down', 'right']];

class Player {
    constructor() {
        this.x = getPlayerConfig()?.x || 0;
        this.y = getPlayerConfig()?.y || 0;
        this.width = 64;
        this.height = 64;
        this.speed = 4;
        this.diagonalSpeed = Math.round(Math.sqrt(Math.pow(this.speed, 2) + Math.pow(this.speed, 2)) * (1 / 2));
        this.direction = getPlayerConfig()?.direction || 'down';
        this.nextFrame = 0;
        this.sprite = playerSprites.idle.sprite;
        this.collidingDirection = null;
    }

    animatePlayer(GAME_TICK, FRAME_RATE, animationSpeed, spriteWidth, spriteFrameWidth) {
        if (this.nextFrame >= spriteWidth) {
            this.nextFrame = 0;
        }

        if (GAME_TICK % Math.floor(FRAME_RATE / animationSpeed) === 0) {
            if (this.nextFrame >= (spriteWidth - spriteFrameWidth)) {
                this.nextFrame = 0;
            }
            else {
                this.nextFrame += spriteFrameWidth;
            }
        }
    }

    getDirectionToDraw(ctx, spriteFrameHeight) {
        switch (this.direction) {
            case 'up':
                ctx.drawImage(this.sprite, this.nextFrame, spriteFrameHeight * 1, this.width, this.height, this.x, this.y, this.width, this.height);
                break;
            case 'down':
                ctx.drawImage(this.sprite, this.nextFrame, spriteFrameHeight * 0, this.width, this.height, this.x, this.y, this.width, this.height);
                break;
            case 'left':
                ctx.drawImage(this.sprite, this.nextFrame, spriteFrameHeight * 3, this.width, this.height, this.x, this.y, this.width, this.height);
                break;
            case 'right':
                ctx.drawImage(this.sprite, this.nextFrame, spriteFrameHeight * 2, this.width, this.height, this.x, this.y, this.width, this.height);
                break;
        }
    }

    drawPlayer(ctx, GAME_TICK, FRAME_RATE) {
        // - Call animatePlayer() before drawing the sprite to ensure the first frame is drawn
        // - The magic number multiplier refers to the row of the sprite sheet that represents the direction the player is facing

        if (inputManager.noKeysPressed() || this.isOppositeMovement()) {
            this.animatePlayer(GAME_TICK, FRAME_RATE, 4, playerSprites.idle.spriteWidth, playerSprites.idle.spriteFrameWidth);

            this.sprite = playerSprites.idle.sprite;

            this.getDirectionToDraw(ctx, playerSprites.idle.spriteFrameHeight);
        }
        else {
            this.animatePlayer(GAME_TICK, FRAME_RATE, 10, playerSprites.walking.spriteWidth, playerSprites.walking.spriteFrameWidth);

            this.sprite = playerSprites.walking.sprite;

            this.getDirectionToDraw(ctx, playerSprites.walking.spriteFrameHeight);
        }
    }

    movePlayer(directions) {
        if (directions.length === 1) {
            if (directions.includes('up')) {
                this.y -= this.speed;
            }
            else if (directions.includes('down')) {
                this.y += this.speed;
            }
            else if (directions.includes('left')) {
                this.x -= this.speed;
            }
            else if (directions.includes('right')) {
                this.x += this.speed;
            }
        }
        else {
            if (directions.includes('up')) {
                this.y -= this.diagonalSpeed;
            }
            if (directions.includes('down')) {
                this.y += this.diagonalSpeed;
            }
            if (directions.includes('left')) {
                this.x -= this.diagonalSpeed;
            }
            if (directions.includes('right')) {
                this.x += this.diagonalSpeed;
            }
        }
    }

    getDiagonalMovementDirection(diagonalMovementDirections) {
        diagonalMovementDirections.map((directions) => {
            if (inputManager.isPressed(directions)) {
                this.movePlayer(directions);
                this.direction = directions[1];
            }
        });
    }

    getMovementDirection(movementDirections) {
        return movementDirections.map((direction) => {
            if (inputManager.isPressed([direction])) {
                this.movePlayer([direction]);
                this.direction = direction;
                return direction;
            }
        }).filter((direction) => direction);
    }

    isOppositeMovement() {
        return inputManager.isPressed(['up', 'down']) || inputManager.isPressed(['left', 'right']);
    };

    isDiagonalMovement() {
        return inputManager.isPressed(['up', 'left']) || inputManager.isPressed(['up', 'right']) || inputManager.isPressed(['down', 'left']) || inputManager.isPressed(['down', 'right']);
    };

    listenToInput() {
        if (!this.isOppositeMovement()) {
            if (this.isDiagonalMovement()) {
                this.getDiagonalMovementDirection(diagonalMovementDirections);
            }
            else {
                this.getMovementDirection(movementDirections);
            }
        }

        this.collidingDirection = null;
    };

    handleCollision() {
        if (!this.collidingDirection) {
            this.collidingDirection = this.getMovementDirection(movementDirections);
        }

        const acceptableDirections = movementDirections.filter(direction => !this.collidingDirection.includes(direction));

        if (!this.isOppositeMovement()) {
            if (this.isDiagonalMovement()) {
                this.getDiagonalMovementDirection([acceptableDirections]);
            }
            else {
                this.getMovementDirection(acceptableDirections);
            }
        }
    };
};

export default Player;
