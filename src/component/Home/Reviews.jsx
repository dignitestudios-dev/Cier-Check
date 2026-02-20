import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { BiCheckbox } from "react-icons/bi";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../context/ThemeContext";
import { sliderSettings } from "../../constants/sliderSettings";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
const ReviewsJson = [
  {
    name: "Sarah Mitchell",
    image: "/team-member01.webp",
    description:
      "I never thought a simple at-home test could give me such peace of mind. CierCheck helped me catch a hormonal imbalance early, and my doctor said it likely prevented bigger issues down the road. ",
  },
  {
    name: "Marcus Lee",
    image: "/team-member02.webp",
    description:
      "As someone with a family history of cancer, I’m always cautious. CierCheck made it easy to monitor my hormone levels without endless doctor visits. It’s now part of my regular routine.",
  },
  {
    name: "Jessica Alvarez",
    image: "/team-member04.jpg",
    description:
      "I used CierCheck after noticing a few unusual symptoms. The results gave me clarity and helped me start a conversation with my doctor sooner. It really empowered me to take control of my health.",
  },
  {
    name: "Priya Deshmukh",
    image: "/team-member02.webp",
    description:
      "I loved how simple the process was. Just a drop of blood, and I had accurate results in no time. CierCheck made something that used to feel scary feel completely manageable.",
  },
  {
    name: "David Thompson",
    image: "/team-member02.webp",
    description:
      "I got CierCheck for my wife initially, but then decided to test myself too. The insights we both gained about our hormone health were eye-opening. Every household should have this kit.",
  },
  {
    name: "Lauren Carter",
    image: "/team-member02.webp",
    description:
      "CierCheck helped me understand changes in my body I’d been ignoring for months. The app’s connection to health professionals made it so easy to get guidance without stress.",
  },
  {
    name: "Monica Chen",
    image: "/team-member02.webp",
    description:
      "After menopause, I wanted to keep an eye on my hormone levels. CierCheck gave me reliable data and helped me talk to my doctor with real confidence.",
  },
  {
    name: "Robert Hayes",
    image: "/team-member02.webp",
    description:
      "I travel a lot for work, so regular checkups are tough. CierCheck gave me a convenient way to stay informed about my health from anywhere. It’s genuinely life-changing.",
  },
];
const Reviews = () => {
  const { theme } = useContext(ThemeContext);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <div className={`w-full horizontal-padding py-16`}>
      <div className="w-full ">
        <div className=" pb-10  flex items-center justify-between">
          <h2 data-aos="fade-right" className=" w-full flex  section-heading">
          What people say about CIRCheck
          </h2>
          <div data-aos="fade-left" className="flex gap-4">
            <button
              onClick={handlePrev}
              className=" flex relative items-center justify-center w-12 h-12 rounded-full bg-[#E9E9E96B] text-white shadow-md hover:scale-110 transition group hover:bg-[#FFCBE970] "
            >
              <MdArrowBackIos className="w-6 h-6 text-[#878787] group-hover:text-[#E10983] absolute left-4" />
            </button>

            <button
              onClick={handleNext}
              className=" flex items-center justify-center w-12 h-12 rounded-full   bg-[#E9E9E96B] text-white shadow-md hover:scale-110 transition group hover:bg-[#FFCBE970] "
            >
              <MdArrowForwardIos className="w-6 h-6 text-[#878787] group-hover:text-[#E10983]" />
            </button>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          {...sliderSettings}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper  "
          breakpoints={{
            320: {
              // mobile
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              // tablet
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              // large screen
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {ReviewsJson.map((review, index) => (
            <SwiperSlide key={index} className=" px-4 py-2 relative">
              <div className="w-[409px] h-[200px] new-gradient-btn -z-10 absolute -top-0 left-1 rounded-[24px]" />
              <div
                className={` w-[400px] h-[210px] space-y-3 bg-white p-4 rounded-[24px]`}
              >
                <p className=" text-gray-400 font-normal text-[16px] ">
                  {review.description}
                </p>

                <div className="w-full flex items-center gap-2 py-2     ">
                  <img
                    src={review.image}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <p className=" text-gray-400 font-normal text-[16px] ">
                    {review.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
