import { motion } from "framer-motion";
import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";
import { useTypingEffect } from "../hooks/useTypingEffect";

import {
  SiFlutter,
  SiDart,
  SiKotlin,
  SiAndroid,
  SiAndroidstudio,
  SiFirebase,
  SiNestjs,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiUnity,
} from "react-icons/si";
import { FiCheckSquare, FiServer } from "react-icons/fi";

const skillHeadings = [
  "My Skills",
  "Technical Expertise",
  "Tech Stack & Tools",
];

const groups = [
  {
    title: "Mobile Development",
    items: [
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "Kotlin", icon: <SiKotlin /> },
      { name: "Jetpack Compose", icon: <SiAndroid /> },
      { name: "Android Studio", icon: <SiAndroidstudio /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    title: "Backend & Database",
    items: [
      { name: "NestJS", icon: <SiNestjs /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "REST APIs", icon: <FiServer /> },
    ],
  },
  {
    title: "QA & Testing",
    items: [
      { name: "Automated Testing", icon: <FiCheckSquare /> },
      { name: "NUnit", icon: <FiCheckSquare /> },
    ],
  },
  {
    title: "Tools & Engines",
    items: [
      { name: "Unity 3D", icon: <SiUnity /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Visual Studio", icon: <DiVisualstudio /> },
    ],
  },
];

export default function Skills() {
  const typedHeading = useTypingEffect(skillHeadings);

  return (
    <section id="skills">
      <div className="eyebrow" style={{ textAlign: "center" }}>
        Technical expertise
      </div>
      <h2
        style={{
          marginBottom: 44,
          textAlign: "center",
          minHeight: "1.4em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            maxWidth: "100%",
          }}
        >
          <span style={{ visibility: "hidden", whiteSpace: "nowrap" }} aria-hidden="true">
            Technical Expertise
          </span>
          <span
            style={{
              position: "absolute",
              left: 0,
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              maxWidth: "100%",
              overflow: "hidden",
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
              }}
            />
          </span>
        </span>
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px, 5vw, 40px)" }}>
        {groups.map((group, gi) => (
          <div key={group.title}>
            <h3 style={{ marginBottom: 18 }}>{group.title}</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
                gap: "clamp(10px, 2.4vw, 16px)",
              }}
            >
              {group.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: gi * 0.05 + i * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="glass"
                  style={{
                    padding: "clamp(16px, 3vw, 22px) 10px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div style={{ fontSize: "clamp(26px, 5vw, 34px)", color: "var(--gold, #d4af37)" }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: 12.5, fontWeight: 600 }}>
                    {item.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
