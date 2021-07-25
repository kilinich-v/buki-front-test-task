import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getMessageRequest,
  getMessageSuccess,
  getMessageError,
  addMessageRequest,
  addMessageSuccess,
  addMessageError
} from './messages-actions';

const messages = createReducer([], {
  [getMessageSuccess]: (_, { payload }) => [...payload],
  [addMessageSuccess]: (state, { payload }) => [...state, payload]
});

const loading = createReducer(false, {
  [getMessageRequest]: () => true,
  [getMessageSuccess]: () => false,
  [getMessageError]: () => false,
  [addMessageRequest]: () => true,
  [addMessageSuccess]: () => false,
  [addMessageError]: () => false
});

const messagesReducer = combineReducers({
  messages,
  loading
});

export default messagesReducer;
