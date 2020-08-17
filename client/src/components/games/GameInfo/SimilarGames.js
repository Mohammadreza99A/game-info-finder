import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSimilar } from '../../../globalState/actions/gameActions';
import Carousel from 'react-elastic-carousel';

// Components
import Spinner from '../../layouts/Spinner';

const SimilarGames = ({ id }) => {
  const dispatch = useDispatch();
  const similar = useSelector((state) => state.games.similar);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 3 },
    { width: 850, itemsToShow: 5 },
  ];

  useEffect(() => {
    dispatch(fetchSimilar(id));
  }, [dispatch, id]);

  if (similar.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div
        className="jumbotron container mt-2"
        style={{
          backgroundColor: 'rgba(0,0,0,.75)',
        }}
      >
        <h3 className="text-center">Similar Games</h3>
        <Carousel
          itemsToShow={3}
          breakPoints={breakPoints}
          // enableAutoPlay
          // autoPlaySpeed={4000}
        >
          {similar.map((game) => {
            return (
              <div key={game.id} className="my-2 text-center">
                <Link to={`/info/game/${game.id}`}>
                  <figure className="figure">
                    <img
                      src={game.background_image}
                      className="figure-img img-fluid rounded"
                      style={{
                        display: 'block',
                        height: '200px',
                        width: '200px',
                        objectFit: 'cover',
                        margin: '0 auto',
                      }}
                      alt={game.name}
                    />
                    <figcaption className="figure-caption">
                      {game.name}
                    </figcaption>
                  </figure>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
};

export default SimilarGames;
