class Level {
    constructor(tileset, tilemap, width, height) {
        this.tileset = tileset;
        this.tilemap = tilemap;
        this.width = width;
        this.height = height;

        this.addLevelBorders();
    }

    addLevelBorders() {
        this.tilemap.tilemap = this.tilemap.tilemap.map(row => [-1, ...row, -1]);
        this.tilemap.tilemap.unshift(Array(this.tilemap.tilemap[0].length).fill(-1));
        this.tilemap.tilemap.push(Array(this.tilemap.tilemap[0].length).fill(-1));
        this.width += this.tilemap.TILE_SIZE * 2;
        this.height += this.tilemap.TILE_SIZE * 2;
    }
}

export default Level;
