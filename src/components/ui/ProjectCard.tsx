import React from "react";
import { Card, CardHeader, CardContent } from "./Card";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { AppStoreIcon, GitHubIcon, PlayStoreIcon } from "@/components/icons";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string;
    features: string;
    technologiesLabel: string;
    featuresLabel: string;
    githubUrl?: string;
    liveUrl?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
    className?: string;
}

export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
    ({ title, description, technologies, features, technologiesLabel, featuresLabel, githubUrl, liveUrl, appStoreUrl, playStoreUrl, className }, ref) => {
        const techList = technologies.split(", ");
        const featureList = features.split(", ");

        return (
            <Card
                ref={ref}
                variant="elevated"
                className={cn("group hover:shadow-xl transition-all duration-300", className)}
            >
                <CardHeader>
                    <div className="flex items-start justify-between">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {title}
                        </h3>
                        <div className="flex gap-2">
                            {githubUrl && (
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-md hover:bg-muted transition-colors"
                                    aria-label="GitHub Repository"
                                >
                                    <GitHubIcon className="w-5 h-5" />
                                </a>
                            )}
                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-md hover:bg-muted transition-colors"
                                    aria-label="Live Demo"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            )}
                            {appStoreUrl && (
                                <a
                                    href={appStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-md hover:bg-muted transition-colors"
                                    aria-label="App Store"
                                >
                                    <AppStoreIcon className="w-5 h-5" />
                                </a>
                            )}
                            {playStoreUrl && (
                                <a
                                    href={playStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-md hover:bg-muted transition-colors"
                                    aria-label="Play Store"
                                >
                                    <PlayStoreIcon className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        {description}
                    </p>

                    <div className="space-y-3">
                        <div>
                            <h4 className="text-sm font-medium text-foreground mb-2">{technologiesLabel}</h4>
                            <div className="flex flex-wrap gap-2">
                                {techList.map((tech, index) => (
                                    <Badge key={index} variant="success" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-foreground mb-2">{featuresLabel}</h4>
                            <ul className="space-y-1">
                                {featureList.map((feature, index) => (
                                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }
);

ProjectCard.displayName = "ProjectCard"; 