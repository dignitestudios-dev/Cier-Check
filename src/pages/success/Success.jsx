// import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center px-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600">🎉 Payment Successful!</h1>
        <p className="mt-4 text-gray-600">
          Thank you for your donation. Your support means a lot! 💖
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="new-gradient-btn py-3 px-6 rounded-full text-white font-semibold"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
