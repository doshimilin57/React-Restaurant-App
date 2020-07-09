import React from 'react';
import { shallow } from 'enzyme';
import RestaurantListItem from '../../components/RestaurantListItem';
import restaurants from '../fixtures/restaurants';

test('should render books list item with book', () => {
  const wrapper = shallow(<RestaurantListItem {...restaurants[0]} />);
  expect(wrapper).toMatchSnapshot();
});
