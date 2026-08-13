import { motion } from "framer-motion";
import { FiMail, FiLinkedin } from "react-icons/fi";
import { useTypingEffect } from "../hooks/useTypingEffect";

const contactHeadings = [
  "Have a project in mind?",
  "Let's build something together",
  "Get in touch",
];

export default function Contact() {
  const typedHeading = useTypingEffect(contactHeadings);

  return (
    <section id="contact" style={{ paddingBottom: 140 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="glass"
        style={{ padding: "52px 44px", textAlign: "center" }}
      >
        <div
          className="eyebrow"
          style={{ justifyContent: "center", display: "flex" }}
        >
          Let's talk
        </div>
        <h2
          style={{
            fontSize: 34,
            marginBottom: 16,
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
        <p
          style={{ color: "var(--text-muted)", marginBottom: 28, fontSize: 16 }}
        >
          I'm currently open to freelance work and full-time roles. Based in
          Rawalpindi, Pakistan.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:greatglobian@gmail.com"
            className="btn"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <FiMail size={18} />
            Email
          </a>

          <a
            href="https://linkedin.com/in/abdul-moiz-raza-96b93a249"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <FiLinkedin size={18} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
