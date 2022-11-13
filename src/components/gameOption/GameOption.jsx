import Icon from "../icon/Icon";
import styles from "./GameOption.module.css";

function GameIcon({ iconName }) {
  return (
    <Icon iconName={iconName} size="30px" />
  )
}

function GameOption({ status, onClick }) {
  return (
    <div className={styles.block} onClick={onClick}>

      {status === 1 && <GameIcon iconName="circle" />}
      {status === -1 && <GameIcon iconName="x" />}

    </div>)
}

export default GameOption;
