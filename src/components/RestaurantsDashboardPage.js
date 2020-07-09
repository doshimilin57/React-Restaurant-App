import React from "react";
import RestaurantList from "./RestaurantList";
import RestaurantListFilters from "./RestaurantListFilters";

const RestaurantsDashboardPage = () => (
  <div>
    <RestaurantListFilters />
    <RestaurantList />
  </div>
);

export default RestaurantsDashboardPage;
