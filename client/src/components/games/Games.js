import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopular } from '../../globalState/actions/gameActions';

// Components
import Game from './Game';
import Spinner from '../layouts/Spinner';

// Styles
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardColumns from 'react-bootstrap/CardColumns';

function Games() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.items);

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  if (!games || games.length === 0) {
    return <Spinner />;
  } else {
    return (
      <Jumbotron className="container mb-5">
        <h1 className="text-center display-4 text-bold mb-5">Popular Games</h1>
        <CardColumns>
          {games.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </CardColumns>
      </Jumbotron>
    );
  }
}

export default Games;
