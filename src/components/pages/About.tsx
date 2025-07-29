"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import { useTranslations } from 'next-intl';
import { Monitor, Server, TabletSmartphone, Wrench } from "lucide-react";

export const About = () => {
    const t = useTranslations('about');
    const tSkills = useTranslations('skills');

    const skillsData = [
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
    ];

    return (
        <AnimatedPage>
            <div className="space-y-6 p-4 lg:p-6">
                {/* Personal Introduction */}
                <section>
                    <h2 className="text-xl lg:text-2xl font-bold text-primary mb-3 lg:mb-4">{t('title')}</h2>
                    <p className="leading-relaxed text-sm lg:text-base text-foreground mb-4">
                        {t('intro')}
                    </p>
                    <p className="leading-relaxed text-sm lg:text-base text-foreground mb-4">
                        {t('experience')}
                    </p>
                    <p className="leading-relaxed text-sm lg:text-base text-foreground">
                        {t('passion')}
                    </p>
                    <p className="leading-relaxed text-sm lg:text-base text-foreground mb-4">
                        {t('summary')}
                    </p>
                    <p className="leading-relaxed text-sm lg:text-base text-foreground">
                        {t('quote')}
                    </p>
                </section>

                {/* Skills Section */}
                <section>
                    <h3 className="text-lg lg:text-xl font-semibold text-primary mb-4">{t('skillsTitle')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {skillsData.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-card/50 rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-colors"
                            >
                                <div className="text-2xl mb-3">{skill.icon}</div>
                                <h4 className="text-base lg:text-lg font-medium text-primary mb-2">
                                    {skill.title}
                                </h4>
                                <p className="leading-relaxed text-sm lg:text-base text-foreground">
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </AnimatedPage>
    );
}; 