import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Animação do código 404 */}
        <motion.h1
          className={styles.errorCode}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
        >
          404
        </motion.h1>

        <motion.p
          className={styles.message}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          A página que você está procurando não existe... ou talvez esteja em
          outra dimensão.
        </motion.p>

        {/* Botão animado com hover e tap */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Link to="/" className={styles.homeButton}>
            Voltar ao início
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
