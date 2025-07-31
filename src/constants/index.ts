import { User, FileUser, FolderKanban, Mail, Globe, Smartphone, Database } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";

// Navigation Constants
export const NAV_ICONS = {
    about: User,
    resume: FileUser,
    projects: FolderKanban,
    contact: Mail,
} as const;

// Social Media Constants
export const SOCIAL_MEDIA_ITEMS = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/uğurdanis/",
        icon: LinkedInIcon,
    },
    {
        name: "GitHub",
        url: "https://github.com/ugur-danis",
        icon: GitHubIcon,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/_ugurdanis/",
        icon: InstagramIcon,
    },
] as const;

// Project Category Icons
export const PROJECT_CATEGORY_ICONS = {
    web: Globe,
    mobile: Smartphone,
    backend: Database,
} as const;

// Skills Constants
export const FRONTEND_SKILLS = [
    { name: "React & Next.js", percentage: 95 },
    { name: "TypeScript", percentage: 90 },
    { name: "SAP UI5", percentage: 88 },
    { name: "HTML/CSS/JavaScript", percentage: 92 },
] as const;

export const BACKEND_SKILLS = [
    { name: "Node.js & Express", percentage: 90 },
    { name: "Flutter", percentage: 85 },
    { name: "MongoDB & PostgreSQL", percentage: 80 },
    { name: ".NET Core & C#", percentage: 65 },
] as const;

// Contact Constants
export const CONTACT_EMAIL = "ugurdnis@gmail.com";
export const CONTACT_LOCATION = "Sivas, Türkiye";

// Animation Constants
export const ANIMATION_DURATION = {
    fast: 200,
    normal: 300,
    slow: 500,
    verySlow: 700,
} as const;

// Breakpoints
export const BREAKPOINTS = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
} as const; 