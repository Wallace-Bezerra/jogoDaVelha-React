import classNames from "classnames";
import Icon from "../icon/Icon";
import styles from "./GameOption.module.css";

function GameIcon({ iconName }) {
  return <Icon iconName={iconName} size="30px" />;
}

function GameOption({ status, onClick, isWinner, isDraw }) {
  return (
    <div
      className={classNames(styles.block, {
        [styles.winner]: isWinner,
        [styles.draw]: isDraw,
      })}
      onClick={onClick}
    >
      {status === 1 && <GameIcon iconName="circle" />}
      {status === -1 && <GameIcon iconName="x" />}
    </div>
  );
}

export default GameOption;
