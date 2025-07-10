import { StaticImageData } from "next/image";

export type NavItem = {
  name: string;
  isActive?: boolean;
};

export interface HeaderProps {
  className?: string;
}

export interface Result {
  title: string;
  metric?: string;
  icon?: string;
}

export interface Project {
  company: string;
  year: string;
  title: string;
  description: string;
  shortDescription: string;
  results: Result[];
  link: string;
  github: string;
  image: string | StaticImageData;
  tags: string[];
  featured?: boolean;
  status?: "Live" | "In Development" | "Archived";
  teamSize?: number;
  duration?: string;
  highlights?: string[];
}

export interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export interface EnhancedProjectCardProps {
  project: Project;
  index: number;
}