import React from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";
import selectRestaurants from "../selectors/restaurants";
import {
  startSearchRestaurants,
  startShowMoreRestaurants,
} from "../actions/restaurants";

export class RestaurantListFilters extends React.Component {
  state = {
    city: "",
    displayRefineBox: false,
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onCityChange = (e) => {
    const city = e.target.value;
    this.setState(() => ({ city }));
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.startSearchRestaurants(this.state.city);
  };

  startShowMoreRestaurants = (e) => {
    e.preventDefault();
    this.props.startShowMoreRestaurants(this.state.city);
  };

  render() {
    return (
      <div className="content-container list-filters">
        <form onSubmit={this.submitHandler}>
          <div className="input-group">
            <div className="input-group__item">
              <input
                type="text"
                className="text-input"
                placeholder="Enter City"
                aria-labelledby="lblCity"
                tabindex="-1"
                value={this.state.city}
                onChange={this.onCityChange}
              />
            </div>
            <div className="input-group__item">
              <input
                type="text"
                className="text-input"
                // placeholder="Filter(Name, Address, Area)"
                placeholder="Filter Data"
                aria-labelledby="lblFilter"
                tabindex="-1"
                value={this.props.filters.text}
                onChange={this.onTextChange}
              />
            </div>
            <div>
              <button type="submit" className="button">
                Search
              </button>
            </div>
            <div>
              <button
                type="click"
                className="button button--link"
                onClick={this.startShowMoreRestaurants}
                disabled={
                  this.props.restaurantCount >= this.props.total_entries
                }
              >
                Show More
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const visibleRestaurants = selectRestaurants(
    state.restaurants,
    state.filters
  );
  return {
    filters: state.filters,
    total_entries: state.results.total_entries,
    restaurantCount: visibleRestaurants.length,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  startSearchRestaurants: (city) => dispatch(startSearchRestaurants(city)),
  startShowMoreRestaurants: (city) => dispatch(startShowMoreRestaurants(city)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantListFilters);
