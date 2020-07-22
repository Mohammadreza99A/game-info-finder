import React from 'react';

const GameWebsite = ({ website }) => {
  return (
    <a
      href={website}
      rel="noopener noreferrer"
      target="_blank"
      className="btn btn-block btn-success"
    >
      Game Website
    </a>
  );
};

export default GameWebsite;
