import React from "react";
import { NavLink } from "react-router-dom";

const Subcribe = () => {
  return (
    <section className="subscribe">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div
          className="bg-white rounded-[10px] py-[58px] px-[70px] 
        flex justify-between items-center shadow-[0_30px_114px_0_rgba(13,16,37,0.06)] sm-max:flex-col sm-max:gap-y-[30px] sm-max:p-[30px]"
        >
          <div className="max-w-[370px]">
            <h2 className="font-medium text-[35px] leading-[1.4] mb-5">
              Subscribe Now for Get Special Features!
            </h2>
            <p className="leading-[1.875]">
              Let's subscribe with us and find the fun.
            </p>
          </div>
          <NavLink
            to="/"
            className="button--shadow inline-block py-[17px] px-[65px] border-none outline-none text-center 
                whitespace-nowrap font-bold bg-[#f53838] text-white rounded-[10px] sm-max:py-[13px] sm-max:px-[26px]"
          >
            Subscribe Now
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Subcribe;
