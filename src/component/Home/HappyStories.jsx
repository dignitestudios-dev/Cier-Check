import { BiCheckbox } from 'react-icons/bi'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';



const HappyStories = () => {

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
        <div className=' flex flex-col items-center justify-center py-12 lg:py-20 gap-10'>
            <motion.h1 className='text-4xl font-bold' ref={ref}
                style={{
                    transform: inView ? "translateY(0)" : "translateY(100px)",
                    opacity: inView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
                }}>Happy Stories</motion.h1>
            <div className='w-20 border border-black' />
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 mt-5 gap-10 px-4 md:px-8 lg:px-16 xl:px-44'>
                <div className='flex flex-col items-center justify-center bg-white rounded-3xl gap-5 text-center px-6 lg:px-24 py-12 lg:py-28 shadow-bg'>
                    <img src="public/team-member01.webp" className='w-24 h-24 rounded-full' alt="" />
                    <p>Privacy was a significant concern for me when considering a breast health device. The ‘Breast Cancer Check’ not only delivered on its promise of reliability but also provided a discreet and private solution. It’s a game-changer for anyone seeking a confidential approach to self-checks.</p>
                    <h3 className='text-xl font-semibold'>Amanda L</h3>
                    <div className="flex items-center">

                        <BiCheckbox className='w-5 h-8 text-orange-100' />
                        <BiCheckbox className='w-5 h-8 text-orange-100' />
                        <BiCheckbox className='w-5 h-8 text-orange-100' />
                        <BiCheckbox className='w-5 h-8 text-orange-100' />
                        <BiCheckbox className='w-5 h-8 text-orange-100' />
                    </div>
                </div>
                <div className='flex flex-col lg:items-start gap-10'>
                    <div className='bg-white rounded-3xl p-10 flex flex-col lg:flex-row items-center shadow-bg gap-8'>
                        <img src="/team-member02.webp" alt="" className="w-[40%] lg:w-[20%] rounded-full" />
                        <div className="flex flex-col items-center lg:items-start gap-2 lg:w-[80%] text-center lg:text-left ">
                            <p>
                                I can’t express enough gratitude for the peace of mind the ‘Breast Cancer Check’ device has brought into my life. Its accuracy and user-friendly design make it an indispensable tool for anyone serious about proactive health management. Thank you for this empowering solution!
                            </p>
                            <h3 className='text-xl font-semibold'>Emily R.</h3>
                            <div className="flex items-center justify-center">

                                <BiCheckbox className='w-5 h-8 text-orange-100' />
                                <BiCheckbox className='w-5 h-8 text-orange-100' />
                                <BiCheckbox className='w-5 h-8 text-orange-100' />
                                <BiCheckbox className='w-5 h-8 text-orange-100' />
                                <BiCheckbox className='w-5 h-8 text-orange-100' />
                            </div>
                        </div>
                    </div>

                    <div className='bg-white rounded-3xl p-10 flex flex-col lg:flex-row items-center shadow-bg gap-8'>
                        <img src="/team-member02.webp" alt="" className="w-[40%] lg:w-[20%] rounded-full" />
                        <div className="flex flex-col items-center lg:items-start gap-2 lg:w-[80%] text-center lg:text-left">
                            <p>
                                I can’t express enough gratitude for the peace of mind the ‘Breast Cancer Check’ device has brought into my life. Its accuracy and user-friendly design make it an indispensable tool for anyone serious about proactive health management. Thank you for this empowering solution!
                            </p>
                            <h3 className='text-xl font-semibold'>David S</h3>
                            <div className="flex items-center">

                                <BiCheckbox className='w-5 h-8 text-orange-100' />
                                <BiCheckbox className='w-5 h-8 text-orange-100' />
                                <BiCheckbox className='w-5 h-8 text-orange-100' />
                                <BiCheckbox className='w-5 h-8 text-orange-100' />
                                <BiCheckbox className='w-5 h-8 text-orange-100' />
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div >
    )
}

export default HappyStories