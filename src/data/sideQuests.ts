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
    briefDescription: "MobileNetV2 classifying plant diseases from leaf photos",
    tags: ["CV", "MobileNetV2", "ONNX", "Grad-CAM"],
    url: "https://ml-sidequests-01.streamlit.app",
    status: "live",
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis",
    briefDescription: "DistilBERT classifying review sentiment",
    tags: ["NLP", "DistilBERT", "Hugging Face", "Attention"],
    url: "https://ml-sidequests-02.streamlit.app",
    status: "live",
  },
  {
    id: "energy-earnings",
    title: "Energy Earnings Call Analyst",
    briefDescription: "LoRA-tuned TinyLlama analysing earnings calls",
    tags: ["GenAI", "LoRA", "PEFT", "EDGAR"],
    url: "https://ml-sidequests-03.streamlit.app",
    status: "live",
  },
  {
    id: "rag-pipeline",
    title: "RAG Retrieval Pipeline",
    briefDescription: "MiniLM + Cross-Encoder retrieving arXiv papers",
    tags: ["RAG", "FAISS", "Sentence-Transformers", "Reranking"],
    url: "https://ml-sidequests-04.streamlit.app",
    status: "live",
  },
  {
    id: "ticket-routing",
    title: "Support Ticket Routing",
    briefDescription: "TF-IDF / DistilBERT routing support tickets",
    tags: ["NLP", "Classification", "TF-IDF", "Zero-shot"],
    url: "https://ml-sidequests-05.streamlit.app",
    status: "live",
  },
  {
    id: "grid-balancing",
    title: "Energy Grid Load Balancing",
    briefDescription: "PPO agent balancing an energy grid",
    tags: ["RL", "PPO", "Stable Baselines3", "Gymnasium"],
    url: "https://ml-sidequests-06.streamlit.app",
    status: "live",
  },
];
