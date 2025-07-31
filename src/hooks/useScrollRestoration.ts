import { useEffect, useRef, RefObject } from 'react';

interface UseScrollRestorationOptions {
    enabled?: boolean;
    smooth?: boolean;
    delay?: number;
}

export const useScrollRestoration = <T extends HTMLElement = HTMLElement>(
    trigger: unknown,
    options: UseScrollRestorationOptions = {}
): RefObject<T | null> => {
    const { enabled = true, smooth = true, delay = 0 } = options;
    const containerRef = useRef<T | null>(null);

    useEffect(() => {
        if (!enabled) return;

        const scrollToTop = () => {
            const target = containerRef.current || window;

            if (delay > 0) {
                setTimeout(() => {
                    target.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: smooth ? 'smooth' : 'auto'
                    });
                }, delay);
            } else {
                target.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: smooth ? 'smooth' : 'auto'
                });
            }
        };

        scrollToTop();
    }, [trigger, enabled, smooth, delay]);

    return containerRef;
}; 