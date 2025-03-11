import React from "react";

interface BannerProps {
  message: string;
  countdown: number;
}

const Banner: React.FC<BannerProps> = ({ message, countdown }) => {
  return (
    <div className="absolute flex-col flex rounded-sm text-center bg-green-700 text-white p-4 w-screen h-1/3 top-48">
      <div className="w-1/2 center mx-auto">
        <h1 className="text-xl">{message}</h1>
      </div>
    </div>
  );
};

export default Banner;
