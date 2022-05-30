import React from "react";
import feature from "../images/feature-image.png";
import check from "../images/icon-check.svg";

const Feature = () => {
  return (
    <section className="pb-[130px] md-max:pb-[95px] sm-max:pb-[50px]">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div
          className="flex justify-between items-end gap-x-[170px] md-max:gap-x-[30px] 
        md-max:items-center sm-max:flex-col sm-max:gap-y-[50px]"
        >
          <div>
            <img src={feature} alt="" />
          </div>
          <div>
            <h2 className="font-medium text-[35px] leading-[1.4] mb-[20px] sm-max:text-[30px]">
              We Provide Many Features You Can Use
            </h2>
            <p className="leading-[1.875] mb-[23px]">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul className="list-none">
              <FeatureItem title="Powerfull online protection."></FeatureItem>
              <FeatureItem title="Internet without borders."></FeatureItem>
              <FeatureItem title="Supercharged VPN"></FeatureItem>
              <FeatureItem title="No specific time limits."></FeatureItem>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

function FeatureItem({ title }) {
  return (
    <li className="flex items-center gap-x-[10px] mb-[21px] text-[14px]">
      <img src={check} alt="" className="feature-icon" />
      <span>{title}</span>
    </li>
  );
}

export default Feature;
