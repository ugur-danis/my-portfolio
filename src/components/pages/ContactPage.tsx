"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import { Card, CardContent, CardHeader, ContactInfoItem, ContactForm, PageTitle, Container } from "@/components/ui";
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Mail, MapPin, User } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_LOCATION } from "@/constants";
import { ContactInfo } from "@/types";

const ContactHeader = () => {
    const t = useTranslations('contact');

    return (
        <div className="text-center">
            <PageTitle title={t('title')} />
            <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('description')}
            </p>
        </div>
    );
};

const ContactInfoSection = () => {
    const t = useTranslations('contact');

    const contactInfo = useMemo((): ContactInfo[] => [
        {
            icon: <Mail className="w-5 h-5" />,
            title: t('email'),
            value: CONTACT_EMAIL,
            link: `mailto:${CONTACT_EMAIL}`
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: t('location'),
            value: CONTACT_LOCATION,
            link: null
        }
    ], [t]);

    return (
        <Card variant="default">
            <CardHeader>
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <User className="w-5 h-5" />
                    {t('contactInfo')}
                </h3>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {contactInfo.map((info, index) => (
                        <ContactInfoItem key={`${info.title}-${index}`} info={info} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export const ContactPage = () => {
    return (
        <AnimatedPage>
            <Container>
                <ContactHeader />
                <ContactInfoSection />
                <ContactForm />
            </Container>
        </AnimatedPage>
    );
}; 