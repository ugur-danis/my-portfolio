import { NextIntlClientProvider } from 'next-intl';
import { MatrixRainBackground, Header, Profile } from '@/components/layout';
import { RouteContextProvider } from '@/context/route/RouteContext';
import { ThemeProvider } from '@/context/theme';
import { NotFoundPage } from '@/components/ui';
import "@/styles/globals.css";

export default function GlobalNotFound() {
    return (
        <div className={`antialiased relative min-h-screen text-foreground flex items-center justify-center p-2 sm:p-4 pt-16 lg:pt-4`}>
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
        </div>
    );
} 