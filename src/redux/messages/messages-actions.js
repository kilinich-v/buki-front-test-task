import { createAction } from '@reduxjs/toolkit';

export const getMessageRequest = createAction('messages/getRequest');
export const getMessageSuccess = createAction('messages/getSuccess');
export const getMessageError = createAction('messages/getError');

export const addMessageRequest = createAction('messages/addRequest');
export const addMessageSuccess = createAction('messages/addSuccess');
export const addMessageError = createAction('messages/addError');
