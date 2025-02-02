import React from 'react'
import bg_image from "/images/img_valitse.jpg";
import Timer from '../../components/Timer';

const Kauppatiede = () => {

    const date = "2025-04-06T09:00:00Z"; // set UTC time here

  return (
    <div
    className={`relative h-72 md:h-[350px] flex z-0  overflow-hidden py-6 px-8 rounded-xl bg-red-700`}
  >
    {/* bg image & dark overlay */}
    <img
      className="absolute w-full h-full left-0 top-0 object-cover"
      src={bg_image}
      alt=""
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#00000069] to-dark/70" />

          {/* text content */}
          <div className='z-10 flex flex-col lg:flex-row gap-6 lg:gap-3 lg:justify-between items-center lg:items-start w-full'>
              <h2 className='text-center md:text-left sm:text-base md:text-[20px] font-bold'>Kauppatiede valmennusskurssi</h2>

              <Timer className="" date={date} />
          </div>
    
  </div>
  )
}

export default Kauppatiede