import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.png";

const Header = () => {
  const [active, setActive] = useState(false);
  const menuRef = useRef();
  const handleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <header className="pt-[50px] pb-[90px] md-max:pt-[25px] md-max:pb-[50px]">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div className="flex justify-between items-center">
          <img srcSet={`${Logo} 2x`} alt="" className="header-logo" />
          <ul
            ref={menuRef}
            className={`${
              active ? "is-show" : ""
            } menu list-none flex items-center gap-x-10 `}
          >
            <HeaderItem>About</HeaderItem>
            <HeaderItem>Features</HeaderItem>
            <HeaderItem>Pricing</HeaderItem>
            <HeaderItem>Testimonials</HeaderItem>
            <HeaderItem>Help</HeaderItem>
            <li className="md-min:hidden p-5 flex items-center justify-center gap-x-5">
              <Sign></Sign>
            </li>
          </ul>
          <div
            className="hidden w-[30px] h-[20px] sm-max:inline-flex sm-max:justify-between sm-max:flex-col"
            onClick={handleActive}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="flex items-center gap-x-[30px] capitalize md-max:hidden">
            <Sign></Sign>
          </div>
        </div>
      </div>
    </header>
  );
};

function HeaderItem({ children }) {
  return (
    <li className="menu-item">
      <NavLink
        to="/"
        className="text-inherit inline-block hover:text-[#f53838] transition-all sm-max:block sm-max:w-full sm-max:p-5"
      >
        {children}
      </NavLink>
    </li>
  );
}

function Sign() {
  return (
    <>
      <NavLink to="/" className="header-signin font-medium text-[#0b132a]">
        Sign In
      </NavLink>
      <NavLink
        to="/"
        className="inline-block py-[13px] px-[45px] border-none outline-none text-center 
                whitespace-nowrap bg-transparent text-[#f53838] font-medium border"
      >
        Sign Up
      </NavLink>
    </>
  );
}

export default Header;
