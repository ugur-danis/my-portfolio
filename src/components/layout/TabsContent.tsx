"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRoute, RouteType } from "@/context/route/RouteContext";
import { AboutPage, ResumePage, ProjectsPage, ContactPage } from "@/components/pages";
import { useScrollRestoration } from "@/hooks";

const renderTabContent = (tab: RouteType) => {
    switch (tab) {
        case "#about":
            return <AboutPage />;
        case "#resume":
            return <ResumePage />;
        case "#projects":
            return <ProjectsPage />;
        case "#contact":
            return <ContactPage />;
        default:
            return <AboutPage />;
    }
};

// Card değişimi animasyonları
const pageVariants = {
    initial: {
        opacity: 0,
        x: 50,
        scale: 0.95,
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1,
    },
    out: {
        opacity: 0,
        x: -50,
        scale: 0.95,
    }
};

const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.4
};

export const TabsContent = () => {
    const { currentRoute } = useRoute();
    const containerRef = useScrollRestoration<HTMLDivElement>(currentRoute, {
        smooth: true,
        delay: 100 // Animasyon başladıktan sonra scroll
    });

    return (
        <div
            ref={containerRef}
            className="w-full h-full bg-card rounded-lg lg:rounded-2xl lg:rounded-l-none lg:rounded-bl-none overflow-hidden overflow-y-auto border border-border"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentRoute}
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                    className="w-full h-full"
                >
                    {renderTabContent(currentRoute)}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};