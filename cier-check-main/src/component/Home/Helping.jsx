import React, { useContext, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../context/ThemeContext";
import DonateButton from "../Global/DonateButton";

const Helping = () => {
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
    <div className={` w-full horizontal-padding gap-x-10 py-10 lg:py-20 ${theme === "light" ? 'bg-white text-black' : 'bg-dark text-white'}`}>
      <div className="w-full flex flex-col items-center justify-center text-center gap-4 pt-12 lg:pt-8">
        <motion.h2
          className="section-heading"
          ref={ref}
          style={{
            transform: inView ? "translateY(0)" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          Helping Save Lives One Test At A Time
        </motion.h2>
        <div className=" " />
        <motion.p
          className="gray-text "
          ref={ref}
          style={{
            transform: inView ? "translateY(0)" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          Detecting hope, our revolutionary advanced breast cancer test emerges
          as a groundbreaking achievement in the realm of early diagnosis,
          extending a vital lifeline to women across the globe. With
          unparalleled precision and remarkable speed, we steadfastly stand on
          the frontlines of the battle against cancer, unfurling a robust shield
          of assurance that fortifies individuals and endows them with the
          strength to confront the future with unparalleled resilience.
        </motion.p>
        <motion.p
          className="gray-text"
          ref={ref}
          style={{
            transform: inView ? "translateY(0)" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          As you embark on your health journey, consider the transformative
          impact of our test. We take pride in spearheading progress in the
          ongoing fight against breast cancer, pushing the boundaries of
          innovation and setting new standards in the field. Our commitment is
          unwavering, and our dedication to advancing the cause of early
          detection remains resolute.
        </motion.p>
        <motion.p
          className="gray-text"
          ref={ref}
          style={{
            transform: inView ? "translateY(0)" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >
          Choose our test, not just as a diagnostic tool but as a beacon of
          hope, illuminating the path towards a healthier, more empowered
          future. In this collective endeavor to combat breast cancer, let our
          test be the cornerstone of your proactive and informed approach,
          guiding you towards a brighter and more secure tomorrow. Together, we
          stride towards a future where the shadows of uncertainty are
          dispelled, replaced by the radiance of hope and the assurance of early
          intervention.
        </motion.p>
        <button
          ref={ref}
          style={{
            transform: inView ? "translateY(0)" : "translateY(100px)",
            opacity: inView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
          }}
        >

          <DonateButton />
        </button>
      </div>

    </div>
  );
};

export default Helping;
