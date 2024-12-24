import logo from "../assets/logo/logo.svg";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import mobileLogo from "../assets/logo/logoMobile.svg"

const links = [
  { title: "Home", link: "/" },
  { title: "About US ", link: "/About" },
  { title: "Contact", link: "/Contact" },
];
const navlinkStyle =
  "capitalize hover:underline cursor-pointer hover:text-primary";
export default function Header() {
  const isloggedIn = false;
  const [isHamburgerOpen, setIsHamBurgerOpen] = useState(false);
  return (
    <div className="  h-[38] mt-10 flex items-center justify-between ">
      <div className="flex items-center">
        <img className="mobile:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex" src={logo} alt="logo" />
        <img className="mobile:flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden" src={mobileLogo} alt="" />
      </div>
      <div className=" ml-16 rounded h-[38] px- w-60 bg-[#F5F5F5] flex items-center justify-between ">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="w-full bg-transparent outline-none"
        />
        <CiSearch />
      </div>
      <ul className="hidden md:flex  gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
        {links.map((items, i) => (
          <li className={navlinkStyle} key={i}>
            <a href={items.link}>{items.title}</a>
          </li>
        ))}
        {!isloggedIn && <li className={navlinkStyle}>Login</li>}
      </ul>

      <button
        className="md:hidden text-3xl"
        onClick={() => setIsHamBurgerOpen(!isHamburgerOpen)}
      >
        {isHamburgerOpen ? <MdOutlineCancel /> : <IoIosMenu />}
      </button>

      {isHamburgerOpen && (
        <ul className="absolute top-[4.5rem] left-0 w-full bg-gray-200 z-50 flex flex-col gap-4 p-4 shadow-lg">
          {links.map((items, i) => (
            <li className={`${navlinkStyle} text-lg`} key={i}>
              <a href={items.link}>{items.title}</a>
            </li>
          ))}
          {!isloggedIn && <li className={`${navlinkStyle} text-lg`}>Login</li>}
        </ul>
      )}
      {isHamburgerOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white z-50 shadow-lg flex flex-col gap-4 p-6">
          {links.map((items, i) => (
            <li
              className={`${navlinkStyle} text-lg flex items-center gap-2`}
              key={i}
            >
              <a href={items.link}>{items.title}</a>
            </li>
          ))}
          {!isloggedIn && (
            <li className={`${navlinkStyle} text-lg flex items-center gap-2`}>
              SignUp
            </li>
          )}
        </ul>
      )}

      <div className="icons center text-2xl gap-3">
        {isloggedIn ? (
          <>
            <IoMdHeart className="w-8 h-8" />
            <IoCartOutline className=" w-8 h-7" />
          </>
        ) : null}
      </div>
      <div className=" mr-3 bg-primary rounded-full overflow-hidden h-8 w-8 center text-base text-white">
        {isloggedIn ? (
          <img
            src="https://media.licdn.com/dms/image/v2/D5635AQHqT6pfvG8nHA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1732688533700?e=1735545600&v=beta&t=UcJi2wcX6LDmVpDel_Okyx_20fp_ch_fFt7bLzWmD5c"
            alt="Profile"
            className="w-full h-full object-cover sm:w[38]"
          />
        ) : (
          <LuUserRound className="  w-6 h-6 md:w-8 md:h-8" />
        )}
      </div>
    </div>
  );
}
