"use client";

import { AnimatedPage } from "@/components/ui/AnimatedPage";
import {
    Mail,
    MapPin,
    Send,
    User
} from "lucide-react";

const contactInfo = [
    {
        icon: <Mail className="w-5 h-5" />,
        title: "E-posta",
        value: "ugurdnis@gmail.com",
        link: "mailto:ugurdnis@gmail.com"
    },
    {
        icon: <MapPin className="w-5 h-5" />,
        title: "Konum",
        value: "Sivas, Türkiye",
        link: null
    }
];



export const Contact = () => {
    return (
        <AnimatedPage>
            <div className="space-y-6 p-4 lg:p-6">
                <div className="text-center">
                    <h2 className="text-xl lg:text-2xl font-bold text-primary mb-4">İletişim</h2>
                    <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto">
                        Projeleriniz için benimle iletişime geçebilir, sorularınızı sorabilir veya sadece merhaba diyebilirsiniz.
                        Size en kısa sürede dönüş yapacağım.
                    </p>
                </div>

                {/* Contact Information */}
                <div className="bg-card/50 rounded-lg p-6 border border-border/50">
                    <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                        <User className="w-5 h-5" />
                        İletişim Bilgileri
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="text-primary">
                                    {info.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-foreground">{info.title}</p>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm text-muted-foreground">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card/50 rounded-lg p-6 border border-border/50">
                    <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Mesaj Gönder
                    </h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                    Ad Soyad
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                    placeholder="Adınız ve soyadınız"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    E-posta
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                                    placeholder="ornek@email.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                Konu
                            </label>
                            <select
                                id="subject"
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                            >
                                <option value="">Konu seçiniz</option>
                                <option value="project">Proje Teklifi</option>
                                <option value="freelance">Freelance İş</option>
                                <option value="collaboration">İş Birliği</option>
                                <option value="question">Soru</option>
                                <option value="other">Diğer</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                Mesaj
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                                placeholder="Mesajınızı buraya yazın..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                        >
                            <Send className="w-4 h-4" />
                            Mesaj Gönder
                        </button>
                    </form>
                </div>
            </div>
        </AnimatedPage>
    );
}; 