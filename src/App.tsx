import User from "./Pages/User";
import Chat from "./Pages/Chat";
import FriedSidebar from "./Pages/FriendList";
import { ThemeContext } from "./context/theme";
import { useContext } from "react";
import { CurrentFriendProvider } from "./context/CurrentFriend";

const App = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={`flex font-[Poppins] w-screen ${
        theme === "dark" ? "dark" : ""
      }`}
    >
      <CurrentFriendProvider>
        <User />
        <Chat />
        <FriedSidebar />
      </CurrentFriendProvider>
    </div>
  );
};

export default App;
