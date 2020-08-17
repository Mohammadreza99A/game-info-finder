import React from 'react';

// Style
import Button from 'react-bootstrap/Button';

const GameWebsite = ({ website }) => {
  return (
    <Button
      block
      className="btn-success"
      href={website}
      rel="noopener noreferrer"
      target="_blank"
    >
      Game Website
    </Button>
  );
};

export default GameWebsite;
