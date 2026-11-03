/**
 * RESUME & PORTFOLIO DOCUMENTS
 * ---------------------------------------------------------
 * Paste your Google Drive share links below.
 * In Google Drive: right-click the file -> Share -> "Anyone with the link"
 * -> Copy link, then paste it here between the quotes.
 * The "View" button opens this link directly. The "Download" button is
 * derived automatically from it (see driveDownloadUrl in script.js).
 * ---------------------------------------------------------
 */
const RESUME_URL = "https://drive.google.com/drive/folders/1Bxk1rD9UgqiMxLXPP1_EdBFnv7wupz6F?usp=sharing";
const PORTFOLIO_URL = "https://drive.google.com/drive/folders/15vjme4nQXJccRmWjtB4EdARrkdYv58s1?usp=sharing";

/**
 * PROJECT DATA
 * ---------------------------------------------------------
 * Single source of truth for Featured Projects + case studies.
 * Only fill in fields with real, verifiable information.
 * Leave a field as an empty string "" or empty array [] if the
 * information isn't available yet; empty sections are
 * automatically hidden in the case study modal (see script.js).
 *
 * To add/edit a project: edit this file only. No HTML/CSS changes needed.
 * ---------------------------------------------------------
 */

const FEATURED_PROJECTS = [
  {
    id: "customer-support-agent",
    title: "Agentic Customer Support System",
    date: "Sep 2026 - Nov 2026",
    type: "Individual",
    shortDescription: "An AI-powered customer support agent that handles customer inquiries, retrieves e-commerce order information, and answers follow-up questions through a conversational API.",
    cardTech: ["Python", "LangChain", "LangGraph", "FastAPI"],
    metric: "",
    overview: "An AI-powered customer support system that helps customers resolve e-commerce-related inquiries through natural-language conversations. Built with LangGraph and FastAPI, the agent uses an LLM-driven workflow and Olist e-commerce data to retrieve customer, order, product, and shipping information while validating queries against its customer support scope.",
    problem: "Customer support teams often handle repetitive inquiries about orders, products, and shipping status. Manually looking up information across multiple datasets can be time-consuming, while general-purpose LLMs may produce unsupported answers or respond to unrelated queries.",
    approach: "The system uses LangGraph to orchestrate an agent-and-tools workflow. An LLM interprets customer inquiries and determines when to retrieve information through custom tools connected to the Olist dataset. Scope validation helps reject unrelated queries, while conversation state supports contextual follow-up questions. FastAPI exposes the agent as an API, and LangSmith provides tracing and observability.",
    architecture: [
      "Customer submits an inquiry through the API",
      "Scope validation checks whether the query is relevant to customer support",
      "LangGraph orchestrates the agent workflow",
      "LLM interprets the inquiry and determines whether tools are needed",
      "Custom tools retrieve relevant customer and order information from Olist datasets",
      "Agent processes tool results and generates a natural-language response",
      "Conversation state maintains context for follow-up questions",
      "FastAPI returns the response to the client"
    ],
    keyFeatures: [
      "AI-Powered Customer Support",
      "Agentic Workflow with LangGraph",
      "Customer and Order Information Retrieval",
      "Tool Calling and Data Retrieval",
      "Scope Validation",
      "Conversational Follow-Up Support",
      "REST API with FastAPI",
      "LLM Tracing and Observability"
    ],
    technicalImplementation: "LangGraph orchestrates the agent and tool execution cycle, while LangChain provides LLM integration through OpenRouter-hosted GPT-4o-mini. Custom tools retrieve customer, order, product, and shipping-related information from Olist CSV datasets using Pandas. Scope validation handles out-of-scope inquiries, and conversation state enables contextual follow-up interactions. FastAPI exposes the workflow through REST endpoints, LangSmith supports tracing and monitoring, and Docker Compose simplifies containerized execution.",
    challenges: "Designing a reliable agent workflow required handling tool execution, query scope validation, and conversational context. One important challenge was ensuring that the agent could distinguish supported customer service inquiries from unrelated questions while maintaining context across follow-up interactions.",
    results: "Implemented a containerized customer support API with LangGraph-based agent orchestration, custom e-commerce data retrieval tools, scope validation, conversational follow-up support, and LangSmith observability. The application can be run locally or through Docker Compose.",
    techStack: [
      "Python",
      "LangChain",
      "LangGraph",
      "OpenRouter",
      "GPT-4o-mini",
      "FastAPI",
      "Pandas",
      "Pydantic",
      "LangSmith",
      "Docker",
      "Docker Compose"
    ],
    links: {
      github: "https://github.com/naufalsutrisna/customer-support-agent",
      demo: "",
      publication: ""
    }
  },
  {
    id: "ecommerce-agent",
    title: "E-Commerce Data Analyst Agent",
    date: "Apr 2026 - Jun 2026",
    type: "Individual",
    shortDescription: "AI agent that turns natural-language business questions into SQL, then returns executive summaries and insights, so you don't need to write SQL by hand.",
    cardTech: ["Python", "LangChain", "DuckDB", "Streamlit"],
    metric: "", // TODO: add a quantified result if available (e.g. query accuracy, adoption)
    overview: "An AI-powered E-Commerce Data Analyst Agent that lets users analyze business performance through natural language. The system translates questions into SQL, retrieves data, and generates business insights and executive summaries through a conversational interface, removing the need for manual SQL querying.",
    problem: "", // TODO
    approach: "User questions are validated, converted into SQL by an LLM-driven LangChain pipeline, executed against a DuckDB engine, and the resulting data is summarized back into plain-language insights.",
    architecture: [
      "User submits a question in natural language",
      "Question validation",
      "SQL generation (LLM + LangChain)",
      "Query execution on DuckDB",
      "Insight generation from query results",
      "Executive summary returned to the user"
    ],
    keyFeatures: [
      "Natural Language to SQL Generation",
      "Executive Summary Generation",
      "Conversational Business Analytics",
      "Multi-Table Data Querying",
      "Interactive Web Interface"
    ],
    technicalImplementation: "Streamlit handles the conversational front end; LangChain orchestrates the natural-language-to-SQL pipeline via OpenRouter-hosted LLMs; DuckDB serves as an embedded analytical query engine over the Olist e-commerce dataset; Pandas/NumPy handle post-query processing.",
    challenges: "", // TODO
    results: "", // TODO: add measurable outcome if available
    techStack: ["Python", "SQL", "LangChain", "OpenRouter", "Pandas", "NumPy", "DuckDB", "Streamlit", "Docker", "Jupyter Notebook"],
    links: {
      github: "https://github.com/naufalsutrisna/ecommerce-data-analyst-agent",
      demo: "",
      publication: ""
    }
  },
  {
    id: "mlops-pipeline",
    title: "MLOps Project for Heart Attack Detection",
    date: "Oct 2024 - Dec 2024",
    type: "Team",
    shortDescription: "End-to-end MLOps pipeline automating training, deployment, and monitoring of a heart attack detection model in production.",
    cardTech: ["Docker", "MLflow", "Grafana", "PostgreSQL"],
    metric: "0.852 model accuracy (live-tracked)",
    overview: "An end-to-end MLOps pipeline to automate training, deployment, monitoring, and management of machine learning models in production. It streamlines the ML lifecycle through containerization, experiment tracking, model versioning, artifact storage, and real-time monitoring.",
    problem: "", // TODO
    approach: "The pipeline is fully containerized, with each stage, training, experiment tracking, artifact storage, and monitoring, running as its own service orchestrated with Docker Compose. This keeps the workflow reproducible from experimentation to production.",
    architecture: [
      "Jupyter environment for model experimentation",
      "MLflow tracking server for experiment logging & model versioning",
      "MinIO for artifact/object storage",
      "PostgreSQL as the MLflow backend store",
      "Grafana dashboard for real-time model monitoring"
    ],
    keyFeatures: [
      "Automated Model Training and Deployment",
      "Experiment Tracking and Model Versioning",
      "Containerized Deployment with Docker",
      "Real-Time Monitoring and Observability"
    ],
    technicalImplementation: "Training runs are logged to MLflow (parameters, metrics, and model artifacts), with MinIO backing artifact storage and PostgreSQL as the tracking backend. A Grafana dashboard visualizes live model accuracy and loss for ongoing monitoring.",
    challenges: "", // TODO
    results: "Achieved a tracked model accuracy of 0.852 (loss 0.123) on the monitoring dashboard.",
    techStack: ["Python", "Docker", "MLflow", "Grafana", "MinIO", "PostgreSQL", "Pandas", "NumPy", "Scikit-learn"],
    links: {
      github: "https://github.com/naufalsutrisna/MLOps-Heart-Attack-Detection",
      demo: "",
      publication: ""
    }
  },
  {
    id: "shopping-assistant",
    title: "AI-Powered Shopping Assistant Chatbot",
    date: "Feb 2025 - Apr 2025",
    type: "Individual",
    shortDescription: "Conversational product-discovery assistant that understands budget and preferences to recommend relevant products via RAG.",
    cardTech: ["FAISS", "Sentence-Transformers", "RAG", "Streamlit"],
    metric: "",
    overview: "An AI-powered Shopping Assistant Chatbot that helps users discover products through natural language. It understands user preferences, budget constraints, and product requirements to deliver relevant recommendations and contextual product information, replacing manual browsing and keyword search.",
    problem: "", // TODO
    approach: "Product data is embedded with Sentence-Transformers and indexed with FAISS for similarity search. A retrieval-augmented generation pipeline retrieves the most relevant products for a query and an LLM (via OpenRouter) generates a natural-language recommendation grounded in that retrieved data.",
    architecture: [],
    keyFeatures: [
      "Natural Language Product Search",
      "Personalized Product Recommendations",
      "Budget-Based Product Filtering",
      "Retrieval-Augmented Generation (RAG)"
    ],
    technicalImplementation: "Sentence-Transformers generate product embeddings, FAISS performs nearest-neighbor retrieval, and OpenRouter-hosted LLMs synthesize the final recommendation text, served through a Streamlit interface.",
    challenges: "", // TODO
    results: "", // TODO
    techStack: ["Python", "Sentence-Transformers", "FAISS", "OpenRouter", "Retrieval-Augmented Generation", "Streamlit"],
    links: {
      github: "https://github.com/naufalsutrisna/Shopping-Assistant-Chatbot",
      demo: "",
      publication: ""
    }
  },
  {
    id: "alzheimer-classification",
    title: "Alzheimer Disease Classification",
    date: "Aug 2024 - Dec 2024",
    type: "Individual",
    shortDescription: "Deep learning model classifying Alzheimer's disease stages from MRI scans, published as academic research.",
    cardTech: ["TensorFlow", "VGG-19", "CLAHE", "OpenCV"],
    metric: "93.91% F1-score",
    overview: "A deep learning model for Alzheimer's disease classification using MRI scans. The system combines CLAHE image enhancement with transfer learning to improve feature extraction and classification performance across multiple disease stages.",
    problem: "", // TODO
    approach: "MRI scans are preprocessed with CLAHE (Contrast Limited Adaptive Histogram Equalization) to improve visibility of relevant structures, then passed through a pretrained VGG-19 backbone with a custom classification head, fine-tuned for four-class MRI classification.",
    architecture: [],
    keyFeatures: [
      "Image Enhancement using CLAHE",
      "Transfer Learning with Pretrained VGG-19",
      "Multi-Class Medical Image Classification",
      "Deep Learning-Based Feature Extraction",
      "Published Academic Research"
    ],
    technicalImplementation: "A frozen VGG-19 convolutional base (pretrained on ImageNet) feeds a custom dense classification head (256 to 128 to 4 units) for four-class MRI classification, totaling around 26.5M parameters, of which 6.5M are trainable.",
    challenges: "", // TODO
    results: "Achieved a 93.91% F1-score across four Alzheimer's severity classes; published in JPTIIK.",
    techStack: ["Python", "TensorFlow", "VGG-19", "OpenCV", "CLAHE"],
    links: {
      github: "https://github.com/naufalsutrisna/Alzheimer-Disease-Classification",
      demo: "",
      publication: "https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/14719"
    }
  },
  {
    id: "dynamic-room-pricing",
    title: "Dynamic Room Pricing",
    date: "May 2024 - Jun 2024",
    type: "Team",
    shortDescription: "Led development of a machine learning pricing model that adapts room rates to market trends and demand for a hospitality platform.",
    cardTech: ["XGBoost", "TensorFlow", "FastAPI", "SQL"],
    metric: "MAE of 59K (target: <100K)",
    overview: "Led the development of a dynamic room pricing model to optimize revenue in the hospitality industry by adapting room prices to market trends and demand fluctuations. The system analyzes historical booking data and key pricing factors to generate data-driven pricing recommendations.",
    problem: "", // TODO
    approach: "Historical booking and pricing data were engineered into model-ready features, then used to train and compare regression models (XGBoost and a TensorFlow neural network) to predict optimal room prices against real market demand signals.",
    architecture: [],
    keyFeatures: [
      "Dynamic Room Price Prediction",
      "Revenue Optimization through Machine Learning",
      "Demand and Market Trend Analysis",
      "Feature Engineering and Data Preprocessing"
    ],
    technicalImplementation: "The trained model is served through a FastAPI endpoint that accepts a property, room, and stay dates, and returns both the current price and the model's predicted price for that booking window.",
    challenges: "", // TODO
    results: "Final model achieved a Mean Absolute Error (MAE) of 59K on testing data, surpassing the project's target of keeping MAE below 100K.",
    techStack: ["Python", "SQL", "XGBoost", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "FastAPI"],
    links: {
      github: "https://github.com/naufalsutrisna/Room-Pricing-Bukit-Vista",
      demo: "",
      publication: ""
    }
  }
];
