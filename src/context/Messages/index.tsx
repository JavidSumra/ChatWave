import React, { createContext, useState } from "react";

export interface Message {
  senderId: string;
  msg: string;
}

interface MessageContextProps {
  messages: Message[]; // Update here
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>; // Update here
}

const MessageContext = createContext<MessageContextProps>({
  messages: [],
  setMessages: () => {},
});

const MessageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]); // Update here

  const valueToShare = {
    messages,
    setMessages,
  };

  return (
    <MessageContext.Provider value={valueToShare}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContext, MessageProvider };
