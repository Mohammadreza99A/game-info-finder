import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGame } from '../../../globalState/actions/gameActions';
import { Helmet } from 'react-helmet';

// Components
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

// Styles
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

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
      <Jumbotron
        className="my-5"
        style={{
          background: `linear-gradient(rgba(0,0,0,.75), rgba(0,0,0,.75)), url(${game.background_image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '100%',
          height: '100%',
        }}
      >
        <Card
          className="container p-0"
          style={{ backgroundColor: 'rgba(0,0,0,.75)' }}
        >
          <Helmet>
            <title>Game Info Finder | Info Page</title>
          </Helmet>
          <Card.Header className="text-center">
            <Card.Title>
              <h1>{game.name}</h1>
            </Card.Title>
            <Card.Subtitle className="mb-1 text-muted">
              <GameGenres genres={game.genres} />
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Row className="text-center lead">
              <Col sm={6} className="mb-4 px-2">
                <div className="border border-warning rounded">
                  <ListGroup>
                    <ListGroup.Item>
                      <GameRating
                        rating={game.rating}
                        ratingTop={game.rating_top}
                      />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <GameStores stores={game.stores}></GameStores>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <GameWebsite website={game.website} />
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
              <Col sm={6} className="mb-4 px-2">
                <div className="border border-warning rounded">
                  <ListGroup>
                    <ListGroup.Item>Released: {game.released}</ListGroup.Item>
                    <ListGroup.Item>
                      <GameDevelopers developers={game.developers} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <GameBG bgImg={game.background_image} />
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </Col>
            </Row>
            <hr />
            <GameRatings ratings={game.ratings} />
            <hr />
            <GameDescription description={game.description_raw} />
            <hr />
            <GamePlatforms platforms={game.platforms} />
          </Card.Body>
          <Card.Footer className="text-center text-muted">
            <GameTags tags={game.tags} />
          </Card.Footer>
        </Card>

        {/* <SimilarGames id={id} /> */}
      </Jumbotron>
    );
  }
}

export default GameInfo;
