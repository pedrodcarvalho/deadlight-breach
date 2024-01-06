import React, { useEffect } from 'react';

import './Options.css';

const Options = ({ onClick, gameConfig, setGameConfig }) => {
  useEffect(() => {
    if (Object.keys(gameConfig).length > 0) {
      localStorage.setItem('gameConfig', JSON.stringify(gameConfig));
    }
  }, [gameConfig]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setGameConfig({
      ...gameConfig,
      [name]: name === 'volume' ? Number(value) : checked
    });
  };

  return (
    <div className='flexColumn spaceBetween'>
      <div className='flexColumn'>
        <div className='option flexRow spaceBetween'>
          <h2>Volume</h2>
          <input type='range' min='0' max='100' value={gameConfig.volume} name='volume' onChange={handleChange} />
        </div>
        <div className='option flexRow spaceBetween'>
          <h2>Sound</h2>
          <input type='checkbox' checked={gameConfig.soundEnabled} name='soundEnabled' onChange={handleChange} />
        </div>
        <div className='option flexRow spaceBetween'>
          <h2>Fullscreen</h2>
          <input type='checkbox' checked={gameConfig.fullscreenMode} name='fullscreenMode' onChange={handleChange} />
        </div>
      </div>
      <div className='menuButtons'>
        <div onClick={onClick}>Back</div>
      </div>
    </div>
  );
};

export default Options;
