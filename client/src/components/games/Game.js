import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Game({ game }) {
  return (
    <div className="my-2 text-center">
      <Card className="border-danger">
        <Card.Header className="lead">{game.name}</Card.Header>
        <Card.Img variant="top" src={game.background_image} alt={game.name} />
        <Card.Body>
          <Button
            className="my-1 stretched-link"
            block
            variant="success"
            as={Link}
            to={`/info/game/${game.id}`}
          >
            See Details
          </Button>
        </Card.Body>
        <div className="card-footer text-muted">
          Released: <span>{game.released}</span>
        </div>
      </Card>
    </div>
  );
}

export default Game;
