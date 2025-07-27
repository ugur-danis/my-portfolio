"use client";

import { AnimatedPage } from "../ui/AnimatedPage";
import {
    ExternalLink,
    Github,
    Smartphone,
    Globe,
    Database,
    Calendar,
    Users
} from "lucide-react";

const projectsData = [
    {
        id: 1,
        title: "E-Ticaret Web Uygulaması",
        description: "React ve Node.js ile geliştirilmiş tam kapsamlı e-ticaret platformu. Kullanıcı yönetimi, ürün kataloğu, sepet işlemleri ve ödeme entegrasyonu içerir.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        image: "🛒",
        category: "web",
        github: "https://github.com/username/ecommerce-app",
        live: "https://ecommerce-app.vercel.app",
        date: "2024",
        status: "Tamamlandı"
    },
    {
        id: 2,
        title: "Fitness Takip Uygulaması",
        description: "Flutter ile geliştirilmiş cross-platform mobil uygulama. Egzersiz takibi, kalori hesaplama ve ilerleme grafikleri özellikleri bulunur.",
        technologies: ["Flutter", "Dart", "Firebase", "Provider"],
        image: "💪",
        category: "mobile",
        github: "https://github.com/username/fitness-app",
        live: null,
        date: "2023",
        status: "Tamamlandı"
    },
    {
        id: 3,
        title: "Task Management API",
        description: "Node.js ve Express ile geliştirilmiş RESTful API. Kullanıcı görev yönetimi, takım çalışması ve gerçek zamanlı bildirimler.",
        technologies: ["Node.js", "Express", "PostgreSQL", "Socket.io", "JWT"],
        image: "📋",
        category: "backend",
        github: "https://github.com/username/task-api",
        live: "https://task-api.herokuapp.com",
        date: "2023",
        status: "Tamamlandı"
    },
    {
        id: 4,
        title: "Portfolio Web Sitesi",
        description: "Next.js ve TypeScript ile geliştirilmiş modern portfolio sitesi. Responsive tasarım, dark mode ve animasyonlar içerir.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "🎨",
        category: "web",
        github: "https://github.com/username/portfolio",
        live: "https://portfolio.vercel.app",
        date: "2024",
        status: "Aktif"
    },
    {
        id: 5,
        title: "Hava Durumu Uygulaması",
        description: "React Native ile geliştirilmiş hava durumu uygulaması. Konum bazlı hava durumu bilgisi ve 7 günlük tahmin.",
        technologies: ["React Native", "OpenWeather API", "AsyncStorage", "Geolocation"],
        image: "🌤️",
        category: "mobile",
        github: "https://github.com/username/weather-app",
        live: null,
        date: "2023",
        status: "Tamamlandı"
    },
    {
        id: 6,
        title: "Blog Platformu",
        description: "Full-stack blog platformu. Markdown desteği, yorum sistemi ve admin paneli özellikleri.",
        technologies: ["React", "Node.js", "MongoDB", "Markdown", "Multer"],
        image: "📝",
        category: "web",
        github: "https://github.com/username/blog-platform",
        live: "https://blog-platform.vercel.app",
        date: "2023",
        status: "Tamamlandı"
    }
];

export const Projects = () => {
    return (
        <AnimatedPage>
            <div className="space-y-6 p-4 lg:p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl lg:text-2xl font-bold text-primary">Projelerim</h2>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{projectsData.length} Proje</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                        >
                            {/* Project Header */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-3xl">{project.image}</div>
                                    <div className="flex items-center gap-2">
                                        {project.category === 'web' && <Globe className="w-4 h-4 text-blue-500" />}
                                        {project.category === 'mobile' && <Smartphone className="w-4 h-4 text-green-500" />}
                                        {project.category === 'backend' && <Database className="w-4 h-4 text-purple-500" />}
                                    </div>
                                </div>

                                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Meta */}
                                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        <span>{project.date}</span>
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Aktif'
                                            ? 'bg-green-500/10 text-green-500'
                                            : 'bg-blue-500/10 text-blue-500'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                {/* Project Links */}
                                <div className="flex items-center gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>Kod</span>
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedPage>
    );
}; 