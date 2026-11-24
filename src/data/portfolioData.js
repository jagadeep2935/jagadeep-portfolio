// Accurate data sourced strictly from Jagadeep Jaladi's CV

export const personalDetails = {
  name: "Jagadeep Jaladi",
  role: "B.Tech Computer Science & Engineering Student",
  institution: "Lovely Professional University",
  location: "Phagwara, Punjab / Andhra Pradesh, India",
  primaryFocus: "Data Science & Machine Learning",
  secondaryFocus: "Full-Stack Development & Software Engineering",
  tagline: "I BUILD WITH CODE. I THINK WITH DATA.",
  bioHeadline: "B.Tech CSE Student @ LPU with a focus on Data Science & Full-Stack Development",
  bioShort: "Computer Science and Engineering undergraduate at Lovely Professional University with a strong academic foundation (8.12 CGPA) and a primary interest in Data Science, machine learning workflows, and practical software engineering. Experienced in building responsive full-stack applications with React and Tailwind CSS, designing interactive business intelligence dashboards in Power BI, and implementing predictive regression pipelines with Scikit-learn.",
  conceptMain: "FROM DATA TO DIGITAL EXPERIENCES",
  conceptSub: "BUILDING RELIABLE SOFTWARE & EXTRACTING ACTIONABLE INSIGHTS FROM DATA",
  university: "Lovely Professional University",
  degree: "Bachelor of Technology — Computer Science and Engineering",
  timelineTerm: "Jul' 24 – Present",
  cgpa: "8.12",
  email: "jaladijagadeep2007@gmail.com",
  phone: "+91 9391332801",
  linkedin: "https://www.linkedin.com/in/jagadeepjaladi/",
  github: "https://github.com/jagadeep2935",
  resumeFile: "/Jagadeep_Jaladi_Resume.pdf",
};

export const editorialRevealSteps = [
  {
    number: "01",
    label: "DATA-DRIVEN REASONING",
    description: "Fascinated by how raw numbers transform into predictive models and actionable business decisions through exploratory data analysis, DAX KPIs, and statistical evaluations."
  },
  {
    number: "02",
    label: "USER-CENTRIC FRONTEND ARCHITECTURE",
    description: "Passionate about building intuitive, high-performance interfaces with React (Vite) and Tailwind CSS, focusing on clean component systems, accessibility, and smooth user flows."
  },
  {
    number: "03",
    label: "SYSTEMATIC PROBLEM SOLVING",
    description: "Rooted in strong mathematics (95.8% PCM in Intermediate) and disciplined algorithmic fundamentals, applying methodical analysis to every software engineering challenge."
  },
  {
    number: "04",
    label: "COMMUNITY & DIGITAL EMPOWERMENT",
    description: "Committed to translating complex technical and cybersecurity concepts into everyday safety practices, directly mentoring and educating 40 local residents."
  }
];

// Strictly the skills from CV grouped into the 5 requested categories
export const skillCategories = [
  {
    id: "programming-languages",
    name: "Programming Languages",
    shortName: "Languages",
    accent: "#00F5D4",
    description: "Core algorithmic foundations and computational programming",
    skills: [
      { name: "Python", category: "Programming Languages", note: "Primary language for Data Science, ML modeling with Scikit-learn, Pandas, NumPy" },
      { name: "Java", category: "Programming Languages", note: "Object-oriented programming, data structures, and algorithmic implementation" },
      { name: "C", category: "Programming Languages", note: "Procedural programming, memory fundamentals, pointers, and low-level constructs" },
      { name: "C++", category: "Programming Languages", note: "Standard Template Library (STL), high-performance computing, and OOP" }
    ]
  },
  {
    id: "web-technologies",
    name: "Web Technologies",
    shortName: "Web Tech",
    accent: "#00E5FF",
    description: "Full-stack application development and responsive user interfaces",
    skills: [
      { name: "React", category: "Web Technologies", note: "Component-driven frontend architecture, hooks, state management, Vite build tool" },
      { name: "Express.js", category: "Web Technologies", note: "RESTful API routes, backend middleware, and database connectivity" },
      { name: "Tailwind CSS", category: "Web Technologies", note: "Utility-first modern styling, responsive layouts, design token customization" },
      { name: "HTML", category: "Web Technologies", note: "Semantic structure, modern HTML5 web accessibility standards" },
      { name: "CSS", category: "Web Technologies", note: "Flexbox, CSS Grid, transitions, animations, and custom styling rules" }
    ]
  },
  {
    id: "databases-and-tools",
    name: "Databases and Tools",
    shortName: "Databases & Tools",
    accent: "#F59E0B",
    description: "Data storage systems, BI tools, networking, and modeling utilities",
    skills: [
      { name: "SQL", category: "Databases and Tools", note: "Relational queries, schema design, table joins, aggregations, and subqueries" },
      { name: "MongoDB", category: "Databases and Tools", note: "NoSQL document collections, JSON documents, CRUD operations in MERN stack" },
      { name: "HDFS", category: "Databases and Tools", note: "Hadoop Distributed File System for distributed storage architectures" },
      { name: "Power BI", category: "Databases and Tools", note: "Business intelligence dashboards, custom DAX measures, geospatial mapping, KPI cards" },
      { name: "Microsoft Excel", category: "Databases and Tools", note: "Formulas, data formatting, pivot tables, and tabular data auditing" },
      { name: "Cisco Packet Tracer", category: "Databases and Tools", note: "Network topology modeling, packet routing simulation, switch configuration" },
      { name: "Star-UML", category: "Databases and Tools", note: "Unified Modeling Language class diagrams, use-case modeling, and system design" }
    ]
  },
  {
    id: "data-ml-libraries",
    name: "Data Science & Machine Learning Libraries",
    shortName: "Data / ML",
    accent: "#6366F1",
    description: "Numerical computation, data manipulation, and machine learning models",
    skills: [
      { name: "Pandas", category: "Data/ML Libraries", note: "DataFrame manipulation, missing value imputation, date parsing, aggregations" },
      { name: "NumPy", category: "Data/ML Libraries", note: "N-dimensional array operations, mathematical transforms, matrix computations" },
      { name: "Matplotlib", category: "Data/ML Libraries", note: "Visualizations, scatter plots, trend lines, residual plots, and charts" },
      { name: "Scikit-learn", category: "Data/ML Libraries", note: "Linear Regression modeling, train-test splits, evaluation metrics (MAE, MSE, RMSE, R²)" }
    ]
  },
  {
    id: "soft-skills",
    name: "Soft Skills",
    shortName: "Soft Skills",
    accent: "#EC4899",
    description: "Interpersonal effectiveness, teamwork, and collaborative execution",
    skills: [
      { name: "Adaptability", category: "Soft Skills", note: "Swiftly learning new frameworks, libraries, tools, and project environments" },
      { name: "Teamwork", category: "Soft Skills", note: "Effective collaboration in multi-developer teams, Git workflows, and UI-backend integration" },
      { name: "Time Management", category: "Soft Skills", note: "Disciplined balance between academic coursework, lab assignments, and project builds" },
      { name: "Self-Motivation", category: "Soft Skills", note: "Proactive drive to explore Data Science concepts, build independent projects, and earn certifications" }
    ]
  }
];

// All three projects from CV with accurate facts, role details, and verified GitHub links
export const projectsData = [
  {
    id: "aura-telemedicine",
    title: "Aura-Telemedicine portal",
    period: "Jul' 26",
    badge: "FULL-STACK HEALTHCARE APP",
    accentColor: "#00F5D4",
    tagline: "Remote Patient-Doctor Consultation & AI Medical Assistance",
    summary: "A full-stack telemedicine web application built by a team of three, enabling remote patient–doctor consultations, appointment booking, and AI-powered medical assistance.",
    role: "Frontend UI/UX Lead (Team of 3)",
    myContribution: "Primarily responsible for frontend UI/UX, developing the user interface with React (Vite) and Tailwind CSS. Built patient and doctor dashboards, doctor discovery, patient profiles, and appointment and consultation management interfaces within a single accessible platform. Integrated the frontend with the team's Express.js and MongoDB backend through Axios API calls for authentication with role-based access, appointments, and consultations.",
    teamAiContribution: "Platform includes AI-powered medical assistance using Gemini 2.5 Flash, integrated into the application by the team.",
    technologies: ["React", "Vite", "Tailwind CSS", "Axios", "Express.js", "MongoDB", "Gemini 2.5 Flash"],
    features: [
      "Remote patient–doctor consultations and digital triage",
      "Interactive appointment booking and consultation management",
      "Dedicated role-based dashboards for both patients and doctors",
      "Doctor discovery with specialty filtering and comprehensive patient profiles",
      "Axios API integration for authentication and secure role-based access",
      "AI-powered medical assistance powered by Gemini 2.5 Flash"
    ],
    githubUrl: "https://github.com/jagadeep2935/AuraTelemed",
    type: "aura"
  },
  {
    id: "air-pollution-dashboard",
    title: "Air Pollution Analysis Dashboard",
    period: "May' 26",
    badge: "BUSINESS INTELLIGENCE & ANALYTICS",
    accentColor: "#00E5FF",
    tagline: "Multidimensional Air Quality Telemetry & Hotspot Detection",
    summary: "Cleaned and analyzed air-quality data in Power BI across 260 cities, 498 monitoring stations, and 7 pollutant types to examine variations in pollution levels.",
    role: "Data Analyst & BI Developer",
    myContribution: "Cleaned and prepared raw environmental dataset across 260 cities and 498 stations. Developed pollution KPIs using DAX to track and benchmark city-level exposure across regions and monitoring stations. Built interactive dashboard visuals, including KPI cards, slicers, bar charts, donut charts, and geospatial visualizations, for multidimensional pollution analysis. Identified city-wise exposure rankings, pollutant contributions, dominant pollutants, and geographic pollution hotspots.",
    technologies: ["Power BI", "DAX", "Data Cleaning", "Data Visualization"],
    metrics: [
      { label: "CITIES ANALYZED", value: "260", highlight: "260 Cities" },
      { label: "STATIONS MONITORED", value: "498", highlight: "498 Stations" },
      { label: "POLLUTANTS TRACKED", value: "7", highlight: "7 Pollutant Types" }
    ],
    features: [
      "Analysis across 260 cities and 498 monitoring stations",
      "Evaluation across 7 key environmental pollutant types",
      "Custom DAX KPIs benchmarking city-level exposure across regions",
      "Multidimensional visuals: KPI cards, slicers, bar charts, donut charts",
      "Geospatial mapping pinpointing geographic pollution hotspots",
      "Identification of city-wise rankings, dominant pollutants, and source contributions"
    ],
    githubUrl: "https://github.com/jagadeep2935/air-pollution-analysis-dashboard",
    type: "pollution"
  },
  {
    id: "ecommerce-prediction",
    title: "E-Commerce Customer Analysis & Prediction",
    period: "Jan' 26",
    badge: "PREDICTIVE MACHINE LEARNING",
    accentColor: "#6366F1",
    tagline: "Customer Spending Estimation & Feature Engineering Pipeline",
    summary: "Analyzed how average order value influences total customer spending using customer-level data. Built a machine learning regression pipeline with feature engineering to predict spending.",
    role: "ML Developer & Data Scientist",
    myContribution: "Cleaned missing values, encoded date fields, and engineered a customer-lifetime duration feature from raw customer transaction records. Trained a Linear Regression model on an 80:20 train-test split to predict total spending from average order value, evaluating the model rigorously with MAE, MSE, RMSE, and R².",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    mlPipeline: [
      "Customer-Level Dataset Ingestion",
      "Handling Missing Values & Imputation",
      "Encoding Date Fields & Time Transforms",
      "Feature Engineering: Customer-Lifetime Duration",
      "80:20 Train-Test Validation Split",
      "Linear Regression Model Training",
      "Model Evaluation (MAE, MSE, RMSE, R²)"
    ],
    features: [
      "Customer spending correlation and exploratory data analysis",
      "Data cleaning and missing value imputation in Pandas",
      "Date field encoding and customer-lifetime duration feature engineering",
      "Linear Regression model trained on 80:20 train-test partition",
      "Comprehensive evaluation using MAE, MSE, RMSE, and R² metrics",
      "Visualized predictions and residuals with Matplotlib"
    ],
    githubUrl: "https://github.com/jagadeep2935/ecommerce-customer-analysis",
    type: "ecommerce"
  }
];

// Community Engagement directly from CV with verified Certificate link
export const communityEngagement = {
  title: "Community Development Program",
  role: "Cybersecurity Awareness Lead",
  period: "Jul' 25 – Aug' 25",
  certificateUrl: "https://drive.google.com/drive/folders/1nmjX-c2FY5Ijsj8OVPMyq3q8JqfDf7SG?usp=sharing",
  residentsReached: 40,
  highlights: [
    "Reached 40 residents through door-to-door cybersecurity sessions covering phishing, cyber threats, password security, and online safety.",
    "Translated cybersecurity concepts into practical digital-safety practices, helping participants identify threats and safeguard personal information.",
    "Created and administered an awareness quiz to evaluate participant understanding and measure knowledge gained from the sessions."
  ],
  topics: [
    "Phishing Detection & Email Safety",
    "Cyber Threats & Malware Prevention",
    "Strong Password Creation & 2FA",
    "Digital Safety Practices for Personal Data"
  ]
};

// All 4 Certificates from CV with exact dates and Google Drive verification links
export const certificatesList = [
  {
    title: "Python",
    issuer: "Hacker Rank",
    date: "Sep' 26",
    badge: "PYTHON",
    accent: "#00F5D4",
    link: "https://drive.google.com/drive/folders/1LKO4IKVQeCqdkQ0-gTKEUzi9VjKnR8sD?usp=sharing"
  },
  {
    title: "SQL",
    issuer: "Hacker Rank",
    date: "Sep' 26",
    badge: "SQL",
    accent: "#00E5FF",
    link: "https://drive.google.com/drive/folders/1PbzjcxaFhk1qr38jZLLqVWZ3PvUDaajo?usp=sharing"
  },
  {
    title: "AI-Driven MERN Stack Bootcamp: Full Stack Development with DevOps",
    issuer: "Professional Enhancement",
    date: "Aug' 26",
    badge: "MERN & DEVOPS",
    accent: "#6366F1",
    link: "https://drive.google.com/drive/folders/1gBk6ffJpps2DnkUVb2NObWzQT7sglTo1?usp=sharing"
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Neo Colab",
    date: "Jun' 26",
    badge: "DSA",
    accent: "#F59E0B",
    link: "https://drive.google.com/drive/folders/1OGnZlrI01KwOdwx2OVDSimtqVTAR5RTB?usp=sharing"
  }
];

// Education qualifications with clear PCM vs Overall percentage distinction
export const educationList = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    period: "Jul' 24 – Present",
    scoreType: "CGPA",
    scoreValue: "8.12",
    status: "Currently Pursuing",
    isPrimary: true,
    details: [
      "Rigorous CS curriculum covering Data Structures, Algorithms, Database Management, and Web Technologies.",
      "Specialized interest and active project work in Data Science, Machine Learning, and Full-Stack Engineering.",
      "Maintained consistent academic standard with a current CGPA of 8.12."
    ]
  },
  {
    institution: "Sri Chaitanya College of Education",
    location: "Vijayawada, Andhra Pradesh",
    degree: "Intermediate",
    field: "PCM (Physics, Chemistry, Mathematics)",
    period: "Jun' 22 – May' 24",
    pcmPercentage: "95.8%",
    overallPercentage: "93.6%",
    status: "Completed",
    isPrimary: false,
    details: [
      "Intermediate PCM (Physics, Chemistry, Mathematics) Percentage: 95.8%",
      "Overall Intermediate Percentage: 93.6%",
      "Solid mathematical modeling, calculus, and analytical reasoning foundation."
    ]
  },
  {
    institution: "Sri Chaitanya Techno School",
    location: "Guntur, Andhra Pradesh",
    degree: "Matriculation",
    field: "Secondary School Certificate",
    period: "Jun' 21 – May' 22",
    scoreType: "Percentage",
    scoreValue: "93.3%",
    status: "Completed",
    isPrimary: false,
    details: [
      "Secondary school education completed with distinction at 93.3%.",
      "Demonstrated early academic excellence in science and quantitative problem-solving."
    ]
  }
];
