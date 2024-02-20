import huhu from "./huhu.gif";
import CountdownTimer from "../countdown/CountDown";
import Button from '@mui/material/Button';


const Home = () => {
  return (
    <div className="home">
      <h2>EUROTRIP PORRA</h2>
      <div className="countdown-container">
        <CountdownTimer />
        <a href="/eurotrip/documents" >
          <img src={huhu} alt="huhu"/>
        </a>
      </div>
    </div>
  );
}

export default Home;