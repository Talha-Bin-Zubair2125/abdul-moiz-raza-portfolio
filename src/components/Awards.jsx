import { motion } from "framer-motion";
import { FiAward, FiCheckCircle } from "react-icons/fi";
import { useTypingEffect } from "../hooks/useTypingEffect";
import Award from "../assets/Award.jpg";

const awardHeadings = [
  "Awards & Recognition",
  "Honors & Awards",
  "Achievements",
];

export default function Awards() {
  const typedHeading = useTypingEffect(awardHeadings);

  const detailsList = [
    "Recognized for sustained academic performance and overall merit across semesters.",
    "Awarded under the competitive Prime Minister's Youth Laptop Scheme initiative.",
    "Maintained a top-tier standing to meet the strict eligibility criteria set by the Higher Education Commission (HEC).",
  ];

  return (
    <section id="awards" style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "var(--glass-border)",
          }}
        />
        <div
          className="eyebrow"
          style={{ margin: 0, color: "var(--gold)", letterSpacing: "4px" }}
        >
          ACHIEVEMENTS
        </div>
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "var(--glass-border)",
          }}
        />
      </div>

      {/* Simple centered flex row — no hidden "sentinel" span reserving a
          fixed box width. That approach anchored the real text to the
          left edge of a box sized for the longest phrase, so any shorter
          phrase rendered off-center. This grows evenly from the middle
          instead, which is what "centered" actually needs to look like. */}
      <h2
        style={{
          marginBottom: "12px",
          color: "var(--text)",
          minHeight: "1.4em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        <span>{typedHeading}</span>
        <span
          style={{
            display: "inline-block",
            width: "3px",
            height: "0.8em",
            background: "var(--gold-light)",
            marginLeft: "6px",
            animation: "blink 1s step-start infinite",
            verticalAlign: "middle",
          }}
        />
      </h2>
      <p
        style={{
          color: "var(--text-muted)",
          marginBottom: "clamp(36px, 6vw, 56px)",
        }}
      >
        Dedication, perseverance, and a commitment to academic excellence.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="glass"
          style={{
            padding: "10px",
            borderRadius: "24px",
            marginBottom: "32px",
            display: "inline-block",
            maxWidth: "100%",
          }}
        >
          <img
            src={Award}
            alt="PM Youth Program Laptop Award"
            style={{
              width: "100%",
              maxWidth: "380px",
              height: "auto",
              aspectRatio: "3/4",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          />
        </div>

        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "18px",
            background:
              "linear-gradient(135deg, var(--gold-light), var(--gold))",
            color: "var(--text-dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            boxShadow: "0 8px 24px rgba(212, 162, 78, 0.3)",
          }}
        >
          <FiAward size={28} />
        </div>

        <h3 style={{ marginBottom: 14, color: "var(--text)" }}>
          PM Youth Program – Laptop Award (2025)
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            fontSize: 12,
            color: "var(--gold)",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          <span>Prime Minister's Youth Programme</span>
          <span
            style={{ fontSize: 18, lineHeight: 0, color: "var(--text-muted)" }}
          >
            •
          </span>
          <span>2025</span>
        </div>

        <p
          style={{
            color: "var(--text-muted)",
            lineHeight: 1.7,
            maxWidth: "600px",
            marginBottom: "32px",
          }}
        >
          Awarded high-specification laptop for outstanding academic performance
          and secure institutional merit positioning.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            width: "100%",
            maxWidth: "640px",
            textAlign: "left",
          }}
        >
          {detailsList.map((text, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}
            >
              <FiCheckCircle
                style={{
                  color: "var(--gold)",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
                size={20}
              />
              <span
                style={{
                  color: "var(--text-muted)",
                  fontSize: 14.5,
                  lineHeight: 1.6,
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
