import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../sections/home/Hero";
import Taloustieto from "../sections/home/Taloustieto";
import Valitse from "../sections/home/Valitse";
import Suurin from "../sections/home/Suurin";
import Harjoitukset from "../sections/home/Harjoitukset";
import Tuki from "../sections/home/Tuki";
import Footer from "../components/Footer";
import Timer from "../components/Timer";
import { motion } from "motion/react";

const Home = () => {

  const date = "2025-04-06T09:00:00Z"; // set UTC time here

  return (
    <motion.div initial={{opacity : 0}} animate={{opacity: 1}} className="z-0 text-white font-poppins">
      <Header />
      <Timer date={date} />
      <Hero />
      <Taloustieto />
      <Valitse />
      <Suurin />
      <Harjoitukset />
      <Tuki />
      <Footer />
    </motion.div>
  );
};

export default Home;
