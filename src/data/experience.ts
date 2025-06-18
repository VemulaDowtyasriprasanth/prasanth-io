export const experience = [
  {
    title: "AI/ML Engineer",
    company: "Benchmark Gensuite (Contract)",
    location: "Platform Engineering and Operations",
    period: "Nov 2024 – Jun 2025",
    achievements: [
      {
        description: "Created a Supervisor Agent called Platform Agent using Langgraph and Langraph-supervisor Agent which calls sub-agents including FAF Agent (Fast Action Find) for OpenSearch index information retrieval and Help Me Agent for support request submission.",
        tools: "Langgraph, Langraph-supervisor, OpenSearch, Multi-agent Systems"
      },
      {
        description: "Refactored PSI classification logic to correctly classify risks including severe match, severe match total, fatal match, and fatal match total, enhancing data processing across three datasets (~300 texts).",
        tools: "Python, Excel, Risk Classification, Data Processing"
      },
      {
        description: "Architected an embedding-cached dual-agent, multi-layered system with Cognito-authenticated web UI, S3 storage with AWS Textract/Mistral OCR, AWS Bedrock Titan embeddings in OpenSearch Serverless, and configurable caching layer with LLM fallback.",
        tools: "AWS Cognito, S3, AWS Textract, AWS Bedrock, OpenSearch Serverless, CloudWatch"
      },
      {
        description: "Developed and deployed a production-grade Node.js microservice for vector embedding generation via AWS Bedrock with automatic chunking and multi-model support (Amazon Titan v2, Cohere multilingual).",
        tools: "Node.js, AWS Bedrock, Amazon Titan v2, Cohere, REST APIs"
      },
      {
        description: "Engineered an advanced Retrieval-Augmented Generation solution with KNN and ANN for semantic search, integrating with FAF Agent to improve search quality and contextual relevance.",
        tools: "RAG, KNN, ANN, Semantic Search, Vector Embeddings"
      },
      {
        description: "Developed multi-agent AI systems using the Crew AI framework with specialized agents for data analysis, financial monitoring, and automated reporting, increasing operational efficiency by 40%.",
        tools: "Crew AI, Multi-agent Systems, Automated Reporting, Data Analysis"
      },
      {
        description: "Delivered comprehensive project knowledge transfer to new team members, installed Elasticsearch, created index schema for risk data with 68 risk types and 156 categories, and developed interactive CLI tools for risk pattern analysis.",
        tools: "Elasticsearch, Risk Management, CLI Development, Knowledge Transfer"
      }
    ]
  },
  {
    title: "Generative Data Engineer",
    company: "Salesforce (Contract)",
    location: "Dallas, TX",
    period: "Jan 2024 – Nov 2024",
    achievements: [
      {
        description: "Deployed MuleApps in AnyPoint and integrated Salesforce data from GUS, ORG62, SUPPORTFORCE into AWS S3, cutting manual entry by 50%.",
        tools: "MuleApps, AnyPoint, AWS S3, Salesforce Integration"
      },
      {
        description: "Automated CPS property generation, increasing speed by 75% and reducing errors by 90%, and created Snowflake Tables in Raw and Struct Zones.",
        tools: "Snowflake, Data Modeling, Automation, CPS"
      },
      {
        description: "Optimized Airflow DAGs by creating YAML files and Ninja Templates to load data from S3 to Snowflake Tables, improving transfer efficiency by 30%.",
        tools: "Apache Airflow, YAML, Ninja Templates, ETL Pipelines"
      },
      {
        description: "Designed and deployed RAG pipelines for GenAI chatbots, improving contextual relevance by 35% using dynamic Router Query Engine with tool calling mechanisms.",
        tools: "RAG, GenAI, LLamaIndex, Query Engines, Chatbots"
      },
      {
        description: "Implemented an end-to-end pipeline from document ingestion and vector store indexing to query engine processing, optimizing retrieval performance and real-time interaction.",
        tools: "LLamaIndex, Vector Stores, Real-time Processing, Pipeline Development"
      },
      {
        description: "Built production-ready systems with advanced querying features, enhancing processing speed by 25% and ensuring scalability in a real-time environment.",
        tools: "Production Systems, Query Optimization, Scalability, Real-time Processing"
      },
      {
        description: "Developed JavaScript-based RAG web apps for intelligent, conversational data interactions, increasing user engagement by 35%.",
        tools: "JavaScript, RAG, Web Applications, Conversational AI"
      }
    ]
  },
  {
    title: "AI Engineer",
    company: "Amity Tech Corporation",
    location: "Frisco, TX",
    period: "Sep 2023 - Dec 2023",
    achievements: [
      {
        description: "Engineered an AI chatbot with GPT-3.5, LangChain, and Streamlit to improve client support operations, cutting client response times by 40%.",
        tools: "GPT-3.5, LangChain, Streamlit, AI Chatbots"
      },
      {
        description: "Deployed the chatbot Streamlit app on Hugging Face, delivering real-time, client-specific responses and boosting satisfaction by 35%.",
        tools: "Streamlit, Hugging Face, Python, Real-time Processing"
      },
      {
        description: "Implemented advanced semantic search systems using Cohere LLMs and AnnoyIndex for keyword and dense vector-based retrieval, enhancing efficiency by 35%.",
        tools: "Cohere LLMs, AnnoyIndex, Semantic Search, Vector Retrieval"
      },
      {
        description: "Developed embedding-based search pipelines and interactive search interfaces with reranking workflows, improving semantic similarity detection by 25%.",
        tools: "Embeddings, Search Pipelines, Reranking, Interactive Interfaces"
      },
      {
        description: "Engineered custom document search indexes for efficient retrieval and ranking, improving document processing by 30%.",
        tools: "Document Indexing, Search Optimization, Retrieval Systems"
      },
      {
        description: "Designed end-to-end question-answering frameworks to generate accurate answers from complex text archives, improving accuracy by 25%.",
        tools: "Question-Answering, Text Processing, Framework Design"
      }
    ]
  },
  {
    title: "Graduate Teaching Associate",
    company: "University of North Texas",
    location: "Denton, TX",
    period: "Aug 2022 - Sep 2023",
    achievements: [
      {
        description: "Tutored 200+ students in statistics, probability, and advanced computer science principles, boosting average grades by 15%.",
        tools: "Teaching, Statistics, Probability, Computer Science"
      },
      {
        description: "Led a wildfire spread prediction project, leveraging meteorological and topographical data to enhance next-day prediction accuracy by 20%.",
        tools: "Machine Learning, Meteorological Data, Predictive Modeling"
      },
      {
        description: "Utilized Python and machine learning in a Geo-spatial lab for satellite image processing, enhancing efficiency by 25%.",
        tools: "Python, QIS, GDAL, NumPy, Satellite Image Processing"
      }
    ]
  },
  {
    title: "Site Reliability Engineer Intern",
    company: "Honeywell",
    location: "Bangalore, India",
    period: "Jan 2022 - Jul 2022",
    achievements: [
      {
        description: "Developed a React.js application to streamline user onboarding and RBAC users for Kong, reducing manual effort by 25%.",
        tools: "React.js, Kong, RBAC, User Management"
      },
      {
        description: "Implemented agile practices and continuous integration, increasing team productivity by 65% and accelerating software release cycles.",
        tools: "Agile Methodologies, CI/CD, Team Productivity"
      },
      {
        description: "Enhanced system reliability and deployment efficiency using React.js and agile methodologies, contributing to a robust, scalable infrastructure.",
        tools: "React.js, System Reliability, Infrastructure Scaling"
      }
    ]
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, India",
    period: "Jun 2018 – Dec 2021",
    achievements: [
      {
        description: "Instructed students in Scratch and Flogarithm, resulting in a 30% increase in student engagement and proficiency in programming basics.",
        tools: "Scratch, Flogarithm, Programming Education"
      },
      {
        description: "Taught C, Python, Data Structures, Algorithms, and Computational Thinking, improving student performance and understanding.",
        tools: "C, Python, Data Structures, Algorithms, Computational Thinking"
      }
    ]
  }
];