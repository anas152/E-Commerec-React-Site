import React from 'react'
import midSecPic from "../assets/Picture/main-center-pic.png";


export default function midSec() {
  return (
    <div className=" flex  items-center container-x justify-center  ">
    {/* Left Section - Categories */}
    <div className="w-full md:w-[217px] flex mobile:hidden sm:hidden md:hidden lg:flex flex-col gap-4 p-4">
      <ul className="text-sm md:text-base font-medium">Woman’s Fashion</ul>
      <ul className="text-sm md:text-base font-medium">Men’s Fashion</ul>
      <ul className="text-sm md:text-base font-medium">Electronics</ul>
      <ul className="text-sm md:text-base font-medium">Home & Lifestyle</ul>
      <ul className="text-sm md:text-base font-medium">Medicine</ul>
      <ul className="text-sm md:text-base font-medium">Sports & Outdoor</ul>
      <ul className="text-sm md:text-base font-medium">Baby’s & Toys</ul>
      <ul className="text-sm md:text-base font-medium">Groceries & Pets</ul>
      <ul className="text-sm md:text-base font-medium">Health & Beauty</ul>
    </div>

    {/* Right Section - Image */}
    <div class="">
    <img
        className=""
        src={midSecPic}
        alt=""
      />
    </div>
  </div>
  )
}
