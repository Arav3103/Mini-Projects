import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(1500);
  const intervalRef = useRef<number | null>(null);

  function startTimer() {
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => {  //Added this to clear the setInterval as soon as state changes
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);

  return (
    <>
      <section>
        <h3 className="text-4xl font-extrabold dark:text-black">{`${String(
          Math.floor(timeLeft / 60)
        ).padStart(2, "0")}`}</h3>
        <h3 className="text-4xl font-extrabold dark:text-black">:</h3>
        <h3 className="text-4xl font-extrabold dark:text-black">{`${String(
          timeLeft % 60
        ).padStart(2, "0")}`}</h3>
      </section>
    </>
  );
};

export default Timer;
