import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const BookingCompleted = ({ onConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl w-[548px] p-6 shadow-lg">
        <button onClick={onClose} className="flex ms-auto">
          <IoClose size={40} />
        </button>
        <div className="flex justify-center">
          <div className="bg-gradient-to-r h-[80px] rounded-full w-[80px] flex justify-center items-center from-[#E10983] to-[#DC6B33]">
            <IoMdCheckmark size={40} color="white" />
          </div>
        </div>
        <div className="text-center  space-y-2  mt-6">
          <h2 className="text-[32px] font-[600] text-[#181818] ">
            Booking Confirmed
          </h2>
          <p className="text-[18px] mx-auto text-[#565656] w-[356px] font-[400] ">
            Your booking has been successfully confirmed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingCompleted;
