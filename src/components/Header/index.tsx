import styles from "./styles.module.css";

export function Header() {
  return (
    <>
      <div className={styles.header}>
        <h3>
          Cálculo de <span>IMC</span>
        </h3>
      </div>
    </>
  );
}
