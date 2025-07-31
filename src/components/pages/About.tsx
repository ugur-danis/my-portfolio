"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import { Card, CardContent } from "@/components/ui/Card";
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Monitor, Server, TabletSmartphone, Wrench } from "lucide-react";
import { TranslationFunction } from "@/types";

// Components
const SkillCard = ({ 
    icon, 
    title, 
    description 
}: { 
    icon: React.ReactNode; 
    title: string; 
    description: string; 
}) => (
    <Card 
        variant="default"
        className="hover:border-primary/50 transition-all duration-300 hover:shadow-md"
    >
        <CardContent className="p-4">
            <div className="text-2xl mb-3 text-primary">{icon}</div>
            <h4 className="text-base lg:text-lg font-medium text-primary mb-2">
                {title}
            </h4>
            <p className="leading-relaxed text-sm lg:text-base text-foreground">
                {description}
            </p>
        </CardContent>
    </Card>
);

const AboutContent = ({ t }: { t: TranslationFunction }) => (
    <section className="space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold text-primary mb-3 lg:mb-4">
            {t('title')}
        </h2>
        
        <div className="space-y-4 text-sm lg:text-base text-foreground leading-relaxed">
            <p>{t('intro')}</p>
            <p>{t('experience')}</p>
            <p>{t('passion')}</p>
            <p className="mb-4">{t('summary')}</p>
            <p className="italic text-primary font-medium">{t('quote')}</p>
        </div>
    </section>
);

const SkillsSection = ({ t, tSkills }: { t: TranslationFunction; tSkills: TranslationFunction }) => {
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
            <h3 className="text-lg lg:text-xl font-semibold text-primary">
                {t('skillsTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

// Main Component
export const About = () => {
    const t = useTranslations('about');
    const tSkills = useTranslations('skills');

    return (
        <AnimatedPage>
            <div className="space-y-8 p-4 lg:p-6 max-w-4xl mx-auto">
                <AboutContent t={t} />
                <SkillsSection t={t} tSkills={tSkills} />
            </div>
        </AnimatedPage>
    );
}; 