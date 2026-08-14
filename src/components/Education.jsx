import { motion } from "framer-motion";
import { useTypingEffect } from "../hooks/useTypingEffect";

const educationHeadings = [
  "Education",
  "Academic Background",
  "Learning Journey",
];

const education = [
  {
    degree: "BS Computer Science",
    school: "National University of Modern Languages (NUML), Rawalpindi",
    period: "2022 – 2026",
    cgpa: "3.29 / 4.00",
    details:
      "Focused on core computer science fundamentals, software engineering principles, and building practical full-stack and mobile applications.",
  },
];

export default function Education() {
  const typedHeading = useTypingEffect(educationHeadings);

  return (
    <section
      id="education"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="eyebrow">Academic background</div>
      <h2
        style={{
          marginBottom: 32,
          minHeight: "2.4em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        {education.map((ed, i) => (
          <motion.div
            key={ed.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="glass"
            style={{
              padding: "clamp(22px, 4vw, 28px) clamp(18px, 4vw, 32px)",
              maxWidth: "700px",
              width: "100%",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 8,
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--gold-light)",
                }}
              >
                {ed.period}
              </span>
              {ed.cgpa && (
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text)",
                    background: "rgba(255,255,255,0.08)",
                    padding: "2px 12px",
                    borderRadius: "12px",
                    whiteSpace: "nowrap",
                  }}
                >
                  CGPA: {ed.cgpa}
                </span>
              )}
            </div>
            <h3 style={{ marginBottom: 6 }}>{ed.degree}</h3>
            <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 12 }}>
              {ed.school}
            </p>
            {ed.details && (
              <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                {ed.details}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
