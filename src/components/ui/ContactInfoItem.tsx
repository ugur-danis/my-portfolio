import { ContactInfo } from "@/types";

export type TContactInfoItemProps = {
    info: ContactInfo;
};

export const ContactInfoItem: React.FC<TContactInfoItemProps> = ({ info }) => {
    return (
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
};
