import React, { useContext } from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

const FindUsHere = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={``}>
      <div className={`w-full flex flex-col pt-20 px-6 lg:px-24 `}>
        <h1 className=" text-5xl font-bold">Find Us Here</h1>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 py-8 gap-10 px-6 lg:px-24">
        <div className={`flex items-center px-10 py-6 rounded-3xl gap-6 ${theme === "light" ? 'bg-white shadow-bg' : 'bg-[#2d2d2d]'} hover:text-white group card-bg hover:scale-105 transition-all duration-300`}>
          <IoCallOutline className="w-12 h-12 text-pink-600 group-hover:text-white transition-all duration-300" />
          <div className="flex flex-col gap-0">
            <p className="text-lg font-semibold">Phone</p>
            <p className="text-sm">800-123-456</p>
          </div>
        </div>
        <div className={`flex items-center px-10 py-6 rounded-3xl gap-6 ${theme === "light" ? 'bg-white shadow-bg' : 'bg-[#2d2d2d]'} hover:text-white group card-bg hover:scale-105 transition-all duration-300`}>
          <MdOutlineMailOutline className="w-12 h-12 text-pink-600 group-hover:text-white transition-all duration-300" />
          <div className="flex flex-col gap-0">
            <p className="text-lg font-semibold">Email</p>
            <p className="text-sm">contact@example.com​</p>
          </div>
        </div>

        <div className={`flex items-center px-10 py-6 rounded-3xl gap-6 ${theme === "light" ? 'bg-white shadow-bg' : 'bg-[#2d2d2d]'} hover:text-white group card-bg hover:scale-105 transition-all duration-300`}>
          <IoLocationOutline className="w-12 h-12 text-pink-600 group-hover:text-white transition-all duration-300" />
          <div className="flex flex-col gap-0">
            <p className="text-lg font-semibold">Location</p>
            <p className="text-sm">123 Fifth Avenue, NY 10160, New York, USA</p>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-24 py-6 lg:py-12 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14479.871214496838!2d67.05680855!3d24.8649492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1726594708798!5m2!1sen!2s"
          className="w-full rounded-2xl  "
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default FindUsHere;
