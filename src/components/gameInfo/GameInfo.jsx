import styles from "./GameInfo.module.css";
import Icon from "../icon/Icon";
import Button from "../button/Button";

function GameInfo({ result, currentPlayer, resetGame }) {
  return (
    <div className={styles.gameInfo}>
      <p>{result}</p>
      {currentPlayer === 1 && <Icon iconName={"circle"} size="30px" />}
      {currentPlayer === -1 && <Icon iconName={"x"} size="30px" />}
      <Button onClick={resetGame}>Reiniciar o Game</Button>
    </div>
  );
}

export default GameInfo;
