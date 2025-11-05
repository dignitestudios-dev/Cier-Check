import React, { useContext, useState } from "react";
import Hero from "../../component/Home/Hero";
import Helping from "../../component/Home/Helping";
import CallUs from "../../component/Home/CallUs";
import BecomeAware from "../../component/Home/BecomeAware";
import HappyStories from "../../component/Home/HappyStories";
import Confidence from "../../component/Home/Confidence";
import Reviews from "../../component/Home/Reviews";
import Products from "../../component/Home/Products";
import QuizBar from "../../component/Home/QuizBar";
import ProductCategory from "../../component/Home/Category";
import Community from "../../component/Home/Community";
import MeetOurBoard from "../../component/Home/MeetOurBoard";
import AboutUs from "../../component/Home/AboutUs";
import DonateModal from "../../component/Global/DonateModal";
import { ThemeContext } from "../../component/context/ThemeContext";
import AppointmentModal from "../../component/bookappoitment/AppointmentModal";
import SelectPaymentModal from "../../component/bookappoitment/SelectPaymentModal";
import SummaryModal from "../../component/bookappoitment/SummaryModal";
import BookingCompleted from "../../component/bookappoitment/BookingCompleted";

const Home = () => {
  const { showModal, setShowModal } = useContext(ThemeContext);
  const [appointmentModal, setAppointmentModal] = useState(false);
  const [step, setStep] = useState(1);

  return (
    <div className="bg-[#F9FAFA]">
      <Hero setAppointmentModal={setAppointmentModal} />

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
        <SummaryModal onConfirm={() => setStep(4)} onClose={() => setStep(2)} />
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
