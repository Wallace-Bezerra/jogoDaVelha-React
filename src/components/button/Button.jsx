import styles from "./Button.module.css";

function Button({ children, onClick, btnActive }) {
  return (
    <button disabled={!btnActive} className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
