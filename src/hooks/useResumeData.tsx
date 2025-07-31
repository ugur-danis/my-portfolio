'use client';

import { TranslationFunction, Experience, Education } from "@/types";
import { useMemo } from "react";

export const useResumeData = (t: TranslationFunction) => {
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
