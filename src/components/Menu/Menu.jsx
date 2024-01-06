import React, { useEffect, useState } from 'react';

import './Menu.css';
import '../../styles/fonts.css';

import Options from '../Options/Options';

import gameConfigObj from '../../data/config.json';

import playerSettings from '../../data/player.json';

const Menu = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [Modal, setModal] = useState({ show: false, message: null });
  const [gameConfig, setGameConfig] = useState({});

  useEffect(() => {
    if (localStorage.getItem('gameConfig') === null) {
      localStorage.setItem('gameConfig', JSON.stringify(gameConfigObj));
    }

    setGameConfig(JSON.parse(localStorage.getItem('gameConfig')));
  }, []);

  const saveNewGame = () => {
    localStorage.setItem('hasSave', true);
    localStorage.setItem('playerSettings', JSON.stringify(playerSettings));
  };

  const loadGame = () => {
    window.location.href = '/game';
  };

  const overwriteSave = (doOverwrite) => {
    if (doOverwrite) {
      localStorage.setItem('hasSave', true);
      localStorage.setItem('playerSettings', JSON.stringify(playerSettings));
      setModal({ show: false, message: null });
      loadGame();
    }
    else {
      setModal({ show: false, message: null });
    }
  };

  const handleStartClick = () => {
    if (localStorage.getItem('hasSave') === 'true') {
      setModal({ show: true, message: 'There is already a saved game, do you want to overwrite it?' })
    }
    else {
      saveNewGame();
      loadGame();
    }
  };

  const handleLoadClick = () => {
    if (localStorage.getItem('hasSave') === 'true') {
      loadGame();
    }
    else {
      setModal({ show: true, message: 'There is no saved game, do you want to start a new one?' });
    }
  };

  const handleOptionsClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <div className='menu flexColumn spaceBetween'>
        <h1 className='menuTitle'>Deadlight<br />Breach<span className='skull'>&#x00cd;</span></h1>
        <div>
          {
            showOptions ?
              <Options onClick={handleOptionsClick} gameConfig={gameConfig} setGameConfig={setGameConfig} />
              :
              <div className='flexColumn menuButtons'>
                <div onClick={handleStartClick}>Start Game</div>
                <div onClick={handleLoadClick}>Load Game</div>
                <div onClick={handleOptionsClick}>Options</div>
              </div>
          }
        </div>
      </div>
      {
        Modal.show &&
        <div className='modal flexColumn'>
          <div>
            <h2>{Modal.message}</h2>
            <div className='flexRow flexEnd modalMessage'>
              <div onClick={() => overwriteSave(true)}>Yes</div>
              <div onClick={() => overwriteSave(false)}>No</div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Menu;
