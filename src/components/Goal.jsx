import { motion } from "framer-motion";
import { FiTarget, FiCompass, FiCode } from "react-icons/fi";
import { useTypingEffect } from "../hooks/useTypingEffect";

const goalHeadings = ["My Goals", "Purpose & Direction", "What Drives Me"];

const goals = [
  {
    icon: <FiTarget size={26} />,
    title: "Career Objective",
    text: "To deliver production-ready applications and contribute to enterprise-level projects within a progressive organization.",
  },
  {
    icon: <FiCompass size={26} />,
    title: "Vision",
    text: "To independently design and build comprehensive systems encompassing authentication, real-time data synchronization, and robust database architecture.",
  },
  {
    icon: <FiCode size={26} />,
    title: "Mission",
    text: "To bring a strong technical range and a fast-growth mindset to collaborative team environments.",
  },
];

export default function Goal() {
  const typedHeading = useTypingEffect(goalHeadings);

  return (
    <section id="goal">
      <div className="eyebrow" style={{ textAlign: "center" }}>
        Purpose & direction
      </div>
      <h2
        style={{
          fontSize: 34,
          marginBottom: 40,
          textAlign: "center",
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 22,
        }}
      >
        {goals.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="glass"
            style={{ padding: "30px 26px", textAlign: "center" }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: "rgba(0, 0, 0, 0.2)",
                color: "var(--gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px",
                border: "1px solid var(--glass-border)",
              }}
            >
              {g.icon}
            </div>
            <h3 style={{ fontSize: 18, marginBottom: 10 }}>{g.title}</h3>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                lineHeight: 1.6,
              }}
            >
              {g.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
