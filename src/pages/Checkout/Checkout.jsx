import React, { useContext } from "react";
import Navbar2 from "../../component/Global/Navbar2";
import Banner from "../../component/Product/Banner";
import ProductListing from "../../component/Checkout/ProductListing";
import Form from "../../component/Checkout/Form";
import Payment from "../../component/Checkout/Payment";
import { ThemeContext } from "../../component/context/ThemeContext";

export default function Checkout() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` ${
        theme === "light" ? "bg-pink-200 text-black" : "bg-[#2d2d2d]"
      } `}
    >
      {/* <Navbar2 /> */}
      <ProductListing />
      <Form />
      <Payment />
    </div>
  );
}
