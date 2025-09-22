import styles from "./styles.module.css";

type ResultProps = {
  imc: string;
  category: string;
};

export function Result({ imc, category }: ResultProps) {
  return (
    <div className={styles.cardResults}>
      <h2>Resultados:</h2>
      <h3>Seu imc é: {imc}</h3>
      <h3>Classificação: {category}</h3>
    </div>
  );
}
