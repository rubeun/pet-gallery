import { RECEIVE_DOGS } from '../constants/ActionTypes';

//### DOGS REDUCERS ###
//perform action on state and return a new updated state or orginal state if no action
export default function dogs(state = {}, action) {
  switch(action.type) {
    case RECEIVE_DOGS :
      return {
        ...state, // include original state
        ...action.dogs // add dogs to state
      }
    default :
      return state;
  }
}