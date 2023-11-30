import ChatBox from "./ChatBox";
import ChatHeader from "../components/ChatHeader";

const Chat = () => {
  return (
    <div className="w-3/5 xl:block hidden">
      <ChatHeader />
      <ChatBox />
    </div>
  );
};

export default Chat;
