// Given a tileset, a tilemap and a canvas context, draws to the canvas context specific tiles based on the tilemap data.

const tilemapDrawer = (tileset, tilemap, ctx) => {
    let tile = 0;
    let tileRow = 0;
    let tileCol = 0;
    let tileX = 0;
    let tileY = 0;

    for (let y = 0; y < tilemap.tilemap.length; y++) {
        for (let x = 0; x < tilemap.tilemap[y].length; x++) {
            tile = tilemap.tilemap[y][x];
            tileRow = Math.floor(tile / tilemap.TILESET_COLUMNS) % tilemap.TILESET_ROWS;
            tileCol = Math.floor(tile % tilemap.TILESET_COLUMNS) % tilemap.TILESET_COLUMNS;
            tileX = tileCol * tilemap.TILE_SIZE;
            tileY = tileRow * tilemap.TILE_SIZE;
            ctx.drawImage(tileset, tileX, tileY, tilemap.TILE_SIZE, tilemap.TILE_SIZE, x * tilemap.TILE_SIZE, y * tilemap.TILE_SIZE, tilemap.TILE_SIZE, tilemap.TILE_SIZE);
        }
    }
};

export default tilemapDrawer;
