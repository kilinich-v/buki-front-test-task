import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { messagesOperations, messagesSelector } from '../../redux/messages';

const ChatList = () => {
  const dispatch = useDispatch();

  const messages = useSelector(messagesSelector.getMessages);

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  });

  useEffect(() => {
    dispatch(messagesOperations.getMessages());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {messages.map(({ id, user, avatar, created_at, message }) => (
          <li key={id}>
            <img src={avatar} alt={`${user}'s avatar`} />
            <h6>{user}</h6>
            <p>{message}</p>
            <p>{created_at}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
