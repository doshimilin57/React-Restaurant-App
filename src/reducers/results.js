// Restaurants Reducer

import { SET_RESTAURANTS_COUNT, SET_PAGE } from '../actions/types';

const resultsReducerDefaultState = { total_entries: 0, page: 1 };

export default (state = resultsReducerDefaultState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS_COUNT:
      return { ...state, total_entries: action.total_entries };
    case SET_PAGE:
      return {
        ...state,
        page: action.page,
      };
    default:
      return state;
  }
};
