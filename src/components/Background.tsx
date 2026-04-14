import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/projects";

interface BackgroundProps {
  hoveredProject: Project | null;
}

export default function Background({ hoveredProject }: BackgroundProps) {
  return (
    <motion.div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "transparent",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dynamic background content will be added here based on hovered project */}
      <AnimatePresence>
        {hoveredProject &&
          hoveredProject.videos &&
          hoveredProject.videos.length > 0 && (
            <motion.div
              style={{ position: "absolute", inset: 0, overflow: "hidden" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <video
                src={hoveredProject.videos[0]}
                autoPlay
                muted
                loop
                style={{
                  position: "absolute",
                  top:
                    hoveredProject.videoZoom && hoveredProject.videoZoom > 100
                      ? `-${(hoveredProject.videoZoom - 100) / 2}%`
                      : 0,
                  left:
                    hoveredProject.videoZoom && hoveredProject.videoZoom > 100
                      ? `-${(hoveredProject.videoZoom - 100) / 2}%`
                      : 0,
                  width: hoveredProject.videoZoom
                    ? `${hoveredProject.videoZoom}%`
                    : "100%",
                  height: hoveredProject.videoZoom
                    ? `${hoveredProject.videoZoom}%`
                    : "100%",
                  objectFit: "cover",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: hoveredProject.videoDim
                    ? `rgba(0, 0, 0, ${hoveredProject.videoDim / 100})`
                    : "rgba(0, 0, 0, 0.5)",
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          )}
      </AnimatePresence>
      {hoveredProject &&
        (!hoveredProject.videos || hoveredProject.videos.length === 0) && (
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom right, rgba(192, 132, 252, 0.15), rgba(147, 51, 234, 0.05))",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
    </motion.div>
  );
}
