import React from "react";
import about from "../images/about-img.png";
import phone from "../images/phone.png";
import arrow from "../icon/arrow.svg";

function About() {
  return (
    <>
      <section className="relative mt-6 md:mt-[100px]">
        <div className="cus-container">
          <div className="">
            <div className="heading">
              <h1 className="heading-text text-center md:w-[564px] m-auto">
                The most accurate time tracking system
              </h1>
              <p className="text-[16px] md:text-[18] font-normal text-center leading-5 mt-4">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="content mt-4 md:mt-16 md:flex md:justify-between">
              <div className="left relative">
                <img
                  className="md:w-[500px] md:h-[470px] "
                  src={about}
                  alt=""
                />
                <img
                  className="w-56 md:w-[344px] absolute -bottom-[160px] right-10 md:top-[183px] md:left-[205px]"
                  src={phone}
                  alt=""
                />
              </div>
              <div className="right max-sm:mt-36 space-y-4 md:space-y-8">
                <div className="heading">
                  <h1 className="heading-text  md:w-[470px]">
                    Employees know where to go next
                  </h1>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-[18px] font-semibold md:text-[24px] md:w-[470px]">
                    All shift details in one spot
                  </h3>
                  <p className="des-text md:w-[470px]">
                    Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <h3 className="text-[18px] font-semibold md:text-[24px] md:w-[470px]">
                    Get alerts if workers are late
                  </h3>
                  <p className="des-text md:w-[470px]">
                    Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </p>
                </div>
                <div className="flex space-x-3">
                  <a href='#' className="text-[#2A4DFF] text-[16px] md:text-[18px] font-medium">
                    Find out more about scheduling
                  </a>
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute  -bottom-[170px] max-sm:hidden min-w-[100%]">
        <svg className="min-w-[100%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 417"
          fill="none"
        >
          <path
            d="M1454.21 1.10744C1141.41 501.653 459.549 461.089 -10.9257 332.56"
            stroke="#D2D3D6"
          />
        </svg>
        </div>
      </section>
    </>
  );
}

export default About;
