export const SITE_CONFIG = {
  name: 'Muhammad Niam Makhali',
  title: 'Psychology, Psychometrics & Digital Innovation',
  email: 'niammakhalii@gmail.com',
  initials: 'NM',
  description:
    "I work at the intersection of psychology and technology, combining research, psychological measurement, and digital development to explore new possibilities."
};


export interface SkillCategory {
  title: string;
  icon: 'brain' | 'analytics' | 'research' | 'code' | 'ai' | 'people';
  items: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Psychology & Psychometrics',
    icon: 'brain',
    items: [
      'Psychological Measurement',
      'Instrument Development',
      'Instrument Adaptation',
      'Cognitive Assessment',
      'Automatic Item Generation',
    ],
  },
  {
    title: 'Data Analytics',
    icon: 'analytics',
    items: [
      'Statistical Modelling',
      'Regression Analysis',
      'CFA & SEM',
      'Data Visualisation',
      'Automated Reporting',
    ],
  },
  {
    title: 'Research & Methodology',
    icon: 'research',
    items: [
      'Research Design',
      'Survey Research',
      'Experimental Research',
      'Data Quality Assessment',
      'Scientific Writing',
    ],
  },
  {
    title: 'Digital Development',
    icon: 'code',
    items: [
      'AI-Assisted Coding',
      'Web Application Development',
      'Digital Workflow Design',
      'System Implementation',
      'Workflow Automation',
    ],
  },
  {
    title: 'Applied Artificial Intelligence',
    icon: 'ai',
    items: [
      'Prompt Engineering',
      'AI-Assisted Content Generation',
      'AI Output Evaluation',
      'AI Workflow Integration',
      'AI-Assisted Assessment Development',
    ],
  },
  {
    title: 'Project & People Management',
    icon: 'people',
    items: [
      'Project Coordination',
      'Team Leadership',
      'Stakeholder Engagement',
      'Workshop Facilitation',
      'Knowledge Sharing',
    ],
  },
];

export const TOOLS = [
  'R',
  'RStudio',
  'Positron',
  'Quarto',
  'Codex',
  'Antigravity IDE',
  'Google Sheets',
  'Microsoft Office',
  'GitHub',
  'Cloudflare',
];

export const SKILLS = SKILL_CATEGORIES.flatMap((category) => category.items);