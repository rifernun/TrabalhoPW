import { Header } from "../Header";
import styles from "./styles.module.css";

type CardProps = {
  children: React.ReactNode;
  imc: string;
  category: string;
};

export function Card({ children, imc, category }: CardProps) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <Header />
        </div>
        <div className={styles.cardBody}>{children}</div>
        {imc && category && (
          <div className={styles.cardResults}>
            <h2>Resultados:</h2>
            <h3>Seu imc é: {imc}</h3>
            <h3>Classificação: {category}</h3>
          </div>
        )}
      </div>
    </>
  );
}
