import React from "react";
import HeroBreastCancer from "../../component/breastcancer/HeroBreastCancer";
import Hero from "../../component/breastcancer/Hero";
import CallUs from "../../component/Home/CallUs";

const BreastCancer = () => {
  return (
    <div className='bg-[#F9FAFA]' >
      <Hero />
      <HeroBreastCancer />
      <CallUs />
    </div>
  );
};

export default BreastCancer;
