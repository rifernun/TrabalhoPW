import { useState } from "react";
import { motion } from "framer-motion";
import { NavBar } from "../../components/NavBar";
import styles from "./styles.module.css";

export function CalcIMC() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [imcCategory, setImcCategory] = useState("");
  const [error, setError] = useState("");

  const formOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const w = parseFloat(weight);
    const h = parseFloat(height);

    if (!w || !h || w <= 0 || h <= 0) {
      setError("Por favor, insira valores válidos.");
      return;
    }

    const alturaMetros = h / 100;
    const imc = w / (alturaMetros * alturaMetros);
    setResult(imc.toFixed(2));
    setClassIMC(imc);
  };

  const setClassIMC = (valorIMC: number) => {
    if (valorIMC < 18.5) {
      setImcCategory("Baixo peso");
    } else if (valorIMC < 25) {
      setImcCategory("Peso normal");
    } else if (valorIMC < 30) {
      setImcCategory("Sobrepeso");
    } else if (valorIMC < 35) {
      setImcCategory("Obesidade grau 1");
    } else if (valorIMC < 40) {
      setImcCategory("Obesidade grau 2");
    } else {
      setImcCategory("Obesidade grau 3");
    }
  };

  const getCategoryColor = () => {
    if (imcCategory.includes("normal")) return "var(--accent-green)";
    if (imcCategory.includes("Baixo")) return "var(--accent-yellow)";
    if (imcCategory.includes("1")) return "var(--accent-orange)";
    if (imcCategory.includes("2") || imcCategory.includes("3"))
      return "var(--accent-red)";
    return "var(--accent)";
  };

  return (
    <div className={styles.container}>
      <NavBar />

      <div className={styles.content}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>Calcular seu IMC</h1>
          <p className={styles.subtitle}>
            Insira seus dados para uma análise corporal instantânea.
          </p>

          <form onSubmit={formOnSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="peso" className={styles.label}>
                Peso (kg)
              </label>
              <input
                id="peso"
                type="number"
                placeholder="Ex: 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                min="1"
                step="0.1"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="altura" className={styles.label}>
                Altura (cm)
              </label>
              <input
                id="altura"
                type="number"
                placeholder="Ex: 180"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                min="1"
                step="1"
                required
                className={styles.input}
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <motion.button
              type="submit"
              className={styles.submitButton}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(0, 247, 255, 0.5)",
              }}
              whileTap={{ scale: 0.98 }}
              disabled={!weight || !height}
            >
              Calcular IMC
            </motion.button>
          </form>

          {result && (
            <motion.div
              className={styles.resultCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              style={{ borderColor: getCategoryColor() }}
            >
              <div
                className={styles.resultValue}
                style={{ color: getCategoryColor() }}
              >
                {result}
              </div>
              <div className={styles.resultCategory}>{imcCategory}</div>
              <div className={styles.resultLabel}>
                Seu Índice de Massa Corporal
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
