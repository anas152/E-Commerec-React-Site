import ProductCard from "../components/ProductCard";
import midSecPic from "../assets/Picture/main-center-pic.png";

import React from "react";

export default function home() {
  return (
    <>
      <div className="2xl:w-[30%] md:hidden sm:hidden mobile:hidden lg:flex 2xl:felx xl:flex   xl:w-[30%] lg:w-[100%] md:w-[100%]   sm:w-[100%] mobile:w-[100%] center 2xl:pl-[120px] xl:pl-[110px]   border-r  ">
        <div class="w-[270px] h-[344px] flex flex-col gap-4 2xl:w-[270px] 2xl:h-[344px] xl:w-[270px] xl:h-[344px] xl:items-start 2xl:items-start lg:items-center lg:w-[100%] md:items-center md:w-[100%] sm:item\s-center sm:w-[100%] mobile:items-center mobile:w-[100%] aos-init aos-animate">

        <ul>Woman’s Fashion</ul>
        <ul>Men’s Fashion</ul>
        <ul>Electronics</ul>
        <ul>Home & Lifestyle</ul>
        <ul>Medicine</ul>
        <ul>Sports & Outdoor</ul>
        <ul>Baby’s & Toys</ul>
        <ul>Groceries & Pets</ul>
        <ul>Health & Beauty</ul>
        </div>
      </div>
      {/* <div className="  mx-2 2xl:w-[70%]  xl:w-[70%] lg:w-[100%] md:w-[100%] sm:w-[100%] 2xl:h-[500px] xl:h-[500px] lg:h-[100px] center">  */}
      {/* <img className="" src={midSecPic}  alt="" /> */}
      {/* </div> */}
      <ProductCard />
    </>
  );
}
