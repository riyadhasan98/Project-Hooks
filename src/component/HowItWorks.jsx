import React from "react";
import work from "../images/work.png";
import click from "../icon/click.svg";
import topic from "../icon/topic.svg";
import start from "../icon/start.svg";
import meeting from '../images/meeting.png'

function HowItWorks() {
  return (
    <>
      <section className="">
        <div className="bg w-full h-[600px] md:h-[1196px] max-sm:relative bottom-[200px]">
          <div className="cus-container">
            <div className="relative top-80 md:top-96 md:flex flex-row-reverse md:justify-between md:items-center">
              <div className="left">
                <img className="max-sm:w-[360px]" src={work} alt="" />
              </div>
              <div className="right space-y-4 max-sm:mt-8">
                <div className="heading">
                  <h1 className="heading-text">How it work</h1>
                </div>
                <div className="flex space-x-4">
                  <div>
                    <img src={click} alt="" />
                  </div>
                  <div>
                    <h4 className="text-[20px] md:text-[24px] font-semibold">
                      Choose you app
                    </h4>
                    <p className="about-text w-[280px] md:w-[428px]">
                      Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div>
                    <img src={topic} alt="" />
                  </div>
                  <div>
                    <h4 className="text-[20px] md:text-[24px] font-semibold">
                      Set your topic
                    </h4>
                    <p className="about-text w-[280px] md:w-[428px]">
                      Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div>
                    <img src={start} alt="" />
                  </div>
                  <div>
                    <h4 className="text-[20px] md:text-[24px] font-semibold">
                      Gat Started
                    </h4>
                    <p className="about-text w-[280px] md:w-[428px]">
                      Yorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc vulputate libero et velit interdum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* another section */}

            <div className="offer mt-96 md:mt-[470px] bg-[#2A4DFF] rounded-[12px] max-sm:p-5 md:flex md:items-center md:space-x-20">
                <div>
                    <img className="max-sm:hidden" src={meeting} alt="" />
                </div>
                <div className="space-y-10">
                    <div>
                        <h1 className="text-[24px] md:text-[36px] font-bold leading-8 md:leading-[44px] text-white max-sm:text-center md:w-[407px]">Start managing today with Hooks</h1>
                    </div>
                    <div className="flex flex-col space-y-3 ">
                        <button className="text-[18px] w-fit to-black bg-white py-3 px-8 rounded-[8px] max-sm:m-auto">Start my 14-day trial</button>
                        <span className="text-[#EBEBEB] text-[14px] max-sm:m-auto">No credit Card needed</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
