import { configureStore } from '@reduxjs/toolkit';

import messagesReducer from './messages/messages-reducer';
import userReducer from './user/user-reducer';

const store = configureStore({
  reducer: {
    chat: messagesReducer,
    user: userReducer
  }
});

// eslint-disable-next-line import/no-anonymous-default-export
export default store;
