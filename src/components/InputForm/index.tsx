import styles from "./styles.module.css";

type InputFormProps = {
  label: string;
  id: string;
} & React.ComponentProps<"input">;

export function InputForm({ label, id, type, ...rest }: InputFormProps) {
  return (
    <div className={styles.cardComponent}>
      <label className={styles.labelInput} htmlFor={id}>
        {label}
      </label>
      <input id={id} className={styles.inputClass} type={type} {...rest} />
    </div>
  );
}
