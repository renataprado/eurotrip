import huhu from "./huhu.gif";
import map from "./map0.gif"
import CountdownTimer from "../countdown/CountDown";
import { useEffect, useState } from "react";
import { Fireworks } from 'fireworks-js'

const Home = () => {

  const [chegou, setChegou] = useState(false)

  useEffect(() => {

    if(chegou){
      console.log(chegou)
      const container = document.querySelector('.fireworks');
      const fireworks = new Fireworks(container);
      fireworks.start();
    }
  }, [chegou]);
  

  return (
    <div className="home">
      <h2>EUROTRIP PORRA</h2>
      <div className="countdown-container">
        <CountdownTimer setChegou={setChegou}/>
        { chegou ? <img src={map} alt="map"/> : <img src={huhu} alt="huhu"/> }
      </div>
      <div className="fireworks" />
    </div>
  );
}

export default Home;