import { io } from "socket.io-client";
import Cookies from "js-cookie";

let socket;

export const initSocket = () => {
  // Try to get token safely
  const token = Cookies.get("token");

  if (!token) {
    console.log("⚠️ No token found yet — delaying socket connection");
    return null;
  }

  // If socket already exists, don’t re-create
  if (socket && socket.connected) {
    return socket;
  }

  socket = io("https://api.ciercheck.com", {
    transports: ["websocket"],
    auth: { token },
    autoConnect: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1000,
  });

  socket.on("connect", () => console.log("✅ Socket connected:", socket.id));
  socket.on("connect_error", (err) =>
    console.error("❌ Socket connect error:", err.message)
  );

  return socket;
};

export default socket;
