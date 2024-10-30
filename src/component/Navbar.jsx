import React, { useRef } from 'react'
import logo from '../images/Logo.svg'
import menu from '../icon/Menu.svg'
import cross from '../icon/X.svg'
import user from '../icon/account_circle.svg'


function Navbar() {
    let mobileNav = useRef();
    const show =()=>{
        mobileNav.current.classList.remove("max-sm:hidden")
    }
    const hide = ()=>{
        mobileNav.current.classList.add("max-sm:hidden")
    }
  return (
    <>
    <div className="bg-[#F0F7FF] py-3 md:py-6">
        <div className="nav flex justify-between cus-container items-center">
            <div className="logo">
                <img className='w-32 lg:w-[168px]' src={logo} alt="" />
            </div>
            <div onClick={show} className="menu md:hidden absolute right-[15px]">
                <img src={menu} alt="" />
            </div> 
            
            <div ref={mobileNav} className="pages max-sm:bg-black max-sm:text-white max-sm:p-5 max-sm:absolute right-0 top-0 max-sm:hidden">
                <img onClick={hide} className='md:hidden relative left-20 bottom-2'  src={cross} alt="" />
                <ul className='md:flex md:space-x-6'>
                <li>Features</li>
                <li>How it work</li>
                <li>More</li>
                <li>Pricing</li>
                <li>Demo</li>
                </ul>
            </div>
            <div className="button max-sm:hidden flex space-x-[30px] items-center">
                <div className='flex space-x-1 items-center'>
                  <img src={user} alt="" />
                  <span className='font-semibold'>Sign In</span>
                </div>
                <button className='bg-[#2A4DFF] py-[14px] px-6 rounded-[8px] text-white text-[16px]'>Free 14-day Trial</button>
            </div>
        </div>
        
      </div>
      
    </>
  )
}

export default Navbar
