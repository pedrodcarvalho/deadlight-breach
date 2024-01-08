import InputManager from '../InputManager.js';

const inputManager = new InputManager();
inputManager.bindKeys();

const walkingSprite = new Image();
walkingSprite.src = '/assets/spritesheets/player/walk.png';

const idleSprite = new Image();
idleSprite.src = '/assets/spritesheets/player/idle.png';
const idleSpriteWidth = 64;

import getPlayerConfig from '../../utils/getPlayerConfig.js';

class Player {
    constructor() {
        this.x = getPlayerConfig()?.x || 0;
        this.y = getPlayerConfig()?.y || 0;
        this.width = 64;
        this.height = 64;
        this.speed = 4;
        this.diagonalSpeed = Math.round(Math.sqrt(Math.pow(this.speed, 2) + Math.pow(this.speed, 2)) * (2 / 3));
        this.direction = getPlayerConfig()?.direction || 'down';
        this.idleFrame = getPlayerConfig()?.idleFrame || 0;
        this.nextFrame = getPlayerConfig()?.nextFrame || 0;
        this.sprite = getPlayerConfig()?.sprite || walkingSprite;
    }

    drawIdlePlayer(ctx, y, GAME_TICK, FRAME_RATE) {
        this.sprite = idleSprite;
        ctx.drawImage(this.sprite, this.idleFrame, y, this.width, this.height, this.x, this.y, this.width, this.height);

        if (GAME_TICK % Math.floor(FRAME_RATE / 4) === 0) {
            if (this.idleFrame === idleSpriteWidth) {
                this.idleFrame = 0;
            }
            else {
                this.idleFrame += idleSpriteWidth;
            }
        }
    }

    drawPlayer(ctx, GAME_TICK, FRAME_RATE) {
        this.animatePlayer(GAME_TICK, FRAME_RATE);

        if (inputManager.noKeysPressed()) {
            switch (this.direction) {
                case 'up':
                    this.drawIdlePlayer(ctx, 64, GAME_TICK, FRAME_RATE);
                    break;
                case 'down':
                    this.drawIdlePlayer(ctx, 0, GAME_TICK, FRAME_RATE);
                    break;
                case 'left':
                    this.drawIdlePlayer(ctx, 192, GAME_TICK, FRAME_RATE);
                    break;
                case 'right':
                    this.drawIdlePlayer(ctx, 128, GAME_TICK, FRAME_RATE);
                    break;
            }
        }
        else {
            switch (this.direction) {
                case 'up':
                    this.sprite = walkingSprite;
                    ctx.drawImage(this.sprite, this.nextFrame, 64, this.width, this.height, this.x, this.y, this.width, this.height);
                    break;
                case 'down':
                    this.sprite = walkingSprite;
                    ctx.drawImage(this.sprite, this.nextFrame, 0, this.width, this.height, this.x, this.y, this.width, this.height);
                    break;
                case 'left':
                    this.sprite = walkingSprite;
                    ctx.drawImage(this.sprite, this.nextFrame, 192, this.width, this.height, this.x, this.y, this.width, this.height);
                    break;
                case 'right':
                    this.sprite = walkingSprite;
                    ctx.drawImage(this.sprite, this.nextFrame, 128, this.width, this.height, this.x, this.y, this.width, this.height);
                    break;
            }
        }
    }

    animatePlayer(GAME_TICK, FRAME_RATE) {
        if (GAME_TICK % Math.floor(FRAME_RATE / 10) === 0) {
            if (this.nextFrame === 192) {
                this.nextFrame = 0;
            }
            else {
                this.nextFrame += 64;
            }
        }
    }

    movePlayer(direction) {
        switch (direction) {
            case 'up':
                this.y -= this.speed;
                this.direction = 'up';
                break;
            case 'down':
                this.y += this.speed;
                this.direction = 'down';
                break;
            case 'left':
                this.x -= this.speed;
                this.direction = 'left';
                break;
            case 'right':
                this.x += this.speed;
                this.direction = 'right';
                break;
        }
    }

    normalizeDiagonalMovement(directions) {
        if (directions.includes('up')) {
            this.y -= this.diagonalSpeed;
            this.y += this.speed;
        }
        if (directions.includes('down')) {
            this.y += this.diagonalSpeed;
            this.y -= this.speed;
        }
        if (directions.includes('left')) {
            this.x -= this.diagonalSpeed;
            this.x += this.speed;
        }
        if (directions.includes('right')) {
            this.x += this.diagonalSpeed;
            this.x -= this.speed;
        }
    };

    listenToInput() {
        if (inputManager.isPressed('up') && inputManager.isPressed('right')) {
            this.normalizeDiagonalMovement(['up', 'right']);
        }
        if (inputManager.isPressed('up') && inputManager.isPressed('left')) {
            this.normalizeDiagonalMovement(['up', 'left']);
        }
        if (inputManager.isPressed('down') && inputManager.isPressed('right')) {
            this.normalizeDiagonalMovement(['down', 'right']);
        }
        if (inputManager.isPressed('down') && inputManager.isPressed('left')) {
            this.normalizeDiagonalMovement(['down', 'left']);
        }
        if (inputManager.isPressed('up')) {
            this.movePlayer('up');
        }
        if (inputManager.isPressed('down')) {
            this.movePlayer('down');
        }
        if (inputManager.isPressed('left')) {
            this.movePlayer('left');
        }
        if (inputManager.isPressed('right')) {
            this.movePlayer('right');
        }
    };
};

export default Player;
