import React from 'react';

// Components
import GamePlatform from './GamePlatform';

// Styles
import CardColumns from 'react-bootstrap/CardColumns';

const GamePlatforms = ({ platforms }) => {
  return (
    <div className="my-1 text-center">
      <h3 className="font-weight-bold">Platforms</h3>
      <CardColumns>
        {platforms.map((platform) => (
          <GamePlatform key={platform.platform.id} platform={platform} />
        ))}
      </CardColumns>
    </div>
  );
};

export default GamePlatforms;
