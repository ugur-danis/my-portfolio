import { Card, CardContent, CardHeader, Input, Textarea, Select, Button } from "@/components/ui";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

export const ContactForm = () => {
    const t = useTranslations('contact');
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