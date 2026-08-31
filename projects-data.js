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
    id: "ecommerce-agent",
    title: "E-Commerce Data Analyst Agent",
    date: "May 2026 - Jun 2026",
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

const MORE_PROJECTS = [
  {
    id: "voice-assistant",
    title: "Voice Assistant",
    date: "Feb 2026 - Apr 2026",
    type: "Individual",
    shortDescription: "Real-time hands-free voice assistant combining speech-to-text, an LLM, and text-to-speech.",
    cardTech: ["Python", "Faster-Whisper", "pyttsx3"],
    metric: "",
    overview: "An AI-powered Voice Assistant that enables real-time voice interactions with Large Language Models. The system captures user speech, transcribes it into text, processes the request through an LLM, and speaks the response back, providing a hands-free way to interact with an AI assistant.",
    problem: "", // TODO
    approach: "Microphone audio is captured continuously, transcribed locally with Faster-Whisper, sent as a prompt to an LLM through OpenRouter, and the reply is converted back to speech with pyttsx3 before the assistant starts listening again.",
    architecture: [],
    keyFeatures: [
      "Real-Time Speech-to-Text (STT)",
      "LLM-Powered Conversational AI",
      "Text-to-Speech (TTS) Response Generation",
      "Natural Voice-Based User Interaction",
      "Hands-Free AI Interaction"
    ],
    technicalImplementation: "Runs as a continuous listen-respond loop in the terminal: SoundDevice/SoundFile capture audio, Faster-Whisper transcribes it, the text is sent to an LLM via OpenRouter, and pyttsx3 speaks the reply before the loop restarts.",
    challenges: "", // TODO
    results: "", // TODO
    techStack: ["Python", "OpenRouter", "Faster-Whisper", "pyttsx3", "SoundDevice", "SoundFile", "NumPy", "SciPy"],
    links: {
      github: "https://github.com/naufalsutrisna/voice-assistant",
      demo: "",
      publication: ""
    }
  },
  {
    id: "abstract-similarity-chatbot",
    title: "Abstract Similarity Chatbot",
    date: "Oct 2024 - Dec 2024",
    type: "Team",
    shortDescription: "Helps researchers find semantically related papers using TF-IDF and cosine similarity search.",
    cardTech: ["FastAPI", "Scikit-learn", "TF-IDF"],
    metric: "",
    overview: "An AI-powered Abstract Similarity Chatbot that helps researchers discover relevant academic studies through natural language queries. The system analyzes research abstracts, identifies semantically related publications, and returns the most relevant results based on similarity scores, reducing manual literature search effort.",
    problem: "", // TODO
    approach: "Research abstracts are vectorized with TF-IDF, and a user's query is compared against the abstract corpus using cosine similarity to surface the most semantically related papers.",
    architecture: [],
    keyFeatures: [
      "Abstract Similarity Search",
      "Natural Language Query Processing",
      "Research Paper Ranking and Recommendation",
      "TF-IDF-Based Text Representation",
      "Cosine Similarity Matching"
    ],
    technicalImplementation: "Abstracts are cleaned and converted into a TF-IDF matrix with Scikit-learn; an incoming query is vectorized the same way and ranked against the matrix using cosine similarity, with the top match served through a FastAPI endpoint.",
    challenges: "", // TODO
    results: "", // TODO
    techStack: ["Python", "JavaScript", "TF-IDF", "Cosine Similarity", "Scikit-learn", "Pandas", "FastAPI"],
    links: {
      github: "https://github.com/naufalsutrisna/Abstract-Similarity-Chatbot",
      demo: "",
      publication: ""
    }
  },
  {
    id: "bike-sharing-analysis",
    title: "Bike Sharing Analysis",
    date: "Feb 2024 - Mar 2024",
    type: "Individual",
    shortDescription: "Interactive dashboard exploring bike rental patterns and demand drivers in Washington D.C.",
    cardTech: ["Pandas", "Streamlit", "Seaborn"],
    metric: "",
    overview: "An interactive bike-sharing analytics dashboard to explore rental patterns and factors influencing bike usage in Washington D.C. It lets users analyze trends across time, weather conditions, and seasonal variations through dynamic visualizations and automated data filtering.",
    problem: "", // TODO
    approach: "Raw ride-level data is cleaned and aggregated with Pandas, then exposed through a Streamlit dashboard with interactive date filters and charts covering hourly, seasonal, and weather-based rental patterns.",
    architecture: [],
    keyFeatures: [
      "Interactive Data Analytics Dashboard",
      "Dynamic Time-Based Filtering",
      "Automated Data Cleaning and Processing",
      "Streamlit-Based Data Exploration"
    ],
    technicalImplementation: "", // TODO
    challenges: "", // TODO
    results: "The dashboard surfaces citywide totals (3.29M total rentals across casual and registered riders) alongside hourly and seasonal breakdowns.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
    links: {
      github: "https://github.com/naufalsutrisna/Bike-Sharing-Analysis",
      demo: "https://naufalptrs-bike-sharing.streamlit.app/",
      publication: ""
    }
  },
  {
    id: "papaya-ripeness-detection",
    title: "Papaya Ripeness Detection",
    date: "Sep 2023 - Dec 2023",
    type: "Team",
    shortDescription: "CNN-based fruit ripeness classifier reaching 96.63% accuracy, published as academic research.",
    cardTech: ["TensorFlow", "CNN"],
    metric: "96.63% accuracy",
    overview: "A deep learning-based papaya ripeness detection system that automates fruit classification using visual characteristics and image data. The model analyzes skin color and other visual features to classify ripeness levels, supporting more efficient agricultural operations and inventory management.",
    problem: "", // TODO
    approach: "A convolutional neural network is trained directly on labeled papaya images across three ripeness classes (mature, partially mature, and unmature), learning skin color and texture cues instead of relying on hand-crafted rules.",
    architecture: [],
    keyFeatures: [
      "Papaya Ripeness Classification",
      "Deep Learning-Based Image Classification",
      "Published Academic Research"
    ],
    technicalImplementation: "", // TODO
    challenges: "", // TODO
    results: "Achieved 96.63% classification accuracy across ripeness classes; published in JTIIK.",
    techStack: ["Python", "TensorFlow", "Convolutional Neural Networks"],
    links: {
      github: "https://github.com/naufalsutrisna/Papaya-Ripeness-Detection-Using-CNN",
      demo: "",
      publication: "https://jtiik.ub.ac.id/index.php/jtiik/article/view/8119"
    }
  },
  {
    id: "grade-prediction",
    title: "Grade Prediction",
    date: "Sep 2023 - Dec 2023",
    type: "Team",
    shortDescription: "Predicts academic performance from Empatica E4 wearable electrodermal activity signals.",
    cardTech: ["Flask", "Pandas", "Feature Engineering"],
    metric: "100% prediction accuracy",
    overview: "A machine learning-based grade prediction system that uses physiological data collected from the Empatica E4 wearable device to analyze academic performance. The system processes Electrodermal Activity (EDA) signals through feature engineering to identify patterns associated with student outcomes.",
    problem: "", // TODO
    approach: "EDA and heart-rate signals from the Empatica E4 are cleaned and turned into engineered features, which are then used to train a classification model that predicts grade outcomes from physiological patterns.",
    architecture: [],
    keyFeatures: [
      "Grade Prediction Using Physiological Data",
      "Electrodermal Activity (EDA) Signal Analysis",
      "Wearable Sensor Data Processing",
      "Feature Engineering and Extraction"
    ],
    technicalImplementation: "The trained model is served through a Flask web app where a user submits EDA/heart-rate feature values and receives a predicted grade outcome.",
    challenges: "", // TODO
    results: "Achieved 100% prediction accuracy on the evaluated dataset.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Flask"],
    links: {
      github: "https://github.com/naufalsutrisna/Grade-Prediction-Using-Empatica-E4",
      demo: "https://naufalputra.pythonanywhere.com/",
      publication: ""
    }
  },
  {
    id: "mcp-weather-server",
    title: "MCP Weather Server",
    date: "Jul 2026 - Present",
    type: "Individual",
    shortDescription: "A weather MCP server exposing geocoding and forecast data as tools/resources for AI applications.",
    cardTech: ["FastMCP", "Model Context Protocol", "Open-Meteo API"],
    metric: "",
    overview: "A weather MCP server built with FastMCP that lets AI applications access weather capabilities through the Model Context Protocol, using Open-Meteo's geocoding and weather APIs to retrieve city-based weather information and forecasts.",
    problem: "", // TODO
    approach: "Open-Meteo's geocoding and forecast APIs are wrapped behind the Model Context Protocol, exposed as MCP tools, resources, and resource templates that any MCP-compatible AI client can call directly.",
    architecture: [],
    keyFeatures: [
      "City-Based Weather Lookup via Open-Meteo",
      "MCP Tools, Resources, and Resource Templates",
      "Standardized Interface for AI Applications"
    ],
    technicalImplementation: "", // TODO
    challenges: "", // TODO
    results: "", // TODO
    techStack: ["Python", "FastMCP", "Model Context Protocol", "Open-Meteo API"],
    links: {
      github: "",
      demo: "",
      publication: ""
    }
  }
];
