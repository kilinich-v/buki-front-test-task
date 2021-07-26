import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { messagesSelector } from '../../redux/messages';
import Container from '../Container';
import styles from './Header.module.css';

const Header = () => {
  const messages = useSelector(messagesSelector.getMessages);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const uniqUsers = [];
    messages.forEach(({ user }) => {
      if (!uniqUsers.includes(user)) {
        uniqUsers.push(user);
      }
    });

    setUsers(uniqUsers);
  }, [messages, setUsers]);

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>My Chat</h1>
          <p className={styles.messagesInfo}>
            {users.length} users {messages.length} messages
          </p>
        </div>
        <div className={styles.headerRight}>
          <p className={styles.timeLastMessage}>
            Last message: 2019-08/18 15:15:07
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Header;
