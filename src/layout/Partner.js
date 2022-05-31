import React from "react";
import netflix from "../images/logo-netflix.png";
import reddit from "../images/logo-reddit.png";
import amazon from "../images/logo-amazon.png";
import discord from "../images/logo-discord.png";
import spotify from "../images/logo-spotify.png";

const Partner = () => {
  return (
    <section className="mb-[50px]">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div className="flex justify-between items-center gap-x-[60px]">
          <div className="partner-item">
            <img srcSet={`${netflix} 2x`} alt="" />
          </div>
          <div className="partner-item">
            <img srcSet={`${reddit} 2x`} alt="" />
          </div>
          <div className="partner-item">
            <img srcSet={`${amazon} 2x`} alt="" />
          </div>
          <div className="partner-item">
            <img srcSet={`${discord} 2x`} alt="" />
          </div>
          <div className="partner-item">
            <img srcSet={`${spotify} 2x`} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
