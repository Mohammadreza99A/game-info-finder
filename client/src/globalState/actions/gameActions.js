import { FETCH_GAMES, CHANGE_HEADING, FETCH_GAME } from './types';
import { GraphQLClient } from 'graphql-request';

// Queries
import {
  fetchPopularQuery,
  fetchGameQuery,
  fetchSearchQuery,
} from './gameQueries';

const client = new GraphQLClient('http://localhost:5000/graphql', {
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

export const fetchSearch = (search) => (dispatch) => {
  client.request(fetchSearchQuery, { search }).then((data) => {
    dispatch({
      type: FETCH_GAMES,
      payload: data.search,
    });
  });
};

export const changeHeading = (heading) => (dispatch) => {
  dispatch({
    type: CHANGE_HEADING,
    payload: heading,
  });
};
