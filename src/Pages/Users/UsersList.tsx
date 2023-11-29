import { PlusIcon } from "@heroicons/react/24/outline";
import User from "./User";
const UsersList = () => {
  return (
    <div className="bg-[#131021] w-full h-screen text-[#adabb9]">
      <div>
        <div className="p-4 flex justify-between items-center h-1/4">
          <div className="flex w-3/5 items-center justify-evenly">
            <div className="text-xl w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              JS
            </div>
            <div className="font-semibold">
              <div>Javid Sumra</div>
              <div>019209128ananswnio...</div>
            </div>
          </div>
          <div className="bg-purple-600/100 hover:bg-purple-500 rounded-lg p-1 duration-75">
            <PlusIcon className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="relative mx-auto w-[87%]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full text-lg py-2 pl-11 pr-3 pb-2.2 text-gray-500 border border-gray-700 rounded-xl outline-none bg-gray-900/100 focus:bg-gray-900/10 duration-100"
          />
        </div>
      </div>
      <div className="flex mt-4 items-center w-full h-3/4 flex-col overflow-y-scroll">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

export default UsersList;
