import React from 'react'
import Header from '../components/Header'
import Hero from '../sections/Hero'
import Taloustieto from '../sections/Taloustieto'
import Valitse from '../sections/Valitse'
import Suurin from '../sections/Suurin'
import Harjoitukset from '../sections/Harjoitukset'
import Tuki from '../sections/Tuki'
import Footer from '../components/Footer'
import Timer from '../components/Timer'


const timerDays = 166;

const Home = () => {

  return (
    <div className='z-0 text-white font-poppins'>
      <Header />
      <Timer duration={timerDays} />
      <Hero />
      <Taloustieto />
      <Valitse />
      <Suurin />
      <Harjoitukset />
      <Tuki />
      <Footer />
    </div>
  )
}

export default Home