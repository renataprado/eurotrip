import React, { useState, useEffect, useRef } from "react";
import huhu from "./huhu.gif";

const CountdownTimer = () => {
  const [counter, setCounter] = useState(calculateTimeLeft());
  const targetDate = new Date("Feb 23, 2024 00:00:00").getTime();
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      const now = Date.now();
      const timeLeft = targetDate - now;
      if (timeLeft <= 0) {
        clearInterval(timerRef.current);
        setCounter("Chegou o grande dia!");
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

    return `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
  };

  return (
    <div className="countdown-time">
      <h2>EUROTRIP PORRA</h2>
      {counter}
      <img src={huhu} alt="huhu" />
    </div>
  );
};

export default CountdownTimer;
