import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    preload() {
        this.load.image('logo', 'assets/images/favicon.ico');
    }

    create() {
        this.logo = this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'logo');
    }
}

export default GameScene;
