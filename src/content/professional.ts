import type {
  Experience,
  ProfessionalSection,
  Project,
  SkillGroup,
  SupportingLinkItem,
} from "./types";
import { site } from "./site";

export const professionalSections: ProfessionalSection[] = [
  {
    id: "experience",
    roomNumber: "01",
    title: "Experience",
    description:
      "Professional practice, leadership, service, and the roles that shaped how I work.",
    href: "/professional/experience",
    motif: "route",

    collage: [
      "ServiceNow",
      "Microsoft Defender",
      "Sentinel",
      "Azure",
      "Power Automate",
      "Agile / Scrum",
    ],
    dateRange: "2021 – Present",
    actionLabel: "Enter Room",
  },
  {
    id: "projects",
    roomNumber: "02",
    title: "Projects",
    description:
      "Selected software, product, and collaborative technical work.",
    href: "/professional/projects",
    motif: "stack",

    collage: [
      "Python",
      "TypeScript",
      "React",
      "Next.js",
      "FastAPI",
      "Neo4j",
      "PostgreSQL",
      "Docker",
      "Flask",
      "Java",
      "Firebase",
      "Linux",
      "C",
    ],
    dateRange: "2023 – 2025",
    actionLabel: "Enter Room",
  },
];

export const supportingLinks: SupportingLinkItem[] = [
  {
    id: "resume",
    label: "Resume",
    href: site.links.resume,
    note: "PDF",
    external: true,
  },
  {
    id: "toolkit",
    label: "Toolkit",
    href: "/professional/toolkit",
    note: "Languages, frameworks, tools",
  },
];

export const experiences: Experience[] = [

  {
    id: "equitable-life",
    role: "Co-op Intern, IT Infrastructure",
    company: "Equitable Life Insurance of Canada",
    location: "Waterloo, Ontario, Canada",
    dateRange: "Sep. 2025 – Apr. 2026",
    collection: "practice",
    featured: true,
    narrative:
      "A co-op placement on the IT infrastructure team at a Canadian insurance company. I work inside two external partner projects, all run through Agile boards, user stories, defects, and sprints. Most of my day is ServiceNow ITSM automation, covering catalog items, ticket workflows, approvals, and fulfillment, plus the system administration, testing, and documentation that keeps infrastructure delivery moving across teams.",
    contributions: [
      {
        label: "Automation",
        text: "Supported ServiceNow ITSM automation spanning catalog items, ticket workflows, approvals, and fulfillment.",
      },
      {
        label: "Delivery",
        text: "Contributed to two external-partner projects organised through Agile boards, user stories, defects, and sprints.",
      },
      {
        label: "Operations",
        text: "Assisted system administration, testing, and documentation across cross-team IT infrastructure delivery.",
      },
    ],
    catalogueNotes: [
      "Contributed to 2 external-partner projects using Agile boards, user stories, defects, and sprints",
      "Supported ServiceNow ITSM automation across catalog items, ticket workflows, approvals, and fulfillment",
      "Assisted system administration, testing, documentation, and cross-team IT infrastructure delivery",
    ],
    tags: ["ServiceNow", "ITSM Automation", "Agile Delivery", "IT Infrastructure"],
    image: "/experience/equitable-badge.jpg",
    imageAlt:
      "An Equitable Life employee badge on a white lanyard, resting on a stone surface.",
  },
  {
    id: "lotus-pharmaceutical",
    role: "Cybersecurity Analyst, IT Infrastructure",
    company: "Lotus Pharmaceutical Co Ltd.",
    location: "Taipei, Taiwan",
    dateRange: "June 2024 – Aug. 2024",
    collection: "practice",
    narrative:
      "A summer on the IT infrastructure team investigating security incidents through email security alerts, firewall logs, antivirus and EDR detections, and endpoint activity. I built a tool that automated the investigation workflow and cut review time by 84%, and ran a company wide phishing drill to improve how people recognised and reported phishing.",
    contributions: [
      {
        label: "Investigation",
        text: "Traced incidents through email security alerts, firewall logs, antivirus/EDR detections, and endpoint activity analysis.",
      },
      {
        label: "Automation",
        text: "Developed an incident investigation tool that automated analysis workflows and cut review time by 84%.",
      },
      {
        label: "Awareness",
        text: "Ran a company-wide phishing drill to strengthen security awareness, phishing response, and incident readiness.",
      },
    ],
    catalogueNotes: [
      "Investigated cybersecurity incidents through email security alerts, firewall logs, antivirus/EDR detections, and endpoint activity analysis",
      "Developed incident investigation tool that automated analysis workflows and reduced review time by 84%",
      "Conducted company-wide phishing drill to improve employee security awareness, phishing response, and incident readiness",
    ],
    tags: ["Incident Response", "EDR", "Security Automation"],
  },
  {
    id: "hack-the-valley-dev",
    role: "Web Developer",
    company: "Hack the Valley",
    location: "Toronto, Ontario, Canada",
    dateRange: "Oct. 2024 – Present",
    collection: "practice",
    narrative:
      "Ongoing web development for a University of Toronto hackathon. I build applicant dashboard workflows with React, Next.js, and TypeScript, and optimise the event pages for SEO, CMS integration, performance, and responsive UI. The work runs across the full stack, including backend APIs and server maintenance.",
    contributions: [
      {
        label: "Front End",
        text: "Builds applicant dashboard workflows using React, Next.js, TypeScript, and GitHub.",
      },
      {
        label: "Performance",
        text: "Optimises event pages for SEO, CMS integration, performance, and responsive UI.",
      },
      {
        label: "Full Stack",
        text: "Supports development across the frontend, backend APIs, and server maintenance.",
      },
    ],
    catalogueNotes: [
      "Build applicant dashboard workflows using React, Next.js, TypeScript, and GitHub",
      "Optimize event pages for SEO, CMS integration, performance, and responsive UI",
      "Supported full-stack development across frontend, backend APIs, and server maintenance",
    ],
    tags: ["React", "Next.js", "TypeScript"],
    link: {
      label: "Related work in Room 02",
      href: "/professional/projects#hack-the-valley-website",
    },
  },

  {
    id: "rocsaut",
    role: "Operation Director",
    company:
      "Taiwan Republic of China Student Association at University of Toronto (ROCSAUT)",
    location: "Toronto, Ontario, Canada",
    dateRange: "May 2025 – May 2026",
    collection: "earlier",
    narrative:
      "I direct operations for the Taiwanese student association at the University of Toronto. That means leading development of an alumni platform on Next.js, PostgreSQL, and FastAPI, coordinating an onboarding guide for incoming students, and managing cultural events, alumni outreach, and the executive team's day to day.",
    tags: ["Leadership", "Operations", "Community Building"],
  },
  {
    id: "hack-the-valley-sponsorship",
    role: "Sponsorship Coordinator, Technical Judge",
    company: "Hack the Valley",
    location: "Toronto, Ontario, Canada",
    dateRange: "Mar. 2024 – Oct. 2024",
    collection: "earlier",
    narrative:
      "I handled sponsorship outreach and partner communication for the hackathon, then judged 30 technical projects across web and mobile, AI/ML, and cybersecurity tracks, working with 30+ other judges to keep the evaluation criteria consistent.",
    tags: ["Partnerships", "Communication", "Technical Judging"],
  },
  {
    id: "namun",
    role: "Crisis Analyst",
    company: "North American Model United Nations",
    location: "Toronto, Ontario, Canada",
    dateRange: "Oct. 2023 – Feb. 2024",
    collection: "earlier",
    narrative:
      "I ran live crisis scenarios for cybersecurity focused committee simulations. That meant monitoring delegate decisions in real time, adjusting the scenario to keep the pressure on, and keeping the operational records the committee relied on to make decisions.",
    tags: ["Working Under Pressure", "Research", "Scenario Design"],
  },
  {
    id: "coco",
    role: "Barista",
    company: "Coco Fresh Tea & Juice",
    location: "Toronto, Ontario, Canada",
    dateRange: "May 2023 – Apr. 2024",
    collection: "earlier",
    narrative:
      "Front of house work in a busy tea shop. I took orders and handled questions, reconciled daily sales and cash at close, and kept drink quality consistent with the team through high volume shifts.",
    tags: ["Customer Service", "Teamwork", "Working Under Pressure"],
  },
  {
    id: "wagyu-lab",
    role: "Server",
    company: "Wagyu Lab",
    location: "Taipei, Taiwan",
    dateRange: "May 2022 – Aug. 2022",
    collection: "earlier",
    narrative:
      "Fine dining service in Taipei. I presented multi course seasonal menus and the story behind each dish, recommended wine pairings, and closed each day with transactions, inventory checks, and day end accounting.",
    tags: ["Communication", "Service", "Attention to Detail"],
  },
  {
    id: "next-generation-english",
    role: "SAT Math Tutor",
    company: "Next Generation English",
    location: "Taipei, Taiwan",
    dateRange: "Mar. 2022 – Aug. 2022",
    collection: "earlier",
    narrative:
      "I designed SAT math lesson plans and coached students through question formats, timing strategies, and the core concepts they needed. The support was individual, aimed at building confidence and test day readiness.",
    tags: ["Teaching", "Planning", "Communication"],
  },
  {
    id: "start-math",
    role: "Receptionist",
    company: "Start Math Learning Centre",
    location: "Taipei, Taiwan",
    dateRange: "Sep. 2021 – Aug. 2022",
    collection: "earlier",
    narrative:
      "Front desk coordination for a Taipei learning centre. I managed scheduling and communication between students, parents, and instructors, and guided students through their assignments, which contributed to a 15% improvement in student performance.",
    tags: ["Organization", "Coordination", "Client Communication"],
  },
];

export const projects: Project[] = [
  {
    id: "personal-website",
    title: "Personal Website",
    year: "July 2026",
    type: "Full-Stack Web",
    featured: true,
    description:
      "A personal site I designed and built from scratch, from the visual design through to the production build. You are looking at it.",
    role: "Designed and built end to end",
    challenge:
      "Building every animation, page transition, and theme in plain CSS, so the whole site ships with React and Next.js as its only runtime dependencies.",
    outcome:
      "All 12 routes statically prerendered. Live at katepchuang.com.",
    tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    image: "/projects/personal-website.jpg",
    imageAlt:
      "The record store homepage, showing the two album covers for Selected Works and Life in Motion.",
    href: "https://katepchuang.com",
    repo: "https://github.com/Lilsofie/personal-web",
  },
  {
    id: "hack-the-valley-website",
    title: "Hack the Valley Website",
    year: "June 2026",
    type: "Event Platform",
    description:
      "The website for Hack the Valley, a hackathon at the University of Toronto. Designed and developed full stack, front end to back end.",
    challenge:
      "Building dedicated dashboards and workflows for three groups at once: hackers, applicants, and administrators.",
    outcome:
      "Added interactive animations and sound effects to make the event pages more engaging.",
    tags: ["FastAPI", "Python", "Docker", "PostgreSQL", "TypeScript", "Next.js"],
    href: "https://hackthevalley.io",
    image: "/projects/hack-the-valley.jpg",
    imageAlt:
      "The Hack the Valley 11 landing page: an illustrated night forest with a lit cabin and an Apply Now button.",
  },
  {
    id: "literature-search-engine",
    title: "Literature Search Engine",
    year: "Sept. 2024",
    type: "Information Retrieval",
    description:
      "A search engine that helps you find literature documents based on what you need.",
    challenge:
      "Writing and tuning custom ranking algorithms so the results that come back are actually relevant.",
    outcome:
      "Runs Cypher queries against a Neo4j database of 5,000+ records.",
    tags: ["Python", "FastAPI", "Neo4j", "REST API"],
    image: "/projects/search-engine.jpg",
    imageAlt:
      "The search interface with a query typed in and a list of suggested questions below it.",
    imageFit: "contain",
  },
  {
    id: "analysis-tool",
    title: "IP, Domain & URL Analysis Tool",
    year: "July 2024",
    type: "Cybersecurity Tooling",
    description:
      "A tool that shows you everything you need to investigate a cybersecurity incident, in one place.",
    challenge:
      "Bringing data from 5 external APIs into a single view, using REST calls with a Python back end.",
    tags: ["JavaScript", "HTML/CSS", "Flask", "Python", "REST API"],
    image: "/projects/analysis-tool.jpg",
    imageAlt:
      "The Analysis Tool start screen, with a field to enter an IP, domain, or URL and a dropdown to pick which.",
    imageFit: "contain",
    repo: "https://github.com/Lilsofie/AnalysisTool",
  },
  {
    id: "department-communication-app",
    title: "Department Communication App",
    year: "Nov. 2023",
    type: "Android · School Project",
    description:
      "An Android app that handles CMS departmental communication for events and announcements.",
    role: "Built with a team using Scrum and Figma",
    challenge:
      "Storing and retrieving everything through the Firebase Realtime Database.",
    outcome: "Unit and Espresso tests written with JUnit and Mockito.",
    tags: ["Java", "Figma", "Android Studio", "Firebase", "JUnit", "Mockito", "Scrum"],
    repo: "https://github.com/tjhiaj/b07project",
  },
  {
    id: "eventful",
    title: "Eventful",
    year: "Oct. 2023",
    type: "Mobile App",
    description: "An app that simplifies your event planning process.",
    role: "Team member, working through GitHub",
    challenge:
      "Building a responsive, interactive interface with React Native Paper.",
    tags: ["JavaScript/TypeScript", "React Native", "HTML/CSS", "GitHub"],
    href: "https://devpost.com/software/eventful-puhaj9",
    image: "/projects/eventful.png",
    imageAlt: "The Eventful app mark: three rounded blocks arranged in a cluster.",
    imageFit: "contain",
    repo: "https://github.com/conrad-mo/Eventful",
  },
  {
    id: "not-that-deep",
    title: "Not that Deep",
    year: "Aug. 2023",
    type: "Web App",
    description: "A daily reminder to enjoy life.",
    challenge:
      "RESTful communication with a custom back-end API so the content updates each day.",
    outcome: "Published on Devpost.",
    tags: ["JavaScript/TypeScript", "React", "HTML/CSS", "REST", "GitHub"],
    image: "/projects/not-that-deep.jpg",
    imageAlt:
      "The Not that Deep title card: hand-drawn lettering over a slate background, with the line \"for unserious friendships\".",
    href: "https://devpost.com/software/not-that-deep",
  },
  {
    id: "system-monitoring-tool",
    title: "System Monitoring Tool",
    year: "April 2023",
    type: "Systems Programming",
    description:
      "A system monitoring tool that reports different metrics on how a given system is being used.",
    challenge:
      "Handling incoming signals such as Ctrl-Z and Ctrl-C for process control, with concurrent processing through fork() and pipes, and error handling that fails gracefully.",
    tags: ["Linux", "C"],
    image: "/projects/monitoring-tool.jpg",
    imageAlt:
      "Project notes describing how the tool uses fork, pipes, and waitpid to run each monitoring task concurrently.",
    imageFit: "contain",
    repo: "https://github.com/Lilsofie/System-Monitoring-Tool",
  },
];

export const featuredProject = () =>
  projects.find((p) => p.featured) ?? projects[0];

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["SQL", "Java", "Python", "C", "JavaScript/TypeScript", "HTML/CSS"],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    items: [
      "React",
      "React Native",
      "Tailwind CSS",
      "Next.js",
      "JUnit",
      "Figma",
      "Flask",
      "FastAPI",
    ],
  },
  {
    id: "tools",
    label: "Developer Tools",
    items: [
      "Azure",
      "Scrum",
      "Git",
      "Postman",
      "Firebase",
      "Android Studio",
      "Linux",
      "GitHub",
      "REST API",
      "Microsoft Defender/Sentinel",
      "Power Automate",
      "Xcode",
    ],
  },
];

export const experiencesByCollection = (c: Experience["collection"]) =>
  experiences.filter((e) => e.collection === c);

export const featuredExperience = () =>
  experiences.find((e) => e.featured && e.collection === "practice") ??
  experiencesByCollection("practice")[0];

export const getExperience = (id: string) =>
  experiences.find((e) => e.id === id);
export const getProject = (id: string) => projects.find((p) => p.id === id);
