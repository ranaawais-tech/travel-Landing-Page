import React from "react";
import dynamic from "next/dynamic";

// Dynamically import icon to avoid hydration issues
const BsEnvelopePaper = dynamic(
  () => import("react-icons/bs").then((mod) => mod.BsEnvelopePaper),
  { ssr: false }
);

const NewsLetter = () => {
  return (
    <div className="bg-black pt-16 pb-16 flex items-center justify-center w-full flex-col">
      <BsEnvelopePaper className="text-white w-16 h-16 mt-16" />
      <h1 className="text-lg md:text-2xl sm:text-xl mt-10 font-semibold text-white tracking-widest">
        Your Travel Journey Starts Here
      </h1>
      <p className="text-white mt-3 text-xs">
        Sign up and we'll send the best deals to you
      </p>
      <div className="w-full">
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="px-6 py-3.5 bg-white mt-8 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block rounded-lg mx-auto outline-none"
          placeholder="Email"
        />
        <button
          type="button"
          className="px-6 py-3.5 bg-blue-900 hover:bg-blue-950 mt-3 w-[95%] sm:w-[80%] md:w-[60%] lg:w-[40%] block rounded-lg mx-auto outline-none text-white"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
