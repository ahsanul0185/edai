import React from 'react'
import bg_image from "/images/img_valitse.jpg";
import Timer from '../../components/Timer';

const Kauppatiede = () => {

    const date = "2025-04-06T09:00:00Z"; // set UTC time here

  return (
    <div
    className={`relative h-[40vh] flex z-0  overflow-hidden py-6 px-8 rounded-xl`}
  >
    {/* bg image & dark overlay */}
    <img
      className="absolute w-full h-full lg:h-fit left-0 lg:-top-32 object-cover"
      src={bg_image}
      alt=""
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#00000069] to-dark/70" />

          {/* text content */}
          <div className='z-10 flex justify-between items-start w-full'>
              <h2 className='text-[20px] font-bold'>Kauppatiede valmennusskurssi</h2>

              <Timer className="" date={date} />
          </div>
    
  </div>
  )
}

export default Kauppatiede