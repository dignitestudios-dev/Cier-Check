import { useContext, useState } from "react";
import Modal from "react-modal";
import { ThemeContext } from "../context/ThemeContext";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
export default function DonateModal( {showModal, setShowModal}) {
    const [amount, setAmount] = useState(1);
    const handleDonate = async () => {
       try {
         const stripe = await stripePromise;
         if (!stripe) {
           console.error("Stripe failed to load");
           return;
         }
   
         const result = await stripe.redirectToCheckout({
   
           lineItems: [{ price: "price_1SAUmmF0T0NtydYH3jS5aHKl", quantity: amount }],
           mode: "payment",
           successUrl: window.location.origin + "/success",
           cancelUrl: window.location.origin + "/cancel",
         });
   
         if (result && result.error) {
           console.error(result.error.message);
           
         }
       } catch (err) {
         console.error("Donate error:", err);
       }
     };
    return (
        <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        overlayClassName="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
        className=" rounded-2xl shadow-xl w-full max-w-[520px] p-6 outline-none relative bg-white"
      >
        <div className=" flex flex-col ">

            <div className="flex items-center justify-end">
         <button onClick={() => setShowModal(false)}>X</button>
            </div>
            <h2 className="text-[32px] font-[600] text-center text-[#CF1D67] pb-2">Donate</h2>
<div className="flex items-center gap-2 py-6">
    <button className={`bg-[#FFCBE9] py-2 w-[110px] rounded-[100px]  text-[#CF1D67]  text-[16px] font-[600] ${amount === 1 ? 'bg-pink-600 text-white' : ''}`} onClick={() => setAmount(1)}> $1</button>
    <button className={`bg-[#FFCBE9] py-2 w-[110px] rounded-[100px]  text-[#CF1D67]  text-[16px] font-[600] ${amount === 20 ? 'bg-pink-600 text-white' : ''}`} onClick={() => setAmount(20)}> $20</button>
    <button className={`bg-[#FFCBE9] py-2 w-[110px] rounded-[100px]  text-[#CF1D67]  text-[16px] font-[600] ${amount === 40 ? 'bg-pink-600 text-white' : ''}`} onClick={() => setAmount(40)}> $40</button>
    <button className={`bg-[#FFCBE9] py-2 w-[110px] rounded-[100px]  text-[#CF1D67]  text-[16px] font-[600] ${amount === 100 ? 'bg-pink-600 text-white' : ''}`} onClick={() => setAmount(100)}> $100</button>
   

</div>
 <div className="flex items-center gap-2 text-center justify-center">
 
    <p className={`bg-[#FFCBE9] py-2 w-[110px] rounded-[100px]  text-[#CF1D67]   text-[16px] font-[600] ${amount === 20 || amount === 1 ? 'bg-pink-600 text-white' : ''}`} >Shirt</p>
    <p className={`bg-[#FFCBE9] py-2 w-[110px] rounded-[100px]  text-[#CF1D67]  text-[16px] font-[600] ${amount === 40 ? 'bg-pink-600 text-white' : ''}`} >Mug</p>
    <p className={`bg-[#FFCBE9] py-2 w-[110px] rounded-[100px]  text-[#CF1D67]  text-[16px] font-[600] ${amount === 100 ? 'bg-pink-600 text-white' : ''}`} >Gift Box</p>
 </div>
 <div className="flex items-center gap-2 justify-center py-6">
    {amount === 20 || amount === 1 ? <img src="/t-shirt.png" alt=""className="w-[130px] h-[130px] border-[2px] border-[#CF1D67]    " /> : null}
    {amount === 40 ? <img src="/cup.png" alt=""className="w-[130px] h-[130px]  border-[2px] border-[#CF1D67]" /> : null}
    {amount === 100 ? <img src="/gift-box.png" alt=""className="w-[130px] h-[130px]  border-[2px] border-[#CF1D67]" /> : null}
 </div>
<div className="w-full flex items-center justify-center ">

<button onClick={handleDonate} className="w-full new-gradient-btn py-2  rounded-[100px]  text-white  text-[16px] font-[600]">Donate</button>
</div>
        </div>
        </Modal>
    )
}