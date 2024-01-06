class userInteractionHelper {
    setFullscreen = (gameConfig) => {
        if (gameConfig.fullscreenMode) {
            document.documentElement.requestFullscreen();
        }
        else if (!gameConfig.fullscreenMode && document.fullscreenElement) {
            console.log(gameConfig.fullscreenMode);
            document.exitFullscreen();
        }
    };

    setAudioAutoPlay = (gameConfig, audio) => {
        if (gameConfig.soundEnabled && !audio.paused) {
            audio.play();
            audio.loop = true;
        }
        else if (!gameConfig.soundEnabled) {
            audio.pause();
            audio.currentTime = 0;
        }
    };
}

export default new userInteractionHelper();
