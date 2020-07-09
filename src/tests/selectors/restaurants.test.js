import selectRestaurants from '../../selectors/restaurants';
import restaurants from '../fixtures/restaurants';

test('should filter by restaurants by name', () => {
  const filters = {
    text: 'Edulis Restaurant',
  };
  const result = selectRestaurants(restaurants, filters);
  expect(result).toEqual([restaurants[0]]);
});

test('should filter by restaurants by address', () => {
  const filters = {
    text: '655 Dixon Rd.',
  };
  const result = selectRestaurants(restaurants, filters);
  expect(result).toEqual([restaurants[1]]);
});

test('should filter by restaurants by area', () => {
  const filters = {
    text: 'Toronto / SW Ontario',
  };
  const result = selectRestaurants(restaurants, filters);
  expect(result).toEqual([...restaurants]);
});
