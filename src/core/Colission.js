class Colission {
    constructor() {
        this.COLLISION = false;
    }

    checkLevelBordersCollision(player, levelWidth, levelHeight) {
        if (player.x <= 16) {
            player.x = 16;
        }
        else if (player.x >= levelWidth - player.width - 16) {
            player.x = levelWidth - player.width - 16;
        }

        if (player.y <= 0) {
            player.y = 0;
        }
        else if (player.y >= levelHeight - player.height - 32) {
            console.log('player.y', player.y);
            player.y = levelHeight - player.height - 32;
        }
    }
};

export default Colission;
