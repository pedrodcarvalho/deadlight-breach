const getGameConfig = () => {
    if (localStorage.getItem('gameConfig')) {
        return JSON.parse(localStorage.getItem('gameConfig'));
    }
};

export default getGameConfig;
