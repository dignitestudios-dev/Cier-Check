import React, { useContext, useRef } from "react";
import { FaRegEye, FaRegHandshake, FaRegHeart } from "react-icons/fa";
import { FaRegFaceGrin } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { useScroll, useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../context/ThemeContext";

const BecomeAware = () => {
  const { theme } = useContext(ThemeContext)
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div className={`w-full flex flex-col items-center justify-center text-center gap-6 py-12 lg:py-20 horizontal-padding ${theme === "light" ? 'bg-white text-black' : 'bg-dark'}`}  >
      <motion.h2
        className="section-heading"
        ref={ref}
        style={{
          transform: inView ? "translateY(0)" : "translateY(100px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        Empowering People to Become Aware
      </motion.h2>
      <div
        className={`w-20 border h-1  rounded-full  `}
        ref={ref}
        style={{
          transform: inView ? "translateY(0)" : "translateY(100px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      />
      <p
        className="lg:w-[50%] gray-text"
        ref={ref}
        style={{
          transform: inView ? "translateY(0)" : "translateY(100px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        Embark on parenthood’s journey, empowered by the promise of hopeful
        beginnings. Embrace a future filled with joy, love, and newfound
        strength.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className={`flex flex-col items-center justify-center text-center gap-4 px-10 py-12  rounded-3xl ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-[#2d2d2d] text-white hover:bg-pink-200 hover:text-black  duration-300 transition-all'}`}>
          <FaRegEye className="w-10 h-10 pink-text" />
          <h1 className="text-xl font-semibold">Reliable Accuracy</h1>
          <p className="text-[15px]">
            Trust in our “Breast Cancer Check” device for accurate results,
            ensuring peace of mind in your proactive healthcare journey.
          </p>
        </div>

        <div className={`flex flex-col items-center justify-center text-center gap-4 px-10 py-12  rounded-3xl ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-[#2d2d2d] text-white hover:bg-pink-200 hover:text-black  duration-300 transition-all'}`}>
          <FaRegFaceGrin className="w-10 h-10 pink-text" />
          <h1 className="text-xl font-semibold">User-Friendly Design</h1>
          <p className="text-[15px]">
            Experience simplicity with our intuitive “Breast Cancer Check”
            device, designed for effortless self-checks and empowering you to
            take control of your health.
          </p>
        </div>

        <div className={`flex flex-col items-center justify-center text-center gap-4 px-10 py-12  rounded-3xl ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-[#2d2d2d] text-white hover:bg-pink-200 hover:text-black  duration-300 transition-all'}`}>
          <GiSandsOfTime className="w-10 h-10 pink-text" />
          <h1 className="text-xl font-semibold">Early Detection</h1>
          <p className="text-[15px]">
            Discover the power of early detection with our device, identifying
            potential risks early on and enhancing the possibilities of
            successful intervention.
          </p>
        </div>

        <div className={`flex flex-col items-center justify-center text-center gap-4 px-10 py-12  rounded-3xl ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-[#2d2d2d] text-white hover:bg-pink-200 hover:text-black  duration-300 transition-all'}`}>
          <FaRegHeart className="w-10 h-10 pink-text" />
          <h1 className="text-xl font-semibold">Private and Discreet</h1>
          <p className="text-[15px]">
            Prioritize privacy with our discreet “Breast Cancer Check” device,
            allowing you to perform checks in the comfort of your space with
            confidentiality.
          </p>
        </div>

        <div className={`flex flex-col items-center justify-center text-center gap-4 px-10 py-12  rounded-3xl ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-[#2d2d2d] text-white hover:bg-pink-200 hover:text-black  duration-300 transition-all'}`}>
          <IoDiamondOutline className="w-10 h-10 pink-text" />
          <h1 className="text-xl font-semibold">Comprehensive Support</h1>
          <p className="text-[15px]">
            Embrace a holistic health approach with the “Breast Cancer Check”
            device, offering accurate results and comprehensive support for your
            health journey.
          </p>
        </div>

        <div className={`flex flex-col items-center justify-center text-center gap-4 px-10 py-12  rounded-3xl ${theme === "light" ? 'bg-pink-200 text-black' : 'bg-[#2d2d2d] text-white hover:bg-pink-200 hover:text-black  duration-300 transition-all'}`}>
          <FaRegHandshake className="w-10 h-10 pink-text" />
          <h1 className="text-xl font-semibold">Quality Assurance</h1>
          <p className="text-[15px]">
            Rely on excellence with our “Breast Cancer Check” device, a
            dependable and precise tool for proactive breast health monitoring,
            ensuring your well-being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BecomeAware;
