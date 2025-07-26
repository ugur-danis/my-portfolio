'use client';

import Image from "next/image";
import React from "react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";
import { Download, Send } from "lucide-react";
import Typewriter from 'typewriter-effect';

const ProfileVideo = () => {
    return (
        <div className="h-1/2 relative">
            <video className="profile-video w-full h-full object-cover" autoPlay loop muted>
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2">
                <div className="w-36 h-36">
                    <Image width={144} height={144} src="/avatar.png" alt="Profile" className="w-full h-full object-cover rounded-xl shadow-md shadow-[#0f0]" />
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
        <a href={url} className="mx-2 transition-colors duration-200 hover:text-[#0f0]">
            {icon}
        </a>
    );
};

const SocialMediaLinks = () => {
    return (
        <div className="flex mt-6">
            {SocialMediaItems.map((item) => (
                <SocialMediaItem key={item.name} {...item} />
            ))}
        </div>
    );
};

export const Profile = () => {
    return (
        // Container
        <div className="relative w-2/5 h-full bg-[#333] rounded-lg rounded-r-none rounded-br-none shadow-xs">
            {/* Content */}
            <ProfileVideo />
            <div className="flex flex-col items-center mt-20">
                <h1 className="text-3xl font-bold mb-2">Uğur Danış</h1>

                <Typewriter
                    options={{
                        strings: ['Software Developer', 'Mobile Developer', 'Web Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                <SocialMediaLinks />
            </div>
            {/* Bottom Buttons */}
            <div className="absolute bottom-0 left-0 w-full flex">
                <a href="#" className="flex align-center justify-center w-1/2 p-6 border-t-2 border-r-2 border-[#444] group hover:text-[#0f0] transition duration-200">
                    <Download className="group-hover:translate-y-1 transition duration-200" />
                    <span className="ml-2">Download CV</span>
                </a>
                <a href="#" className="flex align-center justify-center w-1/2 p-6 border-t-2 border-[#444] group hover:text-[#0f0] transition duration-200">
                    <Send className="group-hover:translate-y-1 transition duration-200" />
                    <span className="ml-2">Contact Me</span>
                </a>
            </div>
        </div>
    );
};