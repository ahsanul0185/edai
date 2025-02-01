import React, { useEffect, useState } from "react";

const Timer = ({ duration }) => {
    
    const [time, setTime] = useState(duration * 24 * 60 * 60 * 1000);

    useEffect(() => {
        setTimeout(() => {
            setTime(prev => prev - 1000)
        }, 1000);
    }, [time]);

    const getFormattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000))
    }

  return (
    <div className="fixed z-50 w-full max-w-[300px] p-5 top-1/2 -translate-y-1/2 right-0 bg-gradient-to-r from-[#FFFFFF66] to-[#9999991A] backdrop-blur-md rounded-md">
          timer
      <br />
          {time}
          
    </div>
  );
};

export default Timer;
