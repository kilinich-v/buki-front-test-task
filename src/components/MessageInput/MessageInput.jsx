import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { messagesOperations } from '../../redux/messages';

const ENDPOINT = 'https://buki-socket-io.herokuapp.com/';

const MessageInput = () => {
  const dispatch = useDispatch(useDispatch);

  const [response, setResponse] = useState('');

  const [message, setMessage] = useState('');
  const handleMessage = evt => {
    setMessage(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(messagesOperations.addMessage(message));
    resetForm();
  };

  const resetForm = () => {
    setMessage('');
  };

  const socket = io(ENDPOINT);

  useEffect(() => {
    socket.on('FromAPI', data => {
      data.emit('CHAT_MESSAGES', { message: message });
      setResponse(data);
    });

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    return () => socket.disconnect();
  }, [socket, message]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={message}
          onChange={handleMessage}
          placeholder='Type something...'
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default MessageInput;
