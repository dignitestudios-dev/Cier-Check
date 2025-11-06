import React, { useState, useRef, useEffect } from "react";
import {
  IoClose,
  IoChevronDown,
  IoCalendarOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../../../axios";
const AppointmentModal = ({ showModal, onClose, onNext }) => {
  if (!showModal) return null;

  const [doctorDropdownOpen, setDoctorDropdownOpen] = useState(false);
  const [searchDoctor, setSearchDoctor] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [loadingdoctors, setLoadingDoctors] = useState(false);

  const getDoctors = async (search = "") => {
    setLoadingDoctors(true);
    try {
      const response = await axios.get("/api/v1/home/search", {
        params: { type: "doctor", q: search },
      });
      if (response?.status === 200) {
        setDoctors(response?.data?.data?.result || []);
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
    } finally {
      setLoadingDoctors(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      getDoctors(searchDoctor);
    }, 500); // 500ms delay
    return () => clearTimeout(timeout);
  }, [searchDoctor]);


  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDoctorDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formik = useFormik({
    initialValues: {
      doctor: "",
    },
    validationSchema: Yup.object({
      doctor: Yup.string().required("Please select a doctor"),
    }),
    onSubmit: (values) => {
      onNext();
    },
  });

  const handleDoctorSelect = (doc) => {
    setSelectedDoctor(doc.fullName);
    formik.setFieldValue("doctor", doc._id);
    formik.setFieldTouched("doctor", true, true);
    setDoctorDropdownOpen(false);
    setSearchDoctor("");

    // Save doctor info to localStorage
    localStorage.setItem(
      "selected_doctor",
      JSON.stringify({
        id: doc._id,
        name: doc.fullName,
      })
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[548px] rounded-[20px] p-6 shadow-lg relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-600 hover:text-black"
        >
          <IoClose size={22} />
        </button>

        <h2 className="text-[24px] font-[600] text-center mb-6">
          Book An Appointment
        </h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Doctor */}
          <div className="mb-4" ref={dropdownRef}>
            <label className="block text-[16px] font-[500] mb-1">Doctor</label>
            <div
              onClick={() => {
                formik.setFieldTouched("doctor", true);
                setDoctorDropdownOpen(!doctorDropdownOpen);
              }}
              className={`w-full h-[45px] bg-[#F9F9F9] border ${
                formik.errors.doctor && formik.touched.doctor
                  ? "border-red-400"
                  : "border-gray-200"
              } rounded-full px-4 flex items-center justify-between cursor-pointer`}
            >
              <span
                className={`text-[14px] ${
                  selectedDoctor ? "text-gray-700" : "text-[#A3A3A3]"
                }`}
              >
                {selectedDoctor || "Select Doctor"}
              </span>

              <IoChevronDown className="text-gray-400" />
            </div>
            {formik.errors.doctor && formik.touched.doctor && (
              <p className="text-red-500 text-[13px] mt-1">
                {formik.errors.doctor}
              </p>
            )}

           {doctorDropdownOpen && (
  <div className="absolute mt-2 w-[500px] bg-white border border-gray-200 rounded-[12px] shadow-lg z-10 p-2">
    <input
      type="text"
      placeholder="Search doctor..."
      value={searchDoctor}
      onChange={(e) => {
        const value = e.target.value;
        setSearchDoctor(value);
        getDoctors(value);
      }}
      className="w-[480px] mb-2 px-3 py-2 border border-gray-200 rounded-md text-sm outline-none focus:ring-1 focus:ring-pink-400"
    />

    <div className="max-h-[150px] overflow-y-auto">
      {loadingdoctors ? (
        // 🔹 Skeleton loader (3 items)
        <div className="flex flex-col gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-full h-[36px] rounded-md bg-gray-100 animate-pulse"
            ></div>
          ))}
        </div>
      ) : doctors?.length > 0 ? (
        doctors?.map((doc, idx) => (
          <p
            key={idx}
            onClick={() => handleDoctorSelect(doc)}
            className="px-3 py-2 hover:bg-pink-50 cursor-pointer rounded-md text-[14px]"
          >
            {doc?.fullName}
          </p>
        ))
      ) : (
        <p className="text-center text-gray-400 text-sm py-2">
          No doctor found
        </p>
      )}
    </div>
  </div>
)}

          </div>

          {/* Date & Time */}
          {/* <div className="grid grid-cols-2 gap-4 mt-3">
      
            <div>
              <label className="block text-[16px] font-[500] mb-1">Date</label>
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full h-[45px] bg-[#F9F9F9] border ${
                    formik.errors.date && formik.touched.date
                      ? "border-red-400"
                      : "border-gray-200"
                  } rounded-full px-4 pr-10 text-[14px] text-gray-600 outline-none appearance-none`}
                />
                <IoCalendarOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              {formik.errors.date && formik.touched.date && (
                <p className="text-red-500 text-[13px] mt-1">
                  {formik.errors.date}
                </p>
              )}
            </div>

           
            <div>
              <label className="block text-[16px] font-[500] mb-1">Time</label>
              <div className="relative">
                <input
                  type="time"
                  name="time"
                  value={formik.values.time}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full h-[45px] bg-[#F9F9F9] border ${
                    formik.errors.time && formik.touched.time
                      ? "border-red-400"
                      : "border-gray-200"
                  } rounded-full px-4 pr-10 text-[14px] text-gray-600 outline-none appearance-none`}
                />
                <IoTimeOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              {formik.errors.time && formik.touched.time && (
                <p className="text-red-500 text-[13px] mt-1">
                  {formik.errors.time}
                </p>
              )}
            </div>
          </div> */}

          {/* Next */}
          <button
            type="submit"
            className="w-full h-[50px] mt-6 rounded-full text-white font-medium text-[15px] bg-gradient-to-r from-[#F72585] to-[#FF8C4C] hover:opacity-90 transition-all"
          >
            Next
          </button>
        </form>
      </div>
      <style>
        {`
          /* Keep picker functional but hide native icons visually */
          input[type="date"]::-webkit-calendar-picker-indicator,
          input[type="time"]::-webkit-calendar-picker-indicator {
            opacity: 0;
            background: transparent;
            width: 100%;
            height: 100%;
            position: absolute;
            right: 0;
            cursor: pointer;
          }

          input[type="date"],
          input[type="time"] {
            -moz-appearance: textfield;
            position: relative;
          }
        `}
      </style>
    </div>
  );
};

export default AppointmentModal;
