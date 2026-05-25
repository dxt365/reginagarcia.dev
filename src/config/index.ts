import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Regina Garcia — Engineering Manager",
  author: "Regina Garcia",
  description:
    "Engineering Manager based in the SF Bay Area. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/reginagarcia-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Regina Garcia",
    specialty: "Engineering Manager",
    summary:
      "Engineering leader with over a decade building products at Apple and Intuit. Beyond the roadmap, I care about the people, the craft, and shipping things that actually hold up.",
    email: "mariaregina.garcia@gmail.com",
  },
  experience: [
    {
      company: "Intuit",
      position: "Senior Engineering Manager",
      startDate: "May 2025",
      endDate: "Present",
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
      summary: [
        "Built the Knowledge Engine platform from scratch into a self-service tool that let non-technical teams deploy intelligent guided experiences — earning two patents.",
        "Launched Intuit Aid Assist during the CARES Act rollout, helping thousands of small businesses access emergency funding under tight deadline pressure.",
        "Improved QuickBooks France first-time-use conversion by 51%, directly accelerating international market entry.",
      ],
    },
  ],
  projects: [
    {
      name: "QuickBooks Business Feed",
      summary:
        "A business feed feature within QuickBooks that provides real-time updates and insights.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Regina Garcia, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/reginagarcia-big.jpg",
  },
};

// #5755ff
