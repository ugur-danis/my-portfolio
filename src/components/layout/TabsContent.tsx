"use client";

import { motion } from "framer-motion";
/* import About from "@/app/about/page";
import Portfolio from "@/app/portfolio/page";
import Resume from "@/app/resume/page";
import Contact from "@/app/contact/page"; */
import { useRouteContext } from "@/context/route/RouteContext";

const renderTabContent = (tab: string | undefined) => {
    switch (tab) {
        case "#about":
        default:
            return <About />;
        case "#resume":
            return <Resume />;
        case "#projects":
            return <Projects />;
        case "#articles":
            return <Articles />;
        case "#contact":
            return <Contact />;
    }
};

export const TabsContent = () => {
    const { route } = useRouteContext();

    return (
        <motion.div
            key={route}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '100%' }}
            transition={{ duration: 1 }}
            className="w-full h-full bg-[#222] rounded-2xl rounded-l-none rounded-bl-none p-6 overflow-y-auto"
        >
            {renderTabContent(route)}
        </motion.div>
    );
};


const About = () => (
    <div>
        <h2 className="text-2xl font-bold text-[#5E936C] mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
            Im Ryan, a passionate UI/UX designer with 5+ years of experience creating engaging digital experiences...
        </p>
    </div>
);

const Contact = () => (
    <div>
        <h2 className="text-2xl font-bold text-[#5E936C] mb-4">Contact</h2>
        <p className="text-gray-300">Form or contact info here.</p>
    </div>
);

const Projects = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-[#5E936C] mb-4">Projects</h2>
            <p className="text-gray-300">Project thumbnails and links to case studies.</p>
        </div>
    );
};

const Articles = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-[#5E936C] mb-4">Articles</h2>
            <p className="text-gray-300">Project thumbnails and links to case studies.</p>
        </div>
    );
};

const Resume = () => (
    <div>

        <h2 className="text-2xl font-bold text-[#5E936C] mb-4">Resume</h2>
        <p className="text-gray-300">Experience, education, and skills go here.</p>
    </div>
);