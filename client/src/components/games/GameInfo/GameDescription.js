import React from 'react';
import ShowMoreText from 'react-show-more-text';

const GameDescription = ({ description }) => {
  return (
    <div className=" container my-1 mb-4">
      <h3 className="font-weight-bold text-center">Description</h3>
      <ShowMoreText
        lines={2}
        more="Show more"
        less="Show less"
        anchorClass=""
        expanded={false}
      >
        <p className="text-justify">{description}</p>
      </ShowMoreText>
    </div>
  );
};

export default GameDescription;
