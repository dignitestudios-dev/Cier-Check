import React, { useContext, useRef } from "react";
import { FaRegEye, FaRegHandshake, FaRegHeart } from "react-icons/fa";
import { FaRegFaceGrin } from "react-icons/fa6";
import { GiSandsOfTime } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../context/ThemeContext";

const BecomeAware = () => {
  const { theme } = useContext(ThemeContext);
  const SectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: SectionRef,
    offset: ["start end", "end start"],
  });
const Aware = [
    {
        icon: "public/Reliable.png",
        iconpink: "public/Reliablepink.png",
        title: "Reliable Accuracy",
        description: "Trust in our “Breast Cancer Check” device for accurate results, ensuring peace of mind in your proactive healthcare journey.",
    } ,
    {
        icon: "public/User-Friendly.png",
        iconpink: "public/User-Friendlypink.png",
        title: "User-Friendly Design",
        description: "Experience simplicity with our intuitive “Breast Cancer Check” device, designed for effortless self-checks and empowering you to take control of your health.",
    },
    {
      icon: "public/Early.png",
      iconpink: "public/Earlypink.png",
      title: "Early Detection",
      description: "Discover the power of early detection with our device, identifying potential risks early on and enhancing the possibilities of successful intervention.",
    },
    {
      icon: "public/Private.png",
      iconpink: "public/Privatepink.png", 
      title: "Private and Discreet",
      description: "Prioritize privacy with our discreet “Breast Cancer Check” device, allowing you to perform checks in the comfort of your space with confidentiality.",
    },
    {
      icon: "public/Support.png",
      iconpink: "public/supportpink.png",
      title: "Comprehensive Support",
      description: "Embrace a holistic health approach with the “Breast Cancer Check” device, offering accurate results and comprehensive support for your health journey.",
    },
    {
      icon: "public/Quality.png",
      iconpink: "public/Qualitypink.png",
      title: "Quality Assurance",
      description: "Rely on excellence with our “Breast Cancer Check” device, a dependable and precise tool for proactive breast health monitoring, ensuring your well-being.",
    }

]
  return (
    <div
      className={`w-full flex flex-col  gap-6 py-12 lg:py-20 horizontal-padding `}
    >
      <h2
        className="section-heading"
      >
        Empowering People to Become Aware
      </h2>
   
      
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 ">
        {
          Aware.map((item, i) => (
            <div
            className={`
              group relative mb-14 flex flex-col items-center justify-center 
              gap-4 rounded-3xl bg-white px-10 py-16 text-center transition 
              hover:bg-[#E10983] hover:text-white
            `}
            key={i}
          >
            {/* Circle */}
            <div
              className="
                absolute -top-14 flex h-[112px] w-[112px] items-center justify-center 
                rounded-[100px] bg-[#E10983] transition 
                group-hover:bg-white group-hover:border-[#E10983] group-hover:border-[2.5px] group-hover:border-dashed
              "
            >
              {/* Image */}
              <img
                src={item.icon}
                alt=""
                className="h-10 w-10 block  group-hover:hidden "
              />
               <img
                src={item.iconpink}
                alt=""
                className="h-10 w-10 hidden transition  group-hover:block "
              />
            </div>
          
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <p className="text-[15px]">{item.description}</p>
          </div>
          
        ))
        }

        

        
          
          
       
        
      </div>
    </div>
  );
};

export default BecomeAware;
