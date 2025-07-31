import { cn } from "@/lib/utils";

interface ProfileButtonProps {
    href: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    shortText: string;
    className?: string;
}

export const ProfileButton = ({
    href,
    icon,
    children,
    shortText,
    className
}: ProfileButtonProps) => (
    <a
        href={href}
        className={cn(
            "flex align-center justify-center w-1/2 p-4 lg:p-6 border-t-2 border-r-2 border-border",
            "group hover:text-primary transition duration-200 text-sm lg:text-base",
            "hover:bg-accent/50",
            className
        )}
    >
        <div className="group-hover:translate-y-1 transition duration-200">
            {icon}
        </div>
        <span className="ml-2 hidden sm:inline">{children}</span>
        <span className="ml-2 sm:hidden">{shortText}</span>
    </a>
); 