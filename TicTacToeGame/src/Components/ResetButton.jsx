function ResetButton({

    resetGame

}){

    return(

        <button

        onClick={resetGame}

        className="

        px-6
        py-3

        bg-blue-500

        text-white

        rounded-lg

        hover:bg-blue-600

        transition

        font-semibold

        "

        >

            Reset Game

        </button>

    );

}

export default ResetButton;