import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  date: string;
};
const NewsCard = ({ image, title, date }: Props) => {
  return (
    <div>
      <div className="h-[300px]">
        <Image
          src={image}
          alt="image"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="mt-6 text-lg font-semibold hover:text-blue-900 transition-all duration-300 cursor-pointer">
        {title}
      </h1>
      <p className="text-sm text-gray-600 mt-3">{date} </p>
    </div>
  );
};

export default NewsCard;
