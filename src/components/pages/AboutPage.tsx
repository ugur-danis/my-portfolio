"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import { Container, PageTitle, SkillCard } from "@/components/ui";
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Monitor, Server, TabletSmartphone, Wrench } from "lucide-react";
import { TranslationFunction } from "@/types";

const AboutContent = ({ t }: { t: TranslationFunction; }) => (
    <section className="space-y-4">
        <PageTitle title={t('title')} />

        <div className="space-y-4 text-sm lg:text-base text-foreground leading-relaxed">
            <p>{t('intro')}</p>
            <p>{t('experience')}</p>
            <p>{t('passion')}</p>
            <p className="mb-4">{t('summary')}</p>
            <p className="italic text-primary font-medium">{t('quote')}</p>
        </div>
    </section>
);

const SkillsSection = ({ t, tSkills }: { t: TranslationFunction; tSkills: TranslationFunction; }) => {
    const skillsData = useMemo(() => [
        {
            icon: <TabletSmartphone />,
            title: tSkills('mobile.title'),
            description: tSkills('mobile.description')
        },
        {
            icon: <Monitor />,
            title: tSkills('web.title'),
            description: tSkills('web.description')
        },
        {
            icon: <Server />,
            title: tSkills('backend.title'),
            description: tSkills('backend.description')
        },
        {
            icon: <Wrench />,
            title: tSkills('product.title'),
            description: tSkills('product.description')
        }
    ], [tSkills]);

    return (
        <section className="space-y-4">
            <PageTitle title={t('skillsTitle')} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {skillsData.map((skill, index) => (
                    <SkillCard
                        key={`${skill.title}-${index}`}
                        icon={skill.icon}
                        title={skill.title}
                        description={skill.description}
                    />
                ))}
            </div>
        </section>
    );
};

export const AboutPage = () => {
    const t = useTranslations('about');
    const tSkills = useTranslations('skills');

    return (
        <AnimatedPage>
            <Container>
                <AboutContent t={t} />
                <SkillsSection t={t} tSkills={tSkills} />
            </Container>
        </AnimatedPage>
    );
}; 