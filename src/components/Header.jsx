import logo from "../assets/logo/logo.svg";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";


const links = ["Home", "About US", "Contact"];
const navlinkStyle =
  "capitalize hover:underline cursor-pointer hover:text-primary";
export default function Header() {
  const isloggedIn = false;
  const [isHamburgerOpen, setIsHamBurgerOpen] = useState(false)
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
      {/* <ul className="font-bold pl-52 flex gap-5 ">
        {links.map((items, i) => (
          <li className={navlinkStyle} key={i}>
            {" "}
            {items}
          </li>
        ))}
        {!isloggedIn ? <li className={navlinkStyle}>Login</li> : null}
      </ul> */}
      <button className="  md:hidden text-4xl order-3  " onClick={()=>setIsHamBurgerOpen(!isHamburgerOpen)}>
    {isHamburgerOpen ? <MdOutlineCancel /> : <IoIosMenu />  }
      </button>

      <div className="icons center text-2xl gap-3">
        {isloggedIn ? (
          <>
            <IoMdHeart className="w-8 h-8" />
            <IoCartOutline className=" w-8 h-7" />
          </>
        ) : null}
      </div>
      <div className="rounded-full overflow-hidden text-white bg-primary w-8 h-8">
      {isloggedIn ? (
        <img
        src="https://media.licdn.com/dms/image/v2/D5635AQHqT6pfvG8nHA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1732688533700?e=1735545600&v=beta&t=UcJi2wcX6LDmVpDel_Okyx_20fp_ch_fFt7bLzWmD5c"
        alt=""
        />
      ) : 
      <LuUserRound className="  w-8 h-8" />
    }
    </div>
    </div>
  );
}
