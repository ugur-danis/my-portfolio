import { Card, CardContent } from "@/components/ui";

export type TSkillCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

export const SkillCard: React.FC<TSkillCardProps> = ({
    icon,
    title,
    description
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
