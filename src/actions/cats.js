export const RECEIVE_CATS = 'RECEIVE_CATS';

// ### ACTION CREATORS ###

// Async API call to receiveCats
export function receiveCats(cats) {
  return {
    type: RECEIVE_CATS,
    cats
  }
}