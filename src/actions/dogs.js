import { RECEIVE_DOGS } from '../constants/ActionTypes';

// ### ACTION CREATORS ###

// Async API call to receiveDogs
export function receiveDogs(dogs) {
  return {
    type: RECEIVE_DOGS,
    dogs
  }
}

