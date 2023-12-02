import { useContext } from "react";
import { FriendContext } from "../../context/CurrentFriend";

import { VideoCameraIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

const ChatHeader = () => {
  const { currentFriend } = useContext(FriendContext);
  if (currentFriend._id) {
    return (
      <div className="flex items-center justify-between bg-[#131021] w-full border-b border-gray-700 dark:border-gray-900 h-[10.5%]">
        <div className="flex w-1/4 items-center justify-evenly mx-2">
          <div className="relative flex items-center justify-center">
            <div className="text-xl w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              {currentFriend.firstName.charAt(0).toUpperCase() +
                currentFriend.lastName.charAt(0).toUpperCase()}
            </div>
            <span className="relative flex h-3 w-3 right-2 top-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
          <div className="text-gray-300">
            <div className="text-lg">
              {currentFriend.firstName + " " + currentFriend.lastName}
            </div>
            <div className="text-xs">Last Seen 1:25PM</div>
          </div>
        </div>
        <div className="flex mx-4 justify-around w-[10%]">
          <VideoCameraIcon className="w-8 h-8 text-gray-400 cursor-pointer hover:text-blue-500 duration-150" />
          <InformationCircleIcon className="w-8 h-8 text-gray-400 cursor-pointer hover:text-yellow-500 duration-150" />
        </div>
      </div>
    );
  }
};

export default ChatHeader;
