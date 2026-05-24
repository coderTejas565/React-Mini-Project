export default function Controls({
  onStart,
  onPause,
  onReset,
  isRunning
}) {

  return (

    <div className="
      flex justify-center
      gap-4
      mt-6
    ">

      <button
        disabled={isRunning}
        onClick={onStart}
        className="
          px-5
          py-2
          rounded-lg
          bg-green-500
          hover:bg-green-600
          disabled:opacity-50
        "
      >
        Start
      </button>



      <button
        onClick={onPause}
        className="
          px-5
          py-2
          rounded-lg
          bg-yellow-500
          hover:bg-yellow-600
        "
      >
        Pause
      </button>



      <button
        onClick={onReset}
        className="
          px-5
          py-2
          rounded-lg
          bg-red-500
          hover:bg-red-600
        "
      >
        Reset
      </button>

    </div>

  );
}