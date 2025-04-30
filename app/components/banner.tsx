import React from "react";
import CountDown from "./countDown";

interface BannerProps {
  message: string;
}

const Banner: React.FC<BannerProps> = ({ message }) => {
  return (
    <div className="md:flex-col md:flex md:rounded-sm md:text-center bg-green-700 text-white md:p-4 md:w-screen md:h-1/3 md:top-48 ">
      <div className="p-4 md:p-0 md:w-1/2 md:center md:mx-auto">
        <h1 className="text-xl">{message}</h1>
        <div className="flex justify-center pt-10">
          <CountDown />
        </div>
      </div>
    </div>
  );
};

export default Banner;
