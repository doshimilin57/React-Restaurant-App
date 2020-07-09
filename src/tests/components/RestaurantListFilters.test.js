import React from 'react';
import { shallow } from 'enzyme';
import { RestaurantListFilters } from '../../components/RestaurantListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, startSearchRestaurants, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  startSearchRestaurants = jest.fn();
  wrapper = shallow(
    <RestaurantListFilters
      setTextFilter={setTextFilter}
      startSearchRestaurants={startSearchRestaurants}
      filters={filters}
      city={'toronto'}
    />
  );
});

test('should render RestaurantListFilters properly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render RestaurantListFilters with altFilters properly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle form submission properly', () => {
  const value = 'toronto';
  wrapper.find('input').at(0).simulate('change', { target: { value } });
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {},
  });
  expect(startSearchRestaurants).toHaveBeenLastCalledWith(value);
});

test('should handle city texbox change properly', () => {
  const value = 'toronto';
  wrapper.find('input').at(0).simulate('change', { target: { value } });
  expect(wrapper.state('city')).toBe(value);
});

test('should handle filter textbox change properly', () => {
  const value = 'toronto';
  wrapper.find('input').at(1).simulate('change', { target: { value } });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});
