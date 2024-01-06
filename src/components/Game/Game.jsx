import React from "react";

import "./Game.css";

const Game = ({ width, height }) => {
  return (
    <canvas id='screen' width={width} height={height}></canvas>
  );
};

export default Game;
