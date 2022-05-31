import React from "react";
import star from "../images/icon-star.svg";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";
import avatar3 from "../images/avatar3.png";

const Customer = () => {
  return (
    <section className="customer">
      <div className="max-w-[1170px] mx-auto px-[15px]">
        <div className="mb-[60px] max-w-[555px] mx-auto text-center">
          <h2 className="max-w-[447px] mx-auto font-medium text-[35px] leading-[1.4] mb-5">
            Trusted by Thousands of Happy Customer
          </h2>
          <p className="leading-[1.875]">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
        <div className="md-max:pb-[50px] grid lg-min:grid-cols-3 pb-[60px] md-min:grid-cols-2 grid-cols-1">
          <CustomerItem
            img={avatar1}
            name="Viezh Robert"
            address="Warsaw, Poland"
            rate="4.5"
            desc="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
          ></CustomerItem>
          <CustomerItem
            img={avatar2}
            name="Yessica Christy"
            address="Shanxi, China"
            rate="4.5"
            desc="“I like it because I like to travel far and still can connect with high speed.”."
          ></CustomerItem>
          <CustomerItem
            img={avatar3}
            name="Kim Young Jou"
            address="Seoul, South Korea"
            rate="4.5"
            desc="“This is very unusual for my business that currently requires a virtual private network that has high security.”."
          ></CustomerItem>
        </div>
      </div>
    </section>
  );
};

function CustomerItem({ img, name, address, rate, desc }) {
  return (
    <div className="border-[#ddd] border-2 p-[30px] mx-[25px] rounded-[10px] min-h-[285px] mb-5">
      <div className="mb-5 flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          <div className="w-[50px] h-[50px]">
            <img
              srcSet={`${img} 2x`}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="customer-content">
            <h3 className="leading-none font-medium text-[18px] mb-[5px]">
              {name}
            </h3>
            <span className="leading-none text-[14px]">{address}</span>
          </div>
        </div>
        <div className="flex items-center gap-x-[10px]">
          <span>{rate}</span>
          <img src={star} alt="" />
        </div>
      </div>
      <div className="leading-[1.875]">{desc}</div>
    </div>
  );
}

export default Customer;
