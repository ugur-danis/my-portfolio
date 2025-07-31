'use client';

import React from "react";
import { useTranslations } from 'next-intl';
import { 
    ProfileVideo, 
    ProfileContent, 
    ProfileActions 
} from "@/components/profile";

interface ProfileProps {
    className?: string;
    videoSrc?: string;
    avatarSrc?: string;
    avatarAlt?: string;
    typewriterStrings?: string[];
    downloadHref?: string;
    contactHref?: string;
}

export const Profile = ({
    className,
    videoSrc,
    avatarSrc,
    avatarAlt,
    typewriterStrings,
    downloadHref,
    contactHref
}: ProfileProps) => {
    const t = useTranslations('profile');

    return (
        <div className={`relative w-full lg:w-2/5 h-auto lg:h-full bg-card rounded-lg lg:rounded-r-none lg:rounded-br-none shadow-xs flex flex-col border border-border ${className || ''}`}>
            <ProfileVideo 
                videoSrc={videoSrc}
                avatarSrc={avatarSrc}
                avatarAlt={avatarAlt}
            />
            <ProfileContent 
                t={t}
                typewriterStrings={typewriterStrings}
            />
            <ProfileActions 
                t={t}
                downloadHref={downloadHref}
                contactHref={contactHref}
            />
        </div>
    );
};