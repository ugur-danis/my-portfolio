import { NextIntlClientProvider } from 'next-intl';
import { MatrixRainBackground, Header, Profile } from '@/components/layout';
import { RouteContextProvider } from '@/context/route/RouteContext';
import { ThemeProvider } from '@/context/theme';
import { NotFoundPage } from '@/components/ui';
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function GlobalNotFound() {
    return (
        <html lang="tr">
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen text-foreground flex items-center justify-center p-2 sm:p-4 pt-16 lg:pt-4`}
            >
                <NextIntlClientProvider>
                    <ThemeProvider>
                        <RouteContextProvider>
                            <MatrixRainBackground />
                            {/* Container */}
                            <div className="w-full max-w-4xl xl:max-w-6xl 2xl:max-w-7xl h-[90vh] sm:h-[85vh] lg:h-[80vh] mx-auto relative rounded-lg shadow-lg opacity-80">
                                <Header />
                                <div className="w-full h-full flex flex-col lg:flex-row">
                                    <Profile />
                                    <div className="w-full lg:w-3/5 h-full">
                                        <NotFoundPage
                                            errorCode="404"
                                            title="Sayfa Bulunamadı"
                                            description="Aradığınız sayfa mevcut değil veya taşınmış olabilir."
                                            backHome="Ana Sayfaya Dön"
                                        />
                                    </div>
                                </div>
                            </div>
                        </RouteContextProvider>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
} 