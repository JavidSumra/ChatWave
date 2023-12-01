import { io } from "socket.io-client";

const URL =
  process.env.NODE_ENV === "production"
    ? "https://chatwave-tulv.onrender.com"
    : "http://localhost:3001";

const socket = io(URL);

export default socket;
