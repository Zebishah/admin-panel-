import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../images/man-user-circle-icon.png";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { GrCatalog } from "react-icons/gr";
import { IoMdCash } from "react-icons/io";
import { MdReviews } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useState } from "react";
const SideBar = () => {
  let [Open, setOpen] = useState(false);
  let openMenu = () => {
    setOpen(true);
  };
  let closeMenu = () => {
    setOpen(false);
  };
  return (
    <div
      className={`flex z-50 flex-col gap-y-4 xl:justify-start xl:items-center bg-[#161817] p-4  ${
        Open ? "w-[88%]" : "w-[28%]"
      } xl:w-[102%] shadow-lg shadow-fade-black transition-all duration-500 ease-in-out ${
        Open ? "expanded" : "collapsed"
      }`}
    >
      <div className="flex-col items-center justify-center hidden p-2 gap-y-2 xl:flex">
        <img src={image} alt="image" className="w-16 h-16 rounded-full" />
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-lg text-yellows font-Lexend">Zohaib Haider</h2>
          <p className="text-sm text-yellows font-radios">Administrator</p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start gap-y-3 xl:justify-center xl:items-start">
        {!Open && (
          <GiHamburgerMenu
            className="flex text-xl text-yellows xl:hidden "
            size={20}
            onClick={openMenu}
          />
        )}
        {Open && (
          <ImCross
            className="flex ml-20 text-xl text-yellows xl:hidden"
            size={20}
            onClick={closeMenu}
          />
        )}
        <Link to={"/Dashboard"}>
          <div className="flex items-center transition-all duration-500 ease-in-out gap-x-0 md:gap-x-2">
            <FontAwesomeIcon
              icon={faDashboard}
              className="mt-3 text-lg text-yellows md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Dashboard
            </h3>
          </div>
        </Link>
        <Link to={"/PaymentOptions"}>
          <div className="flex items-center transition-all duration-500 ease-in-out gap-x-0 md:gap-x-2">
            <IoMdCash size={20} className="mt-3 text-lg text-yellows md:mt-0" />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Payments
            </h3>
          </div>
        </Link>
        <Link to={"/Reviews"}>
          <div className="flex items-center transition-all duration-500 ease-in-out gap-x-0 md:gap-x-2">
            <MdReviews
              size={20}
              className="mt-3 text-lg text-yellows md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Reviews
            </h3>
          </div>
        </Link>
        <Link to={"/Notification"}>
          <div className="flex items-center transition-all duration-500 ease-in-out gap-x-0 md:gap-x-2">
            <IoIosNotifications
              size={20}
              className="mt-3 text-lg text-yellows md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Notifications
            </h3>
          </div>
        </Link>
        <Link to={"/BookingOptions"}>
          <div className="flex items-center transition-all duration-500 ease-in-out gap-x-0 md:gap-x-2">
            <IoBookSharp
              size={20}
              className="mt-3 text-lg text-yellows md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Bookings
            </h3>
          </div>
        </Link>
        <Link to={"/DatabaseOptions"}>
          <div className="flex items-center transition-all duration-500 ease-in-out gap-x-0 md:gap-x-2">
            <FaDatabase
              size={20}
              className="mt-3 text-lg text-yellows md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Database
            </h3>
          </div>
        </Link>
        <Link to={"/Messages"}>
          <div className="flex items-center transition-all duration-500 ease-in-out gap-x-0 md:gap-x-2">
            <MdMessage
              size={20}
              className="mt-3 text-lg text-yellows md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Messages
            </h3>
          </div>
        </Link>
        <Link to={"/CatalogOptions"}>
          <div className="flex items-center transition-all duration-500 ease-in-out gap-x-0 md:gap-x-2">
            <GrCatalog size={20} className="mt-3 text-yellows md:mt-0" />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Catalog
            </h3>
          </div>
        </Link>
        <Link to={"/Services"}>
          <div className="flex items-center transition-all duration-500 ease-in-out gap-x-0 md:gap-x-2">
            <IoLogOutSharp
              size={20}
              className="mt-3 text-lg text-yellows md:mt-0"
            />
            <h3
              className={`text-yellows text-sm xl:text-lg font-Lexend p-3 mt-3 md:mt-0 transition-all duration-500 ease-in-out xl:opacity-100 ${
                Open ? "opacity-100" : "opacity-0"
              }`}
            >
              Add Services
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
