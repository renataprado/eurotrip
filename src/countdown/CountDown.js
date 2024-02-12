import React, { useState, useEffect, componentDidMount, componentWillMount, useRef } from "react";
import huhu from "./huhu.gif"

const secondsToHHMMSS = (seconds) => {
  if (seconds < 3600)
    return new Date(seconds * 1000).toISOString().substr(14, 5);

  return new Date(seconds * 1000).toISOString().substr(11, 8);
};

const CountdownTimer = () => {
  const [counter, setCounter] = React.useState();
  const targetDate =  Math.round(new Date("Feb 23, 2024 00:00:00").getTime());
  const now = Math.round(Date.now());
  const timerRef = useRef();

  setInterval(() => {
    setCounter(targetDate - now);
  }, 1000);

  useEffect(() => {
    //startTimer
    timerRef.current = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  const calculateTimeLeft = () => {
    const calcMinutes = 1000 * 60 * 60;
  
    var days = Math.floor(counter / (calcMinutes* 24)).toString().padStart(2, '0');
    var hours = Math.floor((counter % (calcMinutes * 24)) / (calcMinutes)).toString().padStart(2, '0');
    var minutes = Math.floor((counter % (calcMinutes)) / (1000 * 60)).toString().padStart(2, '0');
    var seconds = Math.floor((counter % (1000 * 60)) / 1000).toString().padStart(2, '0');

    return(
      <div className="countdown-time__display">
        <div  className="countdown-time__content">
        <div>
          <div>{days}</div>
          <div className="countdown-time__unit">dias</div>
        </div>
        <div>
          <div>{hours}</div>
          <div  className="countdown-time__unit">horas</div>
        </div>
        <div>
          <div>{minutes}</div>
          <div className="countdown-time__unit">minutos</div>
        </div>
        <div>
          <div>{seconds}</div>
          <div className="countdown-time__unit">segundos</div>
        </div>
        </div>
       
      </div>
    );
  };
  

  return (
    <div className="countdown-time">
      <h2> EUROTRIP PORRA</h2>
      {calculateTimeLeft()}
      <img src={huhu} />
    </div>
  );
};

export default CountdownTimer;
