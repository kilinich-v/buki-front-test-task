import Header from '../components/Header';
import ChatList from '../components/ChatList';
import MessageInput from '../components/MessageInput';
import Footer from '../components/Footer';

const ChatView = () => {
  return (
    <div>
      <Header />
      <ChatList />
      <MessageInput />
      <Footer />
    </div>
  );
};

export default ChatView;
