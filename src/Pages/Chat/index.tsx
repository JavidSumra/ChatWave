import ChatBox from "./ChatBox";
import ChatHeader from "./ChatHeader";

const Chat = () => {
  return (
    <div className="w-4/6 xl:block hidden">
      <ChatHeader />
      <ChatBox />
    </div>
  );
};

export default Chat;
