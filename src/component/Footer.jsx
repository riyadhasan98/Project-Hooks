import React from "react";
import logo1 from "../images/logo1.png";

function Footer() {
  return (
    <>
      <section className="bg-[#171B26] pt-6 md:pt-14 mt-8 md:mt-32">
        <div className="cus-container">
          <div className="">
            <div className="md:flex justify-between ">
              <div className="">
                <h1 className="heading-text text-white max-sm:text-center">
                  Subscribe Newsletter
                </h1>
              </div>
              <div className="w-80 relative md:w-[477px] max-sm:m-auto max-sm:mt-4">
                <input
                  type="email"
                  placeholder="Email address"
                  className="rounded-full py-2 md:py-[12px] px-5 shadow-sm w-full focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 border outline-none"
                />
                <button className="bg-[#2A4DFF] py-[6px] px-3 md:py-[10px] md:px-8 text-white rounded-full absolute right-[5px] top-[3px]">
                  Subscribe
                </button>
              </div>
            </div>
            <hr className="mt-5 w-full md:mt-12 border-[#2D3340]" />

            <div className="max-sm:space-y-5 mt-5 md:flex justify-between md:mt-16">
              <div className="space-y-3">
                <img src={logo1} alt="" />
                <p className="about-text text-white md:w-[290px]">
                  Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>

              <div className="w-[225px]">
                <h2 className="font-semibold text-white text-[16px] mb-3">
                  Quick Link
                </h2>
                <nav className="list-none space-y-2">
                  <li>
                    <a className="text-[#EBEBEB] hover:text-gray-400">Home</a>
                  </li>
                  <li>
                    <a className="text-[#EBEBEB] hover:text-gray-400">About</a>
                  </li>
                  <li>
                    <a className="text-[#EBEBEB] hover:text-gray-400">
                      Project
                    </a>
                  </li>
                  <li>
                    <a className="text-[#EBEBEB] hover:text-gray-400">
                      Services
                    </a>
                  </li>
                </nav>
              </div>

              <div className="w-[225px]">
                <h2 className="font-semibold text-white text-[16px] mb-3">
                Stay Social
                </h2>
                <nav className="list-none space-y-2">
                  <li>
                    <a className="text-[#EBEBEB] hover:text-gray-400">Instagram</a>
                  </li>
                  <li>
                    <a className="text-[#EBEBEB] hover:text-gray-400">Facebook</a>
                  </li>
                  <li>
                    <a className="text-[#EBEBEB] hover:text-gray-400">
                    LinkedIn
                    </a>
                  </li>
                </nav>
              </div>

              <div className="w-[225px]">
                <h2 className="font-semibold text-white text-[16px] mb-3">
                Say hello!
                </h2>
                <nav className="list-none space-y-2">
                  <li>
                    <a className="text-[#EBEBEB] hover:text-gray-400">hallo@debuut.studio</a>
                  </li>
                  <li>
                    <a className="text-[#EBEBEB] hover:text-gray-400">+31 (0)6 337 999 38</a>
                  </li>
                  <li>
                    <a className="text-[#EBEBEB] hover:text-gray-400">
                    Grote Overstraat 8 7411 JC Deventer
                    </a>
                  </li>
                </nav>
              </div>
            </div>

            <hr className="mt-5 w-full md:mt-12 border-[#2D3340]" />

            <div className="py-5 md:py10 flex flex-col md:flex-row justify-between max-sm:space-y-3">
                <span className="text-[14px] text-[#D2D3D6]">Copyright © 2024 Logo. All rights reserved.</span>
                <div className="space-x-6">
                <span className="text-[14px] text-[#D2D3D6]">Terms and Conditions.</span>
                <span className="text-[14px] text-[#D2D3D6]">Privacy statement</span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
