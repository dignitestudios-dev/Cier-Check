import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const AddCardModal = ({ onClose, onCardAdded }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error(error);
        alert(error.message);
      } else {
        console.log(paymentMethod);
        onCardAdded(paymentMethod);
        onClose();
      }
    } catch (err) {
      console.error("Stripe error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-600 hover:text-black"
        >
          <IoClose size={22} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Add New Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <CardElement className="p-3 border border-gray-200 rounded-md" />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-pink-500 text-white font-semibold"
          >
            {loading ? "Adding..." : "Add Card"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCardModal;
