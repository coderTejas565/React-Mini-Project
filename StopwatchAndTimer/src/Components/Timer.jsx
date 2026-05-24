import {
  useState,
  useRef,
  useEffect
} from "react";

import Controls from "./Controls";
import TimeDisplay from "./TimeDisplay";


export default function Timer() {

  const [input,
    setInput] =
    useState("");

  const [time,
    setTime] =
    useState(0);

  const [isRunning,
    setIsRunning] =
    useState(false);


  const intervalRef =
    useRef(null);



  function handleStart() {

    if (isRunning) return;

    if (time <= 0) return;

    setIsRunning(true);

    intervalRef.current =
      setInterval(() => {

        setTime(prev => {

          if (prev <= 1) {

            clearInterval(
              intervalRef.current
            );

            setIsRunning(false);

            alert("Time's up!");

            return 0;
          }

          return prev - 1;

        });

      },1000);
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

    setTime(
      Number(input)
    );

    setIsRunning(false);
  }



  function setTimer() {

    setTime(
      Number(input)
    );
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

        Timer

      </h2>


      <input
        type="number"

        placeholder="
        Enter seconds
        "

        value={input}

        onChange={(e)=>
          setInput(
            e.target.value
          )
        }

        className="
          w-full
          p-3
          rounded-lg
          text-black
          mt-5
        "
      />


      <button

        onClick={setTimer}

        className="
          bg-blue-500
          px-4
          py-2
          rounded
          mt-4
          w-full
        "
      >

        Set Timer

      </button>



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