import { useState } from "react";
import Board from "./components/Board";
import Status from "./components/Status";
import ResetButton from "./components/ResetButton";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
  ];

  function calculateWinner(board) {

    for(let pattern of winningPatterns){

      const [a,b,c] = pattern;

      if(
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ){
        return board[a];
      }

    }

    return null;
  }

  function handleClick(index){

    if(board[index]) return;
    if(winner) return;

    const newBoard = [...board];

    newBoard[index] =
      isXTurn ? "X":"O";

    setBoard(newBoard);

    const gameWinner =
      calculateWinner(newBoard);

    if(gameWinner){
      setWinner(gameWinner);
      return;
    }

    const draw =
      newBoard.every(cell =>
          cell !== null
      );

    if(draw){
      setIsDraw(true);
      return;
    }

    setIsXTurn(!isXTurn);

  }

  function resetGame(){

      setBoard(Array(9).fill(null));
      setWinner(null);
      setIsDraw(false);
      setIsXTurn(true);

  }

  return (

    <div className="
    min-h-screen
    bg-slate-900
    flex
    flex-col
    items-center
    justify-center
    gap-8
    px-4
    ">

      <h1 className="
      text-5xl
      font-bold
      text-white
      ">
        Tic Tac Toe
      </h1>

      <Status
        winner={winner}
        isDraw={isDraw}
        isXTurn={isXTurn}
      />

      <Board
        board={board}
        handleClick={handleClick}
      />

      <ResetButton
        resetGame={resetGame}
      />

    </div>
  );
}

export default App;