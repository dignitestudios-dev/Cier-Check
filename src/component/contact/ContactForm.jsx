import React, { useContext } from "react";
import { FaGoogle, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import Navbar from "../Global/Navbar";
import { ThemeContext } from "../context/ThemeContext";
import { useFormik } from "formik";
import { div } from "framer-motion/client";


const validate = values => {

  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.subject) {
    errors.subject = 'Required';
  } else if (values.subject.length > 20) {
    errors.subject = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.messege) {
    errors.messege = 'Required';
  } else if (values.messege.length > 150) {
    errors.messege = 'Must be 50 characters or less';
  }

  return errors;
};




const ContactForm = () => {
  const { theme } = useContext(ThemeContext);


  const formik = useFormik({
    initialValues: {
      firstName: '',
      subject: '',
      email: '',
      messege: '',

    },
    validate,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm()
    },
  });

  const SignupForm = () => {

  }




  return (
    <div className={`w-full $`}>
      <div className="w-full contact-header">

        <div className="w-full  gap-12 h-[80vh] horizontal-padding">
          <div className="flex h-full flex-col justify-center   gap-6">
            <h2 data-aos="fade-right" className="text-4xl md:text-6xl xl:text-6xl font-bold text-white">
              Contact Us
            </h2>
            <p data-aos="fade-right" className="text-lg text-white">
              Kindly reach us to get the fastest response and treatment.
            </p>
          </div>
          <div className="flex items-end">
            {/* <img
              src="/healthcare-workers-prevent-virus-insurance-medicine-concept-smiling-attractive-female-doctor.png"
              className="w-[90%] h-[90vh]"
              alt=""
            /> */}
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}
        className={`w-[90%] lg:w-[65%] flex flex-col mx-auto px-6 lg:px-40 py-14 xl:py-24 relative -top-28 gap-10 rounded-2xl ${theme === "light" ? "shadow-bg bg-white" : "bg-[#2d2d2d] text-white"
          }`}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 ">
          <div className="flex flex-col gap-3">
            <label htmlFor="firstName" className="text-sm">
              Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="David John"
              className={`py-5 outline-pink-600 px-6 border rounded-2xl ${theme === "light" ? "bg-white" : "bg-[#2d2d2d] text-white"
                }`}
            />
            {formik.errors.firstName ? <div className='text-red-600'>{formik.errors.firstName}</div> : null}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="example@gmail.com"
              className={`py-5 outline-pink-600 px-6 border rounded-2xl ${theme === "light" ? "bg-white" : "bg-[#2d2d2d] text-white"
                }`}
            />
            {formik.errors.email ? <div className='text-red-600'>{formik.errors.email}</div> : null}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="subject" className="text-sm">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={formik.handleChange}
            value={formik.values.subject}
            placeholder="Your subject"
            className={`py-5 outline-pink-600 px-6 border rounded-2xl ${theme === "light" ? "bg-white" : "bg-[#2d2d2d] text-white"
              }`}
          />
          {formik.errors.subject ? <div className='text-red-600'>{formik.errors.subject}</div> : null}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="messege" className="text-sm">
            Message
          </label>
          <textarea
            type="text"
            name="messege"
            id="messege"
            onChange={formik.handleChange}
            value={formik.values.messege}
            placeholder="Message"
            className={`py-5 outline-pink-600 px-6 border rounded-2xl ${theme === "light" ? "bg-white" : "bg-[#2d2d2d] text-white"
              }`}
          />
          {formik.errors.messege ? <div className="text-red-600">{formik.errors.messege}</div> : null}
        </div>
        <div>
          <button type="submit" className="btn" disabled={Object.keys(formik.errors).length > 0}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
