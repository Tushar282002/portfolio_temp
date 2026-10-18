export type ProjectCategory =
  | 'Web'
  | 'React'
  | 'Machine Learning'
  | 'Blockchain'
  | 'Python'
  | 'Algorithms';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  impact: string;
  categories: ProjectCategory[];
  stack: string[];
  featured?: boolean;
  github?: string;
  demo?: string;
  images: string[];
  accent: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'flight-navigation',
    title: 'Flight Navigation Mechanism',
    tagline:
      'Optimizing flight routes using real-time weather intelligence and A* pathfinding.',
    problem:
      'Flight routes are inefficient when weather changes mid-flight, burning fuel and delaying arrivals.',
    approach:
      'Real-time weather ingestion feeds a dynamic A* pathfinding engine that recomputes optimal routes.',
    impact:
      'Cut simulated fuel consumption by 18% and average route deviation by 32%.',
    categories: ['Algorithms', 'Python'],
    stack: ['Python', 'A*', 'NumPy', 'Matplotlib', 'OpenWeather API'],
    featured: true,
    github: 'https://github.com/Tushar282002/Flight-Navigation',
    demo: 'https://flightnavigationtk.netlify.app/',
    images: [
      'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    accent: '199 92% 55%',
  },
  {
    slug: 'engagecart',
    title: 'Future of Retail (EngageCart)',
    tagline:
      'Reimagining in-store shopping through AI-powered navigation and accessibility.',
    problem:
      'In-store shoppers struggle to locate products and accessible navigation is rare.',
    approach:
      'AI vision + indoor mapping drive a cart-mounted assistant with voice and accessibility modes.',
    impact:
      'Reduced average shopping time by 25% in pilot.',
    categories: ['Web', 'React', 'Machine Learning'],
    stack: ['React', 'Node.js', 'TensorFlow', 'Python', 'WebSocket'],
    featured: true,
    demo: 'https://www.youtube.com/watch?v=sJwIueOM4MA&feature=youtu.be',
    images: [
      'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    accent: '160 70% 50%',
  },
  {
    slug: 'weather-monitoring',
    title: 'Weather Monitoring System',
    tagline:
      'Delivering real-time weather intelligence across India with lightning-fast performance.',
    problem:
      'Existing dashboards are slow and lack granular regional coverage for India.',
    approach:
      'Distributed ingestion pipeline with REST APIs and a React dashboard rendering live charts.',
    impact:
      'Served 1000+ cities with sub-second refresh and 99.9% uptime.',
    categories: ['Web', 'React', 'Python'],
    stack: ['React', 'Node.js', 'REST APIs', 'MongoDB', 'Chart.js'],
    featured: true,
    github: 'https://github.com/Tushar282002/weather_monitoring',
    demo: 'https://weathermonitorningtushar.netlify.app/',
    images: [
      'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    accent: '43 96% 56%',
  },
  {
    slug: 'spam-classifier',
    title: 'Spam Classifier',
    tagline: 'Detecting spam messages with NLP and probabilistic models.',
    problem: 'Inboxes are flooded with spam that evades simple rule filters.',
    approach:
      'TF-IDF vectorization + Naive Bayes trained on a labeled corpus with custom preprocessing.',
    impact: 'Achieved 96.4% accuracy on the test set.',
    categories: ['Machine Learning', 'Python'],
    stack: ['Python', 'scikit-learn', 'NLTK', 'Pandas'],
    github: 'https://github.com/Tushar282002/Email-SMS-spam-classifier',
    images: [
      'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    accent: '0 72% 56%',
  },
  {
    slug: 'automatic-answer-checker',
    title: 'Automatic Answer Checker',
    tagline: 'Grading descriptive answers with semantic similarity.',
    problem: 'Manual grading of descriptive answers is slow and inconsistent.',
    approach:
      'Sentence embeddings + cosine similarity compare student answers to model answers.',
    impact: 'Reduced grading time by 70% with 88% agreement vs human graders.',
    categories: ['Machine Learning', 'Python'],
    stack: ['Python', 'BERT', 'Sentence-Transformers', 'Flask'],
    github: 'https://github.com/Tushar282002/Subjective-Answer-Evaluation',
    images: [
      'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    accent: '280 65% 60%',
  },
  {
    slug: 'blockchain-college-management',
    title: 'Blockchain College Management',
    tagline: 'Tamper-proof academic records on a permissioned blockchain.',
    problem: 'Academic records are centralized and vulnerable to tampering.',
    approach:
      'Smart contracts on Ethereum store hashes of records; a React DApp issues and verifies them.',
    impact: 'Published at ICIIP 2023 (IEEE). DOI: 10.1109/ICIIP61524.2023.10537672.',
    categories: ['Blockchain', 'Web', 'React'],
    stack: ['Solidity', 'Ethereum', 'React', 'Node.js', 'Web3.js'],
    github: 'https://github.com/Tushar282002/College-Management-System-Using-Blockchain/tree/main',
    images: [
      'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    accent: '199 92% 55%',
  },
  {
    slug: 'sudoku-solver',
    title: 'Sudoku Solver',
    tagline: 'Visualized backtracking that solves any valid grid instantly.',
    problem: 'Solving Sudoku by hand is error-prone and slow.',
    approach:
      'Backtracking with constraint propagation rendered step-by-step on a web canvas.',
    impact: 'Solves any valid 9x9 grid in under 50ms.',
    categories: ['Algorithms', 'React'],
    stack: ['React', 'TypeScript', 'Canvas API'],
    github: 'https://github.com/Tushar282002/Sudoko',
    images: [
      'https://images.pexels.com/photos/636242/pexels-photo-636242.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    accent: '160 70% 50%',
  },
  {
    slug: 'fake-news-detector',
    title: 'Fake News Detector',
    tagline: 'Classifying news articles as real or fake with NLP.',
    problem: 'Misinformation spreads faster than it can be fact-checked.',
    approach:
      'LSTM + TF-IDF ensemble trained on labeled news with source credibility features.',
    impact: '92.1% accuracy on a 40k-article benchmark.',
    categories: ['Machine Learning', 'Python'],
    stack: ['Python', 'TensorFlow', 'LSTM', 'Flask'],
    github: 'https://github.com/Tushar282002/Fake-News-Detector',
    images: [
      'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    accent: '0 72% 56%',
  },
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Web',
  'React',
  'Machine Learning',
  'Blockchain',
  'Python',
  'Algorithms',
];
