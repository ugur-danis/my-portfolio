"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { Mail, MapPin, Send, User } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_LOCATION } from "@/constants";
import { ContactInfo, TranslationFunction } from "@/types";

// Components
const ContactInfoItem = ({ info }: { info: ContactInfo }) => (
    <div className="flex items-center gap-3">
        <div className="text-primary">
            {info.icon}
        </div>
        <div className="flex-1">
            <p className="text-sm font-medium text-foreground">{info.title}</p>
            {info.link ? (
                <a
                    href={info.link}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                    {info.value}
                </a>
            ) : (
                <p className="text-sm text-muted-foreground">{info.value}</p>
            )}
        </div>
    </div>
);

const ContactInfoSection = ({ t }: { t: TranslationFunction }) => {
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactInfo.map((info, index) => (
                        <ContactInfoItem key={`${info.title}-${index}`} info={info} />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

const ContactForm = ({ t }: { t: TranslationFunction }) => {
    const subjectOptions = useMemo(() => [
        { value: "", label: t('subjectPlaceholder') },
        { value: "project", label: t('subjectOptions.project') },
        { value: "freelance", label: t('subjectOptions.freelance') },
        { value: "collaboration", label: t('subjectOptions.collaboration') },
        { value: "question", label: t('subjectOptions.question') },
        { value: "other", label: t('subjectOptions.other') }
    ], [t]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic here
        console.log('Form submitted');
    };

    return (
        <Card variant="default">
            <CardHeader>
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    {t('sendMessage')}
                </h3>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            label={t('name')}
                            placeholder={t('namePlaceholder')}
                            required
                        />
                        <Input
                            type="email"
                            label={t('email')}
                            placeholder={t('emailPlaceholder')}
                            required
                        />
                    </div>
                    
                    <Select
                        label={t('subject')}
                        options={subjectOptions}
                        required
                    />
                    
                    <Textarea
                        label={t('message')}
                        placeholder={t('messagePlaceholder')}
                        rows={5}
                        required
                    />
                    
                    <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        icon={<Send className="w-4 h-4" />}
                        className="w-full"
                    >
                        {t('sendButton')}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

const ContactHeader = ({ t }: { t: TranslationFunction }) => (
    <div className="text-center">
        <h2 className="text-xl lg:text-2xl font-bold text-primary mb-4">
            {t('title')}
        </h2>
        <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('description')}
        </p>
    </div>
);

// Main Component
export const Contact = () => {
    const t = useTranslations('contact');

    return (
        <AnimatedPage>
            <div className="space-y-6 p-4 lg:p-6 max-w-4xl mx-auto">
                <ContactHeader t={t} />
                <ContactInfoSection t={t} />
                <ContactForm t={t} />
            </div>
        </AnimatedPage>
    );
}; 