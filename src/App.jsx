import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Menu from './components/Menu/Menu';
import Game from './components/Game/Game';

import gameConfig from './data/config.json';

const App = () => {
  const [_screen, setScreen] = useState({ width: null, height: null });

  useEffect(() => {
    localStorage.getItem('gameConfig') || localStorage.setItem('gameConfig', JSON.stringify(gameConfig));
    localStorage.getItem('hasSave') || localStorage.setItem('hasSave', false);

    setScreen({
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
    },
    {
      path: "/game",
      element: <Game width={_screen.width} height={_screen.height} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
