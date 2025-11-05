import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { StripeIcon } from "../../assets/export";

const SelectPaymentModal = ({ onNext, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-[#FFFFFF] rounded-2xl w-[548px] p-6 shadow-lg">
        <div className="flex items-center mb-10">
          <button onClick={onClose} className="text-gray-500 text-xl">
            <IoMdArrowBack color="black" size={29} />
          </button>
          <h2 className="text-[24px] font-[600] text-[#000000] mx-auto">
            Select Payment Method
          </h2>
        </div>

        {/* Payment Method Section */}
        <p className="text-[16px] font-[500] capitalize mb-2 ">
          attached Stripe
        </p>
        <div className="bg-[#FFFFFF] shadow-md rounded-xl p-4 mb-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              checked
              className="accent-pink-500"
            />
            <div className="flex justify-between items-center w-full">
              <span className="text-[#727272] text-[16px] font-[400]">
                **** **** **** 7772
              </span>
              <span className="">
                <img src={StripeIcon} className="h-[27px] w-[40px] " alt="" />
              </span>
            </div>
          </label>
        </div>

        <button className="text-pink-600 text-sm mb-6 font-medium">
          + Add Stripe
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SelectPaymentModal;
