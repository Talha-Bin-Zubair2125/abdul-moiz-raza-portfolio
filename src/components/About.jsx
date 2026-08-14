import { motion } from "framer-motion";
import { useTypingEffect } from "../hooks/useTypingEffect";

const headingPhrases = [
  "A little about my process",
  "Building robust applications",
  "Engineering scalable solutions",
];

export default function About() {
  const typedHeading = useTypingEffect(headingPhrases);

  return (
    <section
      id="about"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="glass"
        style={{ padding: "var(--card-pad)", maxWidth: 840, width: "100%" }}
      >
        <div className="eyebrow" style={{ letterSpacing: "2px" }}>
          About me
        </div>
        <h2
          style={{
            marginBottom: 24,
            minHeight: "2.4em",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span>{typedHeading}</span>
          <span
            style={{
              display: "inline-block",
              width: "3px",
              height: "1.1em",
              background: "var(--gold-light)",
              marginLeft: "6px",
              animation: "blink 1s step-start infinite",
              verticalAlign: "middle",
            }}
          />
        </h2>
        <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
          I am a detail-oriented Computer Science student and aspiring mobile
          developer with hands-on experience building production-grade
          applications end to end. My technical expertise spans mobile
          development using Flutter, Dart, Kotlin, and Jetpack Compose, as well
          as backend architecture with NestJS, Node.js, TypeScript, PostgreSQL,
          and Prisma. I have independently designed and built full-stack systems
          spanning authentication, real-time data sync, push notifications, and
          relational database architecture. With additional experience as a
          Software Quality Analyst at Finboa, I have a proven ability to
          collaborate in team environments, deliver production-ready
          applications, and contribute to enterprise-level projects.
        </p>
      </motion.div>
    </section>
  );
}
