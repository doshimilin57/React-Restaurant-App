import resultsReducer from '../../reducers/results';
import { SET_RESTAURANTS_COUNT } from '../../actions/types';
import restaurants from '../fixtures/restaurants';

test('should setup state with default values', () => {
  const state = resultsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({ total_entries: 0, page: 1 });
});

test('should setup total_entries into the state properly', () => {
  const state = resultsReducer(undefined, {
    type: SET_RESTAURANTS_COUNT,
    total_entries: restaurants.length,
  });
  expect(state).toEqual({ total_entries: restaurants.length, page: 1 });
});
