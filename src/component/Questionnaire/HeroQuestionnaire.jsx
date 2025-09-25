import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  for (let i = 1; i <= 15; i++) {
    const key = `q${i}`;
    if (!values[key]) {
      errors[key] = "Required";
    } else if (values[key].length > 15) {
      errors[key] = "Must be 15 characters or less";
    }
  }

  return errors;
};

const HeroQuestionnaire = () => {
  const { theme } = useContext(ThemeContext);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
      q6: "",
      q7: "",
      q8: "",
      q9: "",
      q10: "",
      q11: "",
      q12: "",
      q13: "",
      q14: "",
      q15: "",
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  const questions = [
    "Have you noticed any lumps or thickened areas in your breast or underarm?",
    "Have you experienced nipple discharge (especially clear or bloody) not related to breastfeeding?",
    "Have your breasts changed in size, shape, or appearance recently (e.g., dimpling, swelling, redness, rash)?",
    "Do you experience frequent or urgent urination (more than 8 times a day)?",
    "Have you experienced unusual or persistent fatigue without explanation?",
    "Have you had any unexplained weight loss or appetite changes in the past 3 months?",
    "Have you experienced persistent bone pain, especially in the back or hips?",
    "Have you had abdominal bloating, discomfort, or pelvic pressure recently?",
    "Are you currently pregnant, recently pregnant, or experiencing irregular periods?",
    "Have you experienced chest pain or shortness of breath that is not explained by physical activity?",
    "Have you ever had elevated CA 15-3 or hCG levels in any prior blood test?",
    "Do you have a family history of breast, ovarian, or uterine cancer?",
    "Are you currently on hormone replacement therapy (HRT), birth control, or fertility medications?",
    "Do you have a history of endometriosis, PCOS, or other estrogen-dominant conditions?",
    "Do you have diabetes, thyroid issues, or autoimmune disease?",
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className={`w-[95%] lg:w-[60%] flex flex-col items-start justify-start mx-auto gap-10 py-14 px-6 md:px-7 lg:px-12 ${
          theme === "light" ? "bg-white shadow-bg" : "bg-[#2d2d2d]"
        }`}
      >
        <h1 className="text-4xl">Questionnaire</h1>

        {questions.map((q, index) => {
          const key = `q${index + 1}`;
          return (
            <div key={key} className="flex flex-col gap-2 w-full">
              <p>
                {index + 1}. {q}
              </p>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={key}
                    onChange={formik.handleChange}
                    value="true"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={key}
                    onChange={formik.handleChange}
                    value="false"
                  />
                  <span>No</span>
                </label>
              </div>
              {formik.errors[key] ? (
                <div className="text-red-600">{formik.errors[key]}</div>
              ) : null}
              <div className="border w-full my-4" />
            </div>
          );
        })}

        <button
          type="submit"
          className="btn"
          disabled={Object.keys(formik.errors).length > 0}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default HeroQuestionnaire;
