import { FETCH_GAMES, CHANGE_HEADING, FETCH_GAME } from '../actions/types';

const intialState = {
  heading: 'Popular Games',
  items: [],
  item: {},
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
    case CHANGE_HEADING:
      return {
        ...state,
        heading: action.payload,
      };
    default:
      return state;
  }
}
