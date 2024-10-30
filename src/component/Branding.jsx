import React from 'react'
import a from '../images/Airbnb Logo.png'
import b from '../images/Hubspot Logo.png'
import c from '../images/Google Logo.png'
import d from '../images/Microsoft Logo.png'
import e from '../images/Walmart Logo.png'

function Branding() {
  return (
    <div className='w-fit max-sm:m-auto cus-container'>
      <div className='flex space-x-4 md:space-x-32  bg-white py-4 md:py-8 z-20  md:relative right-16   md:rounded-tr-[36px] md:pl-0 md:pr-16'>
        <img src={a} alt="" />
        <img src={b} alt="" />
        <img src={c} alt="" />
        <img className='max-sm:hidden' src={d} alt="" />
        <img className='max-sm:hidden' src={e} alt="" />
        
      </div>
    </div>
  )
}

export default Branding
