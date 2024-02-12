import huhu from "./huhu.gif";
import CountdownTimer from "../countdown/CountDown";


function Home() {
  return (
    <div className="home">
      <h2>EUROTRIP PORRA</h2>
      <div class="countdown-container">
        <CountdownTimer />
        <img src={huhu} alt="huhu" />
      </div>
    </div>
  );
}

export default Home;