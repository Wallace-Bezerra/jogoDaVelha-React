import { useState, useEffect } from "react";
import GameOption from "../gameOption/GameOption";
import GameInfo from "../gameInfo/GameInfo";
import styles from "./Game.module.css";
import Button from "../button/Button";

function Game() {
  const [gameState, setGameState] = useState(Array(9).fill(0));
  const [currentPlayer, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);
  const [result, setResult] = useState("Próximo a Jogar");
  const [winnerLine, setWinnerLine] = useState([]);
  const [draw, setDraw] = useState(false);

  const table = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  useEffect(() => {
    setPlayer(currentPlayer * -1)
    verificarWinner();
    exibirResultado();

  }, [gameState, winner])

  function verificarEmpate() {
    console.log(winner, gameState)
    const checkDraw = gameState.every((item) => {
      return item !== 0;
    })
    if (checkDraw) {
      setDraw(true);
    }
  }


  function handleClick(index) {
    console.log("winner antes da funcção", winner)
    if (gameState[index] === 0 && winner === 0) {
      let newGameState = [...gameState];
      newGameState[index] = currentPlayer;
      setGameState(newGameState);
      console.log("global", winner)
    }
  }

  function verificarWinner() {
    table.forEach((arrayItem) => {
      let newArray = arrayItem.map((item) => {
        return gameState[item]
      })

      let soma = newArray.reduce((acc, item) => {
        return acc + item;
      })
      console.log("soma", soma);
      if (soma === 3 || soma === -3) {
        let ganhador = soma / 3;
        setWinner(ganhador)
        setWinnerLine(arrayItem);
        console.log("winner", winner);
      }
      else if (winner === 0) {
        verificarEmpate();
      }
    })
  }

  function verifyWinnerLine(index) {
    return (winnerLine.find((item) => {
      return item === index;
    })) !== undefined
  }

  function exibirResultado() {
    if (winner === 1) {
      console.log("Circulo Venceu!");
      setResult("Circulo Venceu!")
    }
    else if (winner === -1) {
      console.log("x Venceu!")
      setResult("X venceu!")

    }
    else {
      setResult("Próximo a Jogar");
    }

  }

  function resetGame() {
    const NewGame = Array(9).fill(0);
    setGameState(NewGame);
    setWinner(0);
    setWinnerLine([]);
    setDraw(false);
    console.log("reset")
  }

  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameBoard}>
        {
          gameState.map((item, index) => {
            return (
              <GameOption
                key={`GameOption-key:${index}`}
                status={item}
                onClick={() => handleClick(index)}
                isWinner={verifyWinnerLine(index)}
                isDraw={draw}
              />
            )
          })
        }
      </div>
      <GameInfo
        result={result}
        currentPlayer={currentPlayer}
        resetGame={resetGame}
      />


    </div>
  );
}

export default Game;
