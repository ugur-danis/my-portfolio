'use client';

import Image from "next/image";
import React from "react";
import { useTranslations } from 'next-intl';
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";
import { Download, Send } from "lucide-react";
import Typewriter from 'typewriter-effect';

const ProfileVideo = () => {
    return (
        <div className="h-48 lg:h-1/2 relative">
            <video className="profile-video w-full h-full object-cover" autoPlay loop muted>
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute -bottom-8 lg:-bottom-15 left-1/2 transform -translate-x-1/2">
                <div className="w-24 h-24 lg:w-36 lg:h-36">
                    <Image priority={true} width={144} height={144} src="/avatar.png" alt="Profile" className={`w-full h-full object-cover rounded-xl shadow-md shadow-[#547200]`} />
                </div>
            </div>
        </div>
    );
};

const SocialMediaItems = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/uğurdanis/",
        icon: <LinkedInIcon width={16} height={16} />,
    },
    {
        name: "GitHub",
        url: "https://github.com/ugur-danis",
        icon: <GitHubIcon width={16} height={16} />,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/_ugurdanis/",
        icon: <InstagramIcon width={16} height={16} />,
    },
];

type TSocialMediaItem = {
    name: string;
    url: string;
    icon: React.ReactNode;
};

const SocialMediaItem = ({ url, icon }: TSocialMediaItem) => {
    return (
        <a href={url} className="mx-2 transition-colors duration-200 hover:text-primary">
            {icon}
        </a>
    );
};

const SocialMediaLinks = () => {
    return (
        <div className="flex mt-4 lg:mt-6">
            {SocialMediaItems.map((item) => (
                <SocialMediaItem key={item.name} {...item} />
            ))}
        </div>
    );
};

export const Profile = () => {
    const t = useTranslations('profile');

    return (
        // Container
        <div className="relative w-full lg:w-2/5 h-auto lg:h-full bg-card rounded-lg lg:rounded-r-none lg:rounded-br-none shadow-xs flex flex-col border border-border">
            {/* Content */}
            <ProfileVideo />
            <div className="flex flex-col items-center mt-16 lg:mt-20 flex-1">
                <h1 className="text-2xl lg:text-3xl font-bold mb-2 text-center">{t('name')}</h1>

                <div className="text-sm lg:text-base text-center">
                    <Typewriter
                        options={{
                            strings: [t('title'), 'Mobile Developer', 'Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <p className="text-xs lg:text-sm text-muted-foreground text-center mt-2 px-4">
                    {t('description')}
                </p>
                <SocialMediaLinks />
            </div>
            {/* Bottom Buttons */}
            <div className="mt-auto">
                <div className="flex">
                    <a href="#" className="flex align-center justify-center w-1/2 p-4 lg:p-6 border-t-2 border-r-2 border-border group hover:text-primary transition duration-200 text-sm lg:text-base">
                        <Download className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-y-1 transition duration-200" />
                        <span className="ml-2 hidden sm:inline">{t('downloadCV')}</span>
                        <span className="ml-2 sm:hidden">{t('downloadCVShort')}</span>
                    </a>
                    <a href="#contact" className="flex align-center justify-center w-1/2 p-4 lg:p-6 border-t-2 border-border group hover:text-primary transition duration-200 text-sm lg:text-base">
                        <Send className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-y-1 transition duration-200" />
                        <span className="ml-2 hidden sm:inline">{t('contactMe')}</span>
                        <span className="ml-2 sm:hidden">{t('contactMeShort')}</span>
                    </a>
                </div>
            </div>
        </div>
    );
};