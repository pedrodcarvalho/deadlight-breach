class Camera {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.x = 0;
        this.y = 0;
    }

    updatePosition(player, levelWidth, levelHeight) {
        // Update camera position to follow player
        this.x = player.x - this.canvas.width / 2 + 32;
        this.y = player.y - this.canvas.height / 2 + 32;

        // Clamp camera position to level boundaries
        this.x = Math.max(0, Math.min(this.x, levelWidth - this.canvas.width));
        this.y = Math.max(0, Math.min(this.y, levelHeight - this.canvas.height));
    }

    move() {
        // Move the camera
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.translate(-this.x, -this.y);
    }
}

export default Camera;
