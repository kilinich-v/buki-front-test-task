import { createAction } from '@reduxjs/toolkit';

export const currentUserRequest = createAction('user/currentRequest');
export const currentUserSuccess = createAction('user/currentSuccess');
export const currentUserError = createAction('user/currentError');
