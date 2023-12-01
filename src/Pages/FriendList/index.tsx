import { useEffect, useState } from "react";
import AddNewFriend from "./AddNewFriend";
import Friend from "./Friend";
import { API_ENDPOINT } from "../../config/constant";

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
  const [friendList, setFriendList] = useState<FriendInterface[] | []>([]);
  useEffect(() => {
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
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="bg-gray-900 w-[24%] h-screen border-l border-gray-700">
      <div className="flex items-end justify-end w-full  border-b border-gray-700">
        <AddNewFriend />
      </div>
      <div className="text-white font-bold p-2 text-xl">Chats</div>
      <div className="overflow-auto h-4/5">
        <div className="py-4 px-1.5 w-full overflow-auto">
          {friendList.length > 0 &&
            friendList.map((friend) => {
              return <Friend User={friend} key={friend._id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default FriedSidebar;
