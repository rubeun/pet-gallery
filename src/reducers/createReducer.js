import _ from 'lodash';

/**
 * Outlines a reducer using an object. The default case
 * is handled by returning the current state.
 * @param {object} initialState initial state of the store substate
 * @param {object} reduceObj object describing the output
 * reducer. Keys represent a type which will call for the
 * evaluation of the corresponding value function, of the
 * same signature as the reducer function:
 *  (state, action) => state
 * Note: If the incoming action type does not match any keys
 * in the output reducer, the original state is returned
 * @returns {function} reducer function
 */
const createReducer = (initialState, reduceObj) => (state = initialState, action) => {
  const { type } = action;
  const reduceFunc = reduceObj[type] || _.identity;

  return reduceFunc(state, action);
};

export default createReducer;
