import React from 'react'
import Hero from '../../component/Home/Hero'
import Helping from '../../component/Home/Helping'
import CallUs from '../../component/Home/CallUs'
import BecomeAware from '../../component/Home/BecomeAware'
import HappyStories from '../../component/Home/HappyStories'
import Confidence from '../../component/Home/Confidence'
import Reviews from '../../component/Home/Reviews'
import Products from '../../component/Home/Products'
import QuizBar from '../../component/Home/QuizBar'
import ProductCategory from '../../component/Home/Category'
import Community from '../../component/Home/Community'
import MeetOurBoard from '../../component/Home/MeetOurBoard'
import AboutUs from '../../component/Home/AboutUs'

const Home = () => {
    return (
        <div className='bg-[#F9FAFA]' >
            <Hero />
            
            <Products />
            <Helping />
            {/* <Community /> */}
            {/* <ProductCategory/> */}
            <BecomeAware />
            <AboutUs />
            {/* <QuizBar /> */}
            {/* <HappyStories /> */}
            {/* <MeetOurBoard /> */}
            <Reviews />
            {/* <CallUs /> */}
            {/* <Confidence /> */}
        </div>
    )
}

export default Home