import {
  FETCH_GAMES,
  FETCH_GAME,
  FETCH_SEARCH,
  FETCH_SIMILAR,
  // CHANGE_HEADING,
} from '../actions/types';

const intialState = {
  items: [],
  item: {},
  similar: [],
  search: [],
  // heading: 'Popular Games',
};

export default function (state = intialState, action) {
  switch (action.type) {
    case FETCH_GAMES:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_GAME:
      return {
        ...state,
        item: action.payload,
      };
    case FETCH_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case FETCH_SIMILAR:
      return {
        ...state,
        similar: action.payload,
      };
    // case CHANGE_HEADING:
    //   return {
    //     ...state,
    //     heading: action.payload,
    //   };
    default:
      return state;
  }
}
