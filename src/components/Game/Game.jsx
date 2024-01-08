import React, { useEffect } from "react";

import "./Game.css";

import GameScene from "../../scenes/GameScene";

const Game = ({ width, height }) => {
  useEffect(() => {
    const screen = document.getElementById("screen");
    const context = screen.getContext("2d");

    const game = new GameScene(screen, context);
    game.gameLoop();

    const autoSaveListener = window.addEventListener("beforeunload", () => {
      game.autoSave();
    });

    return () => {
      window.removeEventListener("beforeunload", autoSaveListener);
    };
  }, []);

  return (
    <canvas id='screen' width={width} height={height}></canvas>
  );
};

export default Game;
