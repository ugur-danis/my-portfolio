'use client';

import React, { createContext, useContext, useState } from "react";

type TRouteContext = {
    route: string;
    setRoute: (route: string) => void;
};

const RouteContext = createContext<TRouteContext | undefined>(undefined);

export const RouteContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [route, setRoute] = useState<string>("");

    return (
        <RouteContext.Provider value={{ route, setRoute }}>
            {children}
        </RouteContext.Provider>
    );
};

export const useRouteContext = (): TRouteContext => {
    const context = useContext(RouteContext);
    if (!context) throw new Error("useRouteContext must be used within a RouteContextProvider");
    return context;
};

