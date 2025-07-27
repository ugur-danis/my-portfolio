"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedPageProps {
    children: ReactNode;
    className?: string;
}

export const AnimatedPage = ({ children, className }: AnimatedPageProps) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
            duration: 0.2, 
            delay: 0.1,
            ease: "easeOut"
        }}
        className={className}
    >
        {children}
    </motion.div>
); 