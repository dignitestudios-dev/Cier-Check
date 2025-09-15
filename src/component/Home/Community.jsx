import React, { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Community = () => {
  const { theme } = useContext(ThemeContext);
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
    <div
      className={`w-full flex flex-col items-center justify-center gap-4 px-6 lg:px-28 `}
    >
      <h1
        className="text-center  section-heading"
        ref={ref}
        style={{
          transform: inView ? "translateY(0)" : "translateY(100px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        Join the Proactiv Community!
      </h1>
      <p
        className=" lg:text-4xl md:text-2xl text-xl font-medium"
        ref={ref}
        style={{
          transform: inView ? "translateY(0)" : "translateY(100px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        follow us @proactiv
      </p>
      <div
        className=" w-full flex items-center justify-center lg:text-4xl md:text-2xl text-xl font-medium gap-4 "
        ref={ref}
        style={{
          transform: inView ? "translateY(0)" : "translateY(100px)",
          opacity: inView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
        }}
      >
        <Link to={"https://www.instagram.com"}>
          <FaInstagram />
        </Link>
        <Link to={"https://www.facebook.com/"}>
          <FaFacebook />
        </Link>

        <Link to={"https://www.facebook.com/"}>
          <FaFacebook />
        </Link>
        <Link to={"https://www.facebook.com/"}>
          <FaFacebook />
        </Link>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-9  gap-10">
        <Link to={"https://www.facebook.com/"}>
          {" "}
          <div className="rounded-3xl">
            <img src="public/beauty-product-spreading-out.jpg" alt="" className="rounded-3xl" />
          </div>
        </Link>

        <Link to={"https://www.facebook.com/"}>
          {" "}
          <div>
            <img src="public/beauty-product-spreading-out.jpg" alt=""  className="rounded-3xl"/>
          </div>
        </Link>
        <Link to={"https://www.facebook.com/"}>
          {" "}
          <div>
            <img src="public/beauty-product-spreading-out.jpg" alt=""  className="rounded-3xl"/>
          </div>
        </Link>
        <Link to={"https://www.facebook.com/"}>
          {" "}
          <div>
            <img src="public/beauty-product-spreading-out.jpg" alt=""  className="rounded-3xl"/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Community;
