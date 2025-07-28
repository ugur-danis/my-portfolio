'use client';

import { useRoute, RouteType } from "@/context/route/RouteContext";
import { useTheme } from "@/context/theme";
import { FileUser, FolderKanban, Mail, Sun, User, Moon } from "lucide-react";

const NAV_ITEMS = [
    { name: "ABOUT", href: "#about", icon: <User /> },
    { name: "RESUME", href: "#resume", icon: <FileUser /> },
    { name: "PROJECTS", href: "#projects", icon: <FolderKanban /> },
    { name: "CONTACT", href: "#contact", icon: <Mail /> },
];

type TNavItem = {
    name: string;
    href: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
};

const NavItem = ({ name, icon, isActive, onClick }: TNavItem) => (
    <li className="lg:w-full lg:mb-6 lg:border-b-2 lg:border-border lg:last:mb-0 lg:last:border-b-0">
        <button
            className={`flex items-center justify-center transition-all duration-300 py-3 px-4 lg:py-2 lg:px-0 lg:flex-col lg:mb-1 lg:w-full lg:rounded-lg ${isActive
                ? 'text-primary bg-accent shadow-lg'
                : 'text-muted-foreground hover:text-primary hover:bg-accent/50'
                }`}
            onClick={onClick}
        >
            <div className={`transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                {icon}
            </div>
            <span className="ml-2 lg:ml-0 lg:mt-1 text-xs font-medium">{name}</span>
        </button>
    </li>
);

export const Header = () => {
    const { navigateTo, isActive } = useRoute();
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            {/* Desktop Header - Sol tarafta */}
            <div className="hidden lg:block absolute z-10 top-10 left-[-50] w-20 bg-card/90 backdrop-blur-sm flex-col items-center py-4 font-thin text-xs rounded-xl shadow-lg border border-border">
                <nav>
                    <div className="mb-12 border-b-2 border-border pb-4">
                        <button
                            className="flex justify-center w-full cursor-pointer p-2 rounded-lg hover:bg-accent transition-colors duration-200"
                            onClick={toggleTheme}
                        >
                            {theme === 'dark' ? (
                                <Sun className="text-yellow-400" />
                            ) : (
                                <Moon className="text-blue-400" />
                            )}
                        </button>
                    </div>
                    <ul className="w-full">
                        {NAV_ITEMS.map((item) => (
                            <NavItem
                                key={item.name}
                                name={item.name}
                                href={item.href}
                                icon={item.icon}
                                isActive={isActive(item.href as RouteType)}
                                onClick={() => navigateTo(item.href as RouteType)}
                            />
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Header - Alt kısımda */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border">
                <nav className="px-4 py-2">
                    <ul className="flex justify-between items-center">
                        {NAV_ITEMS.map((item) => (
                            <NavItem
                                key={item.name}
                                name={item.name}
                                href={item.href}
                                icon={item.icon}
                                isActive={isActive(item.href as RouteType)}
                                onClick={() => navigateTo(item.href as RouteType)}
                            />
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};
