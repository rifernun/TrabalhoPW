import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function NavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        Vita<span className={styles.accent}>Balance</span>
      </div>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/imc" className={styles.link}>
          Calcular IMC
        </Link>
      </div>
    </nav>
  );
}
