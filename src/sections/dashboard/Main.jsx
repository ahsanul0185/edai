import React from 'react'
import Kauppatiede from './Kauppatiede'

function Main() {
  return (
    <div className="max-w-[1180px] bg-dark p-16 flex flex-col justify-center gap-4 w-full">
        <p className='mb-3'>Kojelauta</p>
        
        <Kauppatiede />
      </div>
  )
}

export default Main