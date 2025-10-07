// pages/Home.tsx
import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { NavBar } from "../../components/NavBar";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        {/* HERO */}
        <section className={styles.hero}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className={styles.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Equilíbrio Corporal <br />
              <span className={styles.highlight}>Reimaginado</span>
            </motion.h1>
            <motion.p
              className={styles.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              VitaBalance
            </motion.p>
            <motion.div
              className={styles.ctaGroup}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/imc" className={styles.ctaPrimary}>
                Calcular IMC
              </Link>
              <a href="#benefits" className={styles.ctaSecondary}>
                Descobrir Mais
              </a>
            </motion.div>
          </motion.div>
          <div className={styles.gridOverlay}></div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className={styles.section}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Por que escolher VitaBalance?
          </motion.h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className={styles.section}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Como funciona?
          </motion.h2>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className={styles.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className={styles.section}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            O que dizem nossos usuários
          </motion.h2>
          <div className={styles.testimonials}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className={styles.testimonial}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p>“{t.quote}”</p>
                <div className={styles.author}>
                  <span>{t.name}</span> • {t.role}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className={styles.finalCta}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pronto para transformar sua saúde?
          </motion.h2>
          <motion.a
            href="/imc"
            className={styles.ctaGlow}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Acessar Plataforma
          </motion.a>
        </section>

        <footer className={styles.footer}>
          <p>© 2025 VitaBalance — Inteligência corporal do futuro.</p>
        </footer>
      </div>
    </>
  );
}

const features = [
  {
    icon: "🧮",
    title: "Cálculo Instantâneo de IMC",
    desc: "Insira seu peso e altura e receba seu IMC em segundos, com base na fórmula oficial da OMS.",
  },
  {
    icon: "📊",
    title: "Classificação por Categoria",
    desc: "Entenda seu resultado com base nas faixas da Organização Mundial da Saúde: baixo peso, normal, sobrepeso e obesidade.",
  },
  {
    icon: "📱",
    title: "Totalmente Online e Gratuito",
    desc: "Nenhum download, cadastro ou pagamento. Acesse de qualquer dispositivo com internet.",
  },
  {
    icon: "🔒",
    title: "Sem Armazenamento de Dados",
    desc: "Seus dados nunca são salvos ou enviados ao servidor. Tudo é processado no seu próprio navegador.",
  },
];

const steps = [
  {
    number: "01",
    title: "Informe seu peso",
    desc: "Digite seu peso em quilogramas (kg).",
  },
  {
    number: "02",
    title: "Informe sua altura",
    desc: "Digite sua altura em centímetros (ex: 175).",
  },
  {
    number: "03",
    title: "Receba seu resultado",
    desc: "Veja seu IMC e a classificação correspondente segundo a OMS.",
  },
];

const testimonials = [
  {
    quote:
      "Usei para o meu trabalho de Biologia e funcionou perfeitamente! Fácil e rápido.",
    name: "Ana Clara",
    role: "Estudante do Ensino Médio",
  },
  {
    quote:
      "Finalmente um site simples que só calcula o IMC sem enrolação. Recomendo para projetos escolares!",
    name: "Lucas R.",
    role: "Aluno de Ciências",
  },
];
