/* ============================================================
   PORTFOLIO DATA — edit this file to update site content.
   ============================================================ */

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
  stack: string[];
  bullets: string[];
}

export interface Project {
  name: string;
  desc: string;
  stack: string[];
  link?: string;
  repo?: string;
}

export const DATA = {
  profile: {
    name: "Soham Kale",
    initials: "SK",
    title: "ASSOCIATE SOFTWARE ENGINEER — REACT NATIVE, REACT & TYPESCRIPT",
    bio: "Software engineer building cross-platform mobile and web applications with React Native, React and TypeScript. Ships production apps across sports tech, e-commerce and real estate — from Play Store deployment and REST API integration to AI-powered features like a Stockfish chess engine running inside a mobile app. Currently exploring AI agents and autonomous developer workflows.",
    location: "Pune, India",
    avatar: "https://avatars.githubusercontent.com/u/113749828?v=4",
    githubUser: "Soham-Kale",
    github: "https://github.com/Soham-Kale",
    linkedin: "https://www.linkedin.com/in/soham-kale-723312240/",
    email: "sohamkale3014@gmail.com", // TODO: replace with your personal email
    handle: "SOHAM-KALE",
  },

  openToWork: {
    show: true,
    items: [
      { label: "BUILDING", value: "Chess analytics @ YouInSports" },
      { label: "LEARNING", value: "AI agents & loop engineering" },
      { label: "WRITING", value: "AI-assisted dev on LinkedIn" },
    ],
  },

  experience: [
    {
      company: "YouInSports",
      role: "Associate Software Engineer",
      period: "May 2025 – Present",
      summary:
        "Cross-platform sports-tech apps in React Native — chess engine integration, data pipelines and opponent scouting features.",
      stack: ["React Native", "TypeScript", "Stockfish", "Python", "Firebase"],
      bullets: [
        "Integrated the Stockfish chess engine into a React Native app for real-time move analysis, best-move suggestions and post-game insights.",
        "Built a Python web-scraping pipeline ingesting ChessResults.com data, enriching 1,000+ player profiles with performance history and opponent analytics.",
        "Delivered an interactive opponent-scouting feature that lifted session engagement through data-driven pre-match preparation.",
      ],
    },
    {
      company: "Code Implants",
      role: "Junior Software Engineer",
      period: "Oct 2024 – May 2025",
      summary:
        "Reusable React + TypeScript component library and storefront pages for a full-featured e-commerce web application.",
      stack: ["React", "TypeScript", "Material UI", "Redux Toolkit", "REST APIs"],
      bullets: [
        "Architected 10+ reusable React.js + TypeScript UI components, cutting frontend development time for new features by ~30%.",
        "Built responsive product listing, cart and checkout pages with Material UI across 5+ breakpoints, mobile-first.",
        "Integrated 6+ RESTful APIs for product data, authentication and order history; implemented Redux Toolkit for predictable global state.",
      ],
    },
    {
      company: "Code Implants",
      role: "Software Engineer Intern",
      period: "Apr 2024 – Sep 2024",
      summary:
        "Frontend development on a production web app — component-driven architecture, Git workflows and Agile sprints.",
      stack: ["React", "JavaScript", "Git", "Agile"],
      bullets: [
        "Shipped the first independent feature within 3 weeks of joining.",
        "Worked with branching, pull requests and code reviews inside Agile sprint cycles.",
      ],
    },
  ] as Experience[],

  projects: {
    personal: [
      {
        name: "Kribb",
        desc: " Built and published a full-stack property marketplace to the Play Store (testing phase), enabling buyers to browse/filter/save and sellers to list/edit/manage listings.",
        stack: ["React Native", "TypeScript", "Supabase", "Clerk", "NativeWind", "Zod"],
        link: "https://play.google.com/store/apps/details?id=com.kribb.app",
        repo: "https://github.com/Soham-Kale/Kribb",
      },
      {
        name: "Trading Automation (n8n)",
        desc: "Automated trading workflows orchestrated with n8n inside a TypeScript monorepo — signals, alerts and execution glue.",
        stack: ["TypeScript", "n8n", "Automation"],
        repo: "https://github.com/Soham-Kale/trading-n8n-monorepo",
      },
      // {
      //   name: "Admin Dashboard",
      //   desc: "Full-featured admin dashboard with data tables, charts, theming and responsive layouts, deployed on Vercel.",
      //   stack: ["React", "TypeScript", "Charts"],
      //   link: "https://admin-dashboard-xskv.vercel.app",
      //   repo: "https://github.com/Soham-Kale/adminDashboard",
      // },
      // {
      //   name: "Mental Health Prediction",
      //   desc: "ML-powered web app that predicts mental-health risk from survey inputs and visualises the results.",
      //   stack: ["JavaScript", "Machine Learning"],
      //   link: "https://mental-health-prediction-one.vercel.app",
      //   repo: "https://github.com/Soham-Kale/Mental-Health_prediction",
      // },
    ] as Project[],
    client: [
      {
        name: "YouInSports",
        desc: "Stockfish-powered move analysis, opponent scouting and enriched player profiles inside a production React Native app.",
        stack: ["React Native", "Stockfish", "Python"],
        link: "https://play.google.com/store/apps/details?id=com.uinsports",
      },
      {
        name: "Barne Farms (E-commerce platform) — Code Implants",
        desc: "Product listing, cart and checkout experience with a reusable component library and Redux Toolkit state.",
        stack: ["React Native", "TypeScript", "Material UI"],
        link: "https://play.google.com/store/apps/details?id=com.barnefarms.app",
      },
      {
        name: "Sone Taran — Code Implants",
        desc: "Product listing, cart and checkout experience with a reusable component library and Redux Toolkit state.",
        stack: ["React Native", "TypeScript", "Material UI"],
        link: "https://play.google.com/store/apps/details?id=com.sonetaran",
      },
    ] as Project[],
  },

  writing: [
    {
      title: "Loop Engineering: Designing Autonomous AI Systems",
      blurb: "From prompt engineering to loop engineering — maker-checker separation, verifiable stop conditions and durable memory.",
      date: "Jun 2026",
      link: "https://www.linkedin.com/in/soham-kale-723312240/recent-activity/all/",
    },
    {
      title: "AI as a Growth Lever: Stockfish in a Mobile App",
      blurb: "What integrating a chess engine into React Native taught me about practical, product-first AI features.",
      date: "Jun 2026",
      link: "https://www.linkedin.com/in/soham-kale-723312240/recent-activity/all/",
    },
    // {
    //   title: "Shipping an Interactive 3D Portfolio",
    //   blurb: "GSAP scroll choreography and Three.js scenes — where motion helps, and where it gets in the way.",
    //   date: "Apr 2026",
    //   link: "https://www.linkedin.com/in/soham-kale-723312240/recent-activity/all/",
    // },
  ],

  resume: {
    headline: "Associate Software Engineer — React Native, React & TypeScript",
    driveLink: "https://www.linkedin.com/in/soham-kale-723312240/",
    skills: [
      { group: "Mobile", items: ["React Native", "Android", "Play Store Deployment", "Firebase"] },
      { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Material UI", "GSAP", "Three.js"] },
      { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Python", "MongoDB"] },
      { group: "Tools", items: ["Git", "Postman", "Agile", "CI/CD", "n8n"] },
    ],
    education: {
      school: "Punyashlok Ahilyadevi Holkar Solapur University",
      detail: "Solapur, Maharashtra",
    },
  },

  uses: [
    {
      section: "EDITOR",
      items: [
        { name: "VS Code", note: "daily driver" },
        { name: "GitHub Copilot + Claude Code", note: "AI pair" },
        { name: "JetBrains Mono", note: "font" },
      ],
    },
    {
      section: "DEVELOPMENT",
      items: [
        { name: "Android Studio", note: "emulators & builds" },
        { name: "Chrome DevTools", note: "debugging" },
        { name: "Postman", note: "API testing" },
        { name: "n8n", note: "automation" },
      ],
    },
    {
      section: "STACK OF CHOICE",
      items: [
        { name: "React Native + TypeScript", note: "mobile" },
        { name: "React + Redux Toolkit", note: "web" },
        { name: "Node.js + MongoDB", note: "backend" },
      ],
    },
  ],

  notes: [
    {
      date: "JUL 2026",
      lines: [
        "Ship small, ship often. A feature on the Play Store beats ten on a branch.",
      ],
    },
    {
      date: "JUN 2026",
      lines: [
        "The highest-leverage work is no longer writing the perfect instruction — it is designing the system that prompts the AI for you.",
        "Stop asking what prompt to write. Start asking what end-state you can describe so clearly a machine can verify it.",
      ],
    },
    {
      date: "MAY 2026",
      lines: [
        "Performance work in React Native is mostly discipline: measure first, memoize deliberately, keep the bridge quiet.",
      ],
    },
  ],

  quotes: [
    { text: "You have power over your mind — not outside events.", by: "Marcus Aurelius" },
    { text: "Make it work, make it right, make it fast.", by: "Kent Beck" },
    { text: "Simplicity is the ultimate sophistication.", by: "Leonardo da Vinci" },
    { text: "Build smarter, not just harder.", by: "SK" },
    { text: "Waiting for something is preparation for that something.", by: "SK" },
  ],

  links: [
    { title: "Thinking in React", meta: "react.dev · fundamentals", url: "https://react.dev/learn/thinking-in-react" },
    { title: "The New Architecture", meta: "reactnative.dev · mobile", url: "https://reactnative.dev/architecture/landing-page" },
    { title: "TypeScript Handbook", meta: "typescriptlang.org · types", url: "https://www.typescriptlang.org/docs/handbook/intro.html" },
    { title: "Building Effective Agents", meta: "anthropic.com · ai", url: "https://www.anthropic.com/research/building-effective-agents" },
    { title: "How to Do Great Work", meta: "paulgraham.com · essays", url: "https://paulgraham.com/greatwork.html" },
  ],

  music: {
    title: "not playing",
    artist: "",
  },
};

export const APPS = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "writing", label: "WRITING" },
  { id: "contact", label: "CONTACT" },
  { id: "resume", label: "RÉSUMÉ" },
  { id: "terminal", label: "TERMINAL" },
  { id: "uses", label: "USES" },
  { id: "notes", label: "NOTES" },
] as const;

export type AppId = (typeof APPS)[number]["id"];

export const WINDOW_TITLES: Record<AppId, string> = {
  about: "About",
  experience: "Experience",
  projects: "Projects",
  writing: "Writing",
  contact: "Contact",
  resume: "Résumé",
  terminal: "Terminal",
  uses: "Uses",
  notes: "Notes",
};

export const THEMES = [
  { id: "midnight", label: "MIDNIGHT", swatch: "#4ade80" },
  { id: "ocean", label: "OCEAN", swatch: "#38bdf8" },
  { id: "ember", label: "EMBER", swatch: "#fb923c" },
  { id: "orchid", label: "ORCHID", swatch: "#c084fc" },
  { id: "paper", label: "PAPER", swatch: "#16a34a" },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];
