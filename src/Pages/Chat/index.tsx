import ChatBox from "./ChatBox";
import ChatHeader from "../components/ChatHeader";
import { MessageProvider } from "../../context/Messages";

const Chat = () => {
  return (
    <div className="w-3/5 xl:block hidden">
      <MessageProvider>
        <ChatHeader />
        <ChatBox />
      </MessageProvider>
    </div>
  );
};

export default Chat;
