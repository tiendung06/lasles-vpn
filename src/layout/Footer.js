import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import facebook from "../images/Facebook.png";
import twitter from "../images/Twitter.png";
import instagram from "../images/Instagram.png";

const Footer = () => {
  const product = [
    "Download",
    "Pricing",
    "Locations",
    "Server",
    "Contries",
    "Blog",
  ];
  const engage = [
    "LaslesVPN ?",
    "FAQ",
    "Tutorials",
    "About Us",
    "Privacy Policy",
    "Terms of Service",
  ];
  const earnMoney = ["Affiliate", "Become Partner"];
  return (
    <footer className="pb-[100px] bg-[#f8f8f8] pt-[180px] md-max:py-[50px]">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div className="footer-container grid gap-x-[126px] md-max:gap-x-[30px] sm-max:grid-cols-1 sm-max:gap-y-[30px]">
          <div className="footer-column">
            <Icon img={logo} classNames="inline-block mb-5"></Icon>
            <p className="mb-[30px] leading-[1.875]">
              <span className="font-medium">LaslesVPN</span> is a private
              virtual network that has unique features and has high security.
            </p>
            <div className="flex items-center">
              <Icon img={facebook} classNames="social-item"></Icon>
              <Icon img={twitter} classNames="social-item"></Icon>
              <Icon img={instagram} classNames="social-item"></Icon>
            </div>
            <p className="text-[#afb5c0]">
              ©2020Lasles<span className="font-medium">VPN</span>
            </p>
          </div>
          <FooterColumn title="Product" col={product}></FooterColumn>
          <FooterColumn title="Engage" col={engage}></FooterColumn>
          <FooterColumn title="Earn Money" col={earnMoney}></FooterColumn>
        </div>
      </div>
    </footer>
  );
};

function Icon({ img, classNames }) {
  return (
    <NavLink to="/" className={classNames}>
      <img srcSet={`${img} 2x`} alt="" />
    </NavLink>
  );
}

function FooterColumn({ title, col }) {
  return (
    <div className="footer-column">
      <h3 className="font-medium text-[18px] mb-5 leading-[1.875]">{title}</h3>
      <ul className="list-none">
        {col.map((item, index) => (
          <li
            key={index}
            className="mb-[10px] hover:text-[#f53838] transition-all"
          >
            <NavLink to="/" className="text-inherit leading-[1.875]">
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
