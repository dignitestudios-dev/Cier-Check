import React, { useContext } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCallOutline, IoLocationOutline, IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`horizontal-padding py-6  lg:pt-20 bg-[#CF1D67]`} >
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-7">
        <div className="flex  flex-col items-start justify-start gap-5">
          <div>
            <img src="/logo-2.png" className="h-[129px] w-[80px]" alt="" />
          </div>

          <div className="flex flex-col items-start gap-4 mt-3 text-white">
            <div className="flex  gap-3">
              <div className="w-8 h-8  p-1">
              <IoLocationSharp  className="text-[#FFCBE9] w-full h-full"/>
              </div>
              <p className="text-[15px]">123 Anywhere St., Any City 12345</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8   p-1">
              <FaPhoneAlt className="text-[#FFCBE9] w-full h-full"/>
              </div>
              <p className="text-[15px]">123-456-7890</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8   p-1">
                <MdOutlineMailOutline className="text-white w-full h-full" />
              </div>
              <p className="text-[15px]">hellocallcenter@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 lg:px-20 text-white">
          <h2 className="font-semibold text-[18px] mb-5 ">Quick links</h2>
          <Link to="/" className="text-[15px]">
            Home
          </Link>
          <Link to="/product" className="text-[14px]">
            Shop
          </Link>
          <Link to="/offers" className="text-[14px]">
            Offers
          </Link>
          <Link to="/breast-cancer" className="text-[14px]">
            Breast Cancer Awareness
          </Link>
          <Link to="/cancer-glossery" className="text-[14px]">
            Cancer Glossary
          </Link>
          <Link to="/contact-us" className="text-[14px]">
            Contact Us
          </Link>

        </div>

        <div className="w-full flex flex-col gap-5 text-white">
          <h3 className="text-3xl font-semibold">Be Our Subscriber</h3>
          <p className="text-[16px] font-[400]">
            To get the latest news about health <br /> from our experts
          </p>
          <div className="w-full flex items-center justify-between px-2 py-1 border bg-[#FFCBE9]   rounded-full">
            <input
              type="text"
              name=""
              id=""
              className="outline-none px-2 w-[70%] rounded-full bg-[#FFCBE9] placeholder:text-[#000000B2] text-black"
              placeholder="Enter your email"
            />
            <button className=" w-[25%] rounded-[100px] py-4 bg-white ">
              submit 
            </button>
          </div>
          <p className="text-[20px]">
          Find us on Social Media
          </p>
        </div>
      </div>

      <div className="lg:w-full border-t-[0.5px] border-[#FFCBE9] mt-6 pt-5 flex flex-col lg:flex-row items-center justify-between text-white">
        <span className="text-xs  text-[#FFCBE9]">
          Copyright © 2024 Pro Health. All rights reserved.
        </span>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs text-[#FFCBE9]">
            Privacy Policy
          </Link>
          <Link to="/" className="text-xs text-[#FFCBE9]">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
