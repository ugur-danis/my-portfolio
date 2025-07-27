"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import {
    ABOUT_INTRO,
    ABOUT_EXPERIENCE,
    ABOUT_PASSION,
    ABOUT_SUMMARY,
    ABOUT_QUOTE,
    SKILL_MOBILE_DESCRIPTION,
    SKILL_WEB_DESCRIPTION,
    SKILL_BACKEND_DESCRIPTION,
    SKILL_PRODUCT_DESCRIPTION
} from "@/constants/texts";
import { Monitor, Server, TabletSmartphone, Wrench } from "lucide-react";

const skillsData = [
    {
        icon: <TabletSmartphone />,
        title: "Mobil Uygulama Geliştirme",
        description: SKILL_MOBILE_DESCRIPTION
    },
    {
        icon: <Monitor />,
        title: "Web Geliştirme",
        description: SKILL_WEB_DESCRIPTION
    },
    {
        icon: <Server />,
        title: "Backend Geliştirme",
        description: SKILL_BACKEND_DESCRIPTION
    },
    {
        icon: <Wrench />,
        title: "Ürün Odaklı Geliştirme",
        description: SKILL_PRODUCT_DESCRIPTION
    }
];

export const About = () => {
    return (
        <AnimatedPage>
            <div className="space-y-6 p-4 lg:p-6">
                {/* Personal Introduction */}
                <section>
                    <h2 className="text-xl lg:text-2xl font-bold text-primary mb-3 lg:mb-4">About Me</h2>
                    <p className="leading-relaxed text-sm lg:text-base text-foreground mb-4">
                        {ABOUT_INTRO}
                    </p>
                    <p className="leading-relaxed text-sm lg:text-base text-foreground mb-4">
                        {ABOUT_EXPERIENCE}
                    </p>
                    <p className="leading-relaxed text-sm lg:text-base text-foreground">
                        {ABOUT_PASSION}
                    </p>
                    <p className="leading-relaxed text-sm lg:text-base text-foreground mb-4">
                        {ABOUT_SUMMARY}
                    </p>
                    <p className="leading-relaxed text-sm lg:text-base text-foreground">
                        {ABOUT_QUOTE}
                    </p>
                </section>

                {/* Skills Section */}
                <section>
                    <h3 className="text-lg lg:text-xl font-semibold text-primary mb-4">Ne Yapıyorum?</h3>
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