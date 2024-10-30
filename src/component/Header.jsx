import React from 'react'
import star from '../icon/star.svg'
import bgStar from '../icon/bg-star.svg'
import main from '../images/main.png'
import main1 from '../images/main1.png'


function Header() {
    const submit =()=>{
        alert('You subscribed');
    }
  return (
    <>
      <section className="bg-[#F0F7FF] md:h-[550px] ">
      <div className="cus-container flex">
        <div className="flex flex-col space-y-5 md:space-y-[35px] py-8 max-sm:items-center ">
            <div className='md:mt-8'>
            <h1 className='text-[28px] font-bold w-72 max-sm:text-center md:leading-[64px]  max-smm-auto md:text-[56px] md:w-[477px]'>Time Tracking as it should be</h1>
            </div>
            <div>
                <p className='w-72 max-sm:text-center max-sm:m-auto md:w-[477px]'>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.</p>
            </div>
            <div className='w-80 relative md:w-[477px]'>
                <input type="email" placeholder='Email address' className='rounded-full py-3 md:py-[18px] px-5 shadow-sm w-full focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 border outline-none'/>
                <button onClick={submit} className='bg-[#2A4DFF] py-2 px-3 md:py-[14px] md:px-8 text-white rounded-full absolute right-[3px] top-1'>Subscribe</button>
            </div>
            <div className='flex space-x-2 items-center md:relative top-[40px]'>
                <img src={star} alt="" />
                <p><span className='font-semibold'>Trustpilot</span> 4.5 out of 5 based on <a href="#" className='text-blue-500 underline'>1,360 reviews</a></p>
            </div>
            
        </div>
        <div className='max-sm:hidden'>
        <img className='absolute top-28 left-48 md:left-[950px] md:top-36' src={bgStar} alt="" />
        <img className='h-[638px] relative left-[214px] z-10 2xl:hidden' src={main} alt="image" />

        </div>
        
        
      </div>
      <img className='h-[638px] relative left-[1100px] bottom-[470px] max-sm:hidden max-md: max-lg:hidden max-xl:hidden max-2xl:hidden z-10' src={main1} alt="image"/>
      
    </section>
    
    </>
  )
}

export default Header
