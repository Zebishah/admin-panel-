import image from "../images/Epic_Explorer__1_-removebg-preview.png";
import image2 from "../images/man-user-circle-icon.png";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import dashboard from "../images/dashboard.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  let count = 2;
  return (
    <div className="flex flex-row justify-between items-center bg-[#171817] rounded-xl w-full shadow-lg shadow-fade-black">
      <img src={image} alt="logo" className="ml-20 h-14 w-14 md:h-28 md:w-28" />
      <div className="flex flex-row items-center justify-center w-full gap-x-4">
        <img src={dashboard} alt="icon" className="w-10 h-10" />
        <h2 className="mt-2 text-xl text-center text-yellows font-Lexend md:text-2xl md:mt-0 ">
          {"Dashboard - Statistics"}
        </h2>
      </div>
      <div className="flex flex-row items-center justify-center w-full mt-2 gap-x-8 md:mt-0">
        <form action="#" className="w-[40%] p-2 hidden lg:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full py-2 pl-3 transition-all duration-500 ease-in-out border-2 outline-none cursor-pointer lg:pr-10 rounded-xl border-yellows focus:shadow-lg focus:shadow-yellows hover:scale-105 hover:shadow-lg hover:shadow-yellows placeholder:text-yellows placeholder:font-radios text-yellows font-radios bg-light-black"
            />
            <FaSearch
              className="absolute transform -translate-y-1/2 text-yellows right-3 top-1/2"
              size={20}
            />
          </div>
        </form>
        <Link to={"/Update"}>
          <div className="relative inline-block mt-2 md:mt-0">
            <MdOutlineMessage size={25} className="text-yellows" />
            {count > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 rounded-full bg-yellows">
                {count}
              </span>
            )}
          </div>
        </Link>
        <Link to={"/Notification"}>
          <div className="relative inline-block mt-2 md:mt-0">
            <IoNotifications size={24} className="text-yellows" />
            {count > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-black transform translate-x-1/2 -translate-y-1/2 rounded-full bg-yellows">
                {count}
              </span>
            )}
          </div>
        </Link>
        <div className="relative flex items-center justify-center p-2 mt-2 gap-x-2 md:mt-0">
          <img
            src={image2}
            alt="user"
            className="w-8 h-8 rounded-full cursor-pointer md:w-10 md:h-10"
            onClick={handleToggleMenu}
          />
          <h2
            className="text-sm cursor-pointer text-yellows md:text-lg font-Lexend"
            onClick={handleToggleMenu}
          >
            Zohaib
          </h2>
          {menuOpen && (
            <div className="absolute w-48 mt-2 border border-yellow-300 rounded-lg shadow-lg top-full bg-fade-black shadow-yellows">
              <ul className="text-gray-700">
                <li
                  className="px-4 py-2 cursor-pointer text-yellows hover:bg-gray-100 hover:text-black"
                  onClick={"/ProfileSettings"}
                >
                  Profile Settings
                </li>
                <li
                  className="px-4 py-2 cursor-pointer text-yellows hover:bg-gray-100 hover:text-black"
                  onClick={"/ProfileInfo"}
                >
                  View Profile
                </li>
                <li
                  className="px-4 py-2 cursor-pointer text-yellows hover:bg-gray-100 hover:text-black"
                  onClick={"/ChangePassword"}
                >
                  changePassword
                </li>
                <li className="px-4 py-2 cursor-pointer text-yellows hover:bg-gray-100 hover:text-black">
                  LogOut
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
