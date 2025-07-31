// Navigation Types
export interface NavItem {
    name: string;
    href: string;
    icon: React.ReactNode;
}

// Project Types
export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    category: 'web' | 'mobile' | 'backend';
    github: string | null;
    live: string | null;
    date: string;
    status: 'completed' | 'active';
}

// Skill Types
export interface Skill {
    name: string;
    percentage: number;
}

// Experience Types
export interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    isActive?: boolean;
}

// Education Types
export interface Education {
    title: string;
    university: string;
    date: string;
    isActive?: boolean;
}

// Contact Types
export interface ContactInfo {
    icon: React.ReactNode;
    title: string;
    value: string;
    link: string | null;
}

// Social Media Types
export interface SocialMediaItem {
    name: string;
    url: string;
    icon: React.ElementType;
}

// Translation Function Type
export interface TranslationFunction {
    (key: string): string;
}

// Theme Types
export type Theme = 'light' | 'dark';

// Route Types
export type RouteType = '#about' | '#resume' | '#projects' | '#contact'; 