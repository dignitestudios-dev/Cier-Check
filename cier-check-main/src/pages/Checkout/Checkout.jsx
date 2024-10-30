import React from 'react'
import Navbar2 from '../../component/Global/Navbar2'
import Banner from '../../component/Product/Banner'
import ProductListing from '../../component/Checkout/ProductListing'
import Form from '../../component/Checkout/Form'
import Payment from '../../component/Checkout/Payment'

export default function Checkout() {
  return (
    <>
      {/* <Navbar2 /> */}
      <ProductListing />
      <Form />
      <Payment />
    </>
  )
}
