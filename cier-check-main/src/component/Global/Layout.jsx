import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Drawer from '../Product/Drawer'

const Layout = ({ pages }) => {
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
