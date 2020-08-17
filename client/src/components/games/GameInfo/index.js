import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGame } from '../../../globalState/actions/gameActions';
import { Helmet } from 'react-helmet';

// Components
// import GameGenres from './GameGenres';
import GameDevelopers from './GameDevelopers';
import GameRatings from './GameRatings';
import GameDescription from './GameDescription';
import GameStores from './GameStores';
import GameTags from './GameTags';
import GameGenres from './GameGenres';
import GameRating from './GameRating';
import Spinner from '../../layouts/Spinner';
import GameWebsite from './GameWebsite';
import GameBG from './GameBG';
import SimilarGames from './SimilarGames';
import GamePlatforms from './GamePlatforms';

function GameInfo({
  match: {
    params: { id },
  },
}) {
  id = parseInt(id);
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.item);
  // to see if the game in the page is changed and if true we send the user to top of the page
  const [currentId, setCurrentId] = useState(id);

  useEffect(() => {
    dispatch(fetchGame(id));
    if (currentId !== id) {
      setCurrentId(id);
      window.scrollTo(0, 0);
    }
  }, [dispatch, id, currentId]);

  if (!game || Object.keys(game).length === 0) {
    return <Spinner />;
  } else {
    return (
      <div
        className="jumbotron my-5"
        style={{
          background: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${game.background_image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          className="card container p-0"
          style={{ backgroundColor: 'rgba(0,0,0,.75)' }}
        >
          <Helmet>
            <title>Game Info Finder | Info Page</title>
          </Helmet>
          <div className="card-header text-center">
            <h1 className="card-title">{game.name}</h1>
            <div className="card-subtitle mb-1 text-muted">
              <GameGenres genres={game.genres} />
            </div>
          </div>
          <div className="card-body">
            <div className="row text-center lead">
              <div className="col-sm-6 mb-4 px-2">
                <div className="border border-warning rounded">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <GameRating
                        rating={game.rating}
                        ratingTop={game.rating_top}
                      />
                    </li>
                    <li className="list-group-item">
                      <GameStores stores={game.stores}></GameStores>
                    </li>
                    <li className="list-group-item">
                      <GameWebsite website={game.website} />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 mb-4 px-2">
                <div className="border border-warning rounded">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Released: {game.released}
                    </li>
                    <li className="list-group-item">
                      <GameDevelopers developers={game.developers} />
                    </li>
                    <li className="list-group-item">
                      <GameBG bgImg={game.background_image} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <GameRatings ratings={game.ratings} />
            <hr />
            <GameDescription description={game.description_raw} />
            <hr />
            <GamePlatforms platforms={game.platforms} />
          </div>
          <div className="card-footer text-center text-muted">
            <GameTags tags={game.tags} />
          </div>
        </div>

        <SimilarGames id={id} />
      </div>
    );
  }
}

export default GameInfo;
