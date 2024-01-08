const getPlayerConfig = () => {
    if (localStorage.getItem('playerConfig')) {
        return JSON.parse(localStorage.getItem('playerConfig'));
    }
};

export default getPlayerConfig;
