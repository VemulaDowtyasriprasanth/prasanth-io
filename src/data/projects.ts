export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
  demoLink?: string;
  demoLabel?: string;
  image?: string;
  visual?: 'sandbox' | 'data' | 'agents' | 'reasoning' | 'voice' | 'vision' | 'automation';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "HR Resume Screening Assistant",
    description: "Advanced NLP-powered tool for streamlining HR resume review process, featuring automated analysis and matching with job descriptions. Built with Streamlit and Python.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Python", "NLP", "Streamlit", "Machine Learning"],
    link: "https://github.com/VemulaDowtyasriprasanth/HR-Resume-Screening-Assistance-Project"
  },
  {
    id: 2,
    title: "CSV Data Analysis Tool",
    description: "A tool to automate CSV data analysis with intuitive filters, aggregations, and data visualizations, enabling users to gain quick insights.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    technologies: ["Python", "Pandas", "Data Analysis"],
    link: "https://github.com/VemulaDowtyasriprasanth/CSV-Data-Analysis"
  },
  {
    id: 3,
    title: "Custom ChatGPT with LangChain",
    description: "Developed a ChatGPT-based system using LangChain and OpenAI's GPT-4 API for processing custom datasets with enhanced query response times.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    technologies: ["LangChain", "GPT-4", "OpenAI API", "Python"],
    link: "https://github.com/VemulaDowtyasriprasanth/Building-ChatGPT-with-Own-Data-"
  },
  {
    id: 4,
    title: "Disease Prediction System",
    description: "Machine learning-based system for predicting multiple diseases, providing early detection and health insights.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Machine Learning", "Python", "Healthcare AI", "Data Analysis"],
    link: "https://github.com/VemulaDowtyasriprasanth/Multiple-Disease-preidiction-"
  },
  {
    id: 5,
    title: "Chicken Disease Classification",
    description: "Deep learning project for automated classification of chicken diseases using computer vision and neural networks.",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Deep Learning", "Computer Vision", "TensorFlow", "CNN"],
    link: "https://github.com/VemulaDowtyasriprasanth/Chicken-Disease-Classification-Project"
  },
  {
    id: 6,
    title: "Wildfire Prediction System",
    description: "Predictive analytics system for wildfire occurrence and spread using environmental data and machine learning.",
    image: "https://images.unsplash.com/photo-1602615576820-ea14cf3e476a?auto=format&fit=crop&q=80&w=1000",
    technologies: ["Machine Learning", "Environmental Data", "Python", "Predictive Analytics"],
    link: "https://github.com/VemulaDowtyasriprasanth/WildfirePrediction"
  },
  {
    id: 7,
    title: "Agentic RAG with LlamaIndex",
    description: "Implementation of Retrieval-Augmented Generation using LlamaIndex for enhanced information retrieval and generation.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
    technologies: ["LlamaIndex", "RAG", "NLP", "AI"],
    link: "https://github.com/VemulaDowtyasriprasanth/Building-Agentic-RAG-with-LlamaIndex"
  },
  {
    id: 8,
    title: "ReAct Agent with GPT",
    description: "Building an AI agent using the ReAct framework with OpenAI's GPT models for enhanced reasoning and action.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
    technologies: ["OpenAI GPT", "ReAct", "AI Agents", "Python"],
    link: "https://github.com/VemulaDowtyasriprasanth/-Building-a-ReAct-Agent-with-OpenAI-s-GPT-Models"
  },
  {
    id: 9,
    title: "Customer Care Call Summary",
    description: "AI-powered system for automatically generating summaries from customer care calls using OpenAI's Whisper model.",
    image: "https://images.unsplash.com/photo-1518085250887-2f903c200fee?auto=format&fit=crop&q=80&w=1000",
    technologies: ["OpenAI Whisper", "Speech Recognition", "NLP", "Python"],
    link: "https://github.com/VemulaDowtyasriprasanth/Customer-Care-Call-Summary-Alert---Source-Code"
  },
  {
    id: 10,
    title: "Invoice Extraction Chatbot",
    description: "Automated system for extracting and processing information from invoices using OCR and natural language processing.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    technologies: ["OCR", "NLP", "Python", "Document Processing"],
    link: "https://github.com/VemulaDowtyasriprasanth/Invoice-Extraction-Chatbot"
  },
  {
    id: 11,
    title: "YouTube Script Writing Tool",
    description: "AI-powered tool for generating and optimizing YouTube video scripts using advanced language models.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1000",
    technologies: ["GPT", "Content Generation", "NLP", "Python"],
    link: "https://github.com/VemulaDowtyasriprasanth/Youtube-Script-Writing-Tool---Source-Code"
  },
  {
    id: 12,
    title: "Support Chat Bot",
    description: "AI-powered chat bot for websites with custom knowledge base integration and natural language understanding.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    technologies: ["ChatBot", "NLP", "Python", "Web Integration"],
    link: "https://github.com/VemulaDowtyasriprasanth/Support-Chat-Bot-For-Your-Website-"
  },
  {
    id: 13,
    title: "Full Stack Agent (E2B Sandbox)",
    description: "A remote execution environment for AI agents built with E2B Sandbox.",
    technologies: ["E2B", "Sandbox", "AI Agents"],
    visual: "sandbox",
    demoLink: "https://www.loom.com/share/a39a3bae7fb044278b36b563a5979657"
  },
  {
    id: 14,
    title: "Data Analyst Agent",
    description: "An autonomous SQL and Pandas agent using E2B for secure code execution.",
    technologies: ["E2B", "SQL", "Pandas", "AI Agents"],
    visual: "data",
    demoLink: "https://www.loom.com/share/35089723aa8b49fca2cb33f3a82a7e6f"
  },
  {
    id: 15,
    title: "Multi-Agent AI Demos",
    description: "Demonstrations of orchestration across 6+ interacting agents using CrewAI.",
    technologies: ["CrewAI", "Multi-Agent Systems", "Orchestration"],
    visual: "agents",
    demoLink: "https://www.youtube.com/watch?v=YvBAVClKy24"
  },
  {
    id: 16,
    title: "Reasoning Agent",
    description: "A Thought–Action–Executor loop for complex problem solving.",
    technologies: ["Reasoning", "AI Agents", "Agentic Workflows"],
    visual: "reasoning",
    demoLink: "https://www.youtube.com/watch?v=mad1gb5CXME&t=260s"
  },
  {
    id: 17,
    title: "CREW AI Multi-Agent Collection",
    description: "A curated collection of multi-agent workflows built with CrewAI.",
    technologies: ["CrewAI", "Multi-Agent Systems", "Workflows"],
    visual: "agents",
    link: "https://www.one-tab.com/page/-tFtJQI4QjeH3U6r57MnoA",
    linkLabel: "View collection"
  },
  {
    id: 18,
    title: "AI Data Analyst",
    description: "An autonomous data analysis application that executes SQL queries and Python code to visualize data through an interactive Streamlit interface.",
    technologies: ["Streamlit", "LangChain", "Pandas", "SQL", "Python"],
    visual: "data",
    link: "https://github.com/dv0331/Ai-Data-Analyst",
    demoLink: "https://ai-data-analyst1729.streamlit.app/",
    demoLabel: "Open app"
  },
  {
    id: 19,
    title: "Real-Time AI Coach",
    description: "The Socovia MVP uses low-latency audio processing and immediate feedback loops for real-time AI coaching.",
    technologies: ["Real-Time Audio", "AI Coaching", "Agentic Systems"],
    visual: "voice",
    link: "https://github.com/dv0331/real-time-ai-coach",
    demoLink: "https://real-time-ai-coach.onrender.com/",
    demoLabel: "Open app"
  },
  {
    id: 20,
    title: "Automatic Ticket Classification Tool",
    description: "A Streamlit application using SVM and Pinecone to automate ticket classification and reduce manual sorting by 70%.",
    technologies: ["SVM", "Pinecone", "Streamlit", "Classification"],
    link: "https://github.com/VemulaDowtyasriprasanth/Automatic-Ticket-Classification-Tool",
    visual: "automation"
  },
  {
    id: 21,
    title: "Deep Learning – MNIST & ASL",
    description: "Deep learning for image classification with MNIST and American Sign Language datasets.",
    technologies: ["Deep Learning", "Computer Vision", "MNIST", "ASL"],
    link: "https://github.com/VemulaDowtyasriprasanth/-Deep-Learning-for-Image-Classification-MNIST-ASL-Datasets",
    visual: "vision"
  },
  {
    id: 22,
    title: "LangChain Chat with CSV",
    description: "A LangChain project for chatting with CSV data.",
    technologies: ["LangChain", "CSV", "Conversational Data Analysis"],
    link: "https://github.com/VemulaDowtyasriprasanth/lanchain-chatwith-csv",
    visual: "data"
  },
  {
    id: 23,
    title: "RetireStrong",
    description: "A retirement-planning platform with a React landing page, personalized financial algorithms, secure data handling, and interactive visualizations.",
    technologies: ["React", "Financial Algorithms", "Data Visualization"],
    demoLink: "https://retire-strong-landing.vercel.app/",
    demoLabel: "Open app",
    visual: "data"
  }
];

export const portfolioResources = [
  { label: 'Portfolio PDF', url: 'https://drive.google.com/file/d/1kzEYWOrmpBb-ouGRnxrsmop5ThcRzPZ3/view?usp=sharing' },
  { label: 'VizHub', url: 'https://vizhub.com/VemulaDowtyasriprasanth/' },
];
