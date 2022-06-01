import React from "react";
import { NavLink } from "react-router-dom";
import plan from "../images/plan.png";
import check from "../images/icon-check-line.svg";
import network from "../images/network-image.png";

const Plan = () => {
  return (
    <section className="pt-[80px] pb-[30px] md-max:py-[50px]">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div className="max-w-[555px] mx-auto mb-[60px] text-center">
          <h2 className="heading font-medium text-[35px] leading-[1.4] mb-5 sm-max:text-[30px]">
            Choose Your Plan
          </h2>
          <p className="leading-[1.875]">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>
        <div className="plan-list grid grid-cols-3 gap-x-[50px] mb-[176px]">
          <PlanItem title="Free Plan" price="Free"></PlanItem>
          <PlanItem title="Standard Plan" price="$9" meta={1}></PlanItem>
          <PlanItem title="Premium Plan" price="$12" meta={2}></PlanItem>
        </div>
        <div className="max-w-[555px] mx-auto text-center">
          <h2 className="font-medium text-[35px] leading-[1.4] mb-5 sm-max:text-[30px] max-w-[380px] mx-auto">
            Huge Global Network of Fast VPN
          </h2>
          <p className="leading-[1.875]">
            See <span className="font-medium">LaslesVPN</span> everywhere to
            make it easier for you when you move locations.
          </p>
        </div>
        <div className="mt-[155px] md-max:mt-[50px]">
          <img srcSet={`${network} 2x`} alt="" />
        </div>
      </div>
    </section>
  );
};

function PlanItem({ title, price, meta = 0 }) {
  return (
    <div
      className="plan-item border-2 border-[#dddddd] rounded-[10px] px-[50px] pt-[80px] pb-[50px] 
    flex flex-col items-center hover:border-[#f53838] transition-all"
    >
      <div className="plan-image mx-auto mb-[30px]">
        <img alt="" srcSet={`${plan} 2x`} />
      </div>
      <h3 className="plan-title text-[18px] font-medium mb-[30px]">{title}</h3>
      <div className="plan-details mb-[50px]">
        <PlanInfo info="Unlimited Bandwitch"></PlanInfo>
        <PlanInfo info="Encrypted Connection"></PlanInfo>
        {meta === 1 || meta === 2 ? (
          <PlanInfo info="Yes Traffic Logs"></PlanInfo>
        ) : (
          <PlanInfo info="No Traffic Logs"></PlanInfo>
        )}
        <PlanInfo info="Works on All Devices"></PlanInfo>
        {(meta === 1 || meta === 2) && (
          <PlanInfo info="Connect Anyware"></PlanInfo>
        )}
        {meta === 2 && <PlanInfo info="Get New Features"></PlanInfo>}
      </div>
      <h4 className="plan-price text-[25px] font-medium mb-[30px] mt-auto">
        {price}
      </h4>
      <NavLink
        to="/"
        className="inline-block py-[17px] px-[65px] border-none outline-none text-center w-full
                whitespace-nowrap font-bold bg-[#f53838] text-white rounded-[10px] sm-max:py-[13px] sm-max:px-[26px]"
      >
        Select
      </NavLink>
    </div>
  );
}

function PlanInfo({ info }) {
  return (
    <div className="plan-info flex items-center gap-x-[25px] mb-[10px] text-[14px] leading-[2.15]">
      <img src={check} alt="" />
      <span>{info}</span>
    </div>
  );
}

export default Plan;
