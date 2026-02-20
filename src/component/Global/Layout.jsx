import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Drawer from '../Product/Drawer'
import AOS from "aos";
import "aos/dist/aos.css"
const Layout = ({ pages }) => {
         useEffect(() => {
  AOS.init({
    duration: 1000,  // animation speed
    once: false,     // false: har scroll me animation repeat ho sakti hai
    mirror: true,    // true: scroll up par bhi animation chale
  });
}, []);
    return (
        <div className='overflow-hidden relative'>
            <Navbar />
            {pages}
            <Footer />
            <Drawer />
        </div>
    )
}

export default Layout
