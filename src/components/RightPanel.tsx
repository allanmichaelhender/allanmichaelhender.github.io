import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../data/projects";

interface RightPanelProps {
  hoveredProjectId: string | null;
  onHover: (id: string | null) => void;
}

export default function RightPanel({
  hoveredProjectId,
  onHover,
}: RightPanelProps) {
  return (
    <div
      className="right-panel"
      style={{
        width: "20%",
        height: "100vh",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {projects.map((project, index) => (
        <React.Fragment key={project.id}>
          <ProjectItem
            project={project}
            isHovered={hoveredProjectId === project.id}
            onHover={onHover}
          />
          {index < projects.length - 1 && (
            <div
              style={{
                width: "120px",
                height: "1px",
                background: "#c084fc",
                alignSelf: "center",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
