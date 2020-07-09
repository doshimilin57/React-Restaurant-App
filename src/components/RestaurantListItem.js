import React from 'react';
import numeral from 'numeral';

const RestaurantListItem = ({
  id,
  name,
  price,
  address,
  city,
  state,
  country,
  postal_code,
}) => (
  <div className="list-item">
    <div>
      <h3 className="list-item__title">{name}</h3>
      <span className="list-item__sub-title">
        {address}
        {', '}
        {city}
        {', '}
        {state}
        {', '}
        {country}
        {', '}
        {postal_code}
      </span>
    </div>
    <h3 className="list-item__data">{numeral(price).format('$0,0.00')}</h3>
  </div>
);

export default RestaurantListItem;
