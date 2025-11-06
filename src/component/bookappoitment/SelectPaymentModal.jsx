import React, { useState, useEffect } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { StripeIcon } from "../../assets/export";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AddCardModal from "./AddCardModal";

const stripePromise = loadStripe(
  "pk_test_51QgqnJH7kw5UclHNBR6NCUPuOo1i8KplCws8asSDjvLbqBAmwOIfEy4CZ12Khfnl98TmSZ0WDxDjIfAi9HK0xvsd00j5IyrgIA"
);

const SelectPaymentModal = ({ onNext, onClose }) => {
  const [cards, setCards] = useState([]);
  const [showAddCard, setShowAddCard] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState("");
  const [error, setError] = useState("");

  // Load cards from localStorage once on mount
  useEffect(() => {
    const savedCards = localStorage.getItem("stripe_cards");
    if (savedCards) {
      const parsedCards = JSON.parse(savedCards);
      setCards(parsedCards);
      if (parsedCards.length > 0) {
        setSelectedCardId(parsedCards[0].id); // auto-select first card
      }
    }
  }, []);

  // Save cards to localStorage whenever cards state changes
  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem("stripe_cards", JSON.stringify(cards));
    }
  }, [cards]);

  const handleCardAdded = (paymentMethod) => {
    const newCard = {
      id: paymentMethod.id,
      last4: paymentMethod.card.last4,
      brand: paymentMethod.card.brand,
    };
    setCards((prev) => [...prev, newCard]);
    setSelectedCardId(newCard.id); // auto-select new card
    setError("");
  };

  const handleNext = () => {
    if (!selectedCardId) {
      setError("Please add or select a card before proceeding.");
      return;
    }
    // localStorage already updated via useEffect, so cards persist
    onNext(selectedCardId);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-[#FFFFFF] rounded-2xl w-[548px] p-6 shadow-lg relative">
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
            Attached Stripe
          </p>

          {cards?.map((card) => (
            <div
              key={card.id}
              className="bg-[#FFFFFF] shadow-md rounded-xl p-4 mb-4"
            >
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="accent-pink-500"
                  checked={selectedCardId === card.id}
                  onChange={() => {
                    setSelectedCardId(card.id);
                    setError("");
                  }}
                />
                <div className="flex justify-between items-center w-full">
                  <span className="text-[#727272] text-[16px] font-[400]">
                    **** **** **** {card.last4}
                  </span>
                  <span className="">
                    <h2 className="h-[27px] w-[40px]">{card.brand}</h2>
                  </span>
                </div>
              </label>
            </div>
          ))}
          {cards?.length < 1 && (
            <button
              onClick={() => setShowAddCard(true)}
              className="text-pink-600 text-sm mb-6 font-medium"
            >
              + Add Stripe
            </button>
          )}

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold"
          >
            Next
          </button>

          {showAddCard && (
            <AddCardModal
              onClose={() => setShowAddCard(false)}
              onCardAdded={handleCardAdded}
            />
          )}
        </div>
      </div>
    </Elements>
  );
};

export default SelectPaymentModal;
