// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './actions';

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
export default filter;

// export default combineReducers({
//   filter,
// });
