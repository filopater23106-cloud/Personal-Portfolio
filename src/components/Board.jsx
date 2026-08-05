import Square from "./Square";
import { useState } from "react";
import { calculateWinner } from "../utils/winner";

function Board() {
    const [board, setBoard] = useState([
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ]);
    const [currentPlayer, setCurrentPlayer] = useState("X");

    const [gameMode, setGameMode] = useState("ai");

    function makeAIMove(updatedBoard) {
        if (calculateWinner(updatedBoard))
            return;

        if (updatedBoard.every(square => square !== null))
            return;

        const emptySquares = updatedBoard
            .map((value, index) => (value === null ? index : null))
            .filter((index) => index !== null);

        if (emptySquares.length === 0) return;

        const randomIndex =
            emptySquares[Math.floor(Math.random() * emptySquares.length)];

        const aiBoard = [...updatedBoard];
        aiBoard[randomIndex] = "O";

        setBoard(aiBoard);
        setCurrentPlayer("X");
    }

    const winner = calculateWinner(board);

    const isDraw = !winner && board.every((square) => square !== null);




    function handleClick(index) {
        if (gameMode === "ai" && currentPlayer === "O")
            return;

        if (winner || isDraw)
            return;

        if (board[index] !== null)
            return;

        const newBoard = [...board];

        newBoard[index] = currentPlayer;

        setBoard(newBoard);

        if (gameMode === "ai") {
            setCurrentPlayer("O");

            setTimeout(() => {
                makeAIMove(newBoard);
            }, 500);
        } else {
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
    }


    function restartGame() {
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
    }
    return (
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="mb-6 rounded-xl bg-white/10 py-3">
                <h1 className="text-4xl font-extrabold text-center text-white mb-2">
                    Tic Tac Toe
                </h1>
                <div>
                    <p className="text-center text-gray-300 mb-6">
                        {gameMode === "ai"
                            ? "Play against the Computer"
                            : "Play with your Friend"}
                    </p>
                    <div className="flex justify-center gap-4 mb-6">
                        <button
                            onClick={() => {
                                setGameMode("pvp");
                                restartGame();
                            }}
                            className={`px-4 py-2 rounded-lg transition ${gameMode === "pvp"
                                ? "bg-cyan-500 text-white"
                                : "bg-white/10 hover:bg-white/20"
                                }`}
                        >
                            Player vs Player
                        </button>

                        <button
                            onClick={() => {
                                setGameMode("ai");
                                restartGame();
                            }}
                            className={`px-4 py-2 rounded-lg transition ${gameMode === "ai"
                                ? "bg-cyan-500 text-white"
                                : "bg-white/10 hover:bg-white/20"
                                }`}
                        >
                            Player vs AI
                        </button>
                    </div>
                </div>

                <h2 className="text-center text-xl font-semibold text-white">
                    {winner
                        ? `🏆 Winner: ${winner}`
                        : isDraw
                            ? "🤝 It's a Draw!"
                            : `🎮 Turn: ${currentPlayer}`}
                </h2>
            </div>
            <div className="mt-6 w-96 h-96 grid grid-cols-3 grid-rows-3 gap-4 bg-white/10 backdrop-blur-lg p-4 rounded-2xl">
                <Square value={board[0]} onClick={() => handleClick(0)} />
                <Square value={board[1]} onClick={() => handleClick(1)} />
                <Square value={board[2]} onClick={() => handleClick(2)} />
                <Square value={board[3]} onClick={() => handleClick(3)} />
                <Square value={board[4]} onClick={() => handleClick(4)} />
                <Square value={board[5]} onClick={() => handleClick(5)} />
                <Square value={board[6]} onClick={() => handleClick(6)} />
                <Square value={board[7]} onClick={() => handleClick(7)} />
                <Square value={board[8]} onClick={() => handleClick(8)} />
            </div>
            <div>
                <button onClick={restartGame} className="mt-6 w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all duration-300 text-white font-semibold">
                    Restart Game
                </button>
            </div>
        </div>

    );
}

export default Board;