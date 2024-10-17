import React, { useContext } from "react";
import { FaGoogle, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import Navbar from "../Global/Navbar";
import { ThemeContext } from "../context/ThemeContext";

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`w-full ${theme === "light" ? "bg-white" : "bg-black"}`}>
      <div className="w-full contact-header">
        <Navbar />
        <div className="w-full  gap-12 h-[80vh] horizontal-padding">
          <div className="flex h-full flex-col items-center justify-center   gap-6">
            <h2 className="text-4xl md:text-6xl xl:text-6xl font-bold text-white">
              Contact Us
            </h2>
            <p className="text-lg text-white text-center">
              Kindly reach us to get the fastest response and treatment.
            </p>
          </div>
          <div className="flex items-end">
            {/* <img
              src="/healthcare-workers-prevent-virus-insurance-medicine-concept-smiling-attractive-female-doctor.png"
              className="w-[90%] h-[90vh]"
              alt=""
            /> */}
          </div>
        </div>
      </div>
      <div
        className={`w-[90%] lg:w-[65%] flex flex-col mx-auto px-6 lg:px-40 py-14 xl:py-24 relative -top-28 gap-10 rounded-2xl ${
          theme === "light" ? "shadow-bg bg-white" : "bg-[#2d2d2d] text-white"
        }`}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-sm">
              Name
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="David John"
              className={`py-5 outline-pink-600 px-6 border rounded-2xl ${
                theme === "light" ? "bg-white" : "bg-[#2d2d2d] text-white"
              }`}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-sm">
              Email
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="example@gmail.com"
              className={`py-5 outline-pink-600 px-6 border rounded-2xl ${
                theme === "light" ? "bg-white" : "bg-[#2d2d2d] text-white"
              }`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-sm">
            Subject
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Your subject"
            className={`py-5 outline-pink-600 px-6 border rounded-2xl ${
              theme === "light" ? "bg-white" : "bg-[#2d2d2d] text-white"
            }`}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="" className="text-sm">
            Message
          </label>
          <textarea
            type="text"
            name=""
            id=""
            placeholder="Message"
            className={`py-5 outline-pink-600 px-6 border rounded-2xl ${
              theme === "light" ? "bg-white" : "bg-[#2d2d2d] text-white"
            }`}
          />
        </div>
        <div>
          <button className="btn">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
