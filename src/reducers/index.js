import { combineReducers } from 'redux';
import example from './example';
import cats from './cats';
import dogs from './dogs';

/**
 * Note: router must be stored as router,
 * as expected by react-router-redux
 */
export default combineReducers({
  example,
  cats,
  dogs
});
