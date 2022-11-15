import styles from "./GameInfo.module.css";
import Icon from "../icon/Icon";
import Button from "../button/Button";

function GameInfo({ result, currentPlayer, resetGame,playAgain, btnActive }) {
  return (
    <div className={styles.gameInfo}>
      <p>{result}</p>
      {currentPlayer === 1 && <Icon iconName={"circle"} size="30px" />}
      {currentPlayer === -1 && <Icon iconName={"x"} size="30px" />}
      <Button onClick={playAgain} btnActive={btnActive}>
        Jogar Novamente
      </Button>
      <Button onClick={resetGame} btnActive={btnActive}>
        Reiniciar o Game
      </Button>
    </div>
  );
}

export default GameInfo;
