import socket from "../../context/socket";

const User = (User: any) => {
  const joinRoom = (id: string) => {
    socket.emit("join_room", { id });
  };
  const { firstName, lastName, _id } = User.User;
  return (
    <div
      className="flex w-full hover:bg-purple-900/25 rounded items-center justify-between p-2 cursor-pointer"
      onClick={() => joinRoom(_id)}
    >
      <div>
        <div className="relative flex items-center justify-center">
          <div className="text-xl w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center">
            JS
          </div>
          <span className="relative flex h-3 w-3 right-2 top-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full text-white">
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
