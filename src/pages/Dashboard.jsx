import React from 'react'
import Sidebar from '../sections/dashboard/Sidebar'
import Main from '../sections/dashboard/Main'

const Dashboard = () => {
  return (
    <div className="z-0 text-white font-poppins flex">
      <Sidebar />
      <Main />
    </div>
  )
}

export default Dashboard