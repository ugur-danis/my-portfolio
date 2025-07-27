"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import {
    Zap,
    Code,
    Database,
    Briefcase,
    GraduationCap,
} from "lucide-react";

export const Resume = () => {
    return (
        <AnimatedPage>
            <div className="space-y-8 p-4 lg:p-6">
                <h2 className="text-xl lg:text-2xl font-bold text-primary mb-6">Resume</h2>

                {/* Skills Section */}
                <section className="bg-card/50 rounded-lg p-6 border border-border/50">
                    <h3 className="text-lg lg:text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                        <Zap className="text-2xl" />
                        Yeteneklerim
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h4 className="text-sm lg:text-base font-medium text-foreground flex items-center gap-2">
                                <Code className="text-base text-white" />
                                Frontend Geliştirme
                            </h4>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>React & Next.js</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>TypeScript</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>SAP UI5</span>
                                        <span>88%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '88%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>HTML/CSS/JavaScript</span>
                                        <span>92%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '92%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm lg:text-base font-medium text-foreground flex items-center gap-2">
                                <Database className="text-base text-white" />
                                Backend & Mobil
                            </h4>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Node.js & Express</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>Flutter</span>
                                        <span>85%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>MongoDB & PostgreSQL</span>
                                        <span>80%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>.NET Core & C#</span>
                                        <span>65%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="bg-card/50 rounded-lg p-6 border border-border/50">
                    <h3 className="text-lg lg:text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                        <Briefcase className="text-2xl" />
                        Deneyim
                    </h3>
                    <div className="space-y-6">
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                                <div className="bg-card rounded-lg p-4 border-2 border-primary/50 shadow-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h4 className="font-medium text-foreground text-lg">Frontend Developer</h4>
                                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">Aktif</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">Detaysoft • 2021 - Günümüz</p>
                                    <p className="text-sm text-foreground">
                                        React ve TypeScript ile modern web uygulamaları geliştiriyorum. SAP UI5 ile enterprise
                                        çözümler üzerinde çalışıyorum. Kullanıcı deneyimi ve performans odaklı geliştirme yapıyorum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></div>
                                <div className="bg-card rounded-lg p-4 border border-border/50">
                                    <h4 className="font-medium text-foreground text-lg">Software Developer Intern</h4>
                                    <p className="text-sm text-muted-foreground mb-2">Detaysoft • 2021 - 2021 (2 ay)</p>
                                    <p className="text-sm text-foreground">
                                        Frontend teknolojileri ile tanıştım ve React öğrenme sürecinde aktif projelerde yer aldım.
                                        Takım çalışması ve agile metodolojiler konusunda deneyim kazandım.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></div>
                                <div className="bg-card rounded-lg p-4 border border-border/50">
                                    <h4 className="font-medium text-foreground text-lg">Web Designer</h4>
                                    <p className="text-sm text-muted-foreground mb-2">Sonart Ajans • 2020 - 2021 (3 ay)</p>
                                    <p className="text-sm text-foreground">
                                        HTML, CSS ve JavaScript kullanarak web siteleri tasarladım. Responsive tasarım prensiplerini
                                        öğrendim ve kullanıcı deneyimi odaklı çalışmalar yaptım.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></div>
                                <div className="bg-card rounded-lg p-4 border border-border/50">
                                    <h4 className="font-medium text-foreground text-lg">Freelance Web Developer</h4>
                                    <p className="text-sm text-muted-foreground mb-2">Freelance • 2020 - 2020 (10 ay)</p>
                                    <p className="text-sm text-foreground">
                                        Çeşitli projeler için web siteleri geliştirdim. Müşteri iletişimi, proje yönetimi ve
                                        bağımsız çalışma deneyimi kazandım. Farklı sektörlerde projeler tamamladım.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                            <div className="relative pl-8">
                                <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></div>
                                <div className="bg-card rounded-lg p-4 border border-border/50">
                                    <h4 className="font-medium text-foreground text-lg">Lise Zorunlu Staj</h4>
                                    <p className="text-sm text-muted-foreground mb-2">Çamlıbel Elektrik Dağıtım A.Ş. • 2019 - 2019 (7 ay)</p>
                                    <p className="text-sm text-foreground">
                                        Lise zorunlu stajım kapsamında kurumsal çalışma ortamını tanıdım. İş disiplini ve
                                        profesyonel çalışma kültürü konusunda deneyim kazandım.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education & Certifications */}
                <section className="bg-card/50 rounded-lg p-6 border border-border/50">
                    <h3 className="text-lg lg:text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                        <GraduationCap className="text-2xl" />
                        Eğitim
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-card rounded-lg p-4 border border-border/50 text-center hover:border-primary/50 transition-colors">
                            <GraduationCap className="text-3xl mb-2 mx-auto" />
                            <h4 className="font-medium text-foreground">Yönetim Bilişim Sistemleri</h4>
                            <p className="text-sm text-muted-foreground">Anadolu Üniversitesi Açıköğretim</p>
                            <p className="text-xs text-muted-foreground mt-1">2024 - Devam Ediyor</p>
                        </div>
                        <div className="bg-card rounded-lg p-4 border border-border/50 text-center hover:border-primary/50 transition-colors">
                            <GraduationCap className="text-3xl mb-2 mx-auto" />
                            <h4 className="font-medium text-foreground">Bilgisayar Programcılığı</h4>
                            <p className="text-sm text-muted-foreground">İnönü Üniversitesi</p>
                            <p className="text-xs text-muted-foreground mt-1">2020 - 2022</p>
                        </div>
                        <div className="bg-card rounded-lg p-4 border border-border/50 text-center hover:border-primary/50 transition-colors">
                            <GraduationCap className="text-3xl mb-2 mx-auto" />
                            <h4 className="font-medium text-foreground">Bilişim Teknolojileri</h4>
                            <p className="text-sm text-muted-foreground">Sivas Bilişim Teknolojileri M.T.A.L</p>
                            <p className="text-xs text-muted-foreground mt-1">2017 - 2020</p>
                        </div>
                    </div>
                </section>
            </div>
        </AnimatedPage>
    );
}; 