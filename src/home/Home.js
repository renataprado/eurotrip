import huhu from "./huhu.gif";
import map from "./map0.gif"
import CountdownTimer from "../countdown/CountDown";
import { useEffect } from "react";
import Button from '@mui/material/Button';

import { Fireworks } from 'fireworks-js'



const Home = () => {
  useEffect(() => {
    const container = document.querySelector('.container');
    const fireworks = new Fireworks(container);
    fireworks.start();
  }, []);

  return (
    <div className="home">
      <h2>EUROTRIP PORRA</h2>
      <div className="countdown-container">
        <CountdownTimer />
        <div className="container"></div>
        <img src={huhu} alt="huhu"/>
        <img src={map} alt="map"/>
      </div>
    </div>
  );
}

export default Home;