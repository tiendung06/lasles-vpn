import React from "react";
import { NavLink } from "react-router-dom";
import HeroImage from "../images/hero-image.png";

const Hero = () => {
  return (
    <section className="pb-[100px] md-max:pb-[50px]">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div className="flex justify-between items-center gap-x-10 relative sm-max:flex-col-reverse sm-max:gap-y-[50px]">
          <div className="w-full max-w-[555px]">
            <h1 className="text-[50px] font-medium mb-5 leading-[1.4] text-[#0b132a] md-max:text-[35px]">
              Want anything to be easy with <strong>LaslesVPN.</strong>
            </h1>
            <p className="hero-desc mb-[50px] leading-[1.875] sm-max:mb-[25px]">
              Provide a network for all your needs with ease and fun using
              <span className="font-medium"> LaslesVPN</span> discover
              interesting features from us.
            </p>
            <NavLink
              to="/"
              className="inline-block py-[17px] px-[65px] border-none outline-none text-center 
                whitespace-nowrap font-bold bg-[#f53838] text-white rounded-[10px] sm-max:py-[13px] sm-max:px-[26px]"
            >
              Get Started
            </NavLink>
          </div>
          <div className="xl-min:absolute xl-min:top-1/2 xl-min:right-0 xl-min:translate-x-[50px] xl-min:-translate-y-1/2">
            <img srcSet={`${HeroImage} 2x`} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
