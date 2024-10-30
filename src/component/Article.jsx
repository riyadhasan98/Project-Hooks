import React from "react";
import arrow from "../icon/arrow.svg";
import a1 from "../images/a1.png";
import a2 from "../images/a2.png";
import user1 from "../images/user1.png";
import user2 from "../images/user2.png";
import user3 from "../images/user3.png";
import user4 from "../images/user4.png";
import a3 from "../images/a3.png";
import a4 from "../images/a4.png";

function Article() {
  return (
    <>
      <section className="mt-16 md:mt-80 relative">
        <div className="cus-container">
          <div className="">
            <div className=" md:flex md:flex-row-reverse justify-between">
              <div className="right relative max-sm:m-auto">
                <img className="max-sm:w-48 z-20 relative md:right-56" src={a1} alt="" />
                <img
                  className="absolute -top-6 right-1 max-sm:w-48 md:right- z-10"
                  src={a2}
                  alt=""
                />
                <div className="w-fit bg-white shadow-md p-6 absolute -bottom-52 z-30 left-16 rounded-[12px] space-y-3 md:-left-40 md:-bottom-14">
                  <div>
                    <h4 className="text-[16px] font-semibold">
                      Blog and Content
                    </h4>
                  </div>
                  <div className="flex -space-x-3">
                    <img src={user1} alt="" />
                    <img src={user2} alt="" />
                    <img src={user3} alt="" />
                    <img src={user4} alt="" />
                  </div>
                  <div>
                    <div className="bg-[#DDF5F1] w-[200px] rounded-[12px] py-3 md:w-[325px]">
                      <div>
                        <svg
                          className="ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <circle cx="12.5" cy="12.7681" r="12" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-[#DDF5F1] w-[200px] rounded-[12px] py-3 md:w-[325px]">
                      <div>
                        <svg
                          className="ml-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <circle cx="12.5" cy="12.7681" r="12" fill="white" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left space-y-5 md:space-y-12 max-sm:mt-60">
                <h1 className="heading-text md:w-[500px]">
                  Why are agile metrics important
                </h1>
                <p className="about-text md:w-[500px]">
                  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-[#2A4DFF] text-[16px] md:text-[18px] font-medium"
                  >
                    Find out more about scheduling
                  </a>
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-40 md:flex justify-between md:items-center">
            <div className="left relative">
                <img className="max-sm:w-48" src={a3} alt="" />
                <img className="max-sm:w-44 absolute top-12 left-40 md:left-60" src={a4} alt="" />
            </div>
            <div className="left space-y-5 md:space-y-12 max-sm:mt-20">
                <h1 className="heading-text md:w-[500px]">
                  Why are agile metrics important
                </h1>
                <p className="about-text md:w-[500px]">
                  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Curabitur tempus urna at
                  turpis condimentum lobortis.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-[#2A4DFF] text-[16px] md:text-[18px] font-medium"
                  >
                    Find out more about scheduling
                  </a>
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute -bottom-64 min-w-[100%] max-sm:hidden z-20">
        <svg className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 417"
          fill="none"
        >
          <path
            d="M1454.21 1.10744C1141.41 501.653 459.549 461.089 -10.9257 332.56"
            stroke="#D2D3D6"
          />
        </svg>
        </div> */}
      </section>
    </>
  );
}

export default Article;
