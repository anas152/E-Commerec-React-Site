import logo from "../assets/logo/logo.svg";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <div className="h-[38] mt-10 flex items-center justify-between ">
      <div className="flex items-center">
        <img src={logo} alt="logo" />
          <ul className=" pl-52 flex gap-3">
            <li><a href="">Home</a></li>
            <li><a href="/About.jsx">About US </a></li>
            <li><a href="">Contact</a></li>
          </ul>
      </div>
      <div className=" rounded h-[38] px-3 w-60 bg-[#F5F5F5] flex items-center justify-between ">
        <input 
          type="search"
          placeholder="What are you looking for?"
          className="w-full bg-transparent outline-none"
        />
        <CiSearch />
      </div>
    </div>
  );
}

