'use client';

import React, { createContext, useContext, useState, useEffect } from "react";

// Route tiplerini tanımlayalım
export type RouteType = "#about" | "#resume" | "#projects" | "#articles" | "#contact";

type TRouteContext = {
    route: RouteType;
    setRoute: (route: RouteType) => void;
    isActive: (route: RouteType) => boolean;
    navigateTo: (route: RouteType) => void;
    getRouteTitle: (route: RouteType) => string;
};

const RouteContext = createContext<TRouteContext | undefined>(undefined);

// Geçerli route'ları tanımlayalım
const VALID_ROUTES: RouteType[] = ["#about", "#resume", "#projects", "#articles", "#contact"];

// Route başlıkları
const ROUTE_TITLES: Record<RouteType, string> = {
    "#about": "About Me",
    "#resume": "Resume",
    "#projects": "Projects",
    "#articles": "Articles",
    "#contact": "Contact"
};

export const RouteContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [route, setRoute] = useState<RouteType>("#about");

    // URL hash'ini route state ile senkronize et
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash as RouteType;
            if (VALID_ROUTES.includes(hash)) {
                setRoute(hash);
            } else {
                // Geçersiz hash ise about'a yönlendir
                window.location.hash = "#about";
                setRoute("#about");
            }
        };

        // Sayfa yüklendiğinde hash'i kontrol et
        handleHashChange();

        // Hash değişikliklerini dinle
        window.addEventListener('hashchange', handleHashChange);
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // Route değiştirme fonksiyonu
    const handleSetRoute = (newRoute: RouteType) => {
        setRoute(newRoute);
        window.location.hash = newRoute;
    };

    // Navigasyon fonksiyonu (aynı route'a tıklanırsa yeniden yükleme yapmaz)
    const navigateTo = (newRoute: RouteType) => {
        if (route !== newRoute) {
            handleSetRoute(newRoute);
        }
    };

    // Aktif route kontrolü
    const isActive = (checkRoute: RouteType) => route === checkRoute;

    // Route başlığını al
    const getRouteTitle = (route: RouteType) => ROUTE_TITLES[route];

    return (
        <RouteContext.Provider value={{ 
            route, 
            setRoute: handleSetRoute, 
            isActive,
            navigateTo,
            getRouteTitle
        }}>
            {children}
        </RouteContext.Provider>
    );
};

export const useRouteContext = (): TRouteContext => {
    const context = useContext(RouteContext);
    if (!context) throw new Error("useRouteContext must be used within a RouteContextProvider");
    return context;
};

// Özel hook'lar
export const useRoute = () => {
    const { route, setRoute, isActive, navigateTo, getRouteTitle } = useRouteContext();
    
    return {
        currentRoute: route,
        setRoute,
        isActive,
        navigateTo,
        getRouteTitle,
        // Yardımcı fonksiyonlar
        isAbout: isActive("#about"),
        isResume: isActive("#resume"),
        isProjects: isActive("#projects"),
        isArticles: isActive("#articles"),
        isContact: isActive("#contact"),
    };
};

