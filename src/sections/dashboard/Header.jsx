import React from "react";
import logo from "../../assets/logo.svg";
import icon_logout from "../../assets/icon-logout.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

  return (
    <div className="flex justify-between md:hidden bg-[#161616] px-8 py-6">
      <img className="w-12" src={logo} alt="" />
      <button
        onClick={() => navigate("/")}
        className="text-white text-xs duration-200 hover:text-[#e9e9e9] group flex gap-3"
          >
                     <span>Kirjaudu ulos</span>
        <img
          src={icon_logout}
          className="w-4 group-hover:opacity-85 duration-200"
          alt="logout icon"
        />
 
      </button>
    </div>
  );
};

export default Header;
