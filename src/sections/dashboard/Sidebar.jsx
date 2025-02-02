import React from "react";
import logo from "../../assets/logo.svg";
import icon_logout from "../../assets/icon-logout.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-[#161616] h-screen min-w-[320px] py-10 px-8">
      <div className="h-full flex flex-col justify-between ">
        <img className="w-14 mx-auto" src={logo} alt="" />

        <button onClick={() => navigate("/")} className="text-white text-sm duration-200 hover:text-[#e9e9e9] group flex gap-3">
          <img
            src={icon_logout}
            className="w-5 group-hover:opacity-85 duration-200"
            alt="logout icon"
          />
          <span>Kirjaudu ulos</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
