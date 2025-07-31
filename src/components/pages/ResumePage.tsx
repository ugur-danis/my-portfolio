"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import { Card, CardContent, Container, PageTitle, SectionHeader, SkillBar, ExperienceItem, EducationCard } from "@/components/ui";
import {
    Zap,
    Code,
    Database,
    Briefcase,
    GraduationCap,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { FRONTEND_SKILLS, BACKEND_SKILLS } from "@/constants";
import { Skill } from "@/types";
import { useResumeData } from "@/hooks";

type TSkillsSectionProps = {
    title: string;
    icon: React.ComponentType<{
        className?: string;
    }>;
    skills: readonly Skill[];
};

const SkillsSection: React.FC<TSkillsSectionProps> = ({ title, skills, icon: Icon }) => (
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

export const ResumePage = () => {
    const t = useTranslations('resume');
    const { experiences, educationData } = useResumeData(t);

    return (
        <AnimatedPage>
            <Container>
                <header className="text-center mb-8">
                    <PageTitle title={t('title')} />
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
                                />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </Container>
        </AnimatedPage>
    );
}; 