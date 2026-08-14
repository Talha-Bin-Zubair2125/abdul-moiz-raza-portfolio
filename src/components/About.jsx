import { motion } from "framer-motion";
import { useTypingEffect } from "../hooks/useTypingEffect";

const headingPhrases = [
  "A little about my process",
  "Building robust applications",
];

export default function About() {
  const typedHeading = useTypingEffect(headingPhrases);

  return (
    <section
      id="about"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
        width: "100%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="glass"
        style={{
          padding: "clamp(24px, 5vw, 40px)",
          maxWidth: 840,
          width: "100%",
        }}
      >
        <div
          className="eyebrow"
          style={{
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "16px",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          About me
        </div>

        <h2
          style={{
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "var(--text)",
            fontFamily: "var(--font-display)",
          }}
        >
          <span style={{ position: "relative", display: "inline-flex" }}>
            {/* Invisible longest string to reserve the exact width and prevent jitter */}
            <span
              style={{ visibility: "hidden", whiteSpace: "nowrap" }}
              aria-hidden="true"
            >
              Engineering scalable solutions
            </span>

            {/* Left-aligned typing text inside the reserved space */}
            <span
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
              }}
            >
              <span>{typedHeading}</span>
              <span
                style={{
                  display: "inline-block",
                  width: "3px",
                  height: "1.1em",
                  background: "var(--gold-light, #d4af37)",
                  marginLeft: "6px",
                  animation: "blink 1s step-start infinite",
                  verticalAlign: "middle",
                }}
              />
            </span>
          </span>
        </h2>

        <p
          style={{
            color: "var(--text-muted)",
            lineHeight: 1.8,
            textAlign: "left",
          }}
        >
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
