import { configureStore } from '@reduxjs/toolkit';

import messagesReducer from './messages/messages-reducer';

const store = configureStore({
  reducer: {
    chat: messagesReducer
  }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default store;
