import { CardHeader } from "@/components/ui";

export type TSectionHeaderProps = {
    title: string;
    icon: React.ComponentType<{ className?: string; }>;
};

export const SectionHeader: React.FC<TSectionHeaderProps> = ({ title, icon: Icon }) => (
    <CardHeader>
        <h3 className="text-lg lg:text-xl font-semibold text-primary flex items-center gap-2">
            <Icon className="text-2xl" />
            {title}
        </h3>
    </CardHeader>
);
