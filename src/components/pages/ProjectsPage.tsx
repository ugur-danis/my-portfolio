"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import { Container, PageTitle, ProjectCard } from "@/components/ui";
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { TranslationFunction } from "@/types";

const ProjectsContent = ({ t }: { t: TranslationFunction; }) => {
    const projectsData = useMemo(() => [
        {
            title: t('tabuApp.title'),
            description: t('tabuApp.description'),
            technologies: t('tabuApp.technologies'),
            features: t('tabuApp.features'),
            playStoreUrl: "https://play.google.com/store/apps/details?id=com.ugurdanis.tabu",
            appStoreUrl: "https://apps.apple.com/app/tabu-game/id1234567890"
        },
        {
            title: t('googleKeepClone.title'),
            description: t('googleKeepClone.description'),
            technologies: t('googleKeepClone.technologies'),
            features: t('googleKeepClone.features'),
            githubUrl: "https://github.com/ugur-danis/google_keep_clone",
        }
    ], [t]);

    return (
        <section className="space-y-6">
            <div className="text-center space-y-2">
                <PageTitle title={t('title')} />
                <p className="text-muted-foreground text-sm lg:text-base">
                    {t('description')}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projectsData.map((project, index) => (
                    <ProjectCard
                        key={`${project.title}-${index}`}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        features={project.features}
                        technologiesLabel={t('technologies')}
                        featuresLabel={t('features')}
                        githubUrl={project.githubUrl}
                        appStoreUrl={project.appStoreUrl}
                        playStoreUrl={project.playStoreUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export const ProjectsPage = () => {
    const t = useTranslations('projects');

    return (
        <AnimatedPage>
            <Container>
                <ProjectsContent t={t} />
            </Container>
        </AnimatedPage>
    );
};