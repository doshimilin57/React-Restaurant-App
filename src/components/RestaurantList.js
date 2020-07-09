import React from 'react';
import { connect } from 'react-redux';
import RestaurantListItem from './RestaurantListItem';
import selectRestaurants from '../selectors/restaurants';

export const RestaurantList = ({ restaurants }) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Restaurants</div>
      <div className="show-for-desktop">Restaurant</div>
      <div className="show-for-desktop">Price</div>
    </div>
    <div className="list-body">
      {restaurants.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No results!</span>
        </div>
      ) : (
        restaurants.map((restaurant) => {
          return <RestaurantListItem key={restaurant.id} {...restaurant} />;
        })
      )}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    restaurants: selectRestaurants(state.restaurants, state.filters),
  };
};

export default connect(mapStateToProps)(RestaurantList);
