import React, { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { BiCheckbox } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { useScroll, useTransform, motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

export const sliderSettings = {


  slidesPerView: 1,
  // modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 40,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },

    750: {
      slidesPerView: 2,
    },

    1100: {
      slidesPerView: 2,
    },
  },
};

const Reviews = () => {
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
    <div className={`w-full ${theme === "light" ? 'bg-white text-black ' : 'bg-dark'}`} >
      <div className="w-full px-4 md:8 lg:16 2xl:40 py-16">
        <div className="horizontal-padding pb-10">
          <motion.h1
            className="section-heading"
            ref={ref}
            style={{
              transform: inView ? "translateY(0)" : "translateY(100px)",
              opacity: inView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          >
            What Our Patients <br /> Say About Us
          </motion.h1>
        </div>
        <Swiper
          {...sliderSettings}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: false,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper px-4"
        >
          <div
            className="w-full flex flex-col lg:flex-row"
            ref={ref}
            style={{
              transform: inView ? "translateY(0)" : "translateY(100px)",
              opacity: inView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
          >
            <SwiperSlide>
              <div className={` rounded-3xl w-full  gap-4 flex flex-col items-center lg:items-start lg:flex-row p-6 lg:p-8 xl:p-10 ${theme === "light" ? 'bg-white text-black ' : 'bg-[#2d2d2d] text-white'} `}>
                <img
                  src="/team-member02.webp"
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
                <div className="w-full flex flex-col items-center lg:items-start gap-2 lg:w-[80%] text-center lg:text-left ">
                  <p className="text-gray-400 font-normal text-[16px] lg:text-[18px]">
                    I can’t express enough gratitude for the peace of mind the
                    ‘Breast Cancer Check’ device has brought into my life. Its
                    accuracy and user-friendly design make it an indispensable
                    tool for anyone serious about proactive health management.
                    Thank you for this empowering solution!
                  </p>
                  <div className="flex items-center justify-center">
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={` rounded-3xl w-full  gap-4 flex flex-col items-center lg:items-start lg:flex-row p-6 lg:p-8 xl:p-10 ${theme === "light" ? 'bg-white text-black ' : 'bg-[#2d2d2d] text-white'} `}>
                <img
                  src="/team-member02.webp"
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
                <div className="w-full flex flex-col items-center lg:items-start gap-2 lg:w-[80%] text-center lg:text-left ">
                  <p className="text-gray-400 font-normal text-[16px] lg:text-[18px]">
                    I can’t express enough gratitude for the peace of mind the
                    ‘Breast Cancer Check’ device has brought into my life. Its
                    accuracy and user-friendly design make it an indispensable
                    tool for anyone serious about proactive health management.
                    Thank you for this empowering solution!
                  </p>
                  <div className="flex items-center justify-center">
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={` rounded-3xl w-full  gap-4 flex flex-col items-center lg:items-start lg:flex-row p-6 lg:p-8 xl:p-10 ${theme === "light" ? 'bg-white text-black ' : 'bg-[#2d2d2d] text-white'} `}>
                <img
                  src="/team-member02.webp"
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
                <div className="w-full flex flex-col items-center lg:items-start gap-2 lg:w-[80%] text-center lg:text-left ">
                  <p className="text-gray-400 font-normal text-[16px] lg:text-[18px]">
                    I can’t express enough gratitude for the peace of mind the
                    ‘Breast Cancer Check’ device has brought into my life. Its
                    accuracy and user-friendly design make it an indispensable
                    tool for anyone serious about proactive health management.
                    Thank you for this empowering solution!
                  </p>
                  <div className="flex items-center justify-center">
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={` rounded-3xl w-full  gap-4 flex flex-col items-center lg:items-start lg:flex-row p-6 lg:p-8 xl:p-10 ${theme === "light" ? 'bg-white text-black ' : 'bg-[#2d2d2d] text-white'} `}>
                <img
                  src="/team-member02.webp"
                  alt=""
                  className="w-16 h-16 rounded-full"
                />
                <div className="w-full flex flex-col items-center lg:items-start gap-2 lg:w-[80%] text-center lg:text-left ">
                  <p className="text-gray-400 font-normal text-[16px] lg:text-[18px]">
                    I can’t express enough gratitude for the peace of mind the
                    ‘Breast Cancer Check’ device has brought into my life. Its
                    accuracy and user-friendly design make it an indispensable
                    tool for anyone serious about proactive health management.
                    Thank you for this empowering solution!
                  </p>
                  <div className="flex items-center justify-center">
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                    <BiCheckbox className="w-5 h-8 text-orange-100" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
