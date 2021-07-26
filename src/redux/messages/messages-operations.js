import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import {
  getMessageRequest,
  getMessageSuccess,
  getMessageError,
  addMessageRequest,
  addMessageSuccess,
  addMessageError
} from './messages-actions';
import messagesDB from '../../db/b13799bf-0bf4-4a74-bf46-b7a2fb35a8c8.json';

export const getMessages = () => dispatch => {
  dispatch(getMessageRequest());

  const data = new Promise((res, rej) => {
    res(dispatch(getMessageSuccess(messagesDB)));
  });

  data.then(data => data).catch(err => dispatch(getMessageError(err)));
};

export const addMessage = ({ message, user }) => dispatch => {
  const newMessage = {
    id: uuidv4(),
    user,
    avatar: 'https://i.pravatar.cc/300?img=12',
    created_at: moment().format('YYYY-DD-MM h:mm:ss'),
    message
  };

  dispatch(addMessageRequest());

  const data = new Promise((res, rej) => {
    res(dispatch(addMessageSuccess(newMessage)));
  });

  data.then(data => data).catch(err => dispatch(addMessageError(err)));
};
