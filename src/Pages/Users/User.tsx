const User = () => {
  return (
    <div className="flex w-11/12 hover:bg-purple-900/25 rounded items-center justify-between p-2 cursor-pointer ">
      <div>
        <div className="relative flex items-center justify-center">
          <div className="text-xl w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            JS
          </div>
          <span className="relative flex h-3 w-3 right-2 top-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        </div>
      </div>
      <div className="flex flex-col  w-full">
        <div className="flex text-sm w-full items-center justify-between font-semibold">
          <div>Javid Sumra</div>
          <div className="mr-4">8:54 AM</div>
        </div>
        <div className="text-sm">This is My first Message</div>
      </div>
    </div>
  );
};

export default User;
