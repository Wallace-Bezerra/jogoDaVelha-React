import styles from "./Subtitle.module.css"

function Subtitle({ children }) {
  return <p className={styles.subtitle}>{children}</p>;
}

export default Subtitle;
