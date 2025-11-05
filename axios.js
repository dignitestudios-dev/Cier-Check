import axios from "axios";
import Cookies from "js-cookie";
import { ErrorToast } from "./src/component/Global/Toaster";

export const baseUrl = "https://api.ciercheck.com";

const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.request.use((request) => {
  let token = Cookies.get("token");
  if (!navigator.onLine) {
    // No internet connection
    ErrorToast(
      "No internet connection. Please check your network and try again."
    );
    return;
  }

  request.headers = {
    Accept: "application/json, text/plain, */*",
    Authorization: `Bearer ${token}`,
  };
  return request;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!navigator.onLine) {
      // No internet connection
      ErrorToast(
        "No internet connection. Please check your network and try again."
      );
      return Promise.reject(new Error("No internet connection"));
    }

    if (error.code === "ECONNABORTED") {
      // Slow internet or request timeout
      ErrorToast("Your internet connection is slow. Please try again.");
    }

    if (
      (error.response && error.response.status === 401) ||
      error.response.status === 403
    ) {
      // Unauthorized error
      Cookies.remove("token");
      Cookies.remove("name");
      Cookies.remove("email");
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default instance;
