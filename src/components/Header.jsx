import logo from "../assets/logo/logo.svg";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";

const links = ["Home", "About US", "Contact", ];
const navlinkStyle = "capitalize hover:underline cursor-pointer hover: text-primary"
export default function Header() {
  const isloggedIn = true;
  return (
    <div className="h-[38] mt-10 flex items-center justify-between ">
      <div className="flex items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className=" ml-16 rounded h-[38] px- w-60 bg-[#F5F5F5] flex items-center justify-between ">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="w-full bg-transparent outline-none"
        />
        <CiSearch />
      </div>
      <ul className="font-bold pl-52 flex gap-5 ">
        {links.map((items, i) => (
          <li className={navlinkStyle} key={i}> {items}</li>
          // <li> 
          //   <a
          //     className="hover:underline hover:text-primary transition-all duration-700 font-bold"
          //     href="/"
          //   >
          //     {items}
          //   </a>
          // </li>
        ))}
          {!isloggedIn ? <li className={navlinkStyle}>Login</li> : null}
      </ul>
      <div className="icons center text-2xl gap-3">
        {isloggedIn ? (
        <>
      <IoMdHeart  className="w-8 h-8" />
      <IoCartOutline  className=" w-8 h-7"/>
        </>

        ) : null}
      </div>

      <LuUserRound className=" border text-white bg-primary w-8 h-8" />
    </div>
  );
}
