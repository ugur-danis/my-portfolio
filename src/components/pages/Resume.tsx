"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import {
    Zap,
    Code,
    Database,
    Briefcase,
    GraduationCap,
} from "lucide-react";
import { useTranslations } from "next-intl";

// Types
interface Skill {
    name: string;
    percentage: number;
}

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
    isActive?: boolean;
}

interface Education {
    title: string;
    university: string;
    date: string;
    isActive?: boolean;
}

// Constants
const FRONTEND_SKILLS: Skill[] = [
    { name: "React & Next.js", percentage: 95 },
    { name: "TypeScript", percentage: 90 },
    { name: "SAP UI5", percentage: 88 },
    { name: "HTML/CSS/JavaScript", percentage: 92 },
];

const BACKEND_SKILLS: Skill[] = [
    { name: "Node.js & Express", percentage: 90 },
    { name: "Flutter", percentage: 85 },
    { name: "MongoDB & PostgreSQL", percentage: 80 },
    { name: ".NET Core & C#", percentage: 65 },
];

// Components
const SkillBar = ({ skill }: { skill: Skill; }) => (
    <div>
        <div className="flex justify-between text-sm mb-1">
            <span>{skill.name}</span>
            <span>{skill.percentage}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
            <div
                className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
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
    icon: React.ComponentType<{ className?: string; }>;
    skills: Skill[];
}) => (
    <div className="space-y-4">
        <h4 className="text-sm lg:text-base font-medium text-foreground flex items-center gap-2">
            <Icon className="text-base text-white" />
            {title}
        </h4>
        <div className="space-y-3">
            {skills.map((skill, index) => (
                <SkillBar key={`${skill.name}-${index}`} skill={skill} />
            ))}
        </div>
    </div>
);

const ExperienceItem = ({ experience, isLast, t }: { experience: Experience; isLast: boolean; t: (key: string) => string; }) => (
    <div className="relative">
        {!isLast && (
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30" />
        )}
        <div className="relative pl-8">
            <div className={`absolute left-0 top-2 w-${experience.isActive ? '3' : '2'} h-${experience.isActive ? '3' : '2'} bg-primary rounded-full ${experience.isActive ? 'animate-pulse' : ''}`} />
            <div className={`bg-card rounded-lg p-4 border ${experience.isActive ? 'border-2 border-primary/50 shadow-lg' : 'border-border/50'}`}>
                <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium text-foreground text-lg">{experience.title}</h4>
                    {experience.isActive && (
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                            {t('active')}
                        </span>
                    )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                    {experience.company} • {experience.period}
                </p>
                <p className="text-sm text-foreground">{experience.description}</p>
            </div>
        </div>
    </div>
);

const EducationCard = ({ education, t }: { education: Education; t: (key: string) => string; }) => (
    <div className={`bg-card rounded-lg p-4 border text-center hover:border-primary/50 transition-colors duration-200 relative ${education.isActive ? 'border-2 border-primary/50 shadow-lg' : 'border-border/50'}`}>
        {education.isActive && (
            <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                {t('active')}
            </span>
        )}
        <GraduationCap className="text-3xl mb-2 mx-auto" />
        <h4 className="font-medium text-foreground mb-2">{education.title}</h4>
        <p className="text-sm text-muted-foreground">{education.university}</p>
        <p className="text-xs text-muted-foreground mt-1">{education.date}</p>
    </div>
);

const SectionHeader = ({
    title,
    icon: Icon
}: {
    title: string;
    icon: React.ComponentType<{ className?: string; }>;
}) => (
    <h3 className="text-lg lg:text-xl font-semibold text-primary mb-4 flex items-center gap-2">
        <Icon className="text-2xl" />
        {title}
    </h3>
);

export const Resume = () => {
    const t = useTranslations('resume');

    // Experiences data from translations
    const EXPERIENCES: Experience[] = [
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
    ];

    // Education data from translations
    const educationData: Education[] = [
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
    ];

    return (
        <AnimatedPage>
            <div className="space-y-8 p-4 lg:p-6">
                <h2 className="text-xl lg:text-2xl font-bold text-primary mb-6">
                    {t('title')}
                </h2>

                {/* Skills Section */}
                <section className="bg-card/50 rounded-lg p-6 border border-border/50">
                    <SectionHeader title={t('skillsTitle')} icon={Zap} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                </section>

                {/* Experience Section */}
                <section className="bg-card/50 rounded-lg p-6 border border-border/50">
                    <SectionHeader title={t('experienceTitle')} icon={Briefcase} />
                    <div className="space-y-6">
                        {EXPERIENCES.map((experience, index) => (
                            <ExperienceItem
                                key={`${experience.title}-${experience.company}-${index}`}
                                experience={experience}
                                isLast={index === EXPERIENCES.length - 1}
                                t={t}
                            />
                        ))}
                    </div>
                </section>

                {/* Education & Certifications */}
                <section className="bg-card/50 rounded-lg p-6 border border-border/50">
                    <SectionHeader title={t('educationTitle')} icon={GraduationCap} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {educationData.map((education, index) => (
                            <EducationCard
                                key={`${education.title}-${index}`}
                                education={education}
                                t={t}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </AnimatedPage>
    );
}; 