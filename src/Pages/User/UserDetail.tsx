import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { useNavigate } from "react-router-dom";
import {
  PhoneIcon,
  AtSymbolIcon,
  InformationCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  MoonIcon,
  ArrowRightOnRectangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

const UserDetail = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);
  const User = JSON.parse(localStorage.getItem("userData") ?? "");

  const signoutUser = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    navigate("/");
  };

  const toggleTheme = () => {
    let newTheme = "";
    if (theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "light";
    }
    setTheme(newTheme);
  };

  return (
    <div className="w-full h-screen bg-white/100 dark:bg-gray-900">
      <div className="flex items-center justify-center h-1/4 border-b dark:border-gray-300 border-gray-400">
        <div className="text-4xl font-semibold w-20 h-20 rounded-full dark:bg-gray-700 bg-gray-300/90 flex items-center justify-center">
          {User.firstName.charAt(0).toUpperCase() +
            User.lastName.charAt(0).toUpperCase()}
        </div>
      </div>
      <div className="border-b dark:border-gray-300 border-gray-400">
        <div className="m-4 flex items-center w-full">
          <PhoneIcon className="w-7 h-7 dark:text-white text-black" />
          <div className="dark:text-white text-black px-4">
            <div>{User.mobileNO}</div>
            <div className="text-xs">Phone</div>
          </div>
        </div>
        <div className="m-4 flex items-center w-full">
          <AtSymbolIcon className="w-7 h-7 dark:text-white text-black" />
          <div className="dark:text-white text-black px-4">
            <div>{User.firstName}</div>
            <div className="text-xs">Username</div>
          </div>
        </div>
        <div className="m-4 flex items-center w-full">
          <InformationCircleIcon className="w-7 h-7 dark:text-white text-black" />
          <div className="dark:text-white text-black px-4">
            <div>Product Designer</div>
            <div className="text-xs">Status</div>
          </div>
        </div>
      </div>
      <div>
        <div className="m-4 flex items-center w-full">
          <Cog6ToothIcon className="w-7 h-7 dark:text-white text-black" />
          <div className="dark:text-white text-black px-4">
            <div>General Settings</div>
          </div>
        </div>
        <div className="m-4 flex items-center w-full">
          <BellIcon className="w-7 h-7 dark:text-white text-black" />
          <div className="dark:text-white text-black px-4">
            <div>Notification</div>
          </div>
        </div>
        <div className="m-4 flex items-center w-full">
          {theme === "dark" ? (
            <MoonIcon
              className="w-7 h-7 dark:text-white text-black"
              onClick={toggleTheme}
            />
          ) : (
            <SunIcon
              className="w-7 h-7 dark:text-white text-black"
              onClick={toggleTheme}
            />
          )}
          <div className="dark:text-white text-black px-4">
            <div>{theme === "dark" ? "Dark " : "Light "}Mode</div>
          </div>
        </div>
        <div
          className="m-4 flex items-center w-full cursor-pointer"
          onClick={signoutUser}
        >
          <ArrowRightOnRectangleIcon className="w-7 h-7 dark:text-white text-black" />
          <div className="dark:text-white text-black px-4">
            <div>Signout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
