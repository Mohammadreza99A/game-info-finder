import React from 'react';

// Styles
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';

const GameRatings = ({ ratings }) => {
  const colors = ['success', 'danger', 'warning', 'info'];

  return (
    <div className="my-1 text-center">
      <h3 className="font-weight-bold">Ratings</h3>
      {ratings.map((rating) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <Container key={rating.id} className="text-left">
            <Row className="lead">
              <Col sm={2}>
                <span className="text-capitalize">{rating.title}</span>
              </Col>
              <Col sm={10}>
                <div className="my-2">
                  <ProgressBar
                    key={rating.id}
                    label={rating.count}
                    now={parseFloat(rating.percent)}
                    variant={randomColor}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default GameRatings;
