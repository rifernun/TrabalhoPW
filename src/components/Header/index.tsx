import styles from "./styles.module.css";

type HeaderProps = {
  children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <>
      <div className={styles.header}>
        <h3>{children}</h3>
      </div>
    </>
  );
}
