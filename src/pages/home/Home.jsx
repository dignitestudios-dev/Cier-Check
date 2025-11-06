import React, { useContext, useEffect, useRef, useState } from "react";
import Hero from "../../component/Home/Hero";
import Helping from "../../component/Home/Helping";
import BecomeAware from "../../component/Home/BecomeAware";
import Reviews from "../../component/Home/Reviews";
import Products from "../../component/Home/Products";
import AboutUs from "../../component/Home/AboutUs";
import DonateModal from "../../component/Global/DonateModal";
import { ThemeContext } from "../../component/context/ThemeContext";
import AppointmentModal from "../../component/bookappoitment/AppointmentModal";
import SelectPaymentModal from "../../component/bookappoitment/SelectPaymentModal";
import SummaryModal from "../../component/bookappoitment/SummaryModal";
import BookingCompleted from "../../component/bookappoitment/BookingCompleted";
import axios from "../../../axios";
import { ErrorToast, SuccessToast } from "../../component/Global/Toaster";
import { useStripe } from "@stripe/react-stripe-js";
import { AppContext } from "../../context/AppContext";
import { initSocket } from "../../component/context/SocketContext";

const Home = () => {
  const stripe = useStripe();
  const { showModal, setShowModal } = useContext(ThemeContext);
  const [appointmentModal, setAppointmentModal] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AppContext);

  // 🧠 Store socket ref globally for this component
  const socketRef = useRef(null);

  useEffect(() => {
    if (!token) return;

    const socket = initSocket();
    if (!socket) return;

    socketRef.current = socket; // ✅ Save it for later use

    socket.on("book-consultation", (data) => {
      console.log("✅ Booking success:", data);
    });

    socket.on("book-consultation-error", (err) => {
      console.error("❌ Booking error:", err);
    });

    return () => {
      socket.off("book-consultation");
      socket.off("book-consultation-error");
    };
  }, [token]);

  const handleCreateAppoitment = async () => {
    if (!stripe) {
      ErrorToast("Stripe not ready yet!");
      return;
    }

    const savedDoctor = JSON.parse(localStorage.getItem("selected_doctor"));
    const savedCards = JSON.parse(localStorage.getItem("stripe_cards"));
    const cards = savedCards || [];

    if (!savedDoctor?.id) {
      ErrorToast("Doctor not selected!");
      return;
    }

    if (!cards?.[0]?.id) {
      ErrorToast("Payment method not found!");
      return;
    }

    const payload = {
      doctorId: savedDoctor.id,
      paymentMethod: cards[0].id,
    };

    setLoading(true);
    try {
      const response = await axios.post("/api/v1/consultation", payload);

      if (response?.status === 200) {
        const { clientSecret } = response.data.data;

        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: cards?.[0]?.id,
        });

        if (result.error) {
          ErrorToast(result.error.message);
          return;
        }

        if (result.paymentIntent?.status === "succeeded") {
          SuccessToast("Payment successful! Booking consultation...");

          const bookPayload = {
            doctorId: savedDoctor?.id,
            minutes: 30,
          };

          // ✅ Use socket from ref
          const socket = socketRef.current;
          if (!socket) {
            ErrorToast("Socket not ready, please refresh the page.");
            return;
          }

          if (!socket.connected) socket.connect();
          socket.emit("book-consultation", bookPayload);

          socket.on("book-consultation-success", (data) => {
            SuccessToast("Consultation booked successfully!");
            console.log("Booking success:", data);
            setStep(4);
            localStorage.removeItem("selected_doctor");
            localStorage.removeItem("stripe_cards");
          });

          socket.on("book-consultation-error", (err) => {
            console.error(err);
            ErrorToast("Booking failed, please try again!");
          });
        }
      }
    } catch (error) {
      console.error(error);
      ErrorToast(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#F9FAFA]">
      <Hero setAppointmentModal={setAppointmentModal} setStep={setStep} />

      <Products />
      <Helping />
      {/* <Community /> */}
      {/* <ProductCategory/> */}
      <BecomeAware />
      <AboutUs />
      {/* <QuizBar /> */}
      {/* <HappyStories /> */}
      {/* <MeetOurBoard /> */}
      <Reviews />
      {/* <CallUs /> */}
      {/* <Confidence /> */}
      {showModal && (
        <DonateModal showModal={showModal} setShowModal={setShowModal} />
      )}
      {step === 1 && (
        <AppointmentModal
          onClose={() => setAppointmentModal(false)}
          showModal={appointmentModal}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <SelectPaymentModal
          onNext={() => setStep(3)}
          onClose={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <SummaryModal
          loading={loading}
          onConfirm={handleCreateAppoitment}
          onClose={() => setStep(2)}
        />
      )}
      {step === 4 && (
        <BookingCompleted
          onConfirm={() => setStep(1)}
          onClose={() => setStep(0)}
        />
      )}
    </div>
  );
};

export default Home;
