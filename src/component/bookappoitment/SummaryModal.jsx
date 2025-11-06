import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import axios from "../../../axios";
const SummaryModal = ({ onConfirm, onClose, loading }) => {
  const [cards, setCards] = useState([]);
  const savedDoctor = JSON.parse(localStorage.getItem("selected_doctor"));

  useEffect(() => {
    const savedCards = localStorage.getItem("stripe_cards");
    if (savedCards) {
      const parsedCards = JSON.parse(savedCards);
      setCards(parsedCards);
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl w-[548px] p-6 shadow-lg">
        {/* Header */}
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
            <span className="text-[18px] font-[500] text-[#000000]">
              Doctor Name
            </span>
          </div>

          <div className="bg-[#F9FAFA] rounded-[16px] p-4">
            <span className="text-[16px] font-[500] text-[#000000]">
              {savedDoctor?.name || 'No doctor selected'}
            </span>
          </div>
        </div>

        {/* Payment Info */}
        <p className="text-[18px] font-[500] capitalize mb-2 mt-3">
          Payment Method
        </p>
        <p className="text-[16px] font-[500] capitalize mb-2 mt-4">
          attached Stripe
        </p>

        {cards?.map((card) => (
          <div
            key={card.id}
            className="bg-[#FFFFFF] shadow-md rounded-xl p-4 mb-4"
          >
            <div className="flex  justify-between">
              <div className="flex gap-3 items-center">
                <div className="bg-pink-500 h-2 rounded-full w-2 "></div>
                <span className="text-[#727272] text-[16px] font-[400]">
                  **** **** **** {card.last4}
                </span>
              </div>
              <span className="text-[14px] font-[500]">{card.brand}</span>
            </div>
          </div>
        ))}

        {/* Total & Button */}
        <div className="flex items-center justify-end gap-3 mb-6">
          <span className="text-gray-700 text-[16px] font-[500]">
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
          {loading ? "Processing..." : "Confirm Appointment"}
        </button>
      </div>
    </div>
  );
};

export default SummaryModal;
