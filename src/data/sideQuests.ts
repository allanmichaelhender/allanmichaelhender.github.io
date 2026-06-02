export interface SideQuest {
  id: string;
  title: string;
  briefDescription: string;
  tags: string[];
  url: string | null;
  status: "live" | "coming-soon";
}

export const sideQuests: SideQuest[] = [
  {
    id: "plant-disease",
    title: "Plant Disease Classification",
    briefDescription:
      "MobileNetV2-based classifier",
    tags: ["CV", "MobileNetV2", "ONNX", "Grad-CAM"],
    url: "https://quest-01-cv-plant-disease.streamlit.app",
    status: "live",
  },
  {
    id: "sentiment-analysis",
    title: "Reviews Sentiment Analysis",
    briefDescription:
      "DistilBERT fine-tuned",
    tags: ["NLP", "DistilBERT", "Hugging Face", "Attention"],
    url: "https://quest-02-nlp-sentiment-analysis.streamlit.app",
    status: "live",
  },
  {
    id: "energy-earnings",
    title: "Energy Earnings Analyst",
    briefDescription:
      "",
    tags: ["GenAI", "LoRA", "PEFT", "EDGAR"],
    url: null,
    status: "coming-soon",
  },
  {
    id: "rag-pipeline",
    title: "RAG Retrieval Pipeline",
    briefDescription:
      "",
    tags: ["RAG", "FAISS", "Sentence-Transformers", "Reranking"],
    url: null,
    status: "coming-soon",
  },
  {
    id: "ticket-routing",
    title: "Support Ticket Routing",
    briefDescription:
      "",
    tags: ["NLP", "Classification", "TF-IDF", "Zero-shot"],
    url: null,
    status: "coming-soon",
  },
  {
    id: "grid-balancing",
    title: "Energy Grid Load Balancing",
    briefDescription:
      "Stable Baselines3 PPO agent",
    tags: ["RL", "PPO", "Stable Baselines3", "Gymnasium"],
    url: "https://quest-06-rl-grid-balancing.streamlit.app",
    status: "live",
  },
];
