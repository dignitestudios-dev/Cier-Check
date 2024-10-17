import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import DonateButton from "../Global/DonateButton";

const CallUs = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`py-12 lg:py-20 ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`} >
      <div className={`w-[90%] lg:w-[80%] mx-auto lg:text-left px-8 lg:px-20 gap-8 lg:gap-40 rounded-3xl py-12 lg:py-20 relative ${theme === "light" ? "dark-pink-bg" : 'bg-[#2d2d2d]'}`}>
        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl lg:leading-[48px] font-bold text-white">
            Call Us Today for FREE Consultations
          </h2>
          <p className="text-white">
            Empower your health journey with FREE consultations – call us today
            for expert guidance and compassionate support.
          </p>
          <div className="f">
            <button

            // className="block w-36 font-semibold text-center  px-5 py-3 rounded-lg bg-[#dc6d32] text-white"
            >
              <DonateButton />
            </button>
          </div>
        </div>

        <img
          src="/healthcare-workers-prevent-virus-insurance-medicine-concept-smiling-attractive-female-doctor.png"
          alt=""
          className="call-us-image absolute right-10 bottom-0 w-[440px]"
        />
      </div>
    </div>
  );
};

export default CallUs;
