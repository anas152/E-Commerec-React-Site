import logo from "../assets/logo/logo.svg";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import mobileLogo from "../assets/logo/mobileLogo.svg";
import { Link } from "react-router-dom";

const links = [
  { title: "Home", link: "/" },
  { title: "About US ", link: "/About" },
  { title: "Contact", link: "/Contact" },
];
const navlinkStyle =
  "capitalize hover:underline transition duration-400 transition duration-300 cursor-pointer hover:text-primary";
export default function Header() {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  // const isloggedIn = false;
  const [isHamburgerOpen, setIsHamBurgerOpen] = useState(false);
  return (
    <div className="  w-full flex items-center  container-x  justify-between sticky  h-10 top-0 z-50  ">
      <div className="flex items-center">
        <Link to="/">
          {" "}
          <img
            className="mobile:hidden sm:hidden md:flex lg:flex xl:flex 2xl:flex"
            src={logo}
            alt="logo"
          />{" "}
        </Link>
        <Link to="">
          <img
            className="mobile:flex sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden  "
            src={mobileLogo}
            alt=""
          />{" "}
        </Link>
      </div>
      <div className=" ml-16 rounded h-[38] w-60 bg-[#F5F5F5] flex items-center justify-between ">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="w-full bg-transparent outline-none"
        />
        <CiSearch />
      </div>
      <ul className=" hidden md:hidden sm:hidden lg:flex xl:flex 2xl:flex gap-6 xl:gap-7 2xl:gap-12 lg:gap-4 ">
        {links.map((items, i) => (
          <li className={navlinkStyle} key={i}>
      <Link to={items.link}>{items.title}</Link>
      </li>
        ))}
          <li className={navlinkStyle}>
            { !isloggedIn &&             
              <Link to="/login">Login</Link>  
            }
  </li>
        {/* {!isloggedIn && <li className={navlinkStyle}>Login</li>} */}
      </ul>

      <button
        className="md:flex sm:flex lg:hidden text-3xl"
        onClick={() => setIsHamBurgerOpen(!isHamburgerOpen)}
      >
        {isHamburgerOpen ? <MdOutlineCancel /> : <IoIosMenu />}
      </button>

      {isHamburgerOpen && (
        <ul className="absolute bg-gray-200 w-full z-10 gap-3 flex flex-col p-6 top-28">
          {links.map((item, i) => (
            <li className={navlinkStyle} key={i}>
              <Link to={item.link}>{item.title}</Link>
              {/* <Link to="/login">{item.title}</Link> */}

            </li>
          ))}
          {!isloggedIn ? (
            <li className={navlinkStyle} text-lg flex items-center gap-2>
              <Link to="/login">Login</Link>
            </li>
          ) : null}
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
