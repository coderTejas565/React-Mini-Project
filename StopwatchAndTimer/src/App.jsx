import Stopwatch
from "./components/Stopwatch";

import Timer
from "./components/Timer";


function App() {

  return (

    <div className="
      min-h-screen
      bg-slate-900
      text-white
      flex
      flex-col
      items-center
      justify-center
      gap-8
      p-6
    ">

      <h1 className="
        text-4xl
        font-bold
      ">

        Stopwatch & Timer

      </h1>


      <Stopwatch />

      <Timer />

    </div>

  );
}


export default App;