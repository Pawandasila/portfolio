export interface Attachment {
  mimeType: string;
  data: string;
}

export interface Message {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: number;
  attachments?: Attachment[];
  isStreaming?: boolean;
}

export interface ProjectResult {
  title: string;
  metric: string;
  icon?: string;
}

export interface ProjectItem {
  id: string | number;
  title: string;
  name: string;
  shortDescription: string;
  description: string;
  results?: ProjectResult[];
  link?: string;
  github?: string;
  image?: string;
  tags?: string[];
  teamSize?: number;
  duration?: string;
  highlights?: string[];
  year?: string;
  company?: string;
  role?: string;
  engagementValue?: string;
  trafficImpact?: string;
  domain?: string;
  status?: string;
  kind?: "folder" | "file";
  children?: ProjectItem[];
}

export interface InternshipItem {
  id: string | number;
  company: string;
  name: string;
  title: string;
  position: string;
  duration: string;
  location?: string;
  image?: string;
  description: string;
  tags?: string[];
}

export interface SkillItem {
  name: string;
  proficiency: string;
  years: string;
}

export interface SocialItem {
  id: number;
  text: string;
  icon: string;
  bg: string;
  link: string;
}

export interface WindowDataRecord {
  activeCategory?: string;
  searchQuery?: string;
  navigationPath?: string[];
  project?: ProjectItem;
  view?: string;
  isLoading?: boolean;
  [key: string]: unknown;
}
