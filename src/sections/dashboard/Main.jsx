import React from 'react'
import Kauppatiede from './Kauppatiede'

function Main() {
  return (
    <div className="max-w-[1180px] bg-dark px-6 py-8 sm:p-8 md:p-16 flex flex-col justify-center gap-4 w-full">
        <p className='mb-3'>Kojelauta</p>
        
      <Kauppatiede />
      
      <div className='flex flex-col sm:flex-row items-center justify-center mx-auto gap-3 sm:gap-5 max-w-xl w-full'>
        <button className='text-sm lg:text-base px-2 bg-black w-full sm:flex-1 h-16 sm:h-20 md:h-36 lg:h-40 rounded-xl grid place-items-center'>
        Taloustieto
        </button>
        <button className='text-sm lg:text-base px-2 bg-black w-full sm:flex-1 h-16 sm:h-20 md:h-36 lg:h-40 rounded-xl grid place-items-center'>
        Tilasto ja todennäköisyys 
        </button>
      </div>
      </div>
  )
}

export default Main