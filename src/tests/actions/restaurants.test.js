import { setRestaurants } from '../../actions/restaurants';
import restaurants from '../fixtures/restaurants';
import { SET_RESTAURANTS } from '../../actions/types';

test('should setup restaurants action object properly', () => {
  const action = setRestaurants(restaurants);
  expect(action).toEqual({ type: SET_RESTAURANTS, restaurants });
});
