import { useEffect, useState } from "react";
import AddNewFriend from "./AddNewFriend";
import Friend from "./Friend";
import { API_ENDPOINT } from "../../config/constant";
import socket from "../../context/socket";

export interface FriendInterface {
  _id: string;
  firstName: string;
  lastName: string;
  mobileNO: string;
  password: string;
  email: string;
  userRole: string;
}

const FriedSidebar = () => {
  const authToken = localStorage.getItem("authToken");
  const [friendList, setFriendList] = useState<FriendInterface[]>([]);

  useEffect(() => {
    // Fetch friend list
    fetch(`${API_ENDPOINT}/chat/friendList`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFriendList(data?.Friends);
        socket.emit("friendList", data?.Friends);
      })

      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // Setup socket connection after friend list is fetched
    if (friendList.length > 0) {
      socket.on("getUsers", (data: any) => {
        setFriendList(data);
      });
    }
  }, [socket, friendList]);

  return (
    <div className="dark:bg-gray-900 bg-white/100  w-[24%] h-screen border-l dark:border-gray-700 border-gray-400 ">
      <div className="flex items-end justify-end w-full  border-b dark:border-gray-700 border-gray-400">
        <AddNewFriend />
      </div>
      <div className="dark:text-white text-black font-bold p-2 text-xl">
        Chats
      </div>
      <div className="overflow-auto h-4/5">
        <div className="py-4 px-1.5 w-full overflow-auto">
          {friendList.map((friend) => (
            <Friend User={friend} key={friend._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriedSidebar;
