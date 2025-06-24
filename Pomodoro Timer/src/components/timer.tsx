import React, { useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState<number>(1500);
  const intervalRef = useRef(0);

  function startTimer() {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = 0;
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  }

  const handlePlayPause = () => {
    startTimer();
  };

  return (
    <section>
      <h3 className="text-4xl font-extrabold dark:text-black">{`${String(
        Math.floor(time / 60)
      ).padStart(2, "0")}`}</h3>
      <h3 className="text-4xl font-extrabold dark:text-black">:</h3>
      <h3 className="text-4xl font-extrabold dark:text-black">{`${String(
        time % 60
      ).padStart(2, "0")}`}</h3>
      <button onClick={handlePlayPause}>Play</button>
      <button onClick={handlePlayPause}>Pause</button>
    </section>
  );
};

export default Timer;
