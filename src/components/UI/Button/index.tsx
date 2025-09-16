import styles from "./styles.module.css";

type BtnProps = {
  children: string;
} & React.ComponentProps<"button">;

export function Btn({ children, ...rest }: BtnProps) {
  return (
    <>
      <button className={styles.btn} {...rest}>
        {children}
      </button>
    </>
  );
}
