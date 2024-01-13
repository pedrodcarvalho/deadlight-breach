/**
 * This function creates an object to be added to the game scene.
 **/

const spriteCreator = (sprite, spriteSrc, _spriteFrameWidth_, _spriteFrameHeight_, _x_, _y_) => {
    sprite.src = spriteSrc;
    const spriteWidth = sprite.width;
    const spriteFrameWidth = _spriteFrameWidth_;
    const spriteFrameHeight = _spriteFrameHeight_;
    const x = _x_;
    const y = _y_;

    return {
        sprite,
        spriteWidth,
        spriteFrameHeight,
        spriteFrameWidth,
        x,
        y
    };
};

export default spriteCreator;
