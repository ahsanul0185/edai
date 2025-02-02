import React from "react";
import Header from "../components/Header";
import Hero from "../sections/home/Hero";
import Taloustieto from "../sections/home/Taloustieto";
import Valitse from "../sections/home/Valitse";
import Suurin from "../sections/home/Suurin";
import Harjoitukset from "../sections/home/Harjoitukset";
import Tuki from "../sections/home/Tuki";
import Footer from "../components/Footer";
import Timer from "../components/Timer";

const timerDays = 165;

const Home = () => {
  return (
    <div className="z-0 text-white font-poppins">
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
  );
};

export default Home;
