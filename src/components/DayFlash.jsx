import React, { useState, useEffect } from "react";

const FlashSaleTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-01-06T00:00:00") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-x p-4 bg-white border-b-2 ">
      <div className="w-5 h-10 bg-primary rounded flex items-center">
      <h2 className="text-red-500 text-sm font-bold ml-7">Today's</h2>
      </div>
      <div className="flex flex-row mt-6">
        <h1 className="text-2xl font-bold mt-1">Flash Sales</h1>
        <div className="w-[320px] justify-center flex items-center mt-2 text-xl font-bold">
          <div className="text-center px-2">
            <span>{String(timeLeft.days).padStart(2, "0")}</span>
            <p className="text-sm">Days</p>
          </div>
          <span className="text-red-500">:</span>
          <div className="text-center px-2">
            <span>{String(timeLeft.hours).padStart(2, "0")}</span>
            <p className="text-sm">Hours</p>
          </div>
          <span className="text-red-500">:</span>
          <div className="text-center px-2">
            <span>{String(timeLeft.minutes).padStart(2, "0")}</span>
            <p className="text-sm">Minutes</p>
          </div>
          <span className="text-red-500">:</span>
          <div className="text-center px-2">
            <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
            <p className="text-sm">Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleTimer;
