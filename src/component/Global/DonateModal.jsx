import { useState } from "react";
import Modal from "react-modal";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const donations = [
  { amount: 1, label: "$1", reward: "Shirt", img: "/t-shirt.png" },
  { amount: 20, label: "$20", reward: "Shirt", img: "/t-shirt.png" },
  { amount: 40, label: "$40", reward: "Mug", img: "/cup.png" },
  { amount: 100, label: "$100", reward: "Gift Box", img: "/gift-box.png" },
];

export default function DonateModal({ showModal, setShowModal }) {
  const [amount, setAmount] = useState(1);

  const handleDonate = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) return console.error("Stripe failed to load");

      const result = await stripe.redirectToCheckout({
        lineItems: [{ price: "price_1SAUmmF0T0NtydYH3jS5aHKl", quantity: amount }],
        mode: "payment",
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/cancel`,
      });

      if (result?.error) console.error(result.error.message);
    } catch (err) {
      console.error("Donate error:", err);
    }
  };

  const activeDonation = donations.find((d) => d.amount === amount);

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
      overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      className="rounded-2xl shadow-xl w-full max-w-[520px] p-6 bg-white outline-none"
    >
      <div className="flex flex-col">
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setShowModal(false)}>✕</button>
        </div>

        {/* Title */}
        <h2 className="text-[32px] font-semibold text-center text-[#CF1D67] pb-2">Donate</h2>

        {/* Amount Buttons */}
        <div className="flex flex-wrap gap-2 justify-center py-6">
          {donations.map((d) => (
            <button
              key={d.amount}
              onClick={() => setAmount(d.amount)}
              className={`py-2 w-[110px] rounded-[100px] text-[16px] font-[600] transition-colors
                ${amount === d.amount ? "bg-pink-600 text-white" : "bg-[#FFCBE9] text-[#CF1D67]"}`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Reward Label */}
        {activeDonation && (
          <p className="mx-auto bg-pink-600 text-white px-6 py-2 w-[110px] rounded-[100px] text-[16px] text-center font-[600]">
            {activeDonation.reward}
          </p>
        )}

        {/* Reward Image */}
        {activeDonation && (
          <div className="flex justify-center py-6">
            <img
              src={activeDonation.img}
              alt={activeDonation.reward}
              className="w-[130px] h-[130px] border-[2px] border-[#CF1D67]"
            />
          </div>
        )}

        {/* Donate Button */}
        <button
          onClick={handleDonate}
          className="w-full new-gradient-btn py-2 rounded-[100px] text-white text-[16px] font-[600]"
        >
          Donate
        </button>
      </div>
    </Modal>
  );
}
