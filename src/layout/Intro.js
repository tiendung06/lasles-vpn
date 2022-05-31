import React from "react";
import User from "../images/user.png";
import Location from "../images/location.png";
import Server from "../images/server.png";

const Intro = () => {
  return (
    <section className="mb-[95px] sm-max:mb-[50px]">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div
          className="bg-white rounded-[10px] py-[37px] grid grid-cols-3 min-h-[200px] sm-max:grid-cols-1
           sm-max:p-[30px] sm-max:gap-y-[50px] shadow-[0_42px_114px_0_rgba(13,16,37,0.064)]"
        >
          <IntroItem img={User} quantity="90" title="Users"></IntroItem>
          <IntroItem img={Location} quantity="30" title="Locations"></IntroItem>
          <IntroItem img={Server} quantity="50" title="Servers"></IntroItem>
        </div>
      </div>
    </section>
  );
};

function IntroItem({ img, quantity, title }) {
  return (
    <div
      className="flex items-center justify-center gap-x-[36.5px] text-[20px] 
    sm-max:flex-col sm-max:gap-y-[20px] sm-max:text-center"
    >
      <div className="intro-icon">
        <img srcSet={`${img} 2x`} alt="" />
      </div>
      <div className="intro-info">
        <h3 className="text-[25px] mb-[5px] leading-[1.2] font-bold text-[#0b132a]">
          {quantity}+
        </h3>
        <span className="leading-normal">{title}</span>
      </div>
    </div>
  );
}

export default Intro;
