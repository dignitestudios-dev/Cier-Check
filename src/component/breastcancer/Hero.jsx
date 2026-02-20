import React, { useRef } from "react";

const Hero = () => {
  const SectionRef = useRef(null);

  return (
    <main className="w-full contact-header h-[120vh] lg:h-[80vh] relative overflow-hidden">
      {/* <Navbar /> */}
      <div className="w-full h-full horizontal-padding flex flex-col items-start justify-center gap-5 lg:gap-6 relative overflow-y-hidden text-white lg:w-2/3 pt-10 lg:py-28">
        <h1 data-aos="fade-right"
          className="text-4xl lg:text-6xl font-extrabold lg:leading-[70px]"
          
        >
          Breast Cancer Awareness
        </h1>
      </div>
      {/* <img
        src="/lady-doctor.png"
        alt=""
        className="h-[50vh] lg:h-[70vh] bg-cover lg:absolute right-0 lg:right-20 -bottom-0"
      /> */}
    </main>
  );
};

export default Hero;
