import React, { useEffect } from "react";

import "./Game.css";

import Renderer from "../../core/Renderer";

const Game = ({ width, height }) => {
  useEffect(() => {
    const screen = document.getElementById("screen");
    const context = screen.getContext("2d");

    const game = new Renderer(screen, context);
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
