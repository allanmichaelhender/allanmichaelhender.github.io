import { motion } from "framer-motion";
import type { Project } from "../data/projects";

interface ProjectItemProps {
  project: Project;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

export default function ProjectItem({
  project,
  isHovered,
  onHover,
}: ProjectItemProps) {
  return (
    <motion.div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        cursor: "pointer",
        transition: "background 0.2s",
        position: "relative",
        background: "transparent",
      }}
      onMouseEnter={() => onHover(project.id)}
      onClick={(e) => {
        e.stopPropagation();
        onHover(project.id);
      }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "8px",
          textAlign: "center",
        }}
        animate={{ color: isHovered ? "#c084fc" : "#ffffff" }}
      >
        {project.title}
      </motion.h3>
      <p
        style={{
          fontSize: "14px",
          color: "#9ca3af",
          textAlign: "center",
        }}
      >
        {project.briefDescription}
      </p>
    </motion.div>
  );
}
