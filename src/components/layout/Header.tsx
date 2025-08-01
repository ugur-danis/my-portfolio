'use client';

import { useRoute, RouteType } from "@/context/route/RouteContext";
import { useTheme } from "@/context/theme";
import { useRouter, usePathname } from 'next/navigation';
import { Sun, Moon, Globe } from "lucide-react";
import { useLocale, useTranslations } from 'next-intl';
import { Button, Badge } from "@/components/ui";
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
                "flex flex-col items-center justify-center py-2 px-1",
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
            <span className="mt-1 lg:ml-0 lg:mt-1 text-xs font-medium text-center">
                {item.name}
            </span>
        </Button>
    </li>
);

const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = () => {
        const newLocale = locale === 'tr' ? 'en' : 'tr';
        const currentPath = pathname.replace(`/${locale}`, '');
        // replace kullanarak sayfa geçmişini değiştir, yeniden yüklemeyi önle
        router.replace(`/${newLocale}${currentPath}`);
    };

    const nextLanguage = locale === 'tr' ? 'EN' : 'TR';

    return (
        <div className="relative">
            <Button
                variant="ghost"
                size="sm"
                icon={<Globe className="text-green-400" />}
                onClick={switchLanguage}
                className="w-full"
            />
            <Badge
                variant="success"
                size="sm"
                className="absolute -top-1 -right-1 text-xs font-bold"
            >
                {nextLanguage}
            </Badge>
        </div>
    );
};

const ThemeToggle = () => {
    const { theme, toggleTheme, isLoaded } = useTheme();

    return (
        <Button
            variant="ghost"
            size="sm"
            icon={theme === 'dark' ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-400" />}
            onClick={toggleTheme}
            className="w-full"
            disabled={!isLoaded}
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
            {/* Desktop Header - Left Side */}
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

            {/* Mobile Header - Top Side */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
                <nav className="px-1 sm:px-2 py-1">
                    <ul className="flex justify-around items-center">
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
