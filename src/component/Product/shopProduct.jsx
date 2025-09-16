import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CiStar } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { ProductsJson } from "../../constants/Products";
import Drawer from "./Drawer";
import { json, NavLink, useNavigate } from "react-router-dom";
export default function ShopProduct() {
  const navigate = useNavigate();
  const {
    theme,
    setDrawOpen,
    isDrawOpen,
    toggleTodo,
    getTotalPrice,
    handleQuantityChange,
    addProduct,
    openDrawer,
    deleteTodo,
  } = useContext(ThemeContext);

    // const HandleCart = (ProductId) => {

    //   const cartData = JSON.parse(localStorage.getItem("cart")) || [];

    //   const newItem = {
    //     id: ProductId,
    //     qty: 1,
    //   };
    //   const existingItem = cartData?.find((item) => item.id === ProductId);

    //   if (existingItem) {
    //     existingItem.qty += 1;
    //   } else {
    //     cartData.push(newItem);
    //   }

    //   localStorage.setItem("cart", JSON.stringify(cartData));
    //   setDrawOpen(!isDrawOpen)
    // };

  return (
    <div className={`w-full flex flex-col gap-6 py-10  horizontal-padding`}>
     
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {ProductsJson.map((item, i) => (
          <div className="bg-[#ffffff] p-3 rounded-3xl " key={i}>
            <div className="relative   ">
              <img src={item.image} alt="" className="" />
              <div className="absolute top-1.5 right-1.5 bg-white flex items-center justify-center gap-1 w-[41px] h-[27px] rounded-[100px] ">
                <img
                  src="./public/star.png"
                  alt=""
                  className="w-[12px] h-[12px] "
                />
                <p className="text-[11px] font-[400]">4.5</p>
              </div>
            </div>
            <div className=" mt-2 p-1 ">
              <h3 className=" text-[16px] text-[#000000] font-[500] flex justify-between">
                {item.title}{" "}
                <span className="text-[14px] font-[600] text-[#E10983]">
                  ${item.price}
                </span>
              </h3>

              <p className="text-[14px] mt-2 mb-2 ">
                Our best-selling oil control routine that clears blemishes while
                helping to balance the skin's natural oils
              </p>
            </div>
            <button className="w-full h-[44px] rounded-[100px]  text-[#FFFFFF]  text-[16px] font-[500] new-gradient-btn">
              <p>Buy Now</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
