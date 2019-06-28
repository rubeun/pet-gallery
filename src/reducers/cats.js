import { RECEIVE_CATS } from '../constants/ActionTypes';

// ### CATS REDUCERS ###
// perform action on state and return a new updated state or orginal state if no action
export default function cats(state = {}, action) {
  switch(action.type) {
    case RECEIVE_CATS :
      return {
        ...state, // include original state
        ...action.cats // add cats to state
      }
    default :
      return state;
  }
}