import { io } from "socket.io-client";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const socket = io("https://api.ciercheck.com", {
  transports: ["websocket"],
  auth: { token },
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export default socket;
