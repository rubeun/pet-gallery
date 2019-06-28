export const RECEIVE_DOGS = 'RECEIVE_DOGS';

// ### ACTION CREATORS ###

// Async API call to receiveDogs
export function receiveDogs(dogs) {
  return {
    type: RECEIVE_DOGS,
    dogs
  }
}

