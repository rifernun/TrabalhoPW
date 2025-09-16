import { Header } from "../Header";
import styles from "./styles.module.css";

type CardProps = {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
};

export function Card({ header, children, footer }: CardProps) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <Header>{header}</Header>
        </div>
        <div className={styles.cardBody}>{children}</div>
        <div className={styles.cardBottom}>{footer}</div>
      </div>
    </>
  );
}
