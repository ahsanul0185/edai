import React from 'react'
import Header from '../components/Header'
import Hero from '../sections/Hero'
import Taloustieto from '../sections/Taloustieto'
import Valitse from '../sections/Valitse'
import Suurin from '../sections/Suurin'
import Harjoitukset from '../sections/Harjoitukset'
import Tuki from '../sections/Tuki'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='z-0 text-white font-poppins'>
      <Header />
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