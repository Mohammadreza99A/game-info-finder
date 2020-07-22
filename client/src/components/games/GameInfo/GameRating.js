import React from 'react';

const GameRating = ({ rating, ratingTop }) => {
  return (
    <>
      Rating (<small>out of {ratingTop}</small>):{' '}
      <span className="badge badge-danger badge-pill">{rating}</span>
    </>
  );
};

export default GameRating;
