import {
  FETCH_GAMES,
  FETCH_SEARCH,
  FETCH_GAME,
  FETCH_SIMILAR,
  // CHANGE_HEADING,
} from './types';
import { GraphQLClient } from 'graphql-request';

// Queries
import {
  fetchPopularQuery,
  fetchGameQuery,
  fetchSimilarQuery,
  fetchSearchQuery,
} from './gameQueries';

const client = new GraphQLClient('/graphql', {
  headers: {},
});

export const fetchPopular = () => (dispatch) => {
  client.request(fetchPopularQuery, null).then((data) => {
    dispatch({
      type: FETCH_GAMES,
      payload: data.games,
    });
  });
};

export const fetchGame = (id) => (dispatch) => {
  client.request(fetchGameQuery, { id }).then((data) => {
    dispatch({
      type: FETCH_GAME,
      payload: data.game,
    });
  });
};

export const fetchSimilar = (id) => (dispatch) => {
  client.request(fetchSimilarQuery, { id }).then((data) => {
    dispatch({
      type: FETCH_SIMILAR,
      payload: data.similar,
    });
  });
};

export const fetchSearch = (search, page) => (dispatch) => {
  client.request(fetchSearchQuery, { search, page }).then((data) => {
    dispatch({
      type: FETCH_SEARCH,
      payload: data.search,
    });
  });
};

// export const changeHeading = (heading) => (dispatch) => {
//   dispatch({
//     type: CHANGE_HEADING,
//     payload: heading,
//   });
// };
