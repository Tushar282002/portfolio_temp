import {
  Cpu,
  Code2,
  Layers,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export interface SkillGroup {
  name: string;
  icon: LucideIcon;
  skills: string[];
  accent: string;
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: 'Languages',
    icon: Code2,
    accent: '199 92% 55%',
    skills: ['C++', 'Java', 'JavaScript'],
  },
  {
    name: 'Frontend',
    icon: Layers,
    accent: '160 70% 50%',
    skills: ['React', 'Angular', 'HTML', 'CSS'],
  },
  {
    name: 'Backend',
    icon: Server,
    accent: '43 96% 56%',
    skills: ['Node.js', 'REST APIs'],
  },
  {
    name: 'DevOps',
    icon: Cpu,
    accent: '280 65% 60%',
    skills: ['Docker', 'Kubernetes', 'GitHub Actions'],
  },
  {
    name: 'Database',
    icon: Database,
    accent: '0 72% 56%',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    name: 'Tools',
    icon: Wrench,
    accent: '199 92% 55%',
    skills: ['Grafana', 'Dynatrace', 'Jira', 'ServiceNow', 'Git', 'Linux'],
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  current?: boolean;
}

export const EXPERIENCES: Experience[] = [
  {
    role: 'Associate Software Engineer',
    company: 'BNP Paribas',
    period: 'Aug 2025 – Present',
    current: true,
    highlights: [
      'Migrating legacy WPF application to Angular',
      'Building CI/CD pipelines',
      'Modernizing applications for 3500+ users',
    ],
  },
  {
    role: 'IT Intern',
    company: 'BNP Paribas',
    period: 'Feb 2025 – Aug 2025',
    highlights: [
      'Python Automation',
      'React Dashboard',
      'Health Monitoring',
    ],
  },
];

export interface Achievement {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'LeetCode Knight Badge',
    subtitle: 'Rating 1858 · Top 5.65%',
    icon: Cpu,
    accent: '199 92% 55%',
  },
  {
    title: '2nd Runner Up — Chase the Code',
    subtitle: 'Competitive programming finalist',
    icon: Code2,
    accent: '160 70% 50%',
  },
  {
    title: 'Top 1% — IITM NPTEL',
    subtitle: 'Probability & Statistics',
    icon: Layers,
    accent: '43 96% 56%',
  },
  {
    title: 'Top 3 — Inter Department Coding',
    subtitle: 'Chandigarh University',
    icon: Server,
    accent: '280 65% 60%',
  },
  {
    title: 'HACKNSUT 2023 Finalist',
    subtitle: 'EngageCart — AI retail assistant',
    icon: Database,
    accent: '0 72% 56%',
  },
  {
    title: 'Airbus Aerothon 6.0 Finalist',
    subtitle: 'Aerospace hackathon',
    icon: Wrench,
    accent: '199 92% 55%',
  },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Tushar282002',
  linkedin: 'https://www.linkedin.com/in/tushar-gangurde-/',
  twitter: 'https://x.com/tushu282002?t=krYfdDOqbUdmWSDJAUKnHA&s=09',
  email: 'mailto:tushargangurde859@gmail.com',
  resume: '/resume.pdf',
};

export const HERO_STATS = [
  { label: 'Years Experience', value: 1, suffix: '+' },
  { label: 'Problems Solved', value: 600, suffix: '+' },
  { label: 'LeetCode Rating', value: 1858, suffix: '' },
  { label: 'IEEE Author', value: 1, suffix: '', display: 'IEEE' },
  { label: 'Hackathon Finalist', value: 2, suffix: 'x', display: '2x' },
];

export const CODING_STATS = [
  {
    platform: 'LeetCode',
    metrics: [
      { label: 'Rating', value: 1858 },
      { label: 'Badge', value: 'Knight' },
      { label: 'Top', value: '5.65%' },
      { label: 'Solved', value: '600+' },
    ],
    accent: '199 92% 55%',
  },
  {
    platform: 'GeeksforGeeks',
    metrics: [
      { label: 'Institute Rank', value: '21' },
      { label: 'Rating', value: '1847' },
      { label: 'Problems', value: '400+' },
      { label: 'Streak', value: 'Active' },
    ],
    accent: '160 70% 50%',
  },
];

export const GITHUB_USERNAME = 'Tushar282002';
