"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
    Zap,
    Code,
    Database,
    Briefcase,
    GraduationCap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { FRONTEND_SKILLS, BACKEND_SKILLS } from "@/constants";
import { Skill, Experience, Education, TranslationFunction } from "@/types";
import { cn } from "@/lib/utils";

// Components
const SkillBar = ({ skill }: { skill: Skill }) => (
    <div className="space-y-1">
        <div className="flex justify-between text-sm">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.percentage}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
                className="bg-primary h-2 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${skill.percentage}%` }}
            />
        </div>
    </div>
);

const SkillsSection = ({
    title,
    icon: Icon,
    skills
}: {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    skills: readonly Skill[];
}) => (
    <div className="space-y-4">
        <h4 className="text-sm lg:text-base font-medium text-foreground flex items-center gap-2">
            <Icon className="text-base text-primary" />
            {title}
        </h4>
        <div className="space-y-4">
            {skills.map((skill, index) => (
                <SkillBar 
                    key={`${skill.name}-${index}`} 
                    skill={skill} 
                />
            ))}
        </div>
    </div>
);

const ExperienceItem = ({ 
    experience, 
    isLast, 
    t 
}: { 
    experience: Experience; 
    isLast: boolean; 
    t: TranslationFunction; 
}) => (
    <div className="relative">
        {!isLast && (
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30" />
        )}
        <div className="relative pl-8">
            <div 
                className={cn(
                    "absolute left-0 top-2 bg-primary rounded-full transition-all duration-300",
                    experience.isActive ? 'w-3 h-3 animate-pulse' : 'w-2 h-2'
                )} 
            />
            <Card 
                variant="default"
                className={cn(
                    "transition-all duration-300 hover:shadow-md",
                    experience.isActive && "border-2 border-primary/50 shadow-lg"
                )}
            >
                <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-medium text-foreground text-lg">{experience.title}</h4>
                        {experience.isActive && (
                            <Badge variant="primary" size="sm" className="animate-pulse">
                                {t('active')}
                            </Badge>
                        )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                        {experience.company} • {experience.period}
                    </p>
                    <p className="text-sm text-foreground leading-relaxed">{experience.description}</p>
                </CardContent>
            </Card>
        </div>
    </div>
);

const EducationCard = ({ 
    education, 
    t 
}: { 
    education: Education; 
    t: TranslationFunction; 
}) => (
    <Card 
        variant="default"
        className={cn(
            "text-center transition-all duration-300 hover:border-primary/50 hover:shadow-md relative",
            education.isActive && "border-2 border-primary/50 shadow-lg"
        )}
    >
        <CardContent className="p-4">
            {education.isActive && (
                <Badge 
                    variant="primary" 
                    size="sm" 
                    className="absolute top-2 right-2 animate-pulse"
                >
                    {t('active')}
                </Badge>
            )}
            <GraduationCap className="text-3xl mb-3 mx-auto text-primary" />
            <h4 className="font-medium text-foreground mb-2 text-lg">{education.title}</h4>
            <p className="text-sm text-muted-foreground mb-1">{education.university}</p>
            <p className="text-xs text-muted-foreground">{education.date}</p>
        </CardContent>
    </Card>
);

const SectionHeader = ({
    title,
    icon: Icon
}: {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
}) => (
    <CardHeader>
        <h3 className="text-lg lg:text-xl font-semibold text-primary flex items-center gap-2">
            <Icon className="text-2xl" />
            {title}
        </h3>
    </CardHeader>
);

// Custom Hooks
const useResumeData = (t: TranslationFunction) => {
    const experiences = useMemo((): Experience[] => [
        {
            title: 'Frontend Developer',
            company: 'Detaysoft',
            period: t('experience.detaysoft.period'),
            description: t('experience.detaysoft.description'),
            isActive: true,
        },
        {
            title: 'Software Developer Intern',
            company: 'Detaysoft',
            period: t('experience.detaysoft.intern.period'),
            description: t('experience.detaysoft.intern.description'),
        },
        {
            title: 'Web Designer',
            company: 'Sonart Ajans',
            period: t('experience.sonart.period'),
            description: t('experience.sonart.description'),
        },
        {
            title: 'Freelance Web Developer',
            company: 'Freelance',
            period: t('experience.freelance.period'),
            description: t('experience.freelance.description'),
        },
        {
            title: t('experience.intern.title'),
            company: 'Çamlıbel Elektrik Dağıtım A.Ş.',
            period: t('experience.intern.period'),
            description: t('experience.intern.description'),
        },
    ], [t]);

    const educationData = useMemo((): Education[] => [
        {
            title: t('education.managementInformationSystems.title'),
            university: t('education.managementInformationSystems.university'),
            date: t('education.managementInformationSystems.date'),
            isActive: true,
        },
        {
            title: t('education.computerProgramming.title'),
            university: t('education.computerProgramming.university'),
            date: t('education.computerProgramming.date'),
        },
        {
            title: t('education.informationTechnology.title'),
            university: t('education.informationTechnology.university'),
            date: t('education.informationTechnology.date'),
        },
    ], [t]);

    return { experiences, educationData };
};

// Main Component
export const Resume = () => {
    const t = useTranslations('resume');
    const { experiences, educationData } = useResumeData(t);

    return (
        <AnimatedPage>
            <div className="space-y-8 p-4 lg:p-6 max-w-6xl mx-auto">
                <header className="text-center mb-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                        {t('title')}
                    </h2>
                    <p className="text-muted-foreground">
                        {t('description')}
                    </p>
                </header>

                {/* Skills Section */}
                <Card variant="default">
                    <SectionHeader title={t('skillsTitle')} icon={Zap} />
                    <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <SkillsSection
                                title={t('skills.frontend.title')}
                                icon={Code}
                                skills={FRONTEND_SKILLS}
                            />
                            <SkillsSection
                                title={t('skills.backend.title')}
                                icon={Database}
                                skills={BACKEND_SKILLS}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Experience Section */}
                <Card variant="default">
                    <SectionHeader title={t('experienceTitle')} icon={Briefcase} />
                    <CardContent>
                        <div className="space-y-6">
                            {experiences.map((experience, index) => (
                                <ExperienceItem
                                    key={`${experience.title}-${experience.company}-${index}`}
                                    experience={experience}
                                    isLast={index === experiences.length - 1}
                                    t={t}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Education Section */}
                <Card variant="default">
                    <SectionHeader title={t('educationTitle')} icon={GraduationCap} />
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {educationData.map((education, index) => (
                                <EducationCard
                                    key={`${education.title}-${index}`}
                                    education={education}
                                    t={t}
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AnimatedPage>
    );
}; 