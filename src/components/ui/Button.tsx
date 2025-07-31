import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: React.ReactNode;
    loading?: boolean;
    children?: React.ReactNode;
}

const buttonVariants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-border bg-transparent hover:bg-accent hover:border-primary/50",
    ghost: "bg-transparent hover:bg-accent text-muted-foreground hover:text-primary"
};

const buttonSizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant = 'primary',
        size = 'md',
        icon,
        loading = false,
        disabled,
        children,
        ...props
    }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed",
                    buttonVariants[variant],
                    buttonSizes[size],
                    className
                )}
                ref={ref}
                disabled={disabled || loading}
                {...props}
            >
                {loading && (
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                )}
                {!loading && icon}
                {children}
            </button>
        );
    }
);

Button.displayName = "Button"; 