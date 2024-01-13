const policeCarSprite = new Image();
policeCarSprite.src = '/assets/spritesheets/vehicles/police-car/spritesheet.png';
const policeCarSpriteWidth = policeCarSprite.width;
const policeCarSpriteFrameHeight = 200;
const policeCarSpriteFrameWidth = 200;

const policeCar = {
    sprite: policeCarSprite,
    spriteWidth: policeCarSpriteWidth,
    spriteFrameHeight: policeCarSpriteFrameHeight,
    spriteFrameHeight: policeCarSpriteFrameHeight,
    spriteFrameWidth: policeCarSpriteFrameWidth,
    x: 100,
    y: 0
};

const objectSprites = {
    vehicles: [
        policeCar
    ]
};

export default objectSprites;
