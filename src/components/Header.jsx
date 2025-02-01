import React, { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import logo from "../assets/logo.svg";
import icon_logout from "../assets/icon-logout.svg";

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    current > 10 ? setIsScrolled(true) : setIsScrolled(false);
  });

  return (
    <div
      className={`fixed w-full top-0 left-0 z-[999] flex justify-between items-center duration-300 section-padding sm:py-6 ${
        isScrolled
          ? "from-[#D9D9D966 ] to-[#7373731A ] bg-white/15 backdrop-blur-xl translate-y-0"
          : "from-[#606060 ] to- [#1a1a1a] backdrop-blur-0"
      }`}
    >
      {/* logo */}
      <div>
        <img className="size-16 md:size-fit" src={logo} alt="edai" />
      </div>

      {/* right buttons */}
      <div className="flex items-center gap-5">
        <button className="text-white text-sm duration-200 hover:text-[#e9e9e9]">Aloita Opiskelu</button>
        <button className="duration-200 hover:opacity-85">
          <img src={icon_logout} alt="logout icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
