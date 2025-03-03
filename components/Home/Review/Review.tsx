import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewSlider from "./ReviewSlider";

const Review = () => {
  return (
    <div className=" pt-20 pb-20 flex flex-col items-center justify-center bg-[#13357b]">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-2xl font-semibold text-white">
            What our customers are saying us?
          </h1>
          <p className="mt-6 text-gray-200 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            nesciunt fugiat praesentium dolores facilis delectus modi culpa
            aliquid deserunt ad!
          </p>
          <div className="mt-6  flex items-center space-x-6">
            <div>
              <p className=" text-white font-bold text-2xl">4.88</p>
              <p className="mb-2 text-white">Overall Rating</p>
              <div className="flex items-center ">
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
                <FaStar className="text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* slider */}
        <div className="overflow-hidden">
          <ReviewSlider />
        </div>
      </div>
    </div>
  );
};

export default Review;
