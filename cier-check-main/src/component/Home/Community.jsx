import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Community = () => {
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
        <div className='w-full flex flex-col items-center justify-center gap-6'>
            <h1
                className=" w-full flex items-center justify-center lg:text-6xl font-medium"
                ref={ref}
                style={{
                    transform: inView ? "translateY(0)" : "translateY(100px)",
                    opacity: inView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
            >
                Join the Proactiv Community!
            </h1>
            <p className=" w-full flex items-center justify-center lg:text-4xl font-medium"
                ref={ref}
                style={{
                    transform: inView ? "translateY(0)" : "translateY(100px)",
                    opacity: inView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}
            >
                follow us @proactiv
            </p>
            <div className=" w-full flex items-center justify-center lg:text-4xl font-medium gap-4"
                ref={ref}
                style={{
                    transform: inView ? "translateY(0)" : "translateY(100px)",
                    opacity: inView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}>
                <Link to={'https://www.instagram.com'}>

                    <FaInstagram />
                </Link>
                <Link to={'https://www.facebook.com/'}><FaFacebook /></Link>
            </div>
        </div>
    )
}

export default Community