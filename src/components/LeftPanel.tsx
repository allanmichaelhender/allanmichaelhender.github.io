import { motion } from "framer-motion";
import { projects } from "../data/projects";

interface LeftPanelProps {
  hoveredProjectId: string | null;
  onHover: (id: string | null) => void;
}

export default function LeftPanel({
  hoveredProjectId,
  onHover,
}: LeftPanelProps) {
  const name = "Allan Hender";
  const oneLiner = "Software Engineering, AI & ML";
  const email = "allanhender@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/allanhender/";
  const githubUrl = "https://github.com/allanmichaelhender";

  const hoveredProject = projects.find((p) => p.id === hoveredProjectId);
  const isContactHovered = hoveredProjectId === "contact";

  return (
    <div
      className="left-panel"
      style={{
        width: "80%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "48px",
        background: "transparent",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Center content - Name and 1-liner */}
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {hoveredProject ? (
          <motion.div
            key={hoveredProjectId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: "center", maxWidth: "600px" }}
          >
            <h2
              className="project-title"
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "16px",
                color: "#c084fc",
              }}
            >
              {hoveredProject.title}
            </h2>
            <p
              className="project-description"
              style={{ fontSize: "18px", color: "#d1d5db", lineHeight: 1.5 }}
            >
              {hoveredProject.fullDescription}
            </p>
            <div
              style={{
                marginTop: "24px",
                display: "flex",
                gap: "16px",
                justifyContent: "center",
              }}
            >
              <a
                href={hoveredProject.webAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "8px 16px",
                  background: "#9333ea",
                  color: "#fff",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                App
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              <a
                href={hoveredProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "8px 16px",
                  border: "1px solid #9333ea",
                  color: "#c084fc",
                  borderRadius: "4px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                Code
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                justifyContent: "center",
              }}
            >
              {hoveredProject.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "4px 10px",
                    background: "rgba(192, 132, 252, 0.1)",
                    border: "1px solid rgba(192, 132, 252, 0.3)",
                    borderRadius: "12px",
                    fontSize: "12px",
                    color: "#c084fc",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ) : isContactHovered ? (
          <motion.div
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: "center", maxWidth: "600px" }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "32px",
                color: "#c084fc",
              }}
            >
              Contact
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "center",
              }}
            >
              <a
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "18px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>{email}</span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "18px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "18px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#fff",
                  fontSize: "18px",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <path d="M3.21 10a9 9 0 0 1 17.58 0"></path>
                  <path d="M10.29 15a4 4 0 0 1 3.42 0"></path>
                </svg>
                <span>Balham, London, UK</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <>
            <motion.h1
              className="name-title"
              style={{
                fontSize: "56px",
                fontWeight: "500",
                marginBottom: "16px",
                letterSpacing: "0.01em",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {name}
            </motion.h1>
            <motion.p
              className="one-liner"
              style={{ fontSize: "24px", color: "#9ca3af" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {oneLiner}
            </motion.p>
          </>
        )}
      </motion.div>

      {/* Bottom - Social icons */}
      <motion.div
        className="social-icons"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div
          className="icon-row"
          style={{ display: "flex", gap: "24px", alignItems: "center" }}
        >
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href={`mailto:${email}`}
            style={{
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c084fc")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
        <div
          className="contact-row"
          style={{ display: "flex", gap: "24px", alignItems: "center" }}
        >
          <span
            className="divider"
            style={{ color: "#9ca3af", fontSize: "18px" }}
          >
            |
          </span>
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              onHover("contact");
            }}
            onMouseEnter={(e) => {
              onHover("contact");
              e.currentTarget.style.color = "#c084fc";
            }}
            style={{
              color: "#9ca3af",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "18px",
              transition: "color 0.2s",
            }}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
          >
            Contact
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
