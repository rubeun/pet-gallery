import { RECEIVE_CATS } from '../constants/ActionTypes';

// ### ACTION CREATORS ###

// Async API call to receiveCats
export function receiveCats(cats) {
  return {
    type: RECEIVE_CATS,
    cats
  }
}