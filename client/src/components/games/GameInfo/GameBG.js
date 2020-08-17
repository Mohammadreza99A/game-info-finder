import React from 'react';

// Styles
import Button from 'react-bootstrap/Button';

const GameBG = ({ bgImg }) => {
  return (
    <Button
      block
      href={bgImg}
      rel="noopener noreferrer"
      target="_blank"
      className="btn-success"
      download
    >
      Donload Background Image
    </Button>
  );
};

export default GameBG;
