'use client';

import { useRoute, RouteType } from "@/context/route/RouteContext";
import { useTheme } from "@/context/theme";
import { useRouter, usePathname } from 'next/navigation';
import { FileUser, FolderKanban, Mail, Sun, User, Moon, Globe } from "lucide-react";
import { useLocale, useTranslations } from 'next-intl';
import { routing } from "@/i18n/routing";

const NavItem = ({ name, icon, isActive, onClick }: {
    name: string;
    href: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
}) => (
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

const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLocale: string) => {
        const currentPath = pathname.replace(`/${locale}`, '');
        router.push(`/${newLocale}${currentPath}`);
    };

    return (
        <div className="relative group">
            <button className="flex justify-center w-full cursor-pointer p-2 rounded-lg hover:bg-accent transition-colors duration-200">
                <Globe className="text-green-400" />
            </button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-card border border-border rounded-lg shadow-lg p-2 min-w-[80px]">
                {routing.locales.map((loc: string) => (
                    <button
                        key={loc}
                        onClick={() => switchLanguage(loc)}
                        className={`block w-full text-left px-2 py-1 rounded text-xs hover:bg-accent transition-colors ${locale === loc ? 'text-primary font-medium' : 'text-muted-foreground'
                            }`}
                    >
                        {loc.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};

export const Header = () => {
    const { navigateTo, isActive } = useRoute();
    const { theme, toggleTheme } = useTheme();
    const t = useTranslations('navigation');

    const NAV_ITEMS = [
        { name: t('about'), href: "#about", icon: <User /> },
        { name: t('resume'), href: "#resume", icon: <FileUser /> },
        { name: t('projects'), href: "#projects", icon: <FolderKanban /> },
        { name: t('contact'), href: "#contact", icon: <Mail /> },
    ];

    return (
        <>
            {/* Desktop Header - Sol tarafta */}
            <div className="hidden lg:block absolute z-10 top-10 left-[-50] w-20 bg-card/90 backdrop-blur-sm flex-col items-center py-4 font-thin text-xs rounded-xl shadow-lg border border-border">
                <nav>
                    <div className="mb-6 border-b-2 border-border pb-4 space-y-2">
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
                        <LanguageSwitcher />
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
