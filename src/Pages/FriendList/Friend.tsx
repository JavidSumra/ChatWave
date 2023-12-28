import { useContext, useEffect, useMemo, useState } from "react";
import socket from "../../context/socket";
import { FriendContext } from "../../context/CurrentFriend";

const User = (User: any) => {
  const LoggedInUser = JSON.parse(localStorage.getItem("userData") ?? "");
  const [notificationCount, setNotificationCount] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState("");

  const { currentFriend, setCurrentFriend } = useContext(FriendContext);

  const joinRoom = (id: string, User: any) => {
    setNotificationCount(0);
    socket.emit("join_room", { id });
    setCurrentFriend(User);
  };

  useEffect(() => {
    console.log(currentFriend);
    setSelectedUserId(currentFriend._id);
    console.log(selectedUserId);
  }, [currentFriend]);

  const { firstName, lastName, _id } = User.User;

  useEffect(() => {
    console.log(selectedUserId);
    socket.on("receive_msg", (data: any) => {
      const condition =
        data?.receiverId == LoggedInUser?._id &&
        // data?.senderId != selectedUserId &&
        data?.senderId == _id &&
        selectedUserId != _id;

      if (condition) {
        setNotificationCount((prev) => prev + 1);
      } else if (currentFriend._id == selectedUserId) {
        setNotificationCount(0);
      }
    });
  }, [socket, selectedUserId]);

  return (
    <div
      className="flex w-full hover:bg-purple-900/25 rounded items-center justify-between py-2 cursor-pointer"
      onClick={() => joinRoom(_id, User.User)}
    >
      <div>
        <div className="relative flex items-center justify-center">
          <span className="relative flex h-5 w-5 -right-2 -top-3 items-center justify-center  ">
            <span
              className={`font-bold z-10 text-white text-xm ${
                notificationCount > 0 ? "" : "hidden"
              }`}
            >
              {notificationCount}
            </span>
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-rose-600 ${
                notificationCount > 0 ? "" : "hidden"
              }`}
            ></span>
          </span>
          <div className="text-xl w-11 h-11 rounded-full dark:bg-gray-100 bg-gray-600 flex items-center justify-center">
            {firstName?.charAt(0).toUpperCase() +
              lastName?.charAt(0).toUpperCase()}
          </div>
          <span className="relative flex h-3 w-3 right-2 top-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full dark:text-white text-black">
        <div className="flex text-lg w-full items-center justify-between font-semibold">
          <div>{firstName + " " + lastName}</div>
          <div className="mr-4 text-xs">8:54 AM</div>
        </div>
        <div className="text-xs">This is My first Message</div>
      </div>
    </div>
  );
};

export default User;
