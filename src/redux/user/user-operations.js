import { currentUserSuccess } from './user-actions';

export const currentUser = user => async dispatch => {
  await dispatch(currentUserSuccess(user));
};
