import ChatInput from "./ChatInput";

const ChatBox = () => {
  return (
    <div className="bg-[#0e0b1c] w-full h-[90%] text-white font-semibold">
      <div className="h-full overflow-y-auto py-2 mx-2">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50 mx-2">12:45</time>
          </div>
          <div className="chat-bubble">You were the Chosen One!</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        {/* Chat End */}
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50 mx-2">12:46</time>
          </div>
          <div className="chat-bubble">It's Daisy UI</div>
          <div className="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </div>
      <div className="absolute bottom-0 w-4/6 mb-4">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatBox;
