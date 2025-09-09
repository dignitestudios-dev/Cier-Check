import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useLocation, useParams } from "react-router-dom";
import { ProductsJson } from "../../constants/Products";
import { IoIosStar } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { Radio } from "@material-tailwind/react";

export default function DetailSection() {
  const { theme, addProduct } = useContext(ThemeContext);
  const paramId = useParams();
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(1);
  useEffect(() => {
    let currentProduct = ProductsJson.filter(
      (item, i) => item.id == parseInt(paramId?.id)
    );
    setProduct(currentProduct[0]);
  }, [paramId]);

  const HandleCart = (ProductId) => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];

    const newItem = {
      id: ProductId,
      qty: qty,
    };
    const existingItem = cartData?.find((item) => item.id === ProductId);

    if (existingItem) {
      existingItem.qty += parseInt(qty);
    } else {
      cartData.push(newItem);
    }

    localStorage.setItem("cart", JSON.stringify(cartData));
    setDrawOpen(!isDrawOpen);
  };

  return (
    <div
      className={`w-full flex flex-col items-center  justify-center  gap-6 pb-10   horizontal-padding ${
        theme === "light" ? "bg-white text-black" : "bg-dark"
      }`}
    >
      <div className="container mx-auto px-4 py-8  lg:mt-28">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 lg:mb-8">
            <img
              src={product.image}
              alt="Product"
              className="w-full h-[80%] rounded-lg shadow-md mb-4"
              id="mainImage"
            />
          </div>

          <div className="w-full md:w-1/2 px-4 lg:mt-2 flex flex-col">
            <h2 className="text-2xl md:text-4 lg:text-4xl font-bold mb-2">
              {product.title}
            </h2>

            <div className="flex items-center mb-4">
              <div className="review flex  items-center justify-center mt-2">
                <IoIosStar color="#FAAF00" size={20} />
                <IoIosStar color="#FAAF00" size={20} />
                <IoIosStar color="#FAAF00" size={20} />
                <IoIosStar color="#FAAF00" size={20} />

                <CiStar className="" size={20} />
                <span className="pl-3 text-base text-blue-500 ">
                  {product.ratting} (120 reviews)
                </span>
              </div>
            </div>
            <div>
              <p className=" mb-6 text-base font-normal">{product.text}</p>
            </div>
            <div className="w-full flex  justify-start gap-4 pb-6">
              <div
                class={`flex items-center mb-4 ${
                  theme === "light" ? "bg-white text-black" : "bg-dark"
                }`}
              >
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  class="w-8 h-8"
                />
              </div>
              <div className="flex flex-col">
                <label
                  for="default-radio-1"
                  class={` ms-2 text-xl lg:text-lg font-medium text-gray-900 dark:text-gray-300 flex gap-6 ${
                    theme === "light" ? "bg-white text-black" : "bg-dark"
                  }`}
                >
                  {product.mixpt}
                  <span>${product.mixprice}.00/Month</span>
                </label>
                <ul className="ms-7 list-disc text-base lg:text-base">
                  <li>Save up to 30% when subscribing</li>
                  <li>Save up to 30% when subscribing</li>
                  <li>Save up to 30% when subscribing</li>
                  <li>Save up to 30% when subscribing</li>
                </ul>
              </div>
            </div>
            <div class="flex items-center gap-5 pb-10">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                class="w-8 h-8"
              />
              <label
                for="default-radio-2"
                class={`ms-2 text-base lg:text-lg font-medium text-gray-900 dark:text-gray-300 flex gap-2 ${
                  theme === "light" ? "bg-white text-black" : "bg-dark"
                }`}
              >
                {product.minipt} -<span>${product.miniprice}.00</span>
              </label>
            </div>
            <div className="flex items-center justify-start gap-5">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setQty(qty - 1)}
                  className="h-12 w-10 flex items-center justify-center border border-r-0 border-gray-300 rounded-l-lg"
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min={1}
                  onChange={(e) => setQty(e.target.value)}
                  defaultValue={1}
                  value={qty}
                  className={` w-16 h-12 ${
                    theme === "light" ? "bg-white text-black" : "bg-dark"
                  } text-center border-gray-300 border-t border-b outline-none text-xl`}
                />
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  className="h-12 w-10 flex items-center justify-center border border-l-0 border-gray-300 rounded-r-lg"
                >
                  +
                </button>
              </div>
              <div className="flex ">
                <button
                  onClick={() => addProduct(product)}
                  className="bg-pink-600 flex gap-2 items-center text-white px-6 py-3 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  <FaCartShopping color="white" size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="pt-12 lg:pt-28 flex flex-col justify-center">
              <h3 className="text-3xl lg:text-2xl font-bold">Size</h3>
              <div className="pt-8 flex gap-3">
                <button className="py-2 lg:py-4 px-6 border-2 border-pink-600 rounded-full text-sm lg:text-lg font-bold hover:bg-pink-200 duration-200 transition-all">
                  90 day
                </button>
                <button className="py-2 lg:py-4 px-6 border-2 border-pink-600 rounded-full text-sm lg:text-lg font-bold hover:bg-pink-200 duration-200 transition-all">
                  90 day
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
