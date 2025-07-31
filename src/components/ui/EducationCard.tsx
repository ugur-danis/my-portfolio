import { Education } from "@/types";
import { Card, CardContent } from "./Card";
import { cn } from "@/lib/utils";
import { Badge } from "./Badge";
import { GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

export type TEducationCardProps = {
    education: Education;
};

export const EducationCard: React.FC<TEducationCardProps> = ({ education }) => {
    const t = useTranslations();
    return (
        <Card
            variant="default"
            className={cn(
                "text-center transition-all duration-300 hover:border-primary/50 hover:shadow-md relative",
                education.isActive && "border-2 border-primary/50 shadow-lg"
            )}
        >
            <CardContent className="p-4">
                {education.isActive && (
                    <Badge
                        variant="primary"
                        size="sm"
                        className="absolute top-2 right-2 animate-pulse"
                    >
                        {t('active')}
                    </Badge>
                )}
                <GraduationCap className="text-3xl mb-3 mx-auto text-primary" />
                <h4 className="font-medium text-foreground mb-2 text-lg">{education.title}</h4>
                <p className="text-sm text-muted-foreground mb-1">{education.university}</p>
                <p className="text-xs text-muted-foreground">{education.date}</p>
            </CardContent>
        </Card>
    );
};