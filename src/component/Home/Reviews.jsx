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
    name:"Mike Smith",
    image:"/team-member02.webp",
    description:"I’m deeply grateful for the peace of mind the Breast Cancer Check device has given me. Its accuracy and ease of use make it an ",
    
  },
  {
    name:"Mike Smith",
    image:"/team-member02.webp",
    description:"I’m deeply grateful for the peace of mind the Breast Cancer Check device has given me. Its accuracy and ease of use make it an ",
    
  },
  { 
    name:"Mike Smith",
    image:"/team-member02.webp",
    description:"I’m deeply grateful for the peace of mind the Breast Cancer Check device has given me. Its accuracy and ease of use make it an ",
    
  },
  {
    name:"Mike Smith",
    image:"/team-member02.webp",
    description:"I’m deeply grateful for the peace of mind the Breast Cancer Check device has given me. Its accuracy and ease of use make it an ",
    
  }
]
const Reviews = () => {
  const { theme } = useContext(ThemeContext)
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
    <div className={`w-full horizontal-padding py-16`} >
      <div className="w-full " >
        <div className=" pb-10 relative flex items-center justify-between">
          <h2
            className=" w-full flex  section-heading"
           
          >
            What Our Patients Say About Us
          </h2>
          <div className="flex gap-4">
    <button onClick={handlePrev}
      className=" flex items-center justify-center w-12 h-12 rounded-full bg-[#E9E9E96B] text-white shadow-md hover:scale-110 transition group hover:bg-[#FFCBE970] "
    >
      <MdArrowBackIos className="w-6 h-6 text-[#878787] group-hover:text-[#E10983]" />
    </button>

    <button onClick={handleNext}
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
          modules={[ Pagination, Navigation]}
          className="mySwiper  "
          breakpoints={{
            320: { // mobile
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: { // tablet
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: { // large screen
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {ReviewsJson.map((review, index) => (
            <SwiperSlide key={index}
             className=" px-4 py-2 relative">
              <div className="w-[409px] h-[200px] new-gradient-btn -z-10 absolute -top-0 left-1 rounded-[24px]"/>
              <div
                className={` w-[400px] h-[210px] space-y-3 bg-white p-4 rounded-[24px]`}>
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
