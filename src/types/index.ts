export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
  skills: SkillCategoryProps[];
  credentials: CredentialProps[];
  projects: ProjectProps[];
  about: AboutProps;
}

export interface SkillCategoryProps {
  title: string;
  items: string[];
}

export interface CredentialProps {
  type: "patent" | "certification";
  title: string;
  subtitle: string;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
  logo?: string;
  location?: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string;
  linkSource?: string;
}

export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
