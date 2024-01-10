import Player from './classes/Player.js';
import Camera from './Camera.js';
import Colission from './Colission.js';

import tilemapDrawer from '../utils/tilemapDrawer.js'

class Renderer {
    constructor(canvas, ctx, levelTileset, levelTilemap, levelWidth, levelHeight) {
        this.canvas = canvas;
        this.ctx = ctx;

        this.camera = new Camera(canvas);
        this.player = new Player(canvas);
        this.colission = new Colission();

        this.levelTileset = levelTileset;
        this.levelTilemap = levelTilemap;
        this.levelWidth = levelWidth;
        this.levelHeight = levelHeight;

        this.FRAME_RATE = 60;
        this.GAME_TICK = 0;
        this.UPDATE_DELAY = Math.floor(1000 / this.FRAME_RATE);
    }

    drawBackground() {
        this.ctx.fillStyle = 'lime';
        this.ctx.fillRect(this.camera.x, this.camera.y, this.canvas.width, this.canvas.height);

        tilemapDrawer(this.levelTileset, this.levelTilemap, this.ctx);
    }

    drawObjects() {
        this.player.drawPlayer(this.ctx, this.GAME_TICK, this.FRAME_RATE);
    }

    drawUI() {
        // TODO: draw UI
    }

    drawText(text, x, y) {
        // TODO: draw text
    }

    clearScreen() {
        this.ctx.clearRect(this.camera.x, this.camera.y, this.canvas.width, this.canvas.height);
    }

    eventListeners() {
        this.player.listenToInput(this.colission.checkLevelBoundariesCollision(this.player, this.levelWidth, this.levelHeight));
    }

    gameLoop() {
        setTimeout(() => {
            // clearScreen must be called before drawing anything else otherwise the canvas will not be drawn over
            this.clearScreen();

            this.eventListeners();

            this.drawBackground();
            this.drawObjects();
            this.drawUI();
            this.drawText();

            this.camera.updatePosition(this.player, this.levelWidth, this.levelHeight);
            this.camera.move();

            this.GAME_TICK += 1;

            requestAnimationFrame(this.gameLoop.bind(this));
        }, this.UPDATE_DELAY);
    }

    autoSave = () => {
        localStorage.setItem('playerConfig', JSON.stringify(this.player));
    };
};

export default Renderer;
