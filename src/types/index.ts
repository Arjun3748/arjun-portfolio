export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Languages' | 'Core Concepts' | 'Databases' | 'Tools & Security';
  level: 'Core Strength' | 'Certified / Applied';
  iconName?: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  techList: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  track: string;
  period: string;
  hasCertificate: boolean;
  certificateLabel: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI & Security' | 'Research & 6G';
  period: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  paperDoi?: string;
  status: 'Deployed & Cloud' | 'Enterprise Platform' | 'IEEE Published';
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: 'Cisco' | 'HackerRank' | 'Udemy';
  date: string;
  domain: string;
}

export interface PublicationItem {
  title: string;
  conference: string;
  year: string;
  doi: string;
  abstract: string;
  tags: string[];
}

export interface AchievementStats {
  leetCodeSolved: number;
  leetCodeRating: number;
  codeChefSolved: number;
  codeChefRating: number;
  skillRackSolved: number;
  cgpa: number;
  certificationsCount: number;
  publicationsCount: number;
}
