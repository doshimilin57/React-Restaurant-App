import axios from 'axios';
import { SET_RESTAURANTS, SHOW_MORE_RESTAURANTS, SET_PAGE } from './types';
import { setRestaurantsCount } from './results';

// SET_RESTAURANTS
export const setRestaurants = (restaurants) => ({
  type: SET_RESTAURANTS,
  restaurants,
});

// SHOW_MORE_RESTAURANTS
export const setShowMoreRestaurants = (restaurants) => ({
  type: SHOW_MORE_RESTAURANTS,
  restaurants,
});

// SHOW_MORE_RESTAURANTS
export const setPage = (page) => ({
  type: SET_PAGE,
  page,
});

export const startSearchRestaurants = (city = '') => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `http://opentable.herokuapp.com/api/restaurants?city=${city}&per_page=25&page=1`
      );
      dispatch(setRestaurants(res.data.restaurants));
      dispatch(setRestaurantsCount(res.data.total_entries));
    } catch (e) {
      console.log(e, e.response);
    }
  };
};

export const startShowMoreRestaurants = (city = '') => {
  return async (dispatch, getState) => {
    try {
      const page = getState().results.page || 1;
      const res = await axios.get(
        `http://opentable.herokuapp.com/api/restaurants?city=${city}&per_page=25&page=${
          page + 1
        }`
      );
      dispatch(setShowMoreRestaurants(res.data.restaurants));
      dispatch(setPage(page + 1));
    } catch (e) {
      console.log(e, e.response);
    }
  };
};
