import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useTypingEffect } from "../hooks/useTypingEffect";
import InternshipCertificate from "../assets/Internship_Certificate.jpg";

const experienceHeadings = [
  "Experience",
  "Where I've Worked", // This is the longest phrase
  "Professional Journey",
];

const experience = [
  {
    role: "Software Quality Analyst Intern",
    org: "Finboa — Rawalpindi, Pakistan",
    period: "Jul 2025 – Sep 2025",
    points: [
      "Worked with the QA team on manual and automated testing of enterprise-level web applications",
      "Built and maintained Playwright + NUnit automation scripts covering login flows, navigation, and data validation",
      "Tracked defects through the full bug lifecycle, collaborating with the dev team on timely fixes",
    ],
    certificateUrl: "#",
  },
];

export default function Experience() {
  const typedHeading = useTypingEffect(experienceHeadings);

  return (
    <section
      id="experience"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "60px 20px",
      }}
    >
      <div style={{ width: "100%", maxWidth: 840 }}>
        {/* Centered Eyebrow */}
        <div
          className="eyebrow"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: 600,
            marginBottom: "16px",
          }}
        >
          Where I've worked
        </div>

        {/* Centered Heading without jitter */}
        <h2
          style={{
            marginBottom: 32,
            display: "flex",
            justifyContent: "center",
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "var(--text)",
            fontFamily: "var(--font-display)",
          }}
        >
          {/* CSS Grid stack prevents layout shift and maintains true centering */}
          <span
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            {/* Invisible longest string + extra spacing buffer for the blinking cursor */}
            <span
              style={{
                visibility: "hidden",
                whiteSpace: "nowrap",
                gridArea: "1 / 1",
              }}
              aria-hidden="true"
            >
              Where I've Worked&nbsp;&nbsp;
            </span>

            {/* Centered active typing text */}
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                gridArea: "1 / 1",
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

        {/* Experience Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(14px, 3vw, 20px)",
          }}
        >
          {experience.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass"
              style={{
                padding: "clamp(22px, 4vw, 32px) clamp(18px, 4vw, 32px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 6,
                }}
              >
                <h3 style={{ margin: 0 }}>{job.role}</h3>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {job.period}
                </span>
              </div>

              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 14,
                  color: "var(--gold)",
                }}
              >
                {job.org}
              </div>

              <ul
                style={{
                  paddingLeft: 18,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {job.points.map((point) => (
                  <li
                    key={point}
                    style={{
                      fontSize: 14,
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {job.certificateUrl && (
                <div style={{ marginTop: 24 }}>
                  <a
                    href={InternshipCertificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      padding: "8px 18px",
                      fontSize: 13,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    View Certificate <FiExternalLink size={14} />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
