/* ============================================================
   DATA LAYER
   Everything here is content, not presentation. To add a new
   certificate, project, or skill later, add an entry to the
   relevant array below — the UI renders dynamically from this
   file and needs no changes.
   ============================================================ */

const PROFILE = {
  name: "Soumya Joshi",
  title: "CS Undergraduate — DSA, Systems & Backend Foundations",
  location: "Bhopal, Madhya Pradesh, India",
  phone: "+91 8305696906",
  email: "Soumya.joshii09@gmail.com",
  github: "https://github.com/soumyajoshi9",
  linkedin: "https://linkedin.com/in/soumya-joshi-a7150632b",
  twitter: "https://x.com/soumyajoshii9",
  instagram: "https://instagram.com/soumyajoshii9",
  resumeFile: "assets/Soumya_Joshi_Resume.pdf",
  tagline:
    "I build things the deliberate way — model the data first, then the logic, then the interface.",
  summary:
    "I'm a Computer Science undergraduate at Lakshmi Narain College of Technology and Science, Bhopal, currently building a foundation in data structures, algorithms, and object-oriented design through coursework and independent projects. My two largest builds so far — a Library Management System and a Hospital Management System — both follow the same pattern: Python for application logic, MySQL for durable relational storage, so nothing is lost when the program closes. I've also spent time outside pure software, engineering a working RC model of ISRO's Pragyan rover in my final year of school. Alongside coursework, I mentor peers on coding and problem-solving through Smart Interviews, and I've completed certifications spanning cybersecurity, generative AI, and web development. I'm looking for an entry-level software engineering role — ideally one that leans on algorithmic thinking and backend fundamentals.",
  stats: [
    { value: "8.05", label: "Current CGPA" },
    { value: "3", label: "Projects Built" },
    { value: "9", label: "Certifications" },
    { value: "2028", label: "Expected Graduation" },
  ],
};

const SKILLS = [
  {
    category: "Core Languages",
    items: ["C", "C++", "Python", "MySQL"],
  },
  {
    category: "CS Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
    ],
  },
  {
    category: "Tools & Environment",
    items: ["GitHub", "VS Code", "Basic Linux", "MS Excel", "MS Word"],
  },
  {
    category: "Working Style",
    items: [
      "Teamwork",
      "Problem Solving",
      "Time Management",
      "Critical Thinking",
      "Leadership",
      "Communication",
    ],
  },
];

/* category values used for filtering: "Software" | "Hardware" */
const PROJECTS = [
  {
    id: "library-management-system",
    name: "Library Management System",
    category: "Software",
    tagline: "A command-line ledger that never loses a checkout record.",
    problem:
      "College and community libraries often still run on paper ledgers — inventory, checkouts, and availability tracked by hand, with no easy way to know what's on the shelf right now.",
    description:
      "A CLI application that automates the ledger book itself. It tracks book inventory, logs member checkouts, and calculates availability in real time, persisting every change immediately so no data is at risk if the program closes mid-session.",
    features: [
      "Real-time inventory and availability tracking",
      "Member checkout and return logging",
      "Persistent relational storage — safe against unexpected exits",
    ],
    tech: ["Python", "MySQL", "CLI"],
    github: null,
    demo: null,
  },
  {
    id: "hospital-management-system",
    name: "Hospital Management System",
    category: "Software",
    tagline: "Digitizing patient records, doctor allocation, and appointments.",
    problem:
      "Hospital front-desk workflows — patient intake, assigning doctors, tracking appointments — are still frequently paper-based, which makes them slow and error-prone to search or update.",
    description:
      "A CLI application built to replace that manual paperwork. It automates patient record-keeping, doctor allocation, and appointment tracking on top of a relational MySQL store, with Python handling all application logic.",
    features: [
      "Patient record management",
      "Doctor allocation workflow",
      "Appointment tracking and scheduling",
    ],
    tech: ["Python", "MySQL", "CLI"],
    github: null,
    demo: null,
  },
  {
    id: "rc-car-pragyan",
    name: "RC Car — Pragyan Rover Model",
    category: "Hardware",
    tagline: "A wireless RF-controlled model of ISRO's Chandrayaan-3 rover.",
    problem:
      "Built in Class 12 to explore remote exploration and locomotion mechanics — the same core challenge Pragyan faced on the lunar surface — using accessible, low-cost components.",
    description:
      "A wireless, transmission-controlled RC car engineered as a functional working model of the Pragyan Rover from India's Chandrayaan-3 mission. It demonstrates remote exploration and locomotion over rough terrain using simple, cost-effective RF transmission modules.",
    features: [
      "RF-based wireless control",
      "Locomotion tuned for rough-terrain traversal",
      "Built entirely with low-cost, accessible components",
    ],
    tech: ["RF Transmission Modules", "Embedded Electronics"],
    github: null,
    demo: null,
  },
];

/* category values used for filtering:
   "Cybersecurity" | "AI / ML" | "Programming" | "Web Development" */
const CERTIFICATES = [
  {
    title: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco",
    category: "Cybersecurity",
    date: "JUNE 2026",
    credentialId: null,
    verificationUrl: null,
    image: "assets/certificates/cisco-junior-cybersecurity-analyst-career-path-certificate.jpeg",
  },
  {
    title: "Cyber Security Course Completion Certificate",
    issuer: "Ediglobe (in collaboration with IIT-KGP)",
    category: "Cybersecurity",
    date: "DEC 2025",
    credentialId: null,
    verificationUrl: null,
    image: "assets/certificates/ediglobe-cource-complition-certificate.jpeg",
  },
  {
    title: "Internship Completion Certificate",
    issuer: "Ediglobe",
    category: "Cybersecurity",
    date: "FEB 2026",
    credentialId: null,
    verificationUrl: null,
    image: "assets/certificates/ediglobe-internship-complition-certificate.jpeg",
  },
  {
    title: "Project Completion Certificate",
    issuer: "Ediglobe",
    category: "Cybersecurity",
    date: "FEB 2026",
    credentialId: null,
    verificationUrl: null,
    image: "assets/certificates/ediglobe-project-complition-certificate.jpeg",
  },
  {
    title: "Google Study Jam Program Completion Certificate",
    issuer: "Google",
    category: "AI / ML",
    date: "NOV 2025",
    credentialId: null,
    verificationUrl: null,
    image: "assets/certificates/google-study-jam-certificate.jpeg",
  },
  {
    title: "DSA Workshop Certificate",
    issuer: "MANIT",
    category: "Programming",
    date: "OCT 2025",
    credentialId: null,
    verificationUrl: null,
    image: "assets/certificates/manit-dsa-workshop-certificate.jpeg",
  },
  {
    title: "Web Development Workshop Certificate",
    issuer: "MANIT",
    category: "Web Development",
    date: "FEB 2026",
    credentialId: null,
    verificationUrl: null,
    image: "assets/certificates/manit-webd-workshop-certificate.jpeg",
  },
  {
    title: "Generative AI Certificate",
    issuer: "Outskill",
    category: "AI / ML",
    date: null,
    credentialId: null,
    verificationUrl: null,
    image: "assets/certificates/outskill-genai-certificate.jpeg",
  },
  {
    title: "JavaScript Case Study Certificate",
    issuer: "Independent Case Study",
    category: "Web Development",
    date: "JULY 2026",
    credentialId: null,
    verificationUrl: null,
    image: "assets/certificates/javascript-case-study-certificate.jpeg",
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Technology — Computer Science & Engineering",
    institution: "Lakshmi Narain College of Technology and Science, Bhopal",
    location: "Bhopal, India",
    duration: "Aug 2024 — Aug 2028",
    detail: "Ongoing · Current CGPA: 8.05",
  },
  {
    degree: "Higher Secondary Education (12th)",
    institution: "Gurukul School, Maheshwar Road, Dhamnod",
    location: "Dhar, India",
    duration: "May 2023 — May 2024",
    detail: "Percentage: 79.6%",
  },
  {
    degree: "Secondary Education (10th)",
    institution: "Gurukul School, Maheshwar Road, Dhamnod",
    location: "Dhar, India",
    duration: "May 2021 — May 2022",
    detail: "Percentage: 76.8%",
  },
];

const ACTIVITIES = [
  {
    title: "Smart India Hackathon (SIH) 2025",
    detail: "Participant",
  },
  {
    title: "Google Study Jam Program 2025",
    detail: "Participated and completed",
  },
  {
    title: "Peer Mentoring — Smart Interviews",
    detail: "Mentors peers on coding and problem-solving",
  },
];
