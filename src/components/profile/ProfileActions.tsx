import { Download, Send } from "lucide-react";
import { TranslationFunction } from "@/types";
import { ProfileButton } from "./ProfileButton";

interface ProfileActionsProps {
    t: TranslationFunction;
    downloadHref?: string;
    contactHref?: string;
}

export const ProfileActions = ({ 
    t, 
    downloadHref = "#", 
    contactHref = "#contact" 
}: ProfileActionsProps) => (
    <div className="mt-auto hidden md:block">
        <div className="flex">
            <ProfileButton
                href={downloadHref}
                icon={<Download className="w-4 h-4 lg:w-5 lg:h-5" />}
                shortText={t('downloadCVShort')}
            >
                {t('downloadCV')}
            </ProfileButton>
            <ProfileButton
                href={contactHref}
                icon={<Send className="w-4 h-4 lg:w-5 lg:h-5" />}
                shortText={t('contactMeShort')}
            >
                {t('contactMe')}
            </ProfileButton>
        </div>
    </div>
); 