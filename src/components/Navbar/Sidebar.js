import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiFillDatabase,
  AiOutlineOrderedList,
  AiFillThunderbolt,
} from "react-icons/ai";
import { FaPowerOff } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import { GrHistory } from "react-icons/gr";
import { BiSolidUserAccount } from "react-icons/bi";
import { MdAccountBox } from "react-icons/md";
import { LuSignalHigh } from "react-icons/lu";
import { FcAbout } from "react-icons/fc";
import { useDarkMode } from "../../context/DarkModeContext";
// Assuming your 'cn' and 'useDarkMode' imports
// Replace these imports with your actual imports for 'cn' and 'useDarkMode'
export default function Sidebar() {
  const [communitypage, setcommunitypage] = useState(false);
  const { isDarkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/"); // Set default active link to '/'

  const handleResize = () => {
    setOpen(window.innerWidth < 1245);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setcommunitypage(true);
  };

  return (
    <div className="flex fixed lg:top-16 top-6">
      <div
        className={`flex flex-col p-3 shadow duration-300 h-screen ${
          isDarkMode ? "bg-black text-white" : "bg-gray-800 text-black"
        } ${open ? "lg:px-0" : ""}`}
      >
        <div className="space-y-3">
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  to="/"
                  className={`flex items-center p-2 space-x-3 rounded-md text-white ${
                    activeLink === "/" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleLinkClick("/")}
                >
                  <AiFillHome className="min-w-fit" />
                  <span
                    className={`text-gray-100 flex ${
                      !open ? "flex" : "hidden xl:flex text-xs"
                    }`}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/power-holders"
                  className={`flex items-center p-2 space-x-3 rounded-md text-white ${
                    activeLink === "/power-holders" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleLinkClick("/power-holders")}
                >
                  <AiFillThunderbolt className="min-w-fit" />
                  <span
                    className={`text-gray-100 flex ${
                      !open ? "flex" : "hidden xl:flex text-xs"
                    }`}
                  >
                    Power Holders
                  </span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="/power-down-lists"
                  className={`flex items-center p-2 space-x-3 rounded-md text-white ${
                    activeLink === "/power-down-lists" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleLinkClick("/power-down-lists")}
                >
                  <FaPowerOff className="min-w-fit" />
                  <span
                    className={`text-gray-100 flex ${
                      !open ? "flex" : "hidden xl:flex text-xs"
                    }`}
                  >
                    Power Downs
                  </span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  to="/new-amount"
                  className={`flex items-center p-2 space-x-3 rounded-md text-white ${
                    activeLink === "/new-amount" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleLinkClick("/new-amount")}
                >
                  <BiSolidUserAccount className="min-w-fit" />
                  <span
                    className={`text-gray-100 flex ${
                      !open ? "flex" : "hidden xl:flex text-xs"
                    }`}
                  >
                    New Accounts
                  </span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  to="/acccount-ranking"
                  className={`flex items-center p-2 space-x-3 rounded-md text-white ${
                    activeLink === "/acccount-ranking" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleLinkClick("/acccount-ranking")}
                >
                  <LuSignalHigh className="min-w-fit" />

                  <span
                    className={`text-gray-100 flex ${
                      !open ? "flex" : "hidden xl:flex text-xs"
                    }`}
                  >
                    Account Ranking
                  </span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  to="/withness-list"
                  className={`flex items-center p-2 space-x-3 rounded-md text-white ${
                    activeLink === "/withness-list" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleLinkClick("/withness-list")}
                >
                  <AiOutlineOrderedList className="min-w-fit" />
                  <span
                    className={`text-gray-100 flex ${
                      !open ? "flex" : "hidden xl:flex text-xs"
                    }`}
                  >
                    Witness List
                  </span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  to="/community-data"
                  className={`flex items-center p-2 space-x-3 rounded-md text-white ${
                    activeLink === "/community-data" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleLinkClick("/community-data")}
                >
                  <RiCommunityFill className="min-w-fit" />
                  <span
                    className={`text-gray-100 flex ${
                      !open ? "flex" : "hidden xl:flex text-xs"
                    }`}
                  >
                    Community Data
                  </span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  to="/content-history"
                  className={`flex items-center p-2 space-x-3 rounded-md text-white ${
                    activeLink === "/content-history" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleLinkClick("/content-history")}
                >
                  <GrHistory className="min-w-fit" />
                  <span
                    className={`text-gray-100 flex ${
                      !open ? "flex" : "hidden xl:flex text-xs"
                    }`}
                  >
                    Content History
                  </span>
                </Link>
              </li>

              <li className="rounded-sm">
                <Link
                  to="/about"
                  className={`flex items-center p-2 space-x-3 rounded-md text-white ${
                    activeLink === "/about" ? "bg-blue-500" : ""
                  }`}
                  onClick={() => handleLinkClick("/about")}
                >
                  <FcAbout className="min-w-fit" />

                  <span
                    className={`text-gray-100 flex ${
                      !open ? "flex" : "hidden xl:flex text-xs"
                    }`}
                  >
                    About
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
