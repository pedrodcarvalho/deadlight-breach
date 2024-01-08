const walkingSprite = new Image();
walkingSprite.src = '/assets/spritesheets/player/walk.png';
const walkingSpriteWidth = walkingSprite.width;
const walkingSpriteFrameHeight = 64;
const walkingSpriteFrameWidth = 64;

const idleSprite = new Image();
idleSprite.src = '/assets/spritesheets/player/idle.png';
const idleSpriteWidth = idleSprite.width;
const idleSpriteFrameHeight = 64;
const idleSpriteFrameWidth = 64;

const playerSprites = {
    idle: {
        sprite: idleSprite,
        spriteWidth: idleSpriteWidth,
        spriteFrameHeight: idleSpriteFrameHeight,
        spriteFrameWidth: idleSpriteFrameWidth,
    },
    walking: {
        sprite: walkingSprite,
        spriteWidth: walkingSpriteWidth,
        spriteFrameHeight: walkingSpriteFrameHeight,
        spriteFrameWidth: walkingSpriteFrameWidth,
    }
};

export default playerSprites;
