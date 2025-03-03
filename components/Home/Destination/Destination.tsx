import SectionHeading from "@/components/helper/SectionHeading";
import React from "react";
import DestinationSlider from "./DestinationSlider";

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
      {/* section heading */}
      <SectionHeading
        heading="Exploring Popular Destination"
        subheading="Amazing places where we go in this month."
      />
      <div className="mt-14  w-[80%] mx-auto">
        {/* section slider  */}
        <DestinationSlider />
      </div>
    </div>
  );
};

export default Destination;
