import filtersReducer from '../../reducers/filters';
import { SET_TEXT_FILTER } from '../../actions/types';

test('should setup state with default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
  });
});

test('should setup the variable text in state with given input text', () => {
  const text = 'toronto';
  const state = filtersReducer(undefined, { type: SET_TEXT_FILTER, text });
  expect(state.text).toBe(text);
});
