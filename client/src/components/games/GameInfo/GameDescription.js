import React from 'react';
import ShowMoreText from 'react-show-more-text';

// Styles
import Container from 'react-bootstrap/Container';

const GameDescription = ({ description }) => {
  return (
    <Container className="my-1 mb-4">
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
    </Container>
  );
};

export default GameDescription;
