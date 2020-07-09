import moment from 'moment';

// Get visible restaurants

export default (restaurants, { text }) => {
  return restaurants.filter((restaurant) => {
    const textMatch = restaurant.name
      .toLowerCase()
      .includes(text.toLowerCase());
    const addressMatch = restaurant.address
      .toLowerCase()
      .includes(text.toLowerCase());
    const areaMatch = restaurant.area
      .toLowerCase()
      .includes(text.toLowerCase());
    const cityMatch = restaurant.city
      .toLowerCase()
      .includes(text.toLowerCase());
    const stateMatch = restaurant.state
      .toLowerCase()
      .includes(text.toLowerCase());
    const postalCodeMatch = restaurant.postal_code
      .toLowerCase()
      .includes(text.toLowerCase());
    return (
      textMatch ||
      addressMatch ||
      areaMatch ||
      cityMatch ||
      stateMatch ||
      postalCodeMatch
    );
  });
};
