import { useState } from "react";
import { NavBar } from "../../components/NavBar";
import styles from "./styles.module.css";

export function RegisterPage() {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setpassowordAgain] = useState("");
  const [showPassword, setShowPassword] = useState<Boolean>(false);
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.card}>
        <div className={styles.left}>
          <h1 className={styles.header}>Cadastre-se</h1>
          <h2 className={styles.subTitle}>
            Preencha os campos para fazer seu cadastro!
          </h2>
        </div>
        <div className={styles.right}>
          <form action="" className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="userName">
                Nome de usuário:
              </label>
              <input
                className={styles.input}
                type="text"
                name="userName"
                id="userName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="digite seu nome de usuário. Ex: Carlos"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="userEmail">
                E-mail:
              </label>
              <input
                className={styles.input}
                type="email"
                name="userEmail"
                id="userEmail"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="digite seu e-mail. Ex: carlos@gmail.com"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="userPassword">
                Senha:
              </label>
              <input
                className={styles.input}
                type={showPassword ? "text" : "password"}
                name="userPassword"
                id="userPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="userPasswordAgain">
                Digite novamente sua senha:
              </label>
              <input
                className={styles.input}
                type={showPassword ? "text" : "password"}
                name="userPasswordAgain"
                id="userPasswordAgain"
                value={passwordAgain}
                onChange={(e) => setpassowordAgain(e.target.value)}
                required
              />
            </div>

            <div className={styles.checkBoxPassword}>
              <input
                type="checkbox"
                onChange={(e) => setShowPassword(!showPassword)}
                id="checkbox"
                className={styles.checkbox}
              />
              <label htmlFor="checkbox" className={styles.labelCheckbox}>
                {showPassword ? "Esconder senha" : "Mostrar senha"}
              </label>
            </div>
            <button
              disabled={
                password != passwordAgain ||
                password == "" ||
                passwordAgain == "" ||
                username == "" ||
                userEmail == ""
              }
              className={styles.buttonSubmit}
              type="submit"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
