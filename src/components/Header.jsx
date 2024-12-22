import logo from "../assets/logo/logo.svg";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <div className="h-[38] mt-10 flex items-center justify-between ">
      <div className="flex items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className=" rounded h-[38] px- w-60 bg-[#F5F5F5] flex items-center justify-between ">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="w-full bg-transparent outline-none"
        />
        <CiSearch />
      </div>
      <ul className="font-bold pl-52 flex gap-5">
        <li>
          <a className="hover:underline font-bold" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="hover:underline font-bold" href="/About">
            About US
          </a>
        </li>
        <li>
          <a className="hover:underline font-bold  " href="/Contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
