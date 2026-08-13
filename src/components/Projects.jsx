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
  "Projects I'm proud of",
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
    <section id="projects">
      <div className="eyebrow">Selected work</div>
      <h2
        style={{
          fontSize: 34,
          marginBottom: 36,
          minHeight: "42px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          {/* Invisible sentinel reserves exact width to prevent layout jitter */}
          <span style={{ visibility: "hidden", whiteSpace: "nowrap" }} aria-hidden="true">
            Projects I'm proud of
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
                height: "24px",
                background: "var(--gold-light)",
                marginLeft: "6px",
                animation: "blink 1s step-start infinite",
              }}
            />
          </span>
        </span>
      </h2>

      {/* Changed to flex column for one project per line */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass"
            style={{
              padding: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* Header: Title, Tags, and Tech Icons */}
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
                <h3
                  style={{
                    fontSize: 24,
                    marginBottom: 8,
                    color: "var(--text)",
                  }}
                >
                  {p.title}
                </h3>
                <div
                  style={{
                    fontSize: 13,
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  {p.tag}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                  color: "var(--text-muted)",
                  fontSize: "22px",
                }}
              >
                {p.icons}
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                color: "var(--text-muted)",
                lineHeight: 1.7,
                fontSize: 15,
                maxWidth: "800px",
              }}
            >
              {p.description}
            </p>

            {/* GitHub Coming Soon Badge */}
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
    </section>
  );
}