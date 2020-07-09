import { SET_RESTAURANTS_COUNT } from '../../actions/types';
import { setRestaurantsCount } from '../../actions/results';

test('should setup setRestaurantsCount Action Object', () => {
  const total_entries = 1;
  expect(setRestaurantsCount(total_entries)).toEqual({
    type: SET_RESTAURANTS_COUNT,
    total_entries,
  });
});
