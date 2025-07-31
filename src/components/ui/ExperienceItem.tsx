import { cn } from "@/lib/utils";
import { Card, CardContent, Badge } from "@/components/ui";
import { Experience } from "@/types";
import { useTranslations } from "next-intl";

export type TExperienceItemProps = {
    experience: Experience;
    isLast: boolean;
};

export const ExperienceItem: React.FC<TExperienceItemProps> = ({ experience, isLast }) => {
    const t = useTranslations();
    return (
        <div className="relative">
            {!isLast && (
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30" />
            )}
            <div className="relative pl-8">
                <div
                    className={cn(
                        "absolute left-0 top-2 bg-primary rounded-full transition-all duration-300",
                        experience.isActive ? 'w-3 h-3 animate-pulse' : 'w-2 h-2'
                    )} />
                <Card
                    variant="default"
                    className={cn(
                        "transition-all duration-300 hover:shadow-md",
                        experience.isActive && "border-2 border-primary/50 shadow-lg"
                    )}
                >
                    <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium text-foreground text-lg">{experience.title}</h4>
                            {experience.isActive && (
                                <Badge variant="primary" size="sm" className="animate-pulse">
                                    {t('active')}
                                </Badge>
                            )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                            {experience.company} • {experience.period}
                        </p>
                        <p className="text-sm text-foreground leading-relaxed">{experience.description}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
