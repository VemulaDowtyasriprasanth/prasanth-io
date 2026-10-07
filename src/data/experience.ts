export const experience = [
  {
    title: "Enterprise AI Architect",
    company: "Toyota via NTT Data",
    location: "",
    period: "Feb 2026 – Present",
    achievements: [
      {
        description: "Enterprise GenAI Architecture: Architected reusable AI capabilities across five business domains—business intelligence, engineering, fleet, policy, and manufacturing—using Python, FastAPI, LangChain, LangGraph, and Amazon OpenSearch to support domain-specific retrieval and governed conversational workflows.",
        tools: "Python, FastAPI, LangChain, LangGraph, Amazon OpenSearch"
      },
      {
        description: "Citation Quality: Increased BIT citation-validation pass rates from 72% to 98%, a 26-percentage-point improvement, across 94 local end-to-end scenarios through authoritative source ordering, inline citation remapping, and URL normalization; validated citation behavior and cross-bot isolation with 141 focused regression tests.",
        tools: "Authoritative source ordering, Inline citation remapping, URL normalization"
      },
      {
        description: "Advanced RAG Engineering: Engineered context-aware retrieval pipelines combining intent classification, acronym resolution, hybrid lexical/vector search, temporal filtering, reciprocal-rank fusion, and source deduplication to support relevant, time-scoped answers from enterprise knowledge sources.",
        tools: "Intent classification, Acronym resolution, Hybrid lexical/vector search, Temporal filtering, Reciprocal-rank fusion, Source deduplication"
      },
      {
        description: "Modular AI Services: Decoupled retrieval orchestration from answer generation through modular Model Context Protocol (MCP) services for BIT and EIGcopilot, integrating Pinecone, environment-specific filtering, and citation-ready evidence; validated the local implementation with 173 automated tests and protocol checks across 34 tool catalogs.",
        tools: "Model Context Protocol (MCP), Pinecone"
      },
      {
        description: "Streaming Reliability: Strengthened long-running AI response handling through 15-second SSE heartbeats, bounded buffering, disconnect cancellation, and partial-answer preservation; validated the changes with 1,099 passing tests to support reliable streaming behavior.",
        tools: "SSE"
      },
      {
        description: "Knowledge-Source Integrity: Corrected source URL metadata across 846,787 indexed records and 31,805 unique URLs in GearPal’s development index, improving reference integrity while preserving rollback options through controlled alias changes and retained index copies.",
        tools: "Source URL metadata, Index aliases, Index copies"
      },
      {
        description: "AI Response Governance: Translated business and governance requirements into source-grounded response policies covering approved FAQs, sensitive-information restrictions, source currency, and citations; validated 100% exact-answer fidelity across 16 canonical and paraphrased DP Agent QA scenarios.",
        tools: "Response policies, Approved FAQs, Citations, QA scenarios"
      },
      {
        description: "Enterprise AI Enablement: Managed provisioning and distribution of 220+ OpenAI API keys and 660+ LangSmith API keys across development, QA, and production environments, alongside LangSmith member and workspace administration, to support cross-team AI development and evaluation.",
        tools: "OpenAI API, LangSmith"
      },
      {
        description: "Application Integration: Coordinated approximately 15 App2App access requests with GAC Operations, maintaining access documentation and tracking application requirements through the request process to support enterprise application integrations.",
        tools: "App2App access requests, Access documentation"
      },
      {
        description: "AWS Release Governance: Strengthened release controls through staged configuration validation, version-controlled S3 promotion, integrity checks, and multi-region readiness assessments; defined 32 DevOps actions and 19 cutover gates covering ECS, networking, IAM, configuration, acceptance, and rollback.",
        tools: "AWS, S3, ECS, IAM"
      }
    ]
  },
  {
    title: "Founding AI Platform Engineer",
    company: "Maxmodus",
    location: "Dallas, TX",
    period: "Jun 2025 – Feb 2026",
    achievements: [
      {
        description: "Designed and deployed Bedrock Agents with action groups and OpenAPI tools to classify emails and generate drafts, integrating with the existing Flask RBAC app and Gmail pipeline; lifted draft-acceptance rate by 73% across 5 pilot users.",
        tools: "Amazon Bedrock Agents, Action Groups, OpenAPI, Flask, Gmail API"
      },
      {
        description: "Implemented RAG via Bedrock Knowledge Bases (Amazon OpenSearch Serverless / pgvector on Aurora) over historical threads and SOPs, enabling context-aware drafting and intent detection with 120ms median retrieval latency.",
        tools: "Bedrock Knowledge Bases, Amazon OpenSearch Serverless, Amazon Aurora pgvector"
      },
      {
        description: "Built serverless orchestration for agent calls using API Gateway → Lambda → Step Functions → SQS/SNS, processing 2,200+ messages/day with p95 latency 2.8s end-to-end.",
        tools: "Amazon API Gateway, AWS Lambda, AWS Step Functions, Amazon SQS, Amazon SNS"
      },
      {
        description: "Added guardrails for Amazon Bedrock (PII redaction, topic filters, toxicity thresholds) and confidence gating at 0.8; reduced hallucination-related rework by 62%.",
        tools: "Amazon Bedrock Guardrails, Safety Filters, Confidence Thresholding"
      },
      {
        description: "Optimized cost & performance with model routing (e.g., Claude Haiku for triage, Sonnet for final drafts), prompt compression, and response streaming; cut token spend ~47% without quality loss.",
        tools: "Claude Haiku, Claude Sonnet, Prompt Compression, Streaming"
      },
      {
        description: "Instrumented full observability using CloudWatch EMF metrics, log correlation, and X-Ray tracing for agent tool invocations; created usage dashboards and alarms on error rate, latency, and 30 req/min token burn limits.",
        tools: "Amazon CloudWatch EMF, Log Correlation, AWS X-Ray, Dashboards, Alarms"
      },
      {
        description: "Productionized MLOps with IaC (AWS CDK/Terraform), per-env stacks, blue/green agent versions, and A/B testing across models; rolled out safe canaries to 20% of traffic before global promotion.",
        tools: "AWS CDK, Terraform, Blue/Green Deployments, A/B Testing"
      },
      {
        description: "Hardened security with VPC endpoints/PrivateLink for Bedrock, KMS envelope encryption for secrets via Fernet, fine-grained IAM roles for action groups, and S3 bucket policies; achieved SOC2 Type II alignment.",
        tools: "VPC Endpoints, AWS PrivateLink, AWS KMS, Fernet, IAM, S3 Bucket Policies, SOC2"
      },
      {
        description: "Extended multi-tenant design: per-profile Knowledge Bases, domain rules, vendor/customer lists, and agent guardrail presets; enforced access via org/unit-scoped RBAC supporting admin/user roles.",
        tools: "Multi-tenant Architecture, RBAC, Bedrock Knowledge Bases"
      },
      {
        description: "Created evaluation harness (golden-set prompts, offline replay of Gmail threads, rubric scoring) to track precision/recall and draft-edit distance; improved intent F1 from 0.68→0.91.",
        tools: "Evaluation Harness, Golden Set, Offline Replay, Precision/Recall, F1"
      },
      {
        description: "Set up data lake ingestion: Gmail History API deltas → S3 (Parquet) → Glue catalog → Athena for auditability and ad-hoc analytics feeding the Chart.js dashboard processing 286 messages in 38s.",
        tools: "Gmail History API, Amazon S3, Parquet, AWS Glue, Amazon Athena, Chart.js"
      },
      {
        description: "Implemented reliability patterns: idempotent Lambdas, exponential backoff with DLQs (5 retry max), SQS FIFO for thread order, and Step Functions retries/compensation for tool failures.",
        tools: "Idempotency, Dead-letter Queues, SQS FIFO, Step Functions Retries"
      },
      {
        description: "Developed template mining + delegation rules backed by agent tools: mined user feedback into reusable templates after 3 similar edits; auto-forwarded to owners when confidence < 0.8 or SLA breached.",
        tools: "Template Mining, Delegation Rules, Rule Engine"
      },
      {
        description: "Established compliance & lifecycle: 90-day retention in S3 with lifecycle transitions, redaction for DSAR requests, and audit logs via CloudTrail/Lake Formation.",
        tools: "S3 Lifecycle Policies, DSAR, AWS CloudTrail, AWS Lake Formation"
      },
      {
        description: "Documented and trained teams on prompt patterns, agent tool interfaces, and on-call playbooks; reduced mean time to mitigation by 45%.",
        tools: "Documentation, Prompt Patterns, Tool Interfaces, On-call Playbooks"
      }
    ]
  },
  {
    title: "AI Platform Solutions Architect",
    company: "Ao Partners / Sensor Technologies",
    location: "Remote",
    period: "Nov 2024 – Feb 2026",
    achievements: [
      {
        description: "Architected an end-to-end cloud-native resume management system by designing serverless microservices with Azure Functions and Python Flask, integrating automated CI/CD pipelines via Azure DevOps, achieving 99.9% uptime and 60% cost reduction.",
        tools: "Azure Functions, Python Flask, Azure DevOps, CI/CD, Serverless"
      },
      {
        description: "Implemented AI-driven metadata extraction by orchestrating Azure OpenAI GPT models within HTTP-triggered Azure Functions and leveraging textract, reducing manual data entry by 95% and boosting search relevance by 40%.",
        tools: "Azure OpenAI, GPT models, Azure Functions, Textract, AI Metadata Extraction"
      },
      {
        description: "Developed semantic search capabilities using Azure Cognitive Search indexers and vector embeddings (text-embedding-ada-002) with HNSW algorithm, enabling sub-second retrieval across 10,000+ documents.",
        tools: "Azure Cognitive Search, Vector Embeddings, HNSW Algorithm, Semantic Search"
      },
      {
        description: "Engineered duplicate detection workflows by applying fuzzy matching with thefuzz library and cosine similarity on embeddings, preventing data redundancy and saving 20+ hours/week of manual review.",
        tools: "Fuzzy Matching, Cosine Similarity, TheFuzz Library, Duplicate Detection"
      },
      {
        description: "Orchestrated multi-format document processing by configuring Blob Storage triggers and Flask-APScheduler jobs for PDF, DOCX, and DOC parsing using PyPDF2, python-docx, and mammoth, achieving 98% text-extraction accuracy.",
        tools: "Azure Blob Storage, Flask-APScheduler, PyPDF2, python-docx, mammoth"
      },
      {
        description: "Secured user authentication and session management by integrating MSAL with Azure Active Directory and Flask-Login, enforcing OAuth/OpenID Connect flows for multi-tenant access control and enhancing platform compliance.",
        tools: "MSAL, Azure Active Directory, Flask-Login, OAuth, OpenID Connect"
      },
      {
        description: "Built RESTful APIs for resume upload, search, and metadata retrieval via Azure Functions and Flask-WTF, optimizing average API response times to <200 ms for 95% of requests.",
        tools: "RESTful APIs, Azure Functions, Flask-WTF, API Optimization"
      },
      {
        description: "Engineered geographic search features by integrating Azure Maps geocoding services and using pandas + NumPy for distance calculations, increasing location-based candidate discovery by 25%.",
        tools: "Azure Maps, Geocoding, Pandas, NumPy, Geographic Search"
      },
      {
        description: "Optimized NoSQL storage in Azure Cosmos DB by designing collections with /resumeid partition keys and enabling auto-scale throughput, reducing query latency by 30% under peak load.",
        tools: "Azure Cosmos DB, NoSQL, Partition Keys, Auto-scale Throughput"
      },
      {
        description: "Designed and implemented responsive frontend components with Flask, Bootstrap, Jinja2, and vanilla JavaScript, delivering in-browser PDF previews and conflict-resolution UIs that improved user engagement by 35%.",
        tools: "Flask, Bootstrap, Jinja2, JavaScript, Frontend Development"
      }
    ]
  },
  {
    title: "Lead AI Solutions Architect",
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
    title: "AI Integration Engineer",
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
    title: "AI Implementation Specialist",
    company: "Amity Tech Corporation",
    location: "Frisco, TX",
    period: "Sep 2023 – Dec 2023",
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
    title: "Research Solutions Engineer",
    company: "Dept. of CSE, University of North Texas",
    location: "Denton, TX",
    period: "Aug 2022 – Sep 2023",
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
    title: "DevOps & Platform Intern",
    company: "Honeywell",
    location: "Bangalore, India",
    period: "Jan 2022 – Jul 2022",
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
    title: "Technical Instructor",
    company: "Dept. of CSE, Amrita Vishwa Vidyapeetham",
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
  },
  {
    title: "Co-Founder & CTO",
    company: "RetireStrong",
    location: "",
    period: "2025",
    achievements: [
      {
        description: "End-to-End Product Build: Built a patent-pending fintech platform from the ground up, handling everything from the React landing page to the backend logic.",
        tools: "React"
      },
      {
        description: "Algorithm Development: Engineered the core financial algorithms to provide personalized retirement planning, integrating secure data handling and user-friendly visualizations.",
        tools: "Financial algorithms, Secure data handling, Data visualization"
      }
    ]
  },
  {
    title: "Lead Engineer & Architect",
    company: "Socovia (MVP)",
    location: "",
    period: "2025",
    achievements: [
      {
        description: "Real-Time AI Coaching: Architected and built the MVP for \"Socovia,\" a Real-Time AI Coach, utilizing low-latency audio processing and immediate feedback loops to simulate human coaching interactions.",
        tools: "Low-latency audio processing, Feedback loops"
      },
      {
        description: "Live Deployment: Successfully deployed the MVP (Source: Real-Time AI Coach), demonstrating proficiency in handling real-time data streams and agentic responses.",
        tools: "Real-time data streams, Agentic responses"
      }
    ]
  },
  {
    title: "Creator & Developer",
    company: "AI Data Analyst Platform",
    location: "",
    period: "2025",
    achievements: [
      {
        description: "Agentic Workflow Design: Developed a fully autonomous AI Data Analyst (Live: AI Data Analyst) capable of executing SQL queries and Python code to visualize data without human intervention.",
        tools: "SQL, Python"
      },
      {
        description: "Tech Stack: Utilized Streamlit, LangChain, and Pandas to create an interactive interface that bridges the gap between raw data and actionable business insights.",
        tools: "Streamlit, LangChain, Pandas"
      }
    ]
  }
];
