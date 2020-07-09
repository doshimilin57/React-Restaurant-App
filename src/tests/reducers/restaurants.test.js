import restaurantsReducer from '../../reducers/restaurants';
import { SET_RESTAURANTS } from '../../actions/types';
import restaurants from '../fixtures/restaurants';

test('should setup state with default values i.e. an empty array', () => {
  const state = restaurantsReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should setup state with passed in restaurants array', () => {
  const state = restaurantsReducer(undefined, {
    type: SET_RESTAURANTS,
    restaurants,
  });
  expect(state).toEqual(restaurants);
});
