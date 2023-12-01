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
interface ThemeContextProps {
  currentFriend: FriendData;
  setCurrentFriend: (User: FriendData) => void;
}
const FriendContext = createContext<ThemeContextProps>({
  currentFriend: initialData,
  setCurrentFriend: () => {},
});
const CurrentFriendProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [currentFriend, setCurrentFriend] = useState(initialData);
  const valueToShare = {
    currentFriend,
    setCurrentFriend,
  };
  return (
    <FriendContext.Provider value={valueToShare}>
      {children}
    </FriendContext.Provider>
  );
};
export { FriendContext, CurrentFriendProvider };
