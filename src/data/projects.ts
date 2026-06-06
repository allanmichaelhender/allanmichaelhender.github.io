export interface Project {
  id: string;
  title: string;
  briefDescription: string;
  fullDescription: string;
  images: string[];
  videos?: string[];
  videoZoom?: number;
  videoDim?: number;
  webAppUrl: string;
  repoUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "vantage-point",
    title: "Vantage Point",
    briefDescription: "ML & AI Tennis Predictions",
    fullDescription:
      "Real-time tennis predictions. Powered by Machine Learning (XGBoost, PyTorch) with AI assistance from Gemini. Evaluated against live and historical betting odds to quantify, compare and asses model performance.",
    images: [],
    videos: ["/tennis-footage-trimmed.mp4"],
    videoZoom: 130,
    videoDim: 65,
    webAppUrl: "https://vantage-point.ddnsfree.com/",
    repoUrl: "https://github.com/allanmichaelhender/Vantage-Point-ML",
    tags: [
      "FastAPI",
      "XGBoost",
      "PyTorch",
      "Gemini",
      "PostgreSQL",
      "SQLAlchemy",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "GCP",
    ],
  },
  {
    id: "guinea-pig-portfolio",
    title: "Guinea Pig Portfolio",
    briefDescription: "AI & ML Augmented Investing",
    fullDescription:
      "Modelling investment portfolios, whilst leveraging AI and Machine Learning to aid in portfolio analysis. Combining computational modelling, AI orchestration, and ML techniques (KMeans clustering, PCA) to generate insights and recommendations.",
    images: [],
    videos: ["/guinea-pig-footage-trimmed.mp4"],
    videoZoom: 100,
    videoDim: 75,
    webAppUrl: "https://guinea-pig-portfolio.ddnsfree.com/",
    repoUrl: "https://github.com/allanmichaelhender/guniea-pig-v2",
    tags: [
      "Django",
      "Django Ninja",
      "RAG",
      "LangGraph",
      "Grok",
      "Django Q2",
      "Redis",
      "PostgreSQL",
      "pgvector",
      "React",
      "Vite",
      "TypeScript",
      "Docker",
      "AWS",
    ],
  },
  // {
  //   id: "hybrid-hour",
  //   title: "Hybrid Hour",
  //   briefDescription: "AI-Powered Coach",
  //   fullDescription:
  //     "AI-powered training plans for hybrid athletes. Leveraging the versatility of LLMs (Llama 3.3) to interpret user preferences and suggestions, select applicable workouts from our curated library, before applying any finishing touches and generating coherent training plans.",
  //   images: [],
  //   videos: ["/hybrid-footage-trimmed.mp4"],
  //   videoZoom: 100,
  //   videoDim: 75,
  //   webAppUrl: "https://hybrid-hour.ddnsfree.com/",
  //   repoUrl: "https://github.com/allanmichaelhender/hybrid_AI_coach",
  //   tags: [
  //     "FastAPI",
  //     "LangGraph",
  //     "Llama 3.3",
  //     "RAG",
  //     "PostgreSQL",
  //     "SQLAlchemy",
  //     "pgvector",
  //     "React",
  //     "Vite",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Docker",
  //     "GCP",
  //   ],
  // },
  {
    id: "analysing-allan",
    title: "Analysing Allan",
    briefDescription: "AI/MCP Powered Activity Analysis",
    fullDescription:
      "An AI-powered Garmin activity analysis platform. Syncs workouts from Garmin Connect, analyses heart rate profiles with Anthropic Claude Vision, and exposes tools via a FastMCP server for AI agents (ZeroClaw) to query and explore training data.",
    images: [],
    videos: ["/hybrid-footage-trimmed.mp4"],
    videoZoom: 100,
    videoDim: 75,
    webAppUrl: "https://garmin-analysis-zeroclaw.vercel.app/",
    repoUrl: "https://github.com/allanmichaelhender/garmin-analysis-zeroclaw",
    tags: [
      "FastAPI",
      "FastMCP",
      "Anthropic",
      "Claude",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "React",
      "Vite",
      "Tailwind",
      "Docker",
      "ZeroClaw",
      "Vercel",
    ],
  },
  {
    id: "ml-side-quests",
    title: "Side Quests",
    briefDescription: "ML & AI Industry Applications",
    fullDescription:
      "Standalone ML and AI applications spanning Computer Vision (MobileNetV2), NLP (DistilBERT), GenAI (TinyLlama 1.1B + LoRA fine-tuning), RAG (MiniLM + Cross-Encoder), multi-model support ticket classification (TF-IDF + DistilBERT + Augmented LLM), and RL (PPO). Each quest is a self-contained exploration of a concept, dataset, or technique.",
    images: [],
    videos: ["/side-quests-footage.mp4"],
    videoZoom: 100,
    videoDim: 10,
    webAppUrl: "https://ml-side-quests.vercel.app/",
    repoUrl: "https://github.com/allanmichaelhender",
    tags: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "Transformers",
      "OpenCV",
      "DistilBERT",
      "TinyLlama",
      "LoRA",
      "MobileNetV2",
      "RL",
      "PPO",
    ],
  },
];
