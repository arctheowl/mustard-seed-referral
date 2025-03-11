import React from "react";

interface BannerProps {
  message: string;
  countdown: number;
}

const Banner: React.FC<BannerProps> = ({ message, countdown }) => {
  return (
    <div className=" absolute rounded-sm text-center bg-green-700 text-white p-4 w-screen h-1/3 top-48">
      <h1>{message}</h1>
    </div>
  );
};

export default Banner;
