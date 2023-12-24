import React, { createContext, useState } from "react";
import { FriendInterface } from "../../Pages/FriendList";

type FriendData = FriendInterface & { created_at: string; updated_at: string };
const initialData: FriendData = {
  _id: "",
  firstName: "",
  lastName: "",
  email: "",
  mobileNO: "",
  userRole: "",
  password: "",
  created_at: "",
  updated_at: "",
};

interface FriendListContextProps {
  FriendList: FriendData[];
  setFriendList: (friends: FriendData[]) => void;
}

const FriendListContext = createContext<FriendListContextProps>({
  FriendList: [initialData],
  setFriendList: () => {},
});

const FriendListProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [friendList, setFriendList] = useState<FriendData[]>([initialData]);

  const valueToShare = {
    FriendList: [initialData],
    setFriendList,
  };

  return (
    <FriendListContext.Provider value={valueToShare}>
      {children}
    </FriendListContext.Provider>
  );
};

export { FriendListContext, FriendListProvider };
