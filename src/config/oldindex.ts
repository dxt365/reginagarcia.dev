import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Regina Garcia — Engineering Leader",
  author: "Regina Garcia",
  description:
    "Engineering Leader with a decade at Apple and Intuit, shipping AI-powered products and leading high-performing teams in the SF Bay Area.",
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
      "Engineering leader with over a decade of application experience at Apple and Intuit — shipping AI-powered products, leading high-performing teams, and bringing LLMs from prototype to production at scale.",
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
        "Leading 13 engineers across two concurrent product lines, from roadmap definition to general availability.",
        "Championing AI-augmented engineering practices — Cursor, MCP, and Claude Code — as a cultural shift that's raised team velocity without sacrificing code quality",
        "Delivering agentic workflows for transaction categorization and invoice generation, reducing manual work for millions of QuickBooks users.",
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
        "Built and scaled a Search platform from early adopter to org-wide infrastructure, adopted by 8+ business units including Apple Support, Apple TV, and Beats.",
        "Led UI engineering for two internal LLM-powered platforms — one for decision-making workflows, one tracking customer sentiment around product launches.",
        "Drove self-service onboarding tooling that eliminated ad-hoc production changes and accelerated launch cycles.",
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
        "Built the Knowledge Engine platform from scratch into a self-service tool that let non-technical teams deploy intelligent guided experiences — earning two patents.",
        "Launched Intuit Aid Assist during the CARES Act rollout, helping thousands of small businesses access emergency funding under tight deadline pressure.",
        "Improved QuickBooks France first-time-use conversion by 51%, directly accelerating international market entry.",
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
        "Patent #11194457 - Knowledge engine auto-generation of guided flow experience",
      subtitle: "Issued December 2021 - Intuit",
    },
    {
      type: "patent",
      title:
        "Patent #20220066795 - Knowledge Engine Auto-Generation of Guided Flow Experience",
      subtitle: "Published March 2022 - Intuit",
    },
    {
      type: "certification",
      title: "Generative AI with Large Language Models - Coursera",
      subtitle: "Certified December 2023",
    },
    {
      type: "certification",
      title: "Python for Everybody - Coursera",
      subtitle: "Certified November 2023",
    },
  ],
  projects: [
    {
      name: "Business Feed",
      summary:
        "Business Feed is an AI-powered insights platform for QuickBooks that surfaces personalized financial recommendations and real-time insights — helping small business owners stay on top of cash flow, expenses, and business health.",
      linkSource: "https://qbo.intuit.com/business-explorer",
      image: "/business-feed.png",
    },
    {
      name: "Freemium",
      summary:
        "QuickBooks Freemium is a no-cost subscription plan that gives small business owners limited access to core QuickBooks features, lowering the barrier to entry for new users.",
      linkSource: "https://quickbooks.intuit.com/oa/online/free",
      image: "/freemium.png",
    },
    {
      name: "Apple Search Platform",
      summary:
        "Search platform adopted by 8+ business units across Apple, growing from a handful of early adopters to an org-wide platform used by teams including Apple Support, Apple TV, and Beats.",
      linkSource: "https://www.apple.com/",
      image: "/apple.jpg",
    },
    {
      name: "Apple Gen AI Platform",
      summary:
        "Led UI engineering for an internal LLM platform enabling teams to query private data sources and accelerate decision-making workflows at scale.",
      linkSource: "https://www.apple.com/",
      image: "/apple.jpg",
    },
    {
      name: "Apple Social",
      summary:
        "Led UI engineering for a social media signals platform giving employees real-time visibility into customer sentiment around product launches, with LLM-powered summarization.",
      linkSource: "https://www.apple.com/",
      image: "/apple.jpg",
    },
    {
      name: "Intuit Aid Assist",
      summary:
        "Intuit Aid Assist is a free version of QuickBooks Online designed to help small businesses navigate U.S. government aid and relief programs.",
      linkSource:
        "https://www.intuit.com/blog/news-social/introducing-intuit-aid-assist-helping-small-businesses-navigate-u-s-government-aid-and-relief-programs/",
      image: "/intuit-aid-assist.png",
    },
  ],
  about: {
    description: `
      Hi, I'm Regina Garcia, a Senior Engineering Manager with a passion for building products that matter and teams that thrive. With deep roots in both hands-on engineering and people leadership, I bring equal fluency across frontend, backend, and AI-powered systems — having shipped platforms at scale with Apple and Intuit. I specialize in the space where product vision meets technical execution: defining roadmaps, coaching engineers at every level, and driving initiatives from early discovery all the way to general availability. Whether I'm championing agentic AI workflows, integrating LLMs into real-world products, or raising the bar on operational excellence, I'm energized by the challenge of building things that are fast, reliable, and genuinely useful — at the scale of millions of users.
    `,
    image: "/reginagarcia-big.jpg",
  },
};
