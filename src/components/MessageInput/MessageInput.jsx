import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { messagesOperations } from '../../redux/messages';
import { userOperations } from '../../redux/user';
import styles from './MessageInput.module.css';

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
    <div className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='text'
          value={message}
          onChange={handleMessage}
          placeholder='Type something...'
        />
        <button className={styles.button} type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
