import { getInitialData } from '../utils/api';
import { receiveCats } from './cats';
import { receiveDogs } from './dogs';


// ### ACTION CREATORS ###
export function handleInitialData() {
  return (dispatch) => {
    // API call from api.js. When promise resolved, gets cats & dogs
    return getInitialData()
      .then(({cats, dogs}) => {
        dispatch(receiveCats(cats));
        dispatch(receiveDogs(dogs));
      })
  }
}