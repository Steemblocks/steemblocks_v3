import React from "react";
import { Link } from "react-router-dom";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useDarkMode } from "../../context/DarkModeContext";
import LogoImage from "../../assets/icons/logo.png";

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <nav className="fixed top-0 w-full left-0 z-10">
        <nav
          className={`lg:flex items-center justify-between px-4 py-1 ${
            isDarkMode ? "bg-gray-900" : "bg-slate-100"
          }  hidden`}
        >
          {/* desktop nav */}
          <ul className="gap-3 text-lg flex">
            <Link to="/">
              {" "}
              <div className="flex items-center gap-2 text-blue-600">
                <img
                  src={LogoImage}
                  alt="Logo"
                  className={`h-14 ${
                    isDarkMode ? "" : "bg-transparent"
                  }`}
                />
              </div>
            </Link>
          </ul>

          {/* <div
            className={`text-${
              isDarkMode ? "white" : "black"
            } hover:text-blue-200 text-2xl cursor-pointer`}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
          </div> */}
        </nav>
        {/* mobile nav */}
        <nav
          className={`lg:hidden ${
            isDarkMode ? "bg-gray-900" : "bg-slate-100"
          } shadow-lg w-full mb-1 sticky top-0 z-10`}
        >
          <div className="flex justify-between items-center px-10">
            <Link to="/">
              <div className="flex items-center gap-2 text-blue-600">
                <img
                  src={LogoImage}
                  alt="Logo"
                  className={`logo-image rounded-full h-10  ${
                    isDarkMode ? "" : "bg-transparent"
                  }`}
                />
              </div>
            </Link>
            {/* <div
              className={`text-${
                isDarkMode ? "white" : "black"
              } hover:text-blue-200 text-2xl cursor-pointer`}
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
            </div> */}
          </div>
          {/* nav menu */}
        </nav>
      </nav>
    </>
  );
}
