"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScroolToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toogleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toogleVisibility);
    return () => window.removeEventListener("scroll", toogleVisibility);
  }, []);
  const ScroolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button
          onClick={ScroolToTop}
          className="bg-red-700 text-white rounded-full w-12 h-12 flex focus:outline-none items-center justify-center"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScroolToTop;
