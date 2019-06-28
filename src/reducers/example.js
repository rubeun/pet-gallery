import createReducer from './createReducer';

import {
  EXAMPLE_ACTION,
} from '../constants/ActionTypes';

const initialState = {
  happened: false,
};

function somethingHappened(state) {
  return {
    ...state,
    happened: true,
  };
}

export default createReducer(initialState, {
  [EXAMPLE_ACTION]: somethingHappened,
});
