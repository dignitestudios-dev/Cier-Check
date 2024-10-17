import React, { useContext, useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ThemeTogglerButton from "./ThemeTogglerButton";
import { IoClose } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeContext)
  const [open, setOpen] = useState(false);
  const handlenav = () => {
    setOpen(!open);
  };


  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true); // User has scrolled down
      } else {
        setIsScrolled(false); // User is at the top of the page
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full fixed left-0 top-0 z-50 transition-all duration-200 ${isScrolled ? `${theme === "light" ? 'bg-white text-black shadow-lg' : ' shadow-2xl bg-black '}` : "bg-transparent"}`}>
      <div className={`relative w-full h-20 md:h-24 lg:h-28 bg-black lg:bg-transparent flex items-center z-50 justify-between horizontal-padding ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
        <div className="">
          <Link to={"/"}>
            <img src="/logo-2.png" className=" h-[4.5rem]" alt="" />
          </Link>
        </div>
        <div className="navbar ">
          <Link to={"/"} className={`text-size  hover:text-pink-600 ${isScrolled ? `${theme === "light" ? ' text-black' : ' text-white'}` : "text-white"}`}>
            Home
          </Link>
          <Link
            to={"/breast-cancer"}
            className={`text-size  hover:text-pink-600 ${isScrolled ? `${theme === "light" ? ' text-black' : ' text-white'}` : "text-white"}`}
          >
            Breast Cancer Awareness
          </Link>
          <Link
            to={"/cancer-glossery"}
            className={`text-size  hover:text-pink-600 ${isScrolled ? `${theme === "light" ? ' text-black' : ' text-white'}` : "text-white"}`}
          >
            Cancer Glossary
          </Link>
          <Link
            to={"/contact-us"}
            className={`text-size  hover:text-pink-600 ${isScrolled ? `${theme === "light" ? ' text-black' : ' text-white'}` : "text-white"}`}
          >
            Contact Us
          </Link>
          <Link
            to={"/startquestionnaire"}
            className="bg-pink-600 px-5 py-3 rounded-lg border-2 border-pink-600 text-white hover:text-pink-600 hover:bg-white duration-300 transition-all"
          >
            Start Questionnaire
          </Link>
          <ThemeTogglerButton />
        </div>

        <div className="lg:hidden ">
          <button
            className="border-2 border-pink-600 bg-white px-2 py-2"
            onClick={handlenav}
          >
            <RiMenu3Fill />{" "}
          </button>
        </div>

      </div>

      <div className={`w-full h-screen bg-transparent absolute inset-0 z-50 ${open ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500`}>
        <div className={`h-full ${theme === 'light' ? 'bg-white' : 'bg-dark'} w-[70%] float-end p-4`}>
          <div className="w-full flex items-center justify-between">
            <button
              className={`border-2 border-pink-600 px-2 py-1`}
              onClick={handlenav}
            >
              <IoClose className="text-xl" />{" "}
            </button>
            <ThemeTogglerButton />
          </div>

          <div className="w-full flex flex-col items-start pt-10">
            <Link to={"/"} className={`text-size ${theme === "light" ? 'text-black' : 'text-white'} hover:text-pink-600 border-b w-full py-4 font-medium`}>
              Home
            </Link>
            <Link
              to={"/breast-cancer"}
              className={`text-size   ${theme === "light" ? 'text-black' : 'text-white'} hover:text-pink-600 border-b w-full py-4 font-medium`}
            >
              Breast Cancer Awareness
            </Link>
            <Link
              to={"/cancer-glossery"}
              className={`text-size  ${theme === "light" ? 'text-black' : 'text-white'} hover:text-pink-600 border-b w-full py-4 font-medium`}
            >
              Cancer Glossary
            </Link>
            <Link
              to={"/contact-us"}
              className={`text-size  ${theme === "light" ? 'text-black' : 'text-white'} hover:text-pink-600 border-b w-full py-4 font-medium`}
            >
              Contact Us
            </Link>
            <Link
              to={"/startquestionnaire"}
              className="bg-pink-600 px-5 mt-4 py-3 rounded-lg border-2 border-pink-600 text-white hover:text-pink-600 hover:bg-white duration-300 transition-all"
            >
              Start Questionnaire
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
