import { useEffect, useState, useRef } from "react";

const secondsToHHMMSS = (seconds) => {
  if (seconds < 3600)
    return new Date(seconds * 1000).toISOString().substr(14, 5);

  return new Date(seconds * 1000).toISOString().substr(11, 8);
};

export default function CountDown2() {
  const timerRef = useRef();
  const inputRef = useRef();

  const [currentTime, setCurrentTime] = useState(Math.round(Date.now() / 1000));

  //Using new Date().getTime() / 1000 is an incomplete solution for obtaining the seconds, because it produces timestamps with floating-point units.

  useEffect(() => {
    //startTimer
    timerRef.current = setInterval(() => {
      setCurrentTime((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (currentTime === 0) {
      clearInterval(timerRef.current);
    }
  }, [currentTime]);


  return (
    <div className="App">

      <div className="time">{secondsToHHMMSS(currentTime)}</div>
    </div>
  );
}
