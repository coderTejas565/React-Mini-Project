import {
  useState,
  useRef,
  useEffect
} from "react";

import Controls from "./Controls";
import TimeDisplay from "./TimeDisplay";

export default function Stopwatch() {

  const [time, setTime] =
    useState(0);

  const [isRunning,
    setIsRunning] =
    useState(false);

  const intervalRef =
    useRef(null);



  function handleStart() {

    if (isRunning) return;

    setIsRunning(true);

    intervalRef.current =
      setInterval(() => {

        setTime(
          prev => prev + 1
        );

      }, 1000);
  }



  function handlePause() {

    clearInterval(
      intervalRef.current
    );

    setIsRunning(false);
  }



  function handleReset() {

    clearInterval(
      intervalRef.current
    );

    setTime(0);

    setIsRunning(false);
  }



  useEffect(() => {

    return () => {

      clearInterval(
        intervalRef.current
      );

    };

  }, []);



  return (

    <div className="
      bg-slate-800
      p-8
      rounded-2xl
      shadow-xl
      w-full
      max-w-md
    ">

      <h2 className="
        text-2xl
        font-bold
        text-center
      ">

        Stopwatch

      </h2>


      <TimeDisplay
        time={time}
      />


      <Controls
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        isRunning={isRunning}
      />

    </div>

  );
}