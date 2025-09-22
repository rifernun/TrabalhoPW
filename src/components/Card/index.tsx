import { Header } from "../Header";
import { Result } from "../Result";
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
        {imc && category && <Result imc={imc} category={category} />}
      </div>
    </>
  );
}
