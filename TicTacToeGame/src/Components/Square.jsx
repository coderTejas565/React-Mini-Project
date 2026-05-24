function Square({
    value,
    onClick
}) {

    return (

        <button

        onClick={onClick}

        className="
        w-24
        h-24
        bg-slate-800
        border
        border-slate-600

        text-4xl
        font-bold

        flex
        items-center
        justify-center

        rounded-lg

        hover:bg-slate-700

        transition

        text-white
        "

        >

            {value}

        </button>

    );
}

export default Square;