import React from 'react';
import { shallow } from 'enzyme';
import RestaurantsDashboardPage from '../../components/RestaurantsDashboardPage';

test('should render RestaurantsDashboardPage properly', () => {
  const wrapper = shallow(<RestaurantsDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
