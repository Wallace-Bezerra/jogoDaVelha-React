import { useState, useEffect } from "react";
import GameOption from "../gameOption/GameOption";
import GameInfo from "../gameInfo/GameInfo";
import styles from "./Game.module.css";
import Score from "../score/Score";

function Game() {
  const [gameState, setGameState] = useState(Array(9).fill(0));
  const [currentPlayer, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);
  const [result, setResult] = useState("Próximo a Jogar");
  const [btnActive, setBtnActive] = useState(false);
  const [winnerLine, setWinnerLine] = useState([]);
  const [draw, setDraw] = useState(false);
  const [score, setScore] = useState({
    circle: 0,
    x: 0,
  });

  const table = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    setPlayer(currentPlayer * -1);
    verificarWinner();
    verificarEmpate();
    exibirResultado();
  }, [gameState]);

  useEffect(() => {
    if (winner !== 0) setDraw(false);
    verificarWinner();
    exibirResultado();
    updateScore(winner);
  }, [winner]);

  function verificarEmpate() {
    const checkDraw = gameState.every((item) => {
      return item !== 0;
    });
    if (checkDraw && winner === 0) {
      setDraw(true);
      setResult("Empatou!");
      setBtnActive(true);
    }
  }

  function handleClick(index) {
    if (gameState[index] === 0 && winner === 0) {
      let newGameState = [...gameState];
      newGameState[index] = currentPlayer;
      setGameState(newGameState);
    }
  }

  function verificarWinner() {
    table.forEach((arrayItem) => {
      let newArray = arrayItem.map((item) => {
        return gameState[item];
      });

      let soma = newArray.reduce((acc, item) => {
        return acc + item;
      });
      if (soma === 3 || soma === -3) {
        let ganhador = soma / 3;
        setWinner(ganhador);
        setWinnerLine(arrayItem);
        setPlayer(ganhador);
        setBtnActive(true);
      }
    });
  }

  function verifyWinnerLine(index) {
    return (
      winnerLine.find((item) => {
        return item === index;
      }) !== undefined
    );
  }

  function exibirResultado() {
    if (winner === 1) {
      setResult("Circulo Venceu!");
    } else if (winner === -1) {
      setResult("X venceu!");
    }
  }

  function updateScore(ganhador) {
    //Tentei utilizar apenas um useState
    // if (ganhador === 1) {
    //   const newScore = score["circle"] += 1;
    //   console.log(newScore);
    // }
    if (ganhador === 1) {
      const newScore = {
        ...score,
        circle: score["circle"] + 1,
      };
      setScore(newScore);
    }
    if (ganhador === -1) {
      const newScore = {
        ...score,
        x: score["x"] + 1,
      };
      setScore(newScore);
    }
    // if (ganhador === -1) {
    //   const newScore = score["x"] += 1;
    //   console.log(newScore);
    //   console.log(score);
    // }
  }
  function resetGame() {
    playAgain();
    setScore({
      circle: 0,
      x: 0,
    });
  }
  function playAgain() {
    const NewGame = Array(9).fill(0);
    setGameState(NewGame);
    setWinner(0);
    setWinnerLine([]);
    setDraw(false);
    setPlayer(1);
    setResult("Próximo a Jogar");
    setBtnActive(false);
  }

  return (
    <>
      <Score score={score}></Score>
      <div className={styles.gameContainer}>
        <div className={styles.gameBoard}>
          {gameState.map((item, index) => {
            return (
              <GameOption
                key={`GameOption-key:${index}`}
                status={item}
                onClick={() => handleClick(index)}
                isWinner={verifyWinnerLine(index)}
                isDraw={draw}
              />
            );
          })}
        </div>
        <GameInfo
          result={result}
          currentPlayer={currentPlayer}
          resetGame={resetGame}
          playAgain={playAgain}
          btnActive={btnActive}
        />
      </div>
    </>
  );
}

export default Game;
