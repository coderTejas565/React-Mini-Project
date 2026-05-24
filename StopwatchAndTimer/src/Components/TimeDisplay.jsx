export default function TimeDisplay({ time }) {

  const hours = String(
    Math.floor(time / 3600)
  ).padStart(2, "0");

  const minutes = String(
    Math.floor((time % 3600) / 60)
  ).padStart(2, "0");

  const seconds = String(
    time % 60
  ).padStart(2, "0");


  return (
    <div className="
      text-5xl
      font-bold
      tracking-widest
      text-center
      my-6
    ">

      {hours}:{minutes}:{seconds}

    </div>
  );
}