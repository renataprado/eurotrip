// import { useEffect, useState, useRef } from "react";

// const secondsToHHMMSS = (seconds) => {
//   if (seconds < 3600)
//     return new Date(seconds * 1000).toISOString().substr(14, 5);

//   return new Date(seconds * 1000).toISOString().substr(11, 8);
// };

// export default function Count() {
//   const timerRef = useRef();
//   const inputRef = useRef();

//   const [currentTime, setCurrentTime] = useState(0);
  
//   timerRef.current = setInterval(() => {
//     setCurrentTime((prev) => prev - 1);
//   }, 1000);

//   useEffect(() => {
//     return () => {
//       clearInterval(timerRef.current);
//     };
//   }, []);

//   const startTimer = () => {

//   };

//   useEffect(() => {
//     if (currentTime === 0) {
//       clearInterval(timerRef.current);
//     }
//   }, [currentTime]);

//   const handleStart = (e) => {
//     e.preventDefault();

//     if (timerRef.current) {
//       clearInterval(timerRef.current);
//     }

//     const secondsInput = 1000;

//     setCurrentTime(() => secondsInput);

//     startTimer();
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleStart}>
//         <input
//           type="number"
//           placeholder="Enter total seconds to countdown"
//           ref={inputRef}
//         />

//         <button type="submit">Start</button>
//       </form>

//       <div className="time">{secondsToHHMMSS(currentTime)}</div>
//     </div>
//   );
// }
