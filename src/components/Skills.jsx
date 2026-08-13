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
          fontSize: 34,
          marginBottom: 44,
          textAlign: "center",
          minHeight: "42px",
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
          }}
        >
          {/* Invisible sentinel reserves exact width to prevent layout jitter */}
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

      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {groups.map((group, gi) => (
          <div key={group.title}>
            <h3 style={{ fontSize: 17, marginBottom: 18 }}>{group.title}</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: 16,
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
                    padding: "22px 12px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div style={{ fontSize: 34, color: "var(--gold, #d4af37)" }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>
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