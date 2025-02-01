import React from 'react'
import logo from '../assets/logo.svg'


const Footer = () => {
  return (
    <div className='gradient-bg'>
      <div className='h-[20vh] md:h-[40vh] container section-padding py-5 sm:py-8 flex flex-col justify-between'>
          <div>
              <img className='w-14 sm:w-fit' src={logo} alt="EDAI" />
          </div>

          <p className='text-end text-xs sm:text-sm'>© 2025 EDAI. All rights reserved.</p>
    </div>
      </div>
  )
}

export default Footer