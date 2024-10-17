import React, { useContext } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`horizontal-padding py-6  lg:pt-20 ${theme === 'light' ? 'bg-pink-200 text-black' : 'bg-dark text-white'}`} >
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-7">
        <div className="flex  flex-col items-start justify-start gap-5">
          <Link to={"/"}>
            <img src="/logo-2.png" className="h-20" alt="" />
          </Link>

          <div className="flex flex-col items-start gap-4 mt-3">
            <div className="flex  gap-3">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center p-1">
                <IoLocationOutline className="text-white rounded-full w-full h-full" />
              </div>
              <p className="text-[15px]">123 Anywhere St., Any City 12345</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center p-1">
                <IoCallOutline className="text-white rounded-full w-full h-full" />
              </div>
              <p className="text-[15px]">123-456-7890</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center p-1">
                <MdOutlineMailOutline className="text-white rounded-full w-full h-full" />
              </div>
              <p className="text-[15px]">hellocallcenter@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:px-20">
          <h2 className="font-semibold text-xl mb-5">Quick links</h2>
          <Link to="/" className="text-[15px]">
            Home
          </Link>
          <Link to="/breast-cancer" className="text-[15px]">
            Breast Cancer Awareness
          </Link>
          <Link to="/cancer-glossery" className="text-[15px]">
            Cancer Glossary
          </Link>
          <Link to="/contact-us" className="text-[15px]">
            Contact Us
          </Link>

        </div>

        <div className="w-full flex flex-col gap-5 ">
          <h3 className="text-3xl font-semibold">Be Our Subscriber</h3>
          <p className="text-[15px]">
            To get the latest news about health <br /> from our experts
          </p>
          <div className="w-full flex border border-pink-600 py-2 px-3 rounded-full">
            <input
              type="text"
              name=""
              id=""
              className="outline-none px-4 w-[70%] rounded-full bg-transparent"
              placeholder="Enter your email"
            />
            <button className=" py-3 text-[15px] px-4 lg:px-4 xl:px-5 rounded-full flex items-center btn justify-center gap-1">
              submit <IoIosArrowRoundForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div className="lg:w-full border-t-2 btn mt-6 pt-5 flex flex-col lg:flex-row items-center justify-between">
        <span className="text-xs">
          Copyright © 2024 Pro Health. All rights reserved.
        </span>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs">
            Privacy Policy
          </Link>
          <Link to="/" className="text-xs">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
