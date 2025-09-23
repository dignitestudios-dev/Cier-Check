import React, { useContext, useEffect, useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ThemeTogglerButton from "./ThemeTogglerButton";
import { IoClose } from "react-icons/io5";
import { ThemeContext } from "../context/ThemeContext";
import { FaCartShopping, FaUserDoctor } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Navbar = () => {
  const {
    theme,
    setDrawOpen,
    isDrawOpen,
    CartItemLeng,
    setOpenDrawer,
    openDrawer,
    products,
  } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
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

  const handleDonate = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        console.error("Stripe failed to load");
        return;
      }

      const result = await stripe.redirectToCheckout({

        lineItems: [{ price: "price_1SAUmmF0T0NtydYH3jS5aHKl", quantity: 1 }],
        mode: "payment",
        successUrl: window.location.origin + "/success",
        cancelUrl: window.location.origin + "/cancel",
      });

      if (result && result.error) {
        console.error(result.error.message);
      }
    } catch (err) {
      console.error("Donate error:", err);
    }
  };

  return (
    <div
      className={`w-full  transition-all duration-200 ${
        theme === "light" ? "bg-white text-black shadow-lg" : "bg-black"
      }`}
    >
      <div
        className={`relative w-full h-20  lg:h-[85px] bg-black lg:bg-transparent flex items-center z-50 justify-between shadow-lg horizontal-padding`}
      >
        <div className="">
          <Link to={"/"}>
            <img src="/logo.png" className=" h-[85px]" alt="" />
          </Link>
        </div>
        <div
          className="navbar "
          onClick={(e) => setActiveLink(e.target.textContent)}
        >
          <div className="flex flex-col items-center ">
            <Link
              to={"/"}
              className={`text-[12px] font-[600]  hover:text-pink-600 ${
                activeLink === "Home" ? " text-pink-600 " : " text-[#181818]"
              }`}
            >
              Home
            </Link>
            {activeLink === "Home" ? (
              <span className="w-full h-[3px] new-gradient-btn rounded-full"></span>
            ) : null}
          </div>
          <div className="flex flex-col items-center ">
            <Link
              to={"/product"}
              onClick={(e) => setActiveLink(e.target.textContent)}
              className={`text-[12px] font-[600]  hover:text-pink-600 ${
                activeLink === "Shop" ? " text-pink-600 " : " text-[#181818]"
              }`}
            >
              Shop
            </Link>
            {activeLink === "Shop" ? (
              <span className="w-full h-[3px] new-gradient-btn rounded-full"></span>
            ) : null}
          </div>
          <div className="flex flex-col items-center ">
            <Link
              to={"/breast-cancer"}
              onClick={(e) => setActiveLink(e.target.textContent)}
              className={`text-[12px] font-[600]  hover:text-pink-600 ${
                activeLink === "Breast Cancer "
                  ? " text-pink-600"
                  : " text-[#181818]"
              }`}
            >
              Breast Cancer
            </Link>
            {activeLink === "Breast Cancer Awareness" ? (
              <span className="w-full h-[3px] new-gradient-btn rounded-full"></span>
            ) : null}
          </div>
          <div className="flex flex-col items-center ">
            <Link
              to={"/cancer-glossery"}
              onClick={(e) => setActiveLink(e.target.textContent)}
              className={`text-[12px] font-[600]  hover:text-pink-600 ${
                activeLink === "Cancer Glossary"
                  ? " text-pink-600"
                  : " text-[#181818]"
              }`}
            >
              Cancer Glossary
            </Link>
            {activeLink === "Cancer Glossary" ? (
              <span className="w-full h-[3px] new-gradient-btn rounded-full"></span>
            ) : null}
          </div>
          <div>
            <Link
              to={"/about-us"}
              onClick={(e) => setActiveLink(e.target.textContent)}
              className={`text-[12px] font-[600]  hover:text-pink-600 ${
                activeLink === "About Us" ? " text-pink-600" : " text-[#181818]"
              }`}
            >
              About Us
            </Link>
          </div>
          <div className="flex flex-col items-center ">
            <Link
              to={"/contact-us"}
              onClick={(e) => setActiveLink(e.target.textContent)}
              className={`text-[12px] font-[600]  hover:text-pink-600 ${
                activeLink === "Contact Us"
                  ? " text-pink-600"
                  : " text-[#181818]"
              }`}
            >
              Contact Us
            </Link>
            {activeLink === "Contact Us" ? (
              <span className="w-full h-[3px] new-gradient-btn rounded-full"></span>
            ) : null}
          </div>
          <div
            onClick={() => setOpenDrawer(!openDrawer)}
            className={`cursor-pointer text-[12px] font-[600] w-[40px] h-[40px] items-center justify-center flex rounded-[100px]   hover:text-pink-600  `}
          >
            <FaCartShopping size={25} />
          </div>
        </div>
        <div className=" flex items-center gap-5">
          {" "}
          <Link
            to={"/startquestionnaire"}
            className="new-gradient-btn py-3 px-5 rounded-[26px]  text-white  text-[14px] font-[600] "
          >
            Start Questionnaire
          </Link>
          <button
            onClick={handleDonate}
            className="new-gradient-btn py-3 px-5 rounded-[26px]  text-white  text-[14px] font-[600] "
          >
            Donate Now
          </button>
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

      <div
        className={`w-full h-screen bg-transparent  absolute inset-0 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500`}
      >
        <div
          className={`h-full ${
            theme === "light" ? "bg-white" : "bg-dark"
          } w-[70%] float-end p-4`}
        >
          <div className="w-full flex items-center justify-between">
            <button
              className={`border-2 border-pink-600 px-2 py-1`}
              onClick={handlenav}
            >
              <IoClose className="text-xl" />
            </button>
            <ThemeTogglerButton />
          </div>

          <div className="w-full flex flex-col items-start pt-10">
            <Link
              to={"/"}
              className={`text-size ${
                theme === "light" ? "text-black" : "text-white"
              } hover:text-pink-600 border-b w-full py-4 font-medium`}
            >
              Home
            </Link>
            <Link
              to={"/breast-cancer"}
              className={`text-size   ${
                theme === "light" ? "text-black" : "text-white"
              } hover:text-pink-600 border-b w-full py-4 font-medium`}
            >
              Breast Cancer Awareness
            </Link>
            <Link
              to={"/product"}
              className={`text-size  ${
                theme === "light" ? "text-black" : "text-white"
              } hover:text-pink-600 border-b w-full py-4 font-medium`}
            >
              Shop
            </Link>
            <Link
              to={"/offers"}
              className={`text-size  ${
                theme === "light" ? "text-black" : "text-white"
              } hover:text-pink-600 border-b w-full py-4 font-medium`}
            >
              Offers
            </Link>
            <Link
              to={"/cancer-glossery"}
              className={`text-size  ${
                theme === "light" ? "text-black" : "text-white"
              } hover:text-pink-600 border-b w-full py-4 font-medium`}
            >
              Cancer Glossary
            </Link>
            <Link
              to={"/contact-us"}
              className={`text-size  ${
                theme === "light" ? "text-black" : "text-white"
              } hover:text-pink-600 border-b w-full py-4 font-medium`}
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
