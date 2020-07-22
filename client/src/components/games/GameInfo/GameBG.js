import React from 'react';

const GameBG = ({ bgImg }) => {
  return (
    <a
      href={bgImg}
      rel="noopener noreferrer"
      target="_blank"
      className="btn btn-block btn-success"
      download
    >
      Donload Background Image
    </a>
  );
};

export default GameBG;
