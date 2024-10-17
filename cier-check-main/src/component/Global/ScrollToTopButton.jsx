import React, { useEffect, useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="bg-pink-600 w-8 h-8 p-1.5 rounded-lg flex items-center justify-center fixed bottom-6 right-6 z-50"
      >
        <IoArrowUpOutline className="w-full h-full text-white" />
      </button>
    )
  );
};

export default ScrollToTopButton;
