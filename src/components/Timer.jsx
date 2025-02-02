import React, { useEffect, useRef, useState } from "react";

const Timer = ({ duration }) => {
  const [time, setTime] = useState(duration * 24 * 60 * 60 * 1000);
  const timerId = useRef();

  useEffect(() => {
    if (time <= 0) return;

    timerId.current = setInterval(() => {
      setTime((prev) => prev - 1000);
    }, 1000);

    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (time <= 0) clearInterval(timerId.current);
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return { days, hours, minutes, seconds };
  };

  return (
    <div className="fixed z-50 scale-75 sm:scale-100 py-3 px-2 md:px-3 top-[20%] lg:top-[30%] -right-7 sm:right-0 bg-gradient-to-r from-[#FFFFFF66] to-[#9999991A] backdrop-blur-md rounded-md">
      <span className="hidden">
        {getFormattedTime(time).days < 9
          ? "0" + getFormattedTime(time).days
          : getFormattedTime(time).days}{" "}
        :
        {getFormattedTime(time).hours < 9
          ? "0" + getFormattedTime(time).hours
          : getFormattedTime(time).hours}{" "}
        :
        {getFormattedTime(time).minutes < 9
          ? "0" + getFormattedTime(time).minutes
          : getFormattedTime(time).minutes}{" "}
        :
        {getFormattedTime(time).seconds < 9
          ? "0" + getFormattedTime(time).seconds
          : getFormattedTime(time).seconds}{" "}
      </span>

      <div className="flex justify-center">
        {/* day */}
        <div>
          <p className="text-xl md:text-2xl lg:text-3xl border-r px-3 lg:px-4 text-center ">
            {getFormattedTime(time).days}
          </p>
          <span className="text-[9px] md:text-[11px] text-center font-light  mt-1.5 md:mt-3 block">
            PÄIVÄ
          </span>
        </div>

        {/* hours */}
        <div>
          <p className="text-xl md:text-2xl lg:text-3xl border-r px-3 lg:px-4 text-center">
            {getFormattedTime(time).hours < 10
              ? "0" + getFormattedTime(time).hours
              : getFormattedTime(time).hours}{" "}
          </p>
          <span className="text-[9px] md:text-[11px] text-center font-light mt-1.5 md:mt-3 block">
            TUNTI
          </span>
        </div>

        {/* minutes */}
        <div className="w-[50px] md:w-[60px]">
          <p className="text-xl md:text-2xl lg:text-3xl border-r px-3 lg:px-4 text-center">
            {getFormattedTime(time).minutes < 10
              ? "0" + getFormattedTime(time).minutes
              : getFormattedTime(time).minutes}{" "}
          </p>
          <span className="text-[9px] md:text-[11px] text-center font-light w-full mt-1.5 md:mt-3 block">
            MINUUTTI
          </span>
        </div>

        {/* seconds */}
        <div className="w-[50px] md:w-[60px]">
          <p className="text-xl md:text-2xl lg:text-3xl px-3 lg:px-4 text-center">
            {getFormattedTime(time).seconds < 10
              ? "0" + getFormattedTime(time).seconds
              : getFormattedTime(time).seconds}{" "}
          </p>
          <span className="text-[9px] md:text-[11px] text-center font-light  mt-1.5 md:mt-3 block">
            SEKUNTI
          </span>
        </div>
      </div>

      <p className="text-sm lg:text-base text-center mt-4 lg:mt-6">Pääsykoe laskenta</p>
    </div>
  );
};

export default Timer;
