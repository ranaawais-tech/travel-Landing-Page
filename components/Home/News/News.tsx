import React from "react";
import SectionHeading from "../../helper/SectionHeading";
import NewsCard from "./NewsCard";

const News = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading
        heading="Exciting trvel News for you"
        subheading="You can more information about your trip"
      />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 place to visit in Australia"
            date="15 November 2024"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <NewsCard
            image="/images/n2.jpg"
            title="Top 10 place to visit in Pakistan"
            date="25 November 2024"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <NewsCard
            image="/images/n3.jpg"
            title="Top 10 place to visit in Bangladesh"
            date="28 November 2024"
          />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="450"
        >
          <NewsCard
            image="/images/n4.jpg"
            title="Top 10 place to visit in India"
            date="30 November 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default News;
