import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { StripeIcon } from "../../assets/export";
import { CiTrash } from "react-icons/ci";
import { BiEditAlt } from "react-icons/bi";

const SummaryModal = ({ onConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl w-[548px] p-6 shadow-lg">
        <div className="flex items-center mb-10">
          <button onClick={onClose} className="text-gray-500 text-xl">
            <IoMdArrowBack color="black" size={29} />
          </button>
          <h2 className="text-[24px] font-[600] text-[#000000] mx-auto">
            Summary
          </h2>
        </div>

        {/* Doctor Info */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-gray-700">
            <span className=" text-[18px]  font-[500] text-[#000000]">
              Doctor Name
            </span>
          </div>
          <div className="bg-[#F9FAFA] rounded-[16px]  p-4 space-y-3 ">
            <div className="flex justify-between text-[#000000]">
              <span className="font-medium">Date:</span>
              <span>09/09/2025</span>
            </div>
            <div className="flex justify-between text-[#000000]">
              <span className="font-medium">Time:</span>
              <span>09:00 PM</span>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <p className="text-[18px] font-[500] capitalize mb-2 ">
          Payment Method
        </p>
        <p className="text-[16px] font-[500] capitalize mb-2 ">
          attached Stripe
        </p>
        <div className="bg-[#FFFFFF] flex  justify-between  shadow-md rounded-xl p-4 mb-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="payment"
              checked
              className="accent-pink-500"
            />
            <div className="flex justify-between items-center gap-10 w-full">
              <span className="text-[#727272] text-[16px] font-[400]">
                **** **** **** 7772
              </span>
              <span className="">
                <img src={StripeIcon} className="h-[27px] w-[40px] " alt="" />
              </span>
            </div>
          </label>
          <div className="flex gap-4 items-center">
            <button>
              <BiEditAlt size={20} />
            </button>
            <button>
              <CiTrash size={20} color="#F01A1A" />
            </button>
          </div>
        </div>

        {/* Total & Button */}
        <div className="flex  items-center justify-end gap-3 mb-6">
          <span className="text-gray-700 text-[16px]  font-[500]">
            Total Amount:
          </span>
          <span className="text-pink-600 text-[24px] font-[700]">
            $50/
            <span className="text-[10px] text-[#222222] font-[400]">month</span>
          </span>
        </div>

        <button
          onClick={onConfirm}
          className="w-full py-3 rounded-[50px] bg-gradient-to-r from-[#E10983] to-[#DC6B33] text-white font-semibold"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default SummaryModal;
