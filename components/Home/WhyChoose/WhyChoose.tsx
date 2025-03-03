import SectionHeading from "@/components/helper/SectionHeading";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      <SectionHeading
        heading="Why Choose Us"
        subheading="We give you best services in this field"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <WhyChooseCard image="/images/c1.svg" title="Best Price Guarantee" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard
            image="/images/c2.svg"
            title="Easy and Quick Booking"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard image="/images/c3.svg" title="Customer Care 24/7" />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
