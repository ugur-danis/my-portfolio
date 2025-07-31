'use client';

import { useRoute, RouteType } from "@/context/route/RouteContext";
import { useTheme } from "@/context/theme";
import { useRouter, usePathname } from 'next/navigation';
import { Sun, Moon, Globe } from "lucide-react";
import { useLocale, useTranslations } from 'next-intl';
import { routing } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { NAV_ICONS } from "@/constants";
import { NavItem, TranslationFunction } from "@/types";
import { cn } from "@/lib/utils";

// Components
const NavItemComponent = ({ 
    item, 
    isActive, 
    onClick 
}: { 
    item: NavItem; 
    isActive: boolean; 
    onClick: () => void; 
}) => (
    <li className="lg:w-full lg:mb-6 lg:border-b-2 lg:border-border lg:last:mb-0 lg:last:border-b-0">
        <Button
            variant={isActive ? 'primary' : 'ghost'}
            size="sm"
            className={cn(
                "w-full lg:flex-col lg:py-2 lg:px-0 lg:mb-1 lg:rounded-lg",
                isActive && "lg:scale-110"
            )}
            onClick={onClick}
        >
            <div className={cn(
                "transition-transform duration-200",
                isActive && "scale-110"
            )}>
                {item.icon}
            </div>
            <span className="ml-2 lg:ml-0 lg:mt-1 text-xs font-medium">
                {item.name}
            </span>
        </Button>
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
            <Button
                variant="ghost"
                size="sm"
                icon={<Globe className="text-green-400" />}
                className="w-full"
            />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-card border border-border rounded-lg shadow-lg p-2 min-w-[80px] z-50">
                {routing.locales.map((loc: string) => (
                    <button
                        key={loc}
                        onClick={() => switchLanguage(loc)}
                        className={cn(
                            "block w-full text-left px-2 py-1 rounded text-xs hover:bg-accent transition-colors",
                            locale === loc ? 'text-primary font-medium' : 'text-muted-foreground'
                        )}
                    >
                        {loc.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
};

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="sm"
            icon={theme === 'dark' ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-400" />}
            onClick={toggleTheme}
            className="w-full"
        />
    );
};

// Custom Hooks
const useNavigationItems = (t: TranslationFunction): NavItem[] => {
    return [
        { name: t('about'), href: "#about", icon: <NAV_ICONS.about /> },
        { name: t('resume'), href: "#resume", icon: <NAV_ICONS.resume /> },
        { name: t('projects'), href: "#projects", icon: <NAV_ICONS.projects /> },
        { name: t('contact'), href: "#contact", icon: <NAV_ICONS.contact /> },
    ];
};

// Main Component
export const Header = () => {
    const { navigateTo, isActive } = useRoute();
    const t = useTranslations('navigation');
    const navItems = useNavigationItems(t);

    return (
        <>
            {/* Desktop Header - Sol tarafta */}
            <div className="hidden lg:block absolute z-10 top-10 left-[-50] w-20 bg-card/90 backdrop-blur-sm flex-col items-center py-4 font-thin text-xs rounded-xl shadow-lg border border-border">
                <nav>
                    <div className="mb-6 border-b-2 border-border pb-4 space-y-2">
                        <ThemeToggle />
                        <LanguageSwitcher />
                    </div>
                    <ul className="w-full">
                        {navItems.map((item) => (
                            <NavItemComponent
                                key={item.name}
                                item={item}
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
                        {navItems.map((item) => (
                            <NavItemComponent
                                key={item.name}
                                item={item}
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
