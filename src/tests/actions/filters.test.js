import { setTextFilter } from '../../actions/filters';
import { SET_TEXT_FILTER } from '../../actions/types';

test('should setup setTextFilter Action Object with default value', () => {
  expect(setTextFilter()).toEqual({ type: SET_TEXT_FILTER, text: '' });
});

test('should setup setTextFilter Action Object', () => {
  const text = 'toronto';
  expect(setTextFilter(text)).toEqual({ type: SET_TEXT_FILTER, text });
});
