import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Global/Navbar";
import { useScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DonateButton from "../Global/DonateButton";
import { div } from "framer-motion/client";

const Hero = () => {
  return (
    <main className="w-full  flex hero h-[90vh] ">
      <div className=" w-[80%] flex flex-col gap-5  text-white horizontal-padding pt-32">
        <h2 className="w-full text-2xl lg:text-2xl xl:text-5xl font-bold xl:leading-[50px]">
          Your Support Can Save Lives Through Early Cancer Detection
        </h2>
        <p className="lg:w-[70%] font-medium text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur. Blandit condimentum in lorem
          quam quis. Morbi feugiat libero fermentum id. Duis elit maecenas lorem
          sed porta quis ultrices. Volutpat duis ullamcorper pellentesque odio
          pharetra accumsan urna.
        </p>
        <div className="lg:mt-3 flex gap-4">
          <button className="bg-[#FFCBE9] w-[240px] h-[60px] rounded-[100px]  text-[#CF1D67]  text-[16px] font-[600] ">
            Donate Now
          </button>
        </div>
      </div>
      
    </main>
  );
};

export default Hero;
