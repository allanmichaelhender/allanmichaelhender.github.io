import { useState } from "react";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Background from "./components/Background";
import ContactModal from "./components/ContactModal";
import { projects } from "./data/projects";

function App() {
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const hoveredProject =
    projects.find((p) => p.id === hoveredProjectId) ?? null;

  return (
    <>
      <Background hoveredProject={hoveredProject} />
      <div
        style={{
          display: "flex",
          height: "100vh",
          overflow: "hidden",
          background: "transparent",
        }}
        onClick={() => setHoveredProjectId(null)}
      >
        <LeftPanel
          hoveredProjectId={hoveredProjectId}
          onHover={setHoveredProjectId}
        />
        <RightPanel
          hoveredProjectId={hoveredProjectId}
          onHover={setHoveredProjectId}
        />
      </div>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}

export default App;
