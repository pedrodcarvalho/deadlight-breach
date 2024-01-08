import getGameConfig from '../utils/getGameConfig.js';

const gameConfig = getGameConfig();

class InputManager {
    constructor() {
        this.pressedKeys = { down: false, up: false, left: false, right: false };

        this.moveUp = gameConfig?.controls.moveUp;
        this.moveDown = gameConfig?.controls.moveDown;
        this.moveLeft = gameConfig?.controls.moveLeft;
        this.moveRight = gameConfig?.controls.moveRight;

        this.keyMap = {
            [this.moveUp]: 'up',
            [this.moveDown]: 'down',
            [this.moveLeft]: 'left',
            [this.moveRight]: 'right',
        };
    }

    bindKeys() {
        document.addEventListener('keydown', (event) => {
            const keyName = event.key.toUpperCase();

            if (this.keyMap[keyName]) {
                event.preventDefault();
                this.pressedKeys[this.keyMap[keyName]] = true;
            }
        });

        document.addEventListener('keyup', (event) => {
            const keyName = event.key.toUpperCase();
            if (this.keyMap[keyName]) {
                event.preventDefault();
                this.pressedKeys[this.keyMap[keyName]] = false;
            }
        });
    }

    isPressed(keys) {
        return keys.every((key) => this.pressedKeys[key]);
    }

    noKeysPressed() {
        return Object.values(this.pressedKeys).every((key) => key === false);
    }
};

export default InputManager;
