import { createAction } from '@reduxjs/toolkit';

export const getMessageRequest = createAction('messages/getRequest');
export const getMessageSuccess = createAction('messages/getSuccess');
export const getMessageError = createAction('messages/getError');

export const addMessageRequest = createAction('messages/addRequest');
export const addMessageSuccess = createAction('messages/addSuccess');
export const addMessageError = createAction('messages/addError');

export const changeMessageRequest = createAction('messages/changeRequest');
export const changeMessageSuccess = createAction('messages/changeSuccess');
export const changeMessageError = createAction('messages/changeError');

export const deleteMessageRequest = createAction('messages/deleteRequest');
export const deleteMessageSuccess = createAction('messages/deleteSuccess');
export const deleteMessageError = createAction('messages/deleteError');
