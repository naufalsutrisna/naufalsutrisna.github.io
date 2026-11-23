/**
 * RESUME LINK
 * ---------------------------------------------------------
 * Every "Resume" link on the site (nav + hero button) opens this URL
 * in a new tab. In Google Drive: right-click the file -> Share ->
 * "Anyone with the link" -> Copy link, then paste it below.
 * ---------------------------------------------------------
 */
const RESUME_URL = "https://drive.google.com/drive/folders/1Bxk1rD9UgqiMxLXPP1_EdBFnv7wupz6F?usp=sharing";

/**
 * PROJECT DATA
 * ---------------------------------------------------------
 * Single source of truth for the project cards + detail pop-up.
 * Only fill in fields with real, verifiable information.
 * Any empty field ("" or []) is simply hidden in the pop-up.
 *
 * Fields:
 *   title, shortDescription  -> card + pop-up header
 *   date                     -> shown under the title
 *   metric                   -> shown as "Outcome" (a real number only)
 *   techStack                -> tag list
 *   problem                  -> array of paragraphs
 *   builtIntro               -> one-line summary of what exists
 *   built                    -> [{ lead, text }] what you actually built
 *   result                   -> array of paragraphs (real results only)
 *   links                    -> github / demo / publication
 * ---------------------------------------------------------
 */

const FEATURED_PROJECTS = [
  {
    id: "ihsg-market-insight",
    title: "IHSG Market Insight",
    shortDescription: "Automated Indonesian stock market reporting system that collects market data, analyzes stock performance, and delivers a structured daily closing insight to Discord.",
    date: "Nov 2026 - Present",
    metric: "",
    techStack: ["Python", "LangChain", "n8n", "FastAPI", "yfinance", "Docker", "Discord Webhooks"],
    problem: [
      "Keeping up with the Indonesian market at the end of each trading day means pulling prices, checking how stocks performed, and writing it all up by hand. That is repetitive work, and it is easy to skip on a busy day."
    ],
    builtIntro: "A reporting service built with FastAPI, plus an n8n workflow that schedules and delivers the report.",
    built: [
      { lead: "Market data collection.", text: "Market data is retrieved from Yahoo Finance through yfinance and used to analyze stock performance." },
      { lead: "A reporting API.", text: "FastAPI exposes endpoints for a health check, an IHSG market summary, a complete closing market insight, and a Discord-formatted version of that report." },
      { lead: "Scheduled delivery.", text: "An n8n workflow, running locally in Docker, calls the report endpoint every weekday at 17:00 WIB." },
      { lead: "Discord notifications.", text: "The workflow posts the formatted report to a Discord channel through a webhook." }
    ],
    result: [
      "A working pipeline that sends the closing market report to Discord every weekday at 17:00 WIB, as long as the API and the n8n container are running. The project is still in progress."
    ],
    links: {
      github: "https://github.com/naufalsutrisna/ihsg-market-insight",
      demo: ""
    }
  },
  {
    id: "customer-support-agent",
    title: "Agentic Customer Support System",
    shortDescription: "An AI-powered customer support agent that handles customer inquiries, retrieves e-commerce order information, and answers follow-up questions through a conversational API.",
    date: "Sep 2026 - Nov 2026",
    metric: "",
    techStack: ["Python", "LangChain", "LangGraph", "OpenRouter", "GPT-4o-mini", "FastAPI", "Pandas", "Pydantic", "LangSmith", "Docker", "Docker Compose"],
    problem: [
      "Support teams answer the same questions over and over: where is my order, what is the status of this shipment, what does this product cost. Answering them means looking the same information up across several datasets by hand.",
      "A general-purpose LLM does not solve this on its own. Left alone, it can produce answers that no data supports, and it will happily respond to questions that have nothing to do with customer support. What was needed was an assistant that answers from real order data and knows what it is not supposed to answer."
    ],
    builtIntro: "A conversational customer support agent, exposed as a REST API and working over the Olist e-commerce dataset.",
    built: [
      { lead: "An agent loop in LangGraph.", text: "LangGraph orchestrates the agent and tool execution cycle. The LLM (GPT-4o-mini through OpenRouter, integrated with LangChain) reads each inquiry and decides whether it needs to fetch data before answering." },
      { lead: "Custom retrieval tools.", text: "Tools look up customer, order, product, and shipping information from the Olist CSV datasets using Pandas, so answers come from the data rather than from the model's guess." },
      { lead: "Scope validation.", text: "Each query is checked against the customer support scope, so unrelated questions are turned away instead of answered." },
      { lead: "Conversation state.", text: "Context is kept across turns, so follow-up questions are understood in light of what was already asked." },
      { lead: "API, tracing, and packaging.", text: "FastAPI exposes the workflow through REST endpoints, LangSmith traces each run for observability, and Docker Compose handles containerized execution." }
    ],
    result: [
      "A containerized customer support API with LangGraph-based orchestration, custom e-commerce data retrieval tools, scope validation, conversational follow-up support, and LangSmith observability. It runs locally or through Docker Compose."
    ],
    links: {
      github: "https://github.com/naufalsutrisna/customer-support-agent",
      demo: ""
    }
  },
  {
    id: "ecommerce-agent",
    title: "E-Commerce Data Analyst Agent",
    shortDescription: "AI agent that turns natural-language business questions into SQL, then returns executive summaries and insights, so you don't need to write SQL by hand.",
    date: "Apr 2026 - Jun 2026",
    metric: "", // TODO: add a quantified result if available (e.g. query accuracy)
    techStack: ["Python", "SQL", "LangChain", "OpenRouter", "Pandas", "NumPy", "DuckDB", "Streamlit", "Docker", "Jupyter Notebook"],
    problem: [
      "Answering a business question from e-commerce data normally means writing SQL across several tables first. That puts analysis out of reach for anyone who cannot, or does not want to, write queries, and turns every simple question into a request for someone who can."
    ],
    builtIntro: "A conversational data analyst agent that takes a business question in plain language and returns a data-backed summary.",
    built: [
      { lead: "Question validation.", text: "Every question is validated before any query is generated or run." },
      { lead: "Natural language to SQL.", text: "An LLM-driven LangChain pipeline, using OpenRouter-hosted models, translates the question into SQL." },
      { lead: "An embedded query engine.", text: "Queries run on DuckDB over the multi-table Olist e-commerce dataset." },
      { lead: "From rows to insights.", text: "Query results are processed with Pandas and NumPy, then turned into plain-language insights and an executive summary." },
      { lead: "A chat interface.", text: "A Streamlit front end lets users ask follow-up business questions conversationally." }
    ],
    result: [], // TODO: add a real result if available
    links: {
      github: "https://github.com/naufalsutrisna/ecommerce-data-analyst-agent",
      demo: ""
    }
  },
  {
    id: "mlops-pipeline",
    title: "MLOps Project for Heart Attack Detection",
    shortDescription: "End-to-end MLOps pipeline automating training, deployment, and monitoring of a heart attack detection model in production.",
    date: "Oct 2024 - Dec 2024",
    metric: "0.852 model accuracy (live-tracked)",
    techStack: ["Python", "Docker", "MLflow", "Grafana", "MinIO", "PostgreSQL", "Pandas", "NumPy", "Scikit-learn"],
    problem: [
      "A model that lives in a notebook is hard to reproduce, hard to track, and hard to keep an eye on once it is deployed. Without experiment logging, versioning, and monitoring, it is difficult to say which run produced which model, or how that model is performing right now."
    ],
    builtIntro: "A fully containerized MLOps pipeline for a heart attack detection model, with each stage running as its own service under Docker Compose.",
    built: [
      { lead: "Experimentation.", text: "A Jupyter environment for model development and training." },
      { lead: "Experiment tracking and versioning.", text: "An MLflow tracking server logs parameters, metrics, and model artifacts for every run, and versions the resulting models." },
      { lead: "Artifact and metadata storage.", text: "MinIO stores model artifacts as objects, and PostgreSQL serves as the MLflow backend store." },
      { lead: "Live monitoring.", text: "A Grafana dashboard visualizes model accuracy and loss in real time." },
      { lead: "Reproducibility.", text: "Because every stage is its own container, the workflow stays reproducible from experimentation through to production." }
    ],
    result: [
      "The model reached a tracked accuracy of 0.852 (loss 0.123), visible live on the monitoring dashboard."
    ],
    links: {
      github: "https://github.com/naufalsutrisna/MLOps-Heart-Attack-Detection",
      demo: ""
    }
  },
  {
    id: "shopping-assistant",
    title: "AI-Powered Shopping Assistant Chatbot",
    shortDescription: "Conversational product-discovery assistant that understands budget and preferences to recommend relevant products via RAG.",
    date: "Feb 2025 - Apr 2025",
    metric: "",
    techStack: ["Python", "Sentence-Transformers", "FAISS", "OpenRouter", "Retrieval-Augmented Generation", "Streamlit"],
    problem: [
      "Manual browsing and keyword search break down when a shopper describes a need in natural terms, such as a budget and a few requirements, instead of naming a product."
    ],
    builtIntro: "A shopping assistant chatbot built on retrieval-augmented generation (RAG).",
    built: [
      { lead: "Embedding and indexing.", text: "Product data is embedded with Sentence-Transformers and indexed in FAISS for similarity search." },
      { lead: "Retrieval.", text: "For each query, the pipeline retrieves the most relevant products, including filtering by the shopper's budget." },
      { lead: "Grounded recommendations.", text: "An OpenRouter-hosted LLM writes the recommendation from the retrieved products, so the answer stays tied to real catalog data." },
      { lead: "A chat interface.", text: "A Streamlit front end handles the conversation." }
    ],
    result: [], // TODO: add a real result if available
    links: {
      github: "https://github.com/naufalsutrisna/Shopping-Assistant-Chatbot",
      demo: ""
    }
  },
  {
    id: "dynamic-room-pricing",
    title: "Dynamic Room Pricing",
    shortDescription: "Led development of a machine learning pricing model that adapts room rates to market trends and demand for a hospitality platform.",
    date: "May 2024 - Jun 2024",
    metric: "MAE of 59K (target: <100K)",
    techStack: ["Python", "SQL", "XGBoost", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "FastAPI"],
    problem: [
      "Fixed room rates do not follow market trends or demand swings. A hospitality platform can end up priced too low when demand is high and too high when it is weak, which costs revenue either way."
    ],
    builtIntro: "A machine learning pricing model that recommends room prices from historical booking data and demand signals.",
    built: [
      { lead: "Feature engineering.", text: "Historical booking and pricing data were turned into model-ready features." },
      { lead: "Model comparison.", text: "Regression models, XGBoost and a TensorFlow neural network, were trained and compared on predicting room price." },
      { lead: "A prediction endpoint.", text: "The trained model is served through FastAPI. Given a property, room, and stay dates, it returns both the current price and the model's predicted price for that booking window." }
    ],
    result: [
      "The final model reached a Mean Absolute Error (MAE) of 59K on test data, beating the project's target of keeping MAE below 100K."
    ],
    links: {
      github: "https://github.com/naufalsutrisna/Room-Pricing-Bukit-Vista",
      demo: ""
    }
  }
];

/**
 * RESEARCH DATA
 * ---------------------------------------------------------
 * Published papers shown in the "Research" section.
 * Same rules as projects: only real, verifiable info. Any empty
 * field ("" or []) is hidden in the pop-up.
 *
 * Fields:
 *   title, venue, venueShort, date, shortDescription
 *   metric   -> shown as "Outcome"
 *   problem  -> array of paragraphs
 *   approach -> [{ lead, text }]
 *   result   -> array of paragraphs
 *   links    -> paper / github
 * ---------------------------------------------------------
 */
const RESEARCH = [
  {
    id: "alzheimer-paper",
    title: "Klasifikasi Penyakit Alzheimer Pada Citra MRI Menggunakan Pretrained VGG-19 dan Pengolahan Citra CLAHE",
    venue: "Jurnal Pengembangan Teknologi Informasi dan Ilmu Komputer (JPTIIK)",
    venueShort: "JPTIIK",
    date: "Jan 2025",
    shortDescription: "Deep learning classification of Alzheimer's disease stages from MRI scans, using a pretrained VGG-19 and CLAHE image enhancement.",
    metric: "93.91% F1-score",
    problem: [
      "Telling Alzheimer's disease stages apart from MRI scans is difficult, and low contrast makes the relevant structures harder for a model to pick up. The goal was a classifier that could separate four severity classes reliably."
    ],
    approach: [
      { lead: "Image enhancement.", text: "Scans are preprocessed with CLAHE (Contrast Limited Adaptive Histogram Equalization) to make relevant structures easier to see." },
      { lead: "Transfer learning.", text: "A frozen VGG-19 convolutional base, pretrained on ImageNet, does the feature extraction." },
      { lead: "A custom classification head.", text: "Dense layers (256, 128, then 4 units) sit on top for four-class classification." }
    ],
    result: [
      "The model reached a 93.91% F1-score across the four Alzheimer's severity classes, and the work was published in JPTIIK."
    ],
    links: {
      paper: "https://j-ptiik.ub.ac.id/index.php/j-ptiik/article/view/14719",
      github: "https://github.com/naufalsutrisna/Alzheimer-Disease-Classification"
    }
  },
  {
    id: "papaya-paper",
    title: "Deteksi Tingkat Kematangan Buah Pepaya Menggunakan Model Convolutional Neural Network",
    venue: "Jurnal Teknologi Informasi dan Ilmu Komputer (JTIIK)",
    venueShort: "JTIIK",
    date: "Jul 2024",
    shortDescription: "A Convolutional Neural Network that classifies papaya fruit ripeness from skin color and other visual features.",
    metric: "96.63% accuracy",
    problem: [
      "Papaya ripeness shows in the texture and color of the skin. Detecting it automatically matters for agriculture and for managing food inventory."
    ],
    approach: [
      { lead: "Dataset.", text: "A dataset of papaya images covering different ripeness levels." },
      { lead: "CNN classifier.", text: "A Convolutional Neural Network trained to classify ripeness from skin color and other visual features." }
    ],
    result: [
      "The model identified papaya ripeness with 96.63% accuracy."
    ],
    links: {
      paper: "https://doi.org/10.25126/jtiik.938119",
      github: "" // TODO: add the repository link if there is one
    }
  }
];
