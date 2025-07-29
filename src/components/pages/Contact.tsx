"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import { useTranslations } from 'next-intl';
import {
    Mail,
    MapPin,
    Send,
    User
} from "lucide-react";

export const Contact = () => {
    const t = useTranslations('contact');

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            title: t('email'),
            value: "ugurdnis@gmail.com",
            link: "mailto:ugurdnis@gmail.com"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            title: t('location'),
            value: "Sivas, Türkiye",
            link: null
        }
    ];

    return (
        <AnimatedPage>
            <div className="space-y-6 p-4 lg:p-6">
                <div className="text-center">
                    <h2 className="text-xl lg:text-2xl font-bold text-primary mb-4">{t('title')}</h2>
                    <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                {/* Contact Information */}
                <div className="bg-card/50 rounded-lg p-6 border border-border/50">
                    <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                        <User className="w-5 h-5" />
                        {t('contactInfo')}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-center gap-3">
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
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card/50 rounded-lg p-6 border border-border/50">
                    <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        {t('sendMessage')}
                    </h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                    {t('name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                    placeholder={t('namePlaceholder')}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    {t('email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                    placeholder={t('emailPlaceholder')}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                {t('subject')}
                            </label>
                            <select
                                id="subject"
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                            >
                                <option value="">{t('subjectPlaceholder')}</option>
                                <option value="project">{t('subjectOptions.project')}</option>
                                <option value="freelance">{t('subjectOptions.freelance')}</option>
                                <option value="collaboration">{t('subjectOptions.collaboration')}</option>
                                <option value="question">{t('subjectOptions.question')}</option>
                                <option value="other">{t('subjectOptions.other')}</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                {t('message')}
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                                placeholder={t('messagePlaceholder')}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                        >
                            <Send className="w-4 h-4" />
                            {t('sendButton')}
                        </button>
                    </form>
                </div>
            </div>
        </AnimatedPage>
    );
}; 