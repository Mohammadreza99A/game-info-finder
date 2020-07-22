import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Game({ id }) {
  const games = useSelector((state) =>
    state.games.items.filter((game) => game.id === id)
  );

  const game = games[0] ? games[0] : null;

  return (
    <div className="my-2 text-center">
      <div className="border-danger card">
        <div className="card-header lead">{game.name}</div>
        <img
          className="card-img-top"
          src={game.background_image}
          alt={game.name}
        />
        <div className="card-body">
          <Link
            to={`/info/game/${game.id}`}
            className="my-1 stretched-link btn btn-block btn-success"
          >
            See Details
          </Link>
        </div>
        <div className="card-footer text-muted">
          Released: <span>{game.released}</span>
        </div>
      </div>
    </div>
  );
}

export default Game;
