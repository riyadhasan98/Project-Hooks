import React from "react";
import tes1 from '../images/tes1.png'
import tes2 from '../images/tes2.png'
import tes3 from '../images/tes3.png'

function Testimonial() {
  return (
    <>
      <section className="mt-[620px] md:mt-60">
        <div className="cus-container">
          <div className="">
            <h1 className="heading-text text-center">What they say about us</h1>
            <div className="mt-6 md:mt-20 max-sm:space-y-5 md:flex justify-between">
              <div className="card space-y-8 bg-white shadow-md md:shadow-xl py-[40px] px-[30px] max-sm:w-[360px] md:w-fit">
                <img className="m-auto" src={tes1} alt="" />
                <p className="about-text md:w-[310px] text-center italic">
                  "I am really satisfied with it. I'm good to go. It really
                  saves me time and effort. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry."
                </p>
                <div className="flex flex-col">
                    <h3 className="text-[16px] font-bold text-center">Jacob Jones</h3>
                    <span className="text-[14px] font-normal m-auto">SEO</span>
                </div>
              </div>
              <div className="card space-y-8 bg-white shadow-md md:shadow-xl py-[40px] px-[30px] max-sm:w-[360px] md:w-fit">
                <img className="m-auto" src={tes2} alt="" />
                <p className="about-text md:w-[310px] text-center italic">
                  "I am really satisfied with it. I'm good to go. It really
                  saves me time and effort. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry."
                </p>
                <div className="flex flex-col">
                    <h3 className="text-[16px] font-bold text-center">Jacob Jones</h3>
                    <span className="text-[14px] font-normal m-auto">SEO</span>
                </div>
              </div>
              <div className="card space-y-8 bg-white shadow-md md:shadow-xl py-[40px] px-[30px] max-sm:w-[360px] md:w-fit">
                <img className="m-auto" src={tes3} alt="" />
                <p className="about-text md:w-[310px] text-center italic">
                  "I am really satisfied with it. I'm good to go. It really
                  saves me time and effort. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry."
                </p>
                <div className="flex flex-col">
                    <h3 className="text-[16px] font-bold text-center">Jacob Jones</h3>
                    <span className="text-[14px] font-normal m-auto">SEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
