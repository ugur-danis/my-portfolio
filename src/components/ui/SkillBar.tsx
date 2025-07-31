import { Skill } from "@/types";

export type TSkillBarProps = {
    skill: Skill;
};

export const SkillBar: React.FC<TSkillBarProps> = ({ skill }) => (
    <div className="space-y-1">
        <div className="flex justify-between text-sm">
            <span className="font-medium">{skill.name}</span>
            <span className="text-muted-foreground">{skill.percentage}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div
                className="bg-primary h-2 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${skill.percentage}%` }} />
        </div>
    </div>
);
