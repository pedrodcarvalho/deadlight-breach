import spriteCreator from "../../utils/spriteCreator";

const policeCar = spriteCreator(new Image(), '/assets/spritesheets/vehicles/police-car/police-car.png', 200, 200, 100, 0);
const policeCar2 = spriteCreator(new Image(), '/assets/spritesheets/vehicles/police-car/police-car.png', 200, 200, 400, 0);

const objectSprites = {
    vehicles: [
        policeCar,
        policeCar2
    ],
    buildings: [

    ]
};

export default objectSprites;
