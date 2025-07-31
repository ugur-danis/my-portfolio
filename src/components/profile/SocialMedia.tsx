import { SOCIAL_MEDIA_ITEMS } from "@/constants";
import { SocialMediaItem } from "@/types";

interface SocialMediaLinkProps {
    item: SocialMediaItem;
}

export const SocialMediaLink = ({ item }: SocialMediaLinkProps) => {
    const IconComponent = item.icon;
    
    return (
        <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 transition-colors duration-200 hover:text-primary hover:scale-110"
            aria-label={item.name}
        >
            <IconComponent width={16} height={16} />
        </a>
    );
};

export const SocialMediaLinks = () => (
    <div className="flex mt-4 lg:mt-6">
        {SOCIAL_MEDIA_ITEMS.map((item) => (
            <SocialMediaLink key={item.name} item={item} />
        ))}
    </div>
); 