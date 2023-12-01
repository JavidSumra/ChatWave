import { useContext, useEffect, useState } from "react";
import RandomEmoji from "./Emojigenerator";

import { FriendContext } from "../../context/CurrentFriend";
import socket from "../../context/socket";

const ChatInput = () => {
  const User = JSON.parse(localStorage.getItem("userData") ?? "");
  const { currentFriend } = useContext(FriendContext);

  const [emoji, setEmoji] = useState(RandomEmoji());
  const [userInput, setUserInput] = useState("");

  const handleClick = () => {
    setUserInput(userInput + emoji);
  };
  const sendMsg = () => {
    socket.emit("send_msg", {
      senderId: User._id,
      receiverId: currentFriend._id,
      msg: userInput,
    });
  };
  useEffect(() => {
    socket.on("receive_msg", (data) => {
      console.log(data);
      alert(data.msg);
    });
  }, [socket]);

  useEffect(() => {
    socket.emit("addUser", User._id);
    // socket.on("getUsers", (users: any) => {
    //   // console.log(users);
    // });
  }, []);
  return (
    <div>
      <div
        className={`px-4 pt-4 mb-2 sm:mb-0 w-[90%] ${
          currentFriend._id ? "" : "hidden"
        }`}
      >
        <div className="relative flex">
          <span className="absolute inset-y-0 flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                ></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 focus:text-white placeholder-gray-600 pl-12 bg-purple-950/70 focus:bg-purple-950/75 rounded-md py-3"
          />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full h-15 w-15 transition duration-500 ease-in-out text-gray-200 focus:outline-none"
              onMouseOver={() => setEmoji(RandomEmoji())}
              onClick={handleClick}
            >
              {emoji}
            </button>
            <button
              type="button"
              onClick={sendMsg}
              className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-gray-200 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-6 w-6 ml-2 transform rotate-90"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
