import SideQuestItem from "./SideQuestItem";
import { sideQuests } from "../data/sideQuests";

const vercelUrl = "https://ml-side-quests.vercel.app/";

export default function SideQuestsPanel() {
  const liveQuests = sideQuests.filter((q) => q.status === "live");

  return (
    <div
      className="side-quests-panel"
      style={{
        width: "16%",
        height: "100vh",
        background: "transparent",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "32px 24px 4px",
          textAlign: "center",
        }}
      >
        <a
          href={vercelUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "17px",
            fontWeight: 600,
            color: "#c084fc",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#a855f7")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#c084fc")}
        >
          ML Side Quests
          <svg
            width="12"
            height="12"
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
        <div
          style={{
            width: "100px",
            height: "1px",
            background: "#c084fc",
            margin: "12px auto 0",
          }}
        />
      </div>

      {/* Items */}
      {liveQuests.map((project, index) => (
        <div
          key={project.id}
          style={{ display: "flex", flex: 1, flexDirection: "column" }}
        >
          <SideQuestItem project={project} />
          {index < liveQuests.length - 1 && (
            <div
              style={{
                width: "80px",
                height: "1px",
                background: "#c084fc",
                alignSelf: "center",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
