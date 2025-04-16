import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);          // Track elapsed time
  const intervalRef = useRef(null);             // Store interval ID

  const start = () => {
    // TODO: Start the stopwatch using setInterval and store the ID in intervalRef.current
    // if (intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime+1)
    }, 1000)
  };

  const pause = () => {
    // TODO: Pause the stopwatch by clearing the interval using intervalRef.current
    clearInterval(intervalRef.current);
    intervalRef.current = null
  };

  const reset = () => {
    // TODO: Clear the interval and reset the time to 0
    clearInterval(intervalRef.current);
    intervalRef.current = null
    setTime(0)
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>Time: {time}s</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
