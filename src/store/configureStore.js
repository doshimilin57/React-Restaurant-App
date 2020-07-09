import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import restaurantsReducer from '../reducers/restaurants';
import filtersReducer from '../reducers/filters';
import resultsReducer from '../reducers/results';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      restaurants: restaurantsReducer,
      filters: filtersReducer,
      results: resultsReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
