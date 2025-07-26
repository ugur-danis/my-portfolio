'use client';

import { useRouteContext } from "@/context/route/RouteContext";
import { FileUser, FolderKanban, Mail, Newspaper, User } from "lucide-react";

const NAV_ITEMS = [
    { name: "ABOUT", href: "#about", icon: <User /> },
    { name: "RESUME", href: "#resume", icon: <FileUser /> },
    { name: "PROJECTS", href: "#projects", icon: <FolderKanban /> },
    { name: "ARTICLE", href: "#articles", icon: <Newspaper /> },
    { name: "CONTACT", href: "#contact", icon: <Mail /> },
];

type TNawItem = {
    name: string;
    href: string;
    icon: React.ReactNode;
    onClick: () => void;
};

const NavItem = ({ name, href, icon, onClick }: TNawItem) => (
    <li className="w-full mb-6 border-b-2 border-b-[#444] last:mb-0 last:border-b-0">
        <a href={href} className="flex flex-col items-center justify-center transition-colors duration-200 mb-1 hover:text-[#0f0]" onClick={onClick}>
            {icon}
            {name}
        </a>
    </li>
);

export const Header = () => {
    const { setRoute } = useRouteContext();

    return (
        <div className="absolute z-10 top-10 left-[-50] w-20 bg-[#333] opacity-80 flex-col items-center py-4 font-thin text-xs rounded-xl shadow-lg">
            <nav>
                <ul className="w-full">
                    {NAV_ITEMS.map((item) => (
                        <NavItem
                            key={item.name}
                            name={item.name}
                            href={item.href}
                            icon={item.icon}
                            onClick={() => setRoute(item.href)}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};
