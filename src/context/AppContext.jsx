import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import getFCMToken from "../firebase/getFcmToken";
import { ErrorToast } from "../component/Global/Toaster";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [fcmToken, setFcmToken] = useState(null);
  const getFcm = async () => {
    try {
      const fcmTokenResponse = await getFCMToken();
      setFcmToken(fcmTokenResponse);
    } catch (err) {
      console.log("🚀 ~ getFcm ~ err:", err);
      ErrorToast(err);
    }
  };
  useEffect(() => {
    getFcm();
  }, []);
  return (
    <AppContext.Provider value={{ fcmToken }}>{children}</AppContext.Provider>
  );
};

const useApp = () => {
  return useContext(AppContext);
};

export default useApp;
