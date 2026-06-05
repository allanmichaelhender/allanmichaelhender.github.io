import { motion } from "framer-motion";
import { useState } from "react";
import type { SideQuest } from "../data/sideQuests";

interface SideQuestItemProps {
  project: SideQuest;
}

export default function SideQuestItem({ project }: SideQuestItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isLive = project.status === "live";

  const content = (
    <motion.div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        cursor: isLive ? "pointer" : "default",
        opacity: isLive ? 1 : 0.4,
        transition: "opacity 0.2s",
        position: "relative",
        background: "transparent",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        style={{
          fontSize: "14px",
          fontWeight: "bold",
          marginBottom: "8px",
          textAlign: "center",
        }}
        animate={{
          color: !isLive ? "#6b7280" : isHovered ? "#c084fc" : "#ffffff",
        }}
      >
        {project.title}
      </motion.h3>
      {!isLive && (
        <span
          style={{
            fontSize: "11px",
            color: "#6b7280",
            fontStyle: "italic",
            marginBottom: "8px",
          }}
        >
          Coming Soon
        </span>
      )}
      <p
        style={{
          fontSize: "13px",
          color: isLive ? "#9ca3af" : "#4b5563",
          textAlign: "center",
        }}
      >
        {project.briefDescription}
      </p>
    </motion.div>
  );

  if (isLive && project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", display: "flex", flex: 1 }}
      >
        {content}
      </a>
    );
  }

  return content;
}
