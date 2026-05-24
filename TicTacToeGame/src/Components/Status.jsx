function Status({

    winner,
    isDraw,
    isXTurn

}){

    if(winner){

        return (

            <h2
            className="
            text-2xl
            text-green-400
            font-bold
            "
            >

                Winner:
                {winner}
                🎉

            </h2>

        );

    }

    if(isDraw){

        return(

            <h2
            className="
            text-2xl
            text-yellow-400
            font-bold
            "
            >

                Match Draw 😐

            </h2>

        );

    }

    return(

        <h2
        className="
        text-xl
        text-white
        "
        >

            Current Turn:

            <span
            className="
            font-bold
            "
            >

                {
                    isXTurn
                    ? " X"
                    : " O"
                }

            </span>

        </h2>

    );

}

export default Status;