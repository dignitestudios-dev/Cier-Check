import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";

const getFCMToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: 'BI2ycbkzF1rezi2Gfw_K65g_kDGfE3WXjXyOuDgWqGtmEJ-XwnpYbk0SC2puFAznPJnyLCd5ugTOuYPoENwE0pY',
      });
      return token;
    } else {
      console.error("Notification permission denied");
    }
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};

export default getFCMToken;
