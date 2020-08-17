import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Game from './Game';
import SearchPagination from './SearchPagination';

// Styles
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import { fetchSearch } from '../../globalState/actions/gameActions';

// Styles
import Card from 'react-bootstrap/Card';

const SearchResults = (props) => {
  const { searchQuery } = props.location.state;
  const dispatch = useDispatch();
  const search = useSelector((state) => state.games.search);
  const history = useHistory();
  let [currentPage, setCurrentPage] = useState(1);

  const getPrevPage = () => {
    if (typeof search !== 'undefined' && search.previous) {
      dispatch(fetchSearch(searchQuery, currentPage - 1));
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const getFirstPage = () => {
    dispatch(fetchSearch(searchQuery, 1));
    setCurrentPage(1);
  };

  const getNextPage = () => {
    if (typeof search !== 'undefined' && search.next) {
      dispatch(fetchSearch(searchQuery, currentPage + 1));
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  if (
    typeof search === 'undefined' ||
    search === null ||
    Object.keys(search).length === 0
  ) {
    history.push('/');
    return <></>;
  } else {
    return (
      <Container>
        <Card className="shadow-lg mb-4 p-3">
          <Card.Body>
            <Card.Title as="h3" className="text-center mb-4">
              Search Results
            </Card.Title>
            <SearchPagination
              currentPage={currentPage}
              getPrevPage={getPrevPage}
              getFirstPage={getFirstPage}
              getNextPage={getNextPage}
              search={search}
            />
            <CardColumns>
              {search.results.length > 0 &&
                search.results.map((game) => (
                  <Game key={game.id} game={game} />
                ))}
            </CardColumns>
            <SearchPagination
              currentPage={currentPage}
              getPrevPage={getPrevPage}
              getFirstPage={getFirstPage}
              getNextPage={getNextPage}
              search={search}
            />
          </Card.Body>
        </Card>
      </Container>
    );
  }
};

export default SearchResults;
