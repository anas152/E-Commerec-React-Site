// // Product car ka upper wala today and flas sale wala ha

// export default function DayFlash() {
//   return (
//     <>
//       <div className="main-div px-4 container-x  bdr1">
//         <div className="today rounded w-[80px] h-10 flex text-primary font-semibold  items-center flex-row-reverse gap-2 ">
//           Today's
//           <div className="today w-5 h-10 bg-primary rounded"> </div>
//         </div>
//         <div className="mt-6">
//           <h3 className="text-2xl md:text-[32px] font-bold leading-[30px] tracking-[0.04em] text-left">
//             Flash Sales
//           </h3>
//           <div className="flex flex-row gap-4 mt-4">
//             <div className="text-xs md:text-[12px] font-medium leading-[18px] text-left">
//               Days
//             </div>
//             <div className="text-xs md:text-[12px] font-medium leading-[18px] text-left">
//               Hours
//             </div>
//             <div className="text-xs md:text-[12px] font-medium leading-[18px] text-left">
//               Minutes
//             </div>
//             <div className="text-xs md:text-[12px] font-medium leading-[18px] text-left">
//               Seconds
//             </div>
//           </div>
//           <div className="flex flex-row gap-2 mt-2">
//             <ul className="flex text-xs md:text-[12px] font-medium leading-[18px] text-left">
//               00<span>:</span>
//             </ul>
//             <ul className="text-xs md:text-[12px] font-medium leading-[18px] text-left">
//               00<span>:</span>
//             </ul>
//             <ul className="text-xs md:text-[12px] font-medium leading-[18px] text-left">
//               00<span>:</span>
//             </ul>
//             <ul className="text-xs md:text-[12px] font-medium leading-[18px] text-left">
//               00
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // function FlashTimer() {
// //   const darkMode = useSelector((state) => state.darkMode.darkMode);

// //   return (
// //     <>
// //       <div className=" 2xl:block xl:block lg:block md:flex md:justify-center sm:flex sm:justify-center mobile:flex mobile:justify-center">
// //         <div className="flex flex-col  2xl:ml-[60px] xl:ml-[60px] lg:m-0 items-start 2xl:w-[600px] xl:w-[600px] 2xl:h-[103px] xl:h-[103px] lg:w-[100%] md:w-auto sm:w-auto mobile:w-auto  gap-3 ">
// //           <div
// //             data-aos="fade-up"
// //             data-aos-anchor-placement="bottom-bottom"
// //             className="flex font-semibold gap-2 items-center  text-myTheme 2xl:text-3xl xl:text-base lg:text-base md:text-base sm:text-[12px] mobile:text-[12px]"
// //           >
// //             <div className=" w-[25px] h-[35px] bg-myTheme rounded-md"></div>
// //             Todays
// //           </div>
// //           <div className="flex gap-6  2xl:gap-6 xl:gap-6 lg:gap-6 md:gap-6 sm:gap-6 mobile:gap-6 ">
// //             <div
// //               data-aos="fade-up "
// //               data-aos-anchor-placement="bottom-bottom"
// //               className={` ${
// //                 darkMode ? "text-white" : ""
// //               }  font-semibold  2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-xl mobile:text-sm leading-[48px]`}
// //             >
// //               {" "}
// //               Flash Sales
// //             </div>
// //             <div className="flex flex-col gap-0 ">
// //               <div
// //                 data-aos="fade-left"
// //                 className={`${
// //                   darkMode ? "text-white" : ""
// //                 }  flex gap-7  2xl:gap-7 xl:gap-7 lg:gap-7 md:gap-7 sm:gap-4 mobile:gap-4 font-medium text-xs   2xl:text-xs xl:text-xs lg:text-xs md:text-xs sm:text-[8px] mobile:text-[8px]`}
// //               >
// //                 <span>Days</span>
// //                 <span>Hours</span>
// //                 <span>Mintus</span>
// //                 <span>Secand</span>
// //               </div>
// //               <div className="flex gap-7 font-bold text-2xl   2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-[10px] mobile:text-[10px]">
// //                 <span
// //                   data-aos="fade-right"
// //                   className={`${darkMode ? "text-white" : ""} `}
// //                 >
// //                   03 <span className="text-myTheme font-medium">:</span>{" "}
// //                 </span>
// //                 <span
// //                   data-aos="fade-right"
// //                   className={`${darkMode ? "text-white" : ""} `}
// //                 >
// //                   23 <span className="text-myTheme font-medium">:</span>{" "}
// //                 </span>
// //                 <span
// //                   data-aos="fade-right"
// //                   className={`${darkMode ? "text-white" : ""} `}
// //                 >
// //                   10 <span className="text-myTheme font-medium">:</span>{" "}
// //                 </span>
// //                 <span
// //                   data-aos="fade-right"
// //                   className={`${darkMode ? "text-white" : ""} `}
// //                 >
// //                   56
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

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
