import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useFormik } from "formik";
import axios from "../../../axios";
import {
  Que1,
  Que10,
  Que11,
  Que12,
  Que13,
  Que14,
  Que15,
  Que2,
  Que3,
  Que4,
  Que5,
  Que6,
  Que7,
  Que8,
  Que9,
} from "../../assets/export";
import { ErrorToast, SuccessToast } from "../Global/Toaster";
const questionImages = [
  Que1,
  Que2,
  Que3,
  Que4,
  Que5,
  Que6,
  Que7,
  Que8,
  Que9,
  Que10,
  Que11,
  Que12,
  Que13,
  Que14,
  Que15,
];
const questions = [
  "Have you noticed any lumps or thickened areas in your breast or underarm?",
  "Have you experienced nipple discharge not related to breastfeeding?",
  "Have your breasts changed in size, shape, or appearance recently?",
  "Do you experience frequent or urgent urination?",
  "Have you experienced unusual fatigue?",
  "Have you had unexplained weight loss recently?",
  "Have you experienced persistent bone pain?",
  "Have you had abdominal bloating or pelvic pressure?",
  "Are you pregnant or experiencing irregular periods?",
  "Have you experienced chest pain or shortness of breath?",
  "Have you ever had elevated CA 15-3 or hCG levels?",
  "Do you have a family history of cancer?",
  "Are you on hormone therapy or birth control?",
  "Do you have estrogen-dominant conditions?",
  "Do you have diabetes, thyroid, or autoimmune disease?",
];

const HeroQuestionnaire = () => {
  const { theme } = useContext(ThemeContext);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      ...Object.fromEntries(questions.map((_, i) => [`q${i + 1}`, ""])),
    },
    onSubmit: async (values) => {
      setLoading(true);
      const payload = {
        questions: questions
          .map((question, index) => {
            const answer = values[`q${index + 1}`];

            if (!answer) return null;

            return {
              _id: index + 1,
              question,
              answer,
            };
          })
          .filter(Boolean),
      };

      try {
        const response = await axios.post("/api/v1/question", payload);
        if (response.status === 200) {
          SuccessToast(response?.data?.message);
          setStep(0)
        }
      } catch (error) {
        ErrorToast(
          error?.response?.data?.message || "Failed to submit questionnaire"
        );
        console.error("Error submitting questionnaire:", error);
      } finally {
        setLoading(false);
      }
    },
  });
  const handleAnswer = (value) => {
    const key = `q${step + 1}`;
    formik.setFieldValue(key, value);

    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const handleSkip = () => {
    const key = `q${step + 1}`;
    formik.setFieldValue(key, null);

    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className={`w-[95%] lg:w-[60%] my-10 mx-auto py-14 px-6 lg:px-12 rounded-xl ${
          theme === "light" ? "bg-white " : "bg-[#2d2d2d]"
        }`}
      >
        <div className="flex justify-center items-center mb-6">
          <img
            src={questionImages[step]}
            className="w-[250px]"
            alt="question"
          />
        </div>

        <h2 className="text-[16px] flex  justify-center gap-1 text-[#e1107e] text-center mb-6">
          Q{step + 1}. 
        <h2 className="text-black">{questions[step]}</h2>
        </h2>

        <div>
          <button
            type="button"
            onClick={() => handleAnswer("yes")}
className="border-2 rounded-full w-full h-[49px] border-[#e1107e] mb-2 
           hover:bg-[#e1107e] hover:text-white 
           transition-colors duration-300 ease-in-out"
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => handleAnswer("no")}
            className="border-2 rounded-full w-full h-[49px] hover:bg-gray-300    transition-colors duration-300 ease-in-out  border-gray-200 mb-2"
          >
            No
          </button>
        </div>

        <div className="mt-2 flex justify-end">
          {step === questions.length - 1 ? (
            <button type="submit" className="text-[12px] me-2 text-[#e1107e]">
              Review {">"}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSkip}
              className="text-[12px] me-2 text-[#e1107e]"
            >
              Skip {">"}
            </button>
          )}
        </div>

        {step === questions.length - 1 && (
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="w-full  new-gradient-btn py-3 px-5 rounded-[26px]  text-white  text-[14px] font-[600] "
            >
              {loading ? "Submitting..." : "Submit Report"}
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default HeroQuestionnaire;
