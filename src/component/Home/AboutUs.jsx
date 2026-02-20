import React from "react";

export default function AboutUs() {
    return (
        <div className={` w-full horizontal-padding gap-x-10 py-10 lg:py-20 helping-bg  `}>
        <div  data-aos="fade-right" className="w-[80%] flex flex-col  gap-4 pt-12 lg:pt-8">
          <h2  className="text-[24px] font-[600] text-[#000000]">
            About Us
          </h2>
                <p className="text-[16px] font-[400] text-[#181818B2]"> CierCheck was born out of a simple but powerful belief: early detection saves lives. Around the world, millions of people lose their lives to cancer each year, often because it is detected too late. For families, friends, and communities, the impact is devastating — and we know it doesn’t have to be this way. At CierCheck, we are on a mission to change that story by making early cancer detection simple, accessible, and part of everyday health care.</p>
                <p className="text-[16px] font-[400] text-[#181818B2]"> Our journey began with one question: how can we give people the tools to detect risk factors before cancer advances? The answer became the CierCheck Early Detection Kit, a breakthrough solution that uses just a single drop of blood to track critical hormone levels linked to cancer risk. With accuracy and simplicity at its core, the kit empowers people to take action in the moments that matter most — when there is still time to intervene. </p>
                <p className="text-[16px] font-[400] text-[#181818B2]">But we didn’t stop there. Through the CierCheck mobile app, we created a digital bridge between individuals and medical professionals. The app allows users to view results, track their health, and connect with trusted experts who can provide guidance, answer questions, and recommend next steps. This seamless combination of at-home testing and professional support means that no one has to navigate cancer concerns alone.  </p>
                <p className="text-[16px] font-[400] text-[#181818B2]">What sets CierCheck apart is our commitment to making early detection more than just a medical process — it’s a movement for proactive care. We believe that when people are equipped with the right tools, knowledge, and connections, they are empowered to protect their health, their future, and the people they love. Every life saved through early detection is not just a victory for one family, but a step forward for humanity.  </p>
                </div>
        </div>
    );
}