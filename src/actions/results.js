import { SET_RESTAURANTS_COUNT } from './types';

export const setRestaurantsCount = (total_entries) => ({
  type: SET_RESTAURANTS_COUNT,
  total_entries,
});
