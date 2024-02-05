import React, { useState, useEffect, componentDidMount } from "react";

const CountdownTimer = () => {
  const [counter, setCounter] = React.useState();
  const targetDate = new Date("Feb 23, 2024 00:00:00").getTime();
  const now = new Date().getTime();

  setInterval(() => {
    setCounter(targetDate - now);
  }, 1000);

  const calculateTimeLeft = () => {
    const calcMinutes = 1000 * 60 * 60;
  
    var days = Math.floor(counter / (calcMinutes* 24)).toString().padStart(2, '0');
    var hours = Math.floor((counter % (calcMinutes * 24)) / (calcMinutes)).toString().padStart(2, '0');
    var minutes = Math.floor((counter % (calcMinutes)) / (1000 * 60)).toString().padStart(2, '0');
    var seconds = Math.floor((counter % (1000 * 60)) / 1000).toString().padStart(2, '0');

    return(
      <div className="countdown-time__display">
        <div>
          <div>{days}</div>
          <div>dias</div>
        </div>
        <div>
          <div>{hours}</div>
          <div>horas</div>
        </div>
        <div>
          <div>{minutes}</div>
          <div>minutos</div>
        </div>
        
        <div>
          <div>{seconds}</div>
          <div>segundos</div>
        </div>
       
      </div>
    );
  };


  componentDidMount = () => { 
    setInterval(() => setCounter(prevCount => prevCount - 1), 1000);
  }




  return (
    <div className="countdown-time">
      <h3> Contagem Regressiva </h3>
      {calculateTimeLeft()}
    </div>
  );
};

export default CountdownTimer;
