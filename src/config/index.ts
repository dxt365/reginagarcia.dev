import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Regina Garcia — Engineering Leader",
  author: "Regina Garcia",
  description:
    "Engineering Leader who shipped products at Apple and Intuit, shipping AI-powered products and leading high-performing teams in the SF Bay Area.",
  lang: "en",
  siteLogo: "/reginagarcia-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Patents & Credentials", href: "#skills" },
  ],
  socialLinks: [
    // { text: "LinkedIn", href: "https://www.linkedin.com/in/regina-garcia" },
  ],
  socialImage: "/reginagarcia-big.jpg",
  canonicalURL: "https://reginagarcia.dev",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Regina Garcia",
    specialty: "Engineering Leader",
    summary:
      "Engineering leader with experience building and shipping products at Apple and Intuit — driving full engineering cycles from roadmap to general availability, with a strong background in AI-augmented workflows, LLM integration, and platform engineering.",
    email: "mariaregina.garcia@gmail.com",
  },
  experience: [
    {
      company: "Intuit",
      position: "Senior Engineering Manager",
      startDate: "May 2025",
      endDate: "Present",
      logo: "/logos/intuit.svg",
      location: "Mountain View, CA",
      summary: [
        "Lead 13 engineers across Freemium (targeting 1M annualized subscriptions) and Business Feed — from roadmap definition to general availability.",
        "Drove 15% lift in user engagement and 19% increase in take rates on Business Feed, with agentic workflows for transaction categorization and invoice generation.",
        "Championed Cursor, MCP, and Claude Code as a cultural shift that raised team velocity while maintaining 99.99% service availability at scale.",
      ],
    },
    {
      company: "Apple",
      position: "Engineering Lead",
      startDate: "Sept 2020",
      endDate: "May 2025",
      logo: "/logos/apple.svg",
      location: "Sunnyvale, CA",
      summary: [
        "Scaled a Search platform from early adopters to org-wide infrastructure across 8+ business units — Apple Support, Apple TV, Beats, and more.",
        "Led UI engineering for Apple's earliest internal LLM tooling: a decision-making platform and a social signals platform with LLM-powered summarization.",
        "Built self-service onboarding tooling that eliminated ad-hoc production changes and accelerated launch cycles.",
      ],
    },
    {
      company: "Intuit",
      position: "Senior Software Engineer",
      startDate: "Jan 2019",
      endDate: "September 2020",
      logo: "/logos/intuit.svg",
      location: "Mountain View, CA",
      summary: [
        "Built the Knowledge Engine platform from scratch into a self-service tool for non-technical teams — earning two patents.",
        "Led rapid development of Intuit Aid Assist during the CARES Act rollout, facilitating emergency funding for thousands of small businesses.",
        "Increased QuickBooks France first-time-use conversion by 51%, accelerating international market entry.",
      ],
    },
  ],
  skills: [
    {
      title: "Leadership",
      items: [
        "People Management",
        "Team Building",
        "Performance Reviews",
        "Roadmap Planning",
        "Cross-functional",
        "Hiring",
      ],
    },
    {
      title: "AI & Platforms",
      items: [
        "Agentic AI Workflows",
        "LLM Integration",
        "Model Context Protocol",
        "Claude Code / Cursor",
        "API Design",
      ],
    },
    {
      title: "Engineering",
      items: [
        "React / Next.js",
        "TypeScript / Node.js",
        "Python / AWS",
        "PostgreSQL / Docker",
        "Nginx / Git",
      ],
    },
  ],
  credentials: [
    {
      type: "patent",
      title:
        "Patent #11194457 — Knowledge engine auto-generation of guided flow experience",
      subtitle: "Issued December 2021 · Intuit",
    },
    {
      type: "patent",
      title:
        "Patent #20220066795 — Knowledge Engine Auto-Generation of Guided Flow Experience",
      subtitle: "Published March 2022 · Intuit",
    },
    {
      type: "certification",
      title: "Generative AI with Large Language Models — Coursera",
      subtitle: "Certified December 2023",
    },
    {
      type: "certification",
      title: "Python for Everybody — Coursera",
      subtitle: "Certified November 2023",
    },
  ],
  projects: [
    {
      name: "Business Feed",
      summary:
        "AI-powered insights platform for QuickBooks surfacing personalized financial recommendations and real-time insights for small business owners.",
      linkSource: "https://qbo.intuit.com/business-explorer",
      image: "/business-feed.png",
    },
    {
      name: "Freemium",
      summary:
        "No-cost QuickBooks plan lowering the barrier to entry for small business owners — currently targeting 1M annualized subscriptions.",
      linkSource: "https://quickbooks.intuit.com/oa/online/free",
      image: "/freemium.png",
    },
    {
      name: "Apple Search Platform",
      summary:
        "Search platform adopted by 8+ Apple business units — from early adopters to org-wide infrastructure used by Apple Support, Apple TV, and Beats.",
      linkSource: "https://www.apple.com/",
      image: "/apple.jpg",
    },
    {
      name: "Apple Gen AI Platform",
      summary:
        "Internal LLM platform enabling teams to query private data sources and accelerate decision-making workflows at scale.",
      linkSource: "https://www.apple.com/",
      image: "/apple.jpg",
    },
    {
      name: "Apple Social",
      summary:
        "Social media signals platform giving employees real-time, LLM-summarized visibility into customer sentiment around product launches.",
      linkSource: "https://www.apple.com/",
      image: "/apple.jpg",
    },
    {
      name: "Intuit Aid Assist",
      summary:
        "Free tool helping thousands of small businesses navigate U.S. government aid programs — built and shipped during the CARES Act rollout.",
      linkSource:
        "https://www.intuit.com/blog/news-social/introducing-intuit-aid-assist-helping-small-businesses-navigate-u-s-government-aid-and-relief-programs/",
      image: "/intuit-aid-assist.png",
    },
    // {
    //   name: "Player One — Booking Engine",
    //   summary:
    //     "Full-stack booking engine built solo to replace a manual Google Sheets workflow. Next.js, Node.js, AWS, and payments — fully live in production.",
    //   linkSource: "",
    //   image: "/player-one.png",
    // },
  ],
  about: {
    description: `
     I am an Engineering Leader focused on the intersection of product strategy and technical execution. Having shipped global-scale platforms at Apple and Intuit, I specialize in building high-performing, multi-disciplinary teams where engineers thrive. Beyond the office, I am a marathoner and currently mastering Japanese.`,
    image: "/reginagarcia-big.jpg",
  },
};
