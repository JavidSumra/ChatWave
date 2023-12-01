import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { useNavigate } from "react-router-dom";
import {
  UserIcon,
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
    <div className="w-full bg-gray-900 h-screen">
      <div className="flex items-center justify-center h-1/4 border-b border-gray-300">
        <UserIcon className="w-6 h-6 text-white " />
      </div>
      <div className="border-b border-gray-300">
        <div className="m-4 flex items-center w-full">
          <PhoneIcon className="w-7 h-7 text-white" />
          <div className="text-white px-4">
            <div>{User.mobileNO}</div>
            <div className="text-xs">Phone</div>
          </div>
        </div>
        <div className="m-4 flex items-center w-full">
          <AtSymbolIcon className="w-7 h-7 text-white" />
          <div className="text-white px-4">
            <div>{User.firstName}</div>
            <div className="text-xs">Username</div>
          </div>
        </div>
        <div className="m-4 flex items-center w-full">
          <InformationCircleIcon className="w-7 h-7 text-white" />
          <div className="text-white px-4">
            <div>Product Designer</div>
            <div className="text-xs">Status</div>
          </div>
        </div>
      </div>
      <div>
        <div className="m-4 flex items-center w-full">
          <Cog6ToothIcon className="w-7 h-7 text-white" />
          <div className="text-white px-4">
            <div>General Settings</div>
          </div>
        </div>
        <div className="m-4 flex items-center w-full">
          <BellIcon className="w-7 h-7 text-white" />
          <div className="text-white px-4">
            <div>Notification</div>
          </div>
        </div>
        <div className="m-4 flex items-center w-full">
          {theme === "dark" ? (
            <MoonIcon className="w-7 h-7 text-white" onClick={toggleTheme} />
          ) : (
            <SunIcon className="w-7 h-7 text-white" onClick={toggleTheme} />
          )}
          <div className="text-white px-4">
            <div>{theme === "dark" ? "Dark " : "Light "}Mode</div>
          </div>
        </div>
        <div
          className="m-4 flex items-center w-full cursor-pointer"
          onClick={signoutUser}
        >
          <ArrowRightOnRectangleIcon className="w-7 h-7 text-white" />
          <div className="text-white px-4">
            <div>Signout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;