import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Global/Navbar";
import { useScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DonateButton from "../Global/DonateButton";

const Hero = () => {
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"]);

  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <main className="w-full hero h-[120vh] lg:h-[105vh] relative overflow-hidden">
      <Navbar />
      <div className="w-full h-full horizontal-padding flex flex-col items-start justify-center gap-5 lg:gap-6 relative overflow-y-hidden text-white lg:w-2/3 pt-40 lg:pt-0 lg:py-16 xl:py-20">
        <motion.h1
          className="text-4xl lg:text-6xl xl:text-7xl font-extrabold lg:leading-[70px]"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Celebrating Awareness <br /> About Cancer
        </motion.h1>
        <motion.p
          className="lg:w-[80%] font-medium text-sm lg:text-base"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
          eveniet dolorum molestiae voluptate officiis quas.
        </motion.p>
        <div className="lg:mt-3 flex gap-4">
          <Link to={"/contact-us"}>
            <motion.button
              className=" rounded-lg   btn  mt-5"
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Contact Us
            </motion.button>
          </Link>
          <motion.button ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, ease: "easeOut" }}>
            <DonateButton />
          </motion.button>
        </div>
      </div>
      <img
        src="/lady-doctor.png"
        alt=""
        className="h-[50vh] lg:h-[80vh] bg-cover lg:absolute right-0 lg:right-20 -bottom-0"
      />
    </main>
  );
};

export default Hero;