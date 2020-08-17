import React from 'react';

// Styles
import Badge from 'react-bootstrap/Badge';

const GameRating = ({ rating, ratingTop }) => {
  return (
    <>
      Rating (<small>out of {ratingTop}</small>):{' '}
      <Badge pill variant="light">
        {rating}
      </Badge>
    </>
  );
};

export default GameRating;
