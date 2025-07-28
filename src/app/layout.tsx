import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { Header, Profile, MatrixRainBackground } from "@/components/layout";
import { RouteContextProvider } from "@/context/route/RouteContext";
import { ThemeProvider } from "@/context/theme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uğur Danış - Portfolio",
  description: "Uğur Danış - Portfolio",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen text-foreground flex items-center justify-center p-4 pb-20 lg:pb-4`}
      >
        <ThemeProvider>
          <RouteContextProvider>
            <MatrixRainBackground />
            {/* Container */}
            <div className="w-full max-w-7xl h-[80vh] mx-auto relative rounded-lg shadow-lg opacity-80">
              <Header />
              <div className="w-full h-full flex flex-col lg:flex-row">
                <Profile />
                <div className="w-full lg:w-3/5 h-full">
                  {children}
                </div>
              </div>
            </div>
          </RouteContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
