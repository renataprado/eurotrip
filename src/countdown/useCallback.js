const { useCallback, useEffect, useRef, useState } = React;

const calculateDuration = eventTime => moment.duration(Math.max(eventTime - (Math.floor(Date.now() / 1000)), 0), 'seconds');

function Countdown({ eventTime, interval }) {
  const [duration, setDuration] = useState(calculateDuration(eventTime));
  const timerRef = useRef(0);
  const timerCallback = useCallback(() => {
    setDuration(calculateDuration(eventTime));
  }, [eventTime])

  useEffect(() => {
    timerRef.current = setInterval(timerCallback, interval);

    return () => {
      clearInterval(timerRef.current);
    }
  }, [eventTime]);

  return (
    <div>
      {duration.days()} Days {duration.hours()} Hours {duration.minutes()} Minutes {duration.seconds()} Seconds
    </div>
  )
}


ReactDOM.render(
  <Countdown eventTime={1626573600} interval={1000} />,
  document.getElementById('app')
);