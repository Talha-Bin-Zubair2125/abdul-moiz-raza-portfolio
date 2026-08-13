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
        ></div>
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
        ></div>
      </div>

      <h2
        style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          marginBottom: "12px",
          color: "var(--text)",
          minHeight: "2.4em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          <span
            style={{ visibility: "hidden", whiteSpace: "nowrap" }}
            aria-hidden="true"
          >
            Awards & Recognition
          </span>
          <span
            style={{
              position: "absolute",
              left: 0,
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
                background: "var(--gold-light)",
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
          marginBottom: "56px",
          fontSize: "15px",
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
              display: "block",
            }}
          />
        </div>

        <div
          style={{
            width: "60px",
            height: "60px",
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

        <h3
          style={{
            fontSize: "clamp(20px, 4vw, 26px)",
            marginBottom: "14px",
            color: "var(--text)",
          }}
        >
          PM Youth Program – Laptop Award (2025)
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            fontSize: "12px",
            color: "var(--gold)",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginBottom: "28px",
          }}
        >
          <span>Prime Minister's Youth Programme</span>
          <span
            style={{
              fontSize: "18px",
              lineHeight: 0,
              color: "var(--text-muted)",
            }}
          >
            •
          </span>
          <span>2025</span>
        </div>

        {/* Description Text */}
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "15px",
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
                  fontSize: "14.5px",
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
