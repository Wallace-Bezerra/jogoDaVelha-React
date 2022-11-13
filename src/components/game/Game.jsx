import { useState } from "react";
import GameOption from "../gameOption/GameOption";
import styles from "./Game.module.css";

function Game() {
  const [gameState, setGameState] = useState(Array(9).fill(0));
  const [currentPlayer, setPlayer] = useState(1);


  function handleClick(index) {
    if (gameState[index] === 0) {
      let newGameState = [...gameState];
      newGameState[index] = currentPlayer;

      setPlayer(currentPlayer * -1)
      setGameState(newGameState);
    }


  }
  return (
    <div>
      <div className={styles.gameBoard}>
        {
          gameState.map((item, index) => {
            // console.log(item)
            return (
              <GameOption
                key={`GameOptin-key:${index}`}
                status={item}
                onClick={() => handleClick(index)}
              />
            )
          })
        }

      </div>
      <div className={styles.players}>

      </div>
    </div>
  );
}

export default Game;
