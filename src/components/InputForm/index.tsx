import styles from "./styles.module.css";

type InputFormProps = {
  label: string;
  id: string;
} & React.ComponentProps<"input">;

export function InputForm({ label, id, type, ...rest }: InputFormProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} className={styles.inputClass} type={type} {...rest} />
    </>
  );
}
