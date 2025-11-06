import React, { useContext, useState } from "react";
import { CrossImg } from "../../assets/export";
import { AppContext } from "../../context/AppContext";
import { auth, googleProvider, appleProvider } from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "../../../axios";
import { ErrorToast, SuccessToast } from "../../component/Global/Toaster";
import Cookies from "js-cookie";

const Login = ({ showModal, onClose }) => {
  if (!showModal) return null;
  const { fcmToken, setToken, setUserName } = useContext(AppContext);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const idToken = await result.user.getIdToken();

        const data = { idToken, type: "google" };

        const response = await axios.post(
          "/api/v1/patient/auth/social-auth",
          data,
          { headers: { fcmtoken: fcmToken || "" } }
        );

        if (response?.data?.success) {
          const token = response.data.data.token;
          const userName = response?.data?.data?.patient?.fullName;
          Cookies.set("token", token);
          Cookies.set("userName", userName);
          setToken(token);
          setUserName(userName);
          SuccessToast(response.data.message);
          onClose();
        } else {
          ErrorToast(response.data.message || "Login failed");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        ErrorToast(error.message || "Google login failed");
      });
  };

  const handleAppleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, appleProvider);
      const idToken = await result.user.getIdToken();
      const data = {
        idToken,
        type: "apple",
      };

      const response = await axios.post(
        "/api/v1/patient/auth/social-auth",
        data,
        {
          headers: {
            fcmtoken: fcmToken || "",
          },
        }
      );

      if (response?.data?.success) {
        const token = response?.data?.data?.token;
        const userName = response?.data?.data?.patient?.fullName;
        Cookies.set("token", token);
        Cookies.set("userName", userName);
        setToken(token);
        setUserName(userName);
        SuccessToast(response?.data?.message);
        onClose();
      }
    } catch (error) {
      ErrorToast(error?.response?.data?.message || "Apple login failed");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-img-login w-[544px] rounded-2xl shadow-lg p-6 animate-fadeIn">
        <button
          onClick={onClose}
          className="flex ms-auto text-gray-500 hover:text-gray-700 transition"
        >
          <img src={CrossImg} className="w-[20px] h-[20px]" alt="close" />
        </button>

        <h2 className="text-[32px] font-[600] text-center">Login</h2>
        <p className="text-[16px] font-[400] text-[#565656] text-center mt-3">
          Continue with your preferred sign-in method.
        </p>

        <div className="py-6 flex flex-col gap-4">
          {/* 🔹 Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="h-[50px] w-full flex items-center justify-center gap-3 border border-gray-300 rounded-[50px] font-semibold hover:bg-gray-100 transition-all"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-6 h-6"
            />
            Continue with Google
          </button>

          {/* 🔹 Apple Login Button */}
          <button
            onClick={handleAppleLogin}
            className="h-[50px] w-full flex items-center justify-center gap-3 border border-gray-300 rounded-[50px] font-semibold hover:bg-gray-100 transition-all"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="w-5 h-5"
            />
            Continue with Apple
          </button>

          {/* 🔸 Commented out email/password form */}
          {/*
           <form action="" onSubmit={handleSubmit}>
          <div className="py-4">
            <label
              htmlFor=""
              className="text-[16px] mx-2 font-[500] capitalize"
            >
              email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={`py-5 h-[50px] w-full mb-1 mt-2 outline-pink-600 px-6 border rounded-[50px] ${
                touched.email && errors.email
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm mx-3">{errors.email}</p>
            )}
            <div className="w-full relative mt-4">
              <div className="flex justify-between">
                <label
                  htmlFor="password"
                  className="text-[16px] mx-2 font-[500] capitalize"
                >
                  Password
                </label>
                <p className="text-[14px] cursor-pointer font-[500] text-[#FF5185]">
                  Forgot Password?
                </p>
              </div>

              <div className="relative flex items-center mt-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={`h-[50px] w-full outline-pink-600 px-6 border rounded-[50px] pr-12 ${
                    touched.password && errors.password
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />

                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-5 flex items-center justify-center cursor-pointer text-gray-500 text-[22px] hover:text-pink-600 transition-all"
                >
                  {showPassword ? <IoMdEyeOff /> : <IoEyeOutline />}
                </span>
              </div>

              {touched.password && errors.password && (
                <p className="text-red-500 text-sm mx-3 mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="h-[50px] w-full mt-6 text-white font-semibold rounded-[50px] bg-gradient-to-b from-[#FD643E] to-[#FD3556] hover:opacity-90 transition-all"
              >
                Log In
              </button>
            </div>
          </div>
        </form>
          */}
        </div>
      </div>
    </div>
  );
};

export default Login;
