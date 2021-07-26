import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messagesOperations, messagesSelector } from '../../redux/messages';
import { userSelector } from '../../redux/user';
import Container from '../Container';
import { HeartIcon } from '../Icons';
import styles from './ChatList.module.css';

const ChatList = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const messages = useSelector(messagesSelector.getMessages);
  const currentUser = useSelector(userSelector.getUser);

  const autoScrollChat = ref => {
    const scrollHeight = ref.current.scrollHeight;

    ref.current.scrollTo({
      top: scrollHeight,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    autoScrollChat(ref);
  });

  useEffect(() => {
    dispatch(messagesOperations.getMessages());
  }, [dispatch]);

  return (
    <div className={styles.section}>
      <Container>
        <ul ref={ref} className={styles.list}>
          {messages.map(({ id, user, avatar, created_at, message }) =>
            currentUser === user ? (
              <li className={styles.itemCurrent} key={id}>
                <img
                  className={styles.image}
                  src={avatar}
                  alt={`${user}'s avatar`}
                />
                <div className={styles.textContent}>
                  <h6 className={styles.name}>{user}</h6>
                  <p className={styles.message}>{message}</p>
                  <p className={styles.time}>{created_at}</p>
                </div>
              </li>
            ) : (
              <li className={styles.item} key={id}>
                <img
                  className={styles.image}
                  src={avatar}
                  alt={`${user}'s avatar`}
                />
                <div className={styles.textContent}>
                  <h6 className={styles.name}>{user}</h6>
                  <p className={styles.message}>{message}</p>
                  <p className={styles.time}>{created_at}</p>

                  <HeartIcon className={styles.heart} />
                </div>
              </li>
            )
          )}
        </ul>
      </Container>
    </div>
  );
};

export default ChatList;
