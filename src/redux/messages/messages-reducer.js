import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getMessageRequest,
  getMessageSuccess,
  getMessageError,
  addMessageSuccess,
  changeMessageSuccess,
  deleteMessageSuccess
} from './messages-actions';

const messages = createReducer([], {
  [getMessageSuccess]: (_, { payload }) => [...payload],
  [addMessageSuccess]: (state, { payload }) => [...state, payload],
  [changeMessageSuccess]: (state, { payload }) =>
    state.reduce(
      (acc, userMessage) =>
        userMessage.id === payload.id
          ? [...acc, payload]
          : [...acc, userMessage],
      []
    ),
  [deleteMessageSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload)
});

const loading = createReducer(false, {
  [getMessageRequest]: () => true,
  [getMessageSuccess]: () => false,
  [getMessageError]: () => false
});

const messagesReducer = combineReducers({
  messages,
  loading
});

export default messagesReducer;
