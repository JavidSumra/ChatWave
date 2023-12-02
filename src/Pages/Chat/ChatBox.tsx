import ChatInput from "./ChatInput";
import { useContext } from "react";
import { FriendContext } from "../../context/CurrentFriend";
import { nanoid } from "nanoid";
import { Message } from "../../context/Messages";
import { MessageContext } from "../../context/Messages";
import NoChat from "../../assets/NoChat.png";

const ChatBox = () => {
  const User = JSON.parse(localStorage.getItem("userData") ?? "");
  const { currentFriend } = useContext(FriendContext);
  const { messages } = useContext(MessageContext);

  return (
    <div
      className={`bg-[#0e0b1c] w-full  ${
        currentFriend._id ? "max-h-[89.5%]" : "max-h-full"
      } h-full text-white font-semibold overflow-hidden`}
    >
      {!currentFriend._id ? (
        <div className="flex items-center justify-center h-full">
          <img src={NoChat} alt="Start Your Conversations" className="invert" />
        </div>
      ) : (
        <div className="h-[78%] w-full py-2 mx-2 overflow-y-auto">
          {messages.map((message: Message) => (
            <div
              className={`chat ${
                message.senderId === User._id ? "chat-end mx-2" : "chat-start"
              }  p-2 m-2"`}
              key={nanoid()}
            >
              <div className="chat-image avatar">
                <div className="w-10 h-10 rounded-full bg-gray-800">
                  <div className="flex items-center justify-center h-full">
                    {message.senderId === User._id
                      ? User.firstName.charAt(0).toUpperCase() +
                        User.lastName.charAt(0).toUpperCase()
                      : currentFriend.firstName.charAt(0).toUpperCase() +
                        currentFriend.lastName.charAt(0).toUpperCase()}
                  </div>
                </div>
              </div>
              <div className="chat-header">
                {message.senderId === User._id
                  ? User.firstName + " " + User.lastName
                  : currentFriend.firstName + " " + currentFriend.lastName}
                <time className="text-xs opacity-50 mx-2">12:45</time>
              </div>
              <div className="chat-bubble">{message.msg}</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
          ))}
        </div>
      )}
      <div className="absolute bottom-0 w-4/6 mb-4">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatBox;
