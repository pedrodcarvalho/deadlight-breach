import Level from './Level.js';
import levelObjects from '../spritesheets/objects/GrassLevelObjects.js';

import levelTilemap from '../data/tilemaps/grass.js'

const levelTileset = new Image();
levelTileset.src = '/assets/spritesheets/tilesets/grass.png';

const levelWidth = levelTilemap.tilemap[0].length * levelTilemap.TILE_SIZE;
const levelHeight = levelTilemap.tilemap.length * levelTilemap.TILE_SIZE;

class GrassLevel extends Level {
    constructor() {
        super(levelTileset, levelTilemap, levelWidth, levelHeight, levelObjects);
    }
};

export default GrassLevel;
