import { createReducer } from '@reduxjs/toolkit';
import { currentUserSuccess } from './user-actions';

const userReducer = createReducer('', {
  [currentUserSuccess]: (_, { payload }) => payload
});

export default userReducer;
