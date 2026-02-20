import React from "react";

const AboutUsHero = () => {
  return (
    <div className={` w-full    `}>
      <div className="w-full h-[80vh] hero flex flex-col justify-center  horizontal-padding">
        {" "}
        <h2 data-aos="fade-right" className="w-full text-2xl lg:text-[40px] font-bold xl:leading-[50px] text-white">
          About Us
        </h2>
        <p data-aos="fade-right" className="text-[16px] font-[400] text-[#181818B2] w-[60%] pt-5 text-white">
          CierCheck was born out of a simple but powerful belief: early
          detection saves lives. Around the world, millions of people lose their
          lives to cancer each year, often because it is detected too late. For
          families, friends, and communities, the impact is devastating — and we
          know it doesn’t have to be this way.
        </p>
      </div>
      <div data-aos="fade-right" className="w flex flex-col  gap-4  helping-bg horizontal-padding py-10 lg:py-20 ">
        <p className="text-[16px] font-[400] text-[#181818B2]">
          {" "}
          CierCheck was born out of a simple but powerful belief: early
          detection saves lives. Around the world, millions of people lose their
          lives to cancer each year, often because it is detected too late. For
          families, friends, and communities, the impact is devastating — and we
          know it doesn’t have to be this way. At CierCheck, we are on a mission
          to change that story by making early cancer detection simple,
          accessible, and part of everyday health care.
        </p>
        <p className="text-[16px] font-[400] text-[#181818B2]">
          {" "}
          Our journey began with one question: how can we give people the tools
          to detect risk factors before cancer advances? The answer became the
          CierCheck Early Detection Kit, a breakthrough solution that uses just
          a single drop of blood to track critical hormone levels linked to
          cancer risk. With accuracy and simplicity at its core, the kit
          empowers people to take action in the moments that matter most — when
          there is still time to intervene.{" "}
        </p>
        <p className="text-[16px] font-[400] text-[#181818B2]">
          But we didn’t stop there. Through the CierCheck mobile app, we created
          a digital bridge between individuals and medical professionals. The
          app allows users to view results, track their health, and connect with
          trusted experts who can provide guidance, answer questions, and
          recommend next steps. This seamless combination of at-home testing and
          professional support means that no one has to navigate cancer concerns
          alone.{" "}
        </p>
        <p className="text-[16px] font-[400] text-[#181818B2]">
          What sets CierCheck apart is our commitment to making early detection
          more than just a medical process — it’s a movement for proactive care.
          We believe that when people are equipped with the right tools,
          knowledge, and connections, they are empowered to protect their
          health, their future, and the people they love. Every life saved
          through early detection is not just a victory for one family, but a
          step forward for humanity.{" "}
        </p>
        <h2 className="text-[24px] font-[600] text-[#000000]">Our Vision</h2>
        <p className="text-[16px] font-[400] text-[#181818B2]">
          {" "}
          To create a future where cancer is always detected early, treated
          effectively, and where no life is cut short due to late diagnosis. We
          envision a world where proactive health monitoring becomes the
          standard, giving every individual the opportunity to live longer,
          healthier, and more confident lives.
        </p>
        <h2 className="text-[24px] font-[600] text-[#000000]">Our Mission</h2>
        <p className="text-[16px] font-[400] text-[#181818B2]">
          {" "}
          Our mission is to transform the way people approach cancer detection
          by combining cutting-edge technology, reliable testing, and expert
          medical support. We aim to make early detection accessible,
          affordable, and trustworthy, ensuring that no one is left behind in
          the fight against cancer. By putting powerful tools into people’s
          hands, we enable them to take control of their health, make informed
          decisions, and act before it’s too late.{" "}
        </p>
        <h2 className="text-[24px] font-[600] text-[#000000]">Our Values</h2>
        <ul>
          <li className="text-[16px] font-[400] text-[#181818B2]">
            Innovation —
            <p className="text-[16px] font-[400] text-[#181818B2]">
              {" "}
              We harness science, research, and technology to continually
              improve early detection and prevention{" "}
            </p>
          </li>
          <li className="text-[16px] font-[400] text-[#181818B2]">
            Accessibility —
            <p className="text-[16px] font-[400] text-[#181818B2]">
              {" "}
              We are committed to breaking barriers so that lifesaving tools are
              available to everyone, regardless of background or location{" "}
            </p>
          </li>
          <li className="text-[16px] font-[400] text-[#181818B2]">
            {" "}
            Trust —
            <p className="text-[16px] font-[400] text-[#181818B2]">
              {" "}
              We operate with integrity and reliability, ensuring accuracy,
              confidentiality, and peace of mind in every test.{" "}
            </p>
          </li>
          <li className="text-[16px] font-[400] text-[#181818B2]">
            {" "}
            Compassion —
            <p className="text-[16px] font-[400] text-[#181818B2]">
              {" "}
              Behind every result is a person and a family — we build with
              empathy, care, and humanity at the center of our work.{" "}
            </p>
          </li>
          <li className="text-[16px] font-[400] text-[#181818B2]">
            {" "}
            Empowerment —
            <p className="text-[16px] font-[400] text-[#181818B2]">
              {" "}
              Knowledge creates strength. We give people the resources and
              confidence to take action and safeguard their health.{" "}
            </p>
          </li>
        </ul>
        <p className="text-[16px] font-[400] text-[#181818B2]">
          At CierCheck, we see a future where cancer no longer has the power to
          surprise us. Through early detection, we are not just building
          products — we are building hope, resilience, and a world where every
          individual has the chance to live the life they deserve.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutUsHero;
