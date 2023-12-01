import { PlusIcon } from "@heroicons/react/24/outline";

const AddNewFriend = () => {
  return (
    <div className="flex items-center justify-between m-[7px] dark:text-white dark:bg-gray-700/70 bg-gray-300/70 dark:hover:bg-gray-700/75 hover:bg-gray-300/75 rounded-full w-3/4 px-2 py-1 duration:150">
      <div className="text-white dark:text-white text-xl mx-4">New Chats</div>
      <PlusIcon className="w-10 h-10 p-2 dark:text-white bg-gray-500/75 text-black dark:bg-gray-800/75 dark:hover:bg-gray-800/80 hover:bg-gray-400/80 rounded-full" />
    </div>
  );
};

export default AddNewFriend;