import React from 'react';
import { shallow } from 'enzyme';
import { RestaurantList } from '../../components/RestaurantList';
import restaurants from '../fixtures/restaurants';

test('should render restaurants list with restaurants', () => {
  const wrapper = shallow(<RestaurantList restaurants={restaurants} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render restaurants list with empty array', () => {
  const wrapper = shallow(<RestaurantList restaurants={[]} />);
  expect(wrapper).toMatchSnapshot();
});
