import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div
      // style={{backgroundImage : `url(/images/img_hero.jpg)`}}
      className={`relative min-h-[70vh] md:min-h-screen sm:bg-[url(/images/img_hero.jpg)] md:bg-fixed bg-no-repeat bg-cover bg-center flex items-end`}
    >
      {/* dark overlay */}
      <div className="sm:hidden absolute inset-0 overflow-x-hidden">
      <img src="/images/img_hero.jpg" className="block h-full min-w-fit -translate-x-[40%]" />
      </div>
      <div className="absolute inset-0 bg-black/50" />


      {/* hero content */}
      <div className="z-10 section-padding mb-8 sm:mb-12 md:mb-28">
        <div className="max-w-3xl">
          <h2 className="absolute top-[5rem] sm:top-24 left-1/2 -translate-x-1/2 sm:-translate-x-0 w-[80%] sm:max-w-full text-center sm:text-left sm:static sm:text-xl md:text-2xl font-bold mb-8">
            Ilmainen kauppatieteet valmennuskurssi
          </h2>
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold">
            91 %
            Aalto-yliopiston kauppakorkeakouluun valintakokeella valituista
            opiskelijoista kävi EDAI valmennuksen kurssin.
          </h2>

          <p className="text-xs sm:text-sm md:text-base font-medium mt-2 sm:mt-4 leading-4 md:leading-7">
            EDAI valmennus on oman alansa ylivoimainen markkinajohtaja
            kurssilaisten ja ennen kaikkea sisäänpäässeiden määrällä mitattuna.
            EDAI valmennus kurssilaiset saavat vuosittain lähes kaikki
            opiskelupaikat valintakoekiintiössä.
          </p>

          <Button className="mt-5 sm:mt-10">Aloita opiskelu heti</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
