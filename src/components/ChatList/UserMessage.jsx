import { useState } from 'react';
import styles from './ChatList.module.css';

const UserMessage = ({ userMessage, handleSubmit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleChange = evt => {
    setCurrentMessage(evt.target.value);
  };

  const { id, user, avatar, created_at, message } = userMessage;

  return (
    <>
      {isEdit ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit({
              id,
              user,
              avatar,
              created_at,
              message: currentMessage
            });
            setIsEdit(false);
          }}>
          <input
            onChange={handleChange}
            className={styles.input}
            type='text'
            value={currentMessage}
          />
        </form>
      ) : (
        <p onClick={handleEdit} className={styles.message}>
          {message}
        </p>
      )}
    </>
  );
};

export default UserMessage;
