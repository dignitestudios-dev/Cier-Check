import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getFCMToken from "../firebase/getFcmToken";
import { ErrorToast } from "../component/Global/Toaster";
import { setFcmToken } from "../../axios";
import Cookies from "js-cookie"; // ✅ Add this for cookie handling

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [fcmToken, setFcmTokenState] = useState(null);
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState("");
  const getFcm = async () => {
    try {
      const fcmTokenResponse = await getFCMToken();
      setFcmTokenState(fcmTokenResponse);
      setFcmToken(fcmTokenResponse); // ✅ pass to axios.js
    } catch (err) {
      console.log("🚀 ~ getFcm ~ err:", err);
      ErrorToast(err);
    }
  };
  useEffect(() => {
    getFcm();
  }, []);
  useEffect(() => {
    const savedToken = Cookies.get("token");
    const savedUser = Cookies.get("userName");
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUserName(savedUser);
      console.log("✅ User auto-logged in from cookies");
    }
    getFcm();
  }, []);
  const logout = () => {
    try {
      Cookies.remove("token");
      Cookies.remove("userName");

      localStorage.clear();
      sessionStorage.clear();

      setToken(null);
      setUserName("");

      navigate("/");

      console.log("✅ User logged out successfully");
    } catch (err) {
      console.error("❌ Logout failed:", err);
      ErrorToast("Logout failed. Try again.");
    }
  };
  return (
    <AppContext.Provider
      value={{ fcmToken, setToken, token, userName, setUserName, logout }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
