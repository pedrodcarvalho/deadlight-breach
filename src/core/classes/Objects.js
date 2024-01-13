class Objects {
    constructor(objectProps) {
        this.objectProps = objectProps;
    }

    drawObject(ctx) {
        const { sprite, spriteFrameWidth, spriteFrameHeight, x, y } = this.objectProps;

        ctx.drawImage(sprite, 0, 0, spriteFrameWidth, spriteFrameHeight, x, y, spriteFrameWidth, spriteFrameHeight);

        // Developing and debugging purposes only
        ctx.strokeStyle = 'red';
        ctx.strokeRect(x + 17, y + 75, spriteFrameWidth - 30, spriteFrameHeight - 130);

        this.objectProps.hitbox = {
            x: this.objectProps.x + 17,
            y: this.objectProps.y + 75,
            width: this.objectProps.spriteFrameWidth - 30,
            height: this.objectProps.spriteFrameHeight - 130
        };
    };

    checkCollisionWithPlayer(player) {
        const { hitbox } = this.objectProps;
        const { x, y } = player;

        return (
            (x + 16) < hitbox.x + hitbox.width &&
            (x + 16) + (player.width - 34) > hitbox.x &&
            (y + 48) < hitbox.y + hitbox.height &&
            (y + 48) + (player.height - 47) > hitbox.y
        );
    };
};

export default Objects;
