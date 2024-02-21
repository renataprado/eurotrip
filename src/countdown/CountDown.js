import React, { useState, useEffect, useRef } from "react";

const CountdownTimer = ({setChegou}) => {
  const [counter, setCounter] = useState(calculateTimeLeft());
  const targetDate = new Date("Feb 22, 2024 18:00:00").getTime();
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const now = Date.now();
      const timeLeft = targetDate - now;
      if (timeLeft <= 0) {
        clearInterval(timerRef.current);
        setCounter(calculateTimeLeft(0));
        setChegou(true);
      } else {
        setCounter(calculateTimeLeft(timeLeft));
      }
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  function calculateTimeLeft(timeLeft) {
    const calcMinutes = 1000 * 60 * 60;
  
    const days = Math.floor(timeLeft / (calcMinutes * 24)).toString().padStart(2, '0');
    const hours = Math.floor((timeLeft % (calcMinutes * 24)) / calcMinutes).toString().padStart(2, '0');
    const minutes = Math.floor((timeLeft % calcMinutes) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000).toString().padStart(2, '0');

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
    )
  };

  return (
    <div className="countdown-time">
      {counter}
    </div>
  );
};

export default CountdownTimer;
