import React, { useEffect } from 'react';
import Phaser from 'phaser';

import './Game.css';

import GameScene from '../../scenes/GameScene';

const Game = () => {
  const initializePasher = () => {
    const screenSize = {
      width: window.screen.width,
      height: window.screen.height
    };

    const gameConfig = {
      type: Phaser.AUTO,
      width: screenSize.width,
      height: screenSize.height,
      scene: GameScene
    };

    return new Phaser.Game(gameConfig);
  };

  useEffect(() => {
    const game = initializePasher();

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <></>
  );
};

export default Game;
