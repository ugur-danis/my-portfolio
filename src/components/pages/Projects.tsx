"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import {
    ExternalLink,
    Github,
    Users,
    Calendar
} from "lucide-react";
import { PROJECT_CATEGORY_ICONS } from "@/constants";
import { Project, TranslationFunction } from "@/types";
import { cn } from "@/lib/utils";

// Components
const ProjectCard = ({ 
    project, 
    t 
}: { 
    project: Project; 
    t: TranslationFunction; 
}) => {
    const CategoryIcon = PROJECT_CATEGORY_ICONS[project.category];

    return (
        <Card 
            variant="default"
            className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
        >
            <CardContent className="p-6">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{project.image}</div>
                    <CategoryIcon className={cn(
                        "w-4 h-4",
                        project.category === 'web' && "text-blue-500",
                        project.category === 'mobile' && "text-green-500",
                        project.category === 'backend' && "text-purple-500"
                    )} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                        <Badge 
                            key={`${tech}-${index}`}
                            variant="primary" 
                            size="sm"
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>

                {/* Project Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{project.date}</span>
                    </div>
                    <Badge 
                        variant={project.status === 'active' ? 'success' : 'primary'}
                        size="sm"
                    >
                        {t(`status.${project.status}`)}
                    </Badge>
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="sm"
                        icon={<Github className="w-4 h-4" />}
                        className="text-muted-foreground hover:text-primary"
                        asChild
                    >
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('code')}
                        </a>
                    </Button>
                    {project.live && (
                        <Button
                            variant="ghost"
                            size="sm"
                            icon={<ExternalLink className="w-4 h-4" />}
                            className="text-muted-foreground hover:text-primary"
                            asChild
                        >
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t('demo')}
                            </a>
                        </Button>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

const ProjectsHeader = ({ 
    title, 
    projectCount, 
    t 
}: { 
    title: string; 
    projectCount: number; 
    t: TranslationFunction; 
}) => (
    <div className="flex items-center justify-between">
        <h2 className="text-xl lg:text-2xl font-bold text-primary">
            {title}
        </h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{projectCount} {t('projectCount')}</span>
        </div>
    </div>
);

// Custom Hooks
const useProjectsData = (t: TranslationFunction): Project[] => {
    return useMemo(() => [
        {
            id: 1,
            title: t('items.0.title'),
            description: t('items.0.description'),
            technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
            image: "🛒",
            category: "web" as const,
            github: "https://github.com/username/ecommerce-app",
            live: "https://ecommerce-app.vercel.app",
            date: "2024",
            status: "completed" as const
        },
        {
            id: 2,
            title: t('items.1.title'),
            description: t('items.1.description'),
            technologies: ["Flutter", "Dart", "Firebase", "Provider"],
            image: "💪",
            category: "mobile" as const,
            github: "https://github.com/username/fitness-app",
            live: null,
            date: "2023",
            status: "completed" as const
        },
        {
            id: 3,
            title: t('items.2.title'),
            description: t('items.2.description'),
            technologies: ["Node.js", "Express", "PostgreSQL", "Socket.io", "JWT"],
            image: "📋",
            category: "backend" as const,
            github: "https://github.com/username/task-api",
            live: "https://task-api.herokuapp.com",
            date: "2023",
            status: "completed" as const
        },
        {
            id: 4,
            title: t('items.3.title'),
            description: t('items.3.description'),
            technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
            image: "🎨",
            category: "web" as const,
            github: "https://github.com/username/portfolio",
            live: "https://portfolio.vercel.app",
            date: "2024",
            status: "active" as const
        },
        {
            id: 5,
            title: t('items.4.title'),
            description: t('items.4.description'),
            technologies: ["React Native", "OpenWeather API", "AsyncStorage", "Geolocation"],
            image: "🌤️",
            category: "mobile" as const,
            github: "https://github.com/username/weather-app",
            live: null,
            date: "2023",
            status: "completed" as const
        },
        {
            id: 6,
            title: t('items.5.title'),
            description: t('items.5.description'),
            technologies: ["React", "Node.js", "MongoDB", "Markdown", "Multer"],
            image: "📝",
            category: "web" as const,
            github: "https://github.com/username/blog-platform",
            live: "https://blog-platform.vercel.app",
            date: "2023",
            status: "completed" as const
        }
    ], [t]);
};

// Main Component
export const Projects = () => {
    const t = useTranslations('projects');
    const projectsData = useProjectsData(t);

    return (
        <AnimatedPage>
            <div className="space-y-6 p-4 lg:p-6 max-w-6xl mx-auto">
                <ProjectsHeader 
                    title={t('title')} 
                    projectCount={projectsData.length} 
                    t={t} 
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsData.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            t={t} 
                        />
                    ))}
                </div>
            </div>
        </AnimatedPage>
    );
}; 