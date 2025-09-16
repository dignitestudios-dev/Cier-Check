import React, { useRef } from "react";
import {  Link } from "react-router-dom";
import Navbar from "../Global/Navbar";
import { useScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DonateButton from "../Global/DonateButton";
import { div } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
  return (
    <main className="w-full  flex hero h-[90vh] ">
      <div className=" w-[80%] flex flex-col gap-5  text-white horizontal-padding pt-32">
        <h2 className="w-full text-2xl lg:text-[40px] font-bold xl:leading-[50px]">
          Your Support Can Save Lives Through Early Cancer Detection
        </h2>
        <p className="lg:w-[70%] font-[400] text-base lg:text-[16px]">
          At CierCheck, we believe that early detection is the key to saving
          lives. Our innovative testing solutions make it easier than ever to
          monitor your health, identify potential risks, and take action before
          cancer advances. By empowering individuals with accessible and
          reliable screening, we aim to give every person the chance to protect
          their future and the lives of their loved ones.
        </p>
        <div className="lg:mt-3 flex gap-4">
          <button onClick={() => navigate("/donate")} className="bg-[#FFCBE9] w-[240px] h-[60px] rounded-[100px]  text-[#CF1D67]  text-[16px] font-[600] ">
            Donate Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
