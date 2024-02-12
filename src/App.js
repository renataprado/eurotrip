import logo from './logo.svg';
import './App.css';
import Home from './home/Home';
import CountdownTimer from './countdown/CountDown';
import CountDown2 from './countdown/CountDown2';

const App = () => {
  return (
    <div className="App">
      <CountdownTimer />
      <CountDown2 />
    </div>
  );
};

export default App;
