import Game from "../game/Game";
import Header from "../header/Header";
import styles from "./GamePage.module.css";

function GamePage() {
  return (
    <div className={styles.game}>
      <Header />
      <Game />
    </div>
  );
}
export default GamePage;
