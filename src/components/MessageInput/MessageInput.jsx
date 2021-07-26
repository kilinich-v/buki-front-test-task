import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { messagesOperations } from '../../redux/messages';
import { userOperations } from '../../redux/user';

const MessageInput = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);

  const handleMessage = evt => {
    setMessage(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (message === '') return;

    dispatch(messagesOperations.addMessage({ message, user }));
    resetForm();
  };

  const resetForm = () => {
    setMessage('');
  };

  useEffect(() => {
    const userName = prompt('Enter your name', 'Anonymous');

    setUser(userName);
  }, []);

  useEffect(() => {
    dispatch(userOperations.currentUser(user));
  }, [dispatch, user]);

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
