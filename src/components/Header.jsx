import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./shared/NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/slices/darkModeSlice";
import { IoCartOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { logout } from "../store/slices/authSlice";
import toast from "react-hot-toast";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  const handleLogOut = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    dispatch(logout(storedUser));
    toast?.success("Logged Out Successfully", { id: logout });
    navigate("/");
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleButton = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <header className={`${isDarkMode && "dark"}`}>
      <nav className={`bg-white border-gray-200 py-2.5 dark:bg-gray-900`}>
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to={"/"} className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Timekeepers
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              onClick={handleToggle}
              className="text-black text-2xl bg-grey-700 hover:bg-grey-800 focus:ring-4 focus:ring-grey-300 font-medium rounded-lg px-4 lg:px-5 py-2 my-2 lg:py-2.5 sm:mr-2 dark:text-white dark:bg-grey-600 dark:hover:bg-grey-700 focus:outline-none dark:focus:ring-grey-800"
            >
              {isDarkMode ? <MdDarkMode /> : <MdDarkMode />}
            </button>
            <Link to={"/cart"}>
              <IoCartOutline className="text-gray-900 dark:text-white text-2xl" />
            </Link>
            {isLoggedIn ? (
              <button
                onClick={handleLogOut}
                className="text-red-600 dark:text-red-400 bg-gray-200 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-gray-900 ml-[1rem]"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 ml-[1rem]"
              >
                Login
              </Link>
            )}
            <button
              onClick={toggleButton}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={mobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenu ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              mobileMenu ? "" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLinks to={"/"} text={"Home"} />
              </li>
              <li>
                <NavLinks to={"/shop"} text={"Shop"} />
              </li>
              <li>
                <NavLinks to={"/contact"} text={"Contact"} />
              </li>
              <li>
                <NavLinks to={"/about"} text={"About Us"} />
              </li>
              <li>
                <NavLinks to={"/404"} text={"404"} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
