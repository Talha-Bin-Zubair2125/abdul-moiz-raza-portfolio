import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { useTypingEffect } from "../hooks/useTypingEffect";
import {
  SiFlutter,
  SiNestjs,
  SiPrisma,
  SiKotlin,
  SiFirebase,
  SiUnity,
  SiAndroid,
} from "react-icons/si";

const projectHeadings = [
  "Selected Works",
  "Featured Projects",
];

const projects = [
  {
    title: "GharYaar",
    tag: "Flutter · NestJS · Prisma",
    description:
      "Multi-vendor home services marketplace with JWT auth, role-based access, real-time push notifications for job status, and in-app chat between customers and providers.",
    icons: [
      <SiFlutter key="flutter" title="Flutter" />,
      <SiNestjs key="nestjs" title="NestJS" />,
      <SiPrisma key="prisma" title="Prisma" />,
    ],
  },
  {
    title: "Chess Room",
    tag: "Kotlin · Jetpack Compose · Firebase",
    description:
      "Real-time multiplayer chess app with MVVM architecture, live move sync via Firestore, an Elo-style rating engine, and AI-assisted move hints.",
    icons: [
      <SiKotlin key="kotlin" title="Kotlin" />,
      <SiAndroid key="android" title="Jetpack Compose" />,
      <SiFirebase key="firebase" title="Firebase" />,
    ],
  },
  {
    title: "GoGuide",
    tag: "Unity · ARCore · Firebase",
    description:
      "AR indoor mall navigation app featuring a live mini-map, shop selection UI, and real-time AR wayfinding markers.",
    icons: [
      <SiUnity key="unity" title="Unity" />,
      <SiFirebase key="firebase" title="Firebase" />,
    ],
  },
];

export default function Projects() {
  const typedHeading = useTypingEffect(projectHeadings);

  return (
    <section 
      id="projects"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "60px 20px"
      }}
    >
      <div style={{ width: "100%", maxWidth: 840 }}>
        <div 
          className="eyebrow"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: 600,
            marginBottom: "16px"
          }}
        >
          Selected work
        </div>

        <h2
          style={{
            marginBottom: 36,
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
            <span style={{ visibility: "hidden", whiteSpace: "nowrap" }} aria-hidden="true">
              Projects I'm proud of
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
                  background: "var(--gold-light)",
                  marginLeft: "6px",
                  animation: "blink 1s step-start infinite",
                  verticalAlign: "middle",
                }}
              />
            </span>
          </span>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 3vw, 24px)" }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass"
              style={{
                padding: "clamp(22px, 4vw, 36px)",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "16px",
                }}
              >
                <div>
                  <h3 style={{ marginBottom: 8, color: "var(--text)" }}>
                    {p.title}
                  </h3>
                  <div style={{ fontSize: 13, color: "var(--gold)", fontWeight: 600 }}>
                    {p.tag}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "14px",
                    color: "var(--text-muted)",
                    fontSize: "clamp(18px, 3vw, 22px)",
                  }}
                >
                  {p.icons}
                </div>
              </div>

              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  maxWidth: "800px",
                }}
              >
                {p.description}
              </p>

              <div style={{ marginTop: "8px" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    background: "rgba(255, 255, 255, 0.03)",
                    borderRadius: "8px",
                    border: "1px solid var(--glass-border)",
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    cursor: "not-allowed",
                  }}
                >
                  <FiGithub size={16} />
                  <span>GitHub | Coming Soon</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}