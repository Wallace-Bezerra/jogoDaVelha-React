import styles from "./Button.module.css";

function Button({ children, onClick, btnActive, color }) {
  return (
    <button style={{ background: color }} disabled={!btnActive} className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
