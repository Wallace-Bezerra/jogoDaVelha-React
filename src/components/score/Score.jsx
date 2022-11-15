import styles from "./Score.module.css";

import Icon from "../icon/Icon";

function Score({ score }) {
  return (
    <div className={styles.score}>
      <h2> Placar</h2>
      <div className={styles.scoreResult}>
        <div className={styles.iconResult}>
          <Icon iconName={"circle"} />
          <span>{score.circle}</span>
        </div>
        <div className={styles.iconResult}>
          <Icon iconName={"x"} />
          <span>{score.x}</span>
        </div>
      </div>
    </div>
  );
}

export default Score;
