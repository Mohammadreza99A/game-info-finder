import React from 'react';

// Components
import GamePlatform from './GamePlatform';

const GamePlatforms = ({ platforms }) => {
  return (
    <div className="my-1 text-center">
      <h3 className="font-weight-bold">Platforms</h3>
      <div className="card-columns">
        {platforms.map((platform) => (
          <GamePlatform key={platform.platform.id} platform={platform} />
        ))}
      </div>
    </div>
  );
};

export default GamePlatforms;
