import Renderer from '../core/Renderer';

import GrassLevel from '../levels/GrassLevel';

class GameScene extends Renderer {
    constructor(canvas, ctx) {
        const grassLevel = new GrassLevel();

        super(canvas, ctx, grassLevel.tileset, grassLevel.tilemap, grassLevel.width, grassLevel.height);
    }
};

export default GameScene;
