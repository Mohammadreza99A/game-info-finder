import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopular } from '../../globalState/actions/gameActions';

// Components
import Game from './Game';
import Spinner from '../layouts/Spinner';

function Games() {
  const dispatch = useDispatch();
  const heading = useSelector((state) => state.games.heading);
  const games = useSelector((state) => state.games.items);

  useEffect(() => {
    dispatch(fetchPopular());
  }, [dispatch]);

  if (!heading || !games || games.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div className="container jumbotron mb-5">
        <h1 className="text-center display-4 text-bold mb-5">{heading}</h1>
        <div className="card-columns">
          {games.map((game) => (
            <Game key={game.id} id={game.id}></Game>
          ))}
        </div>
      </div>
    );
  }
}

export default Games;
