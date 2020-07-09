// Restaurants Reducer

import { SET_RESTAURANTS, SHOW_MORE_RESTAURANTS } from '../actions/types';

const restaurantsReducerDefaultState = [];

export default (state = restaurantsReducerDefaultState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return action.restaurants;
    case SHOW_MORE_RESTAURANTS:
      return [...state, ...action.restaurants];
    default:
      return state;
  }
};
