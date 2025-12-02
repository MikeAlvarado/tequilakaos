import { useState, useEffect } from "react";

export const useScrollThreshold = (thresholdFactor: number = 0.8) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled past the threshold (viewport height * factor)
            const scrolled = window.scrollY > window.innerHeight * thresholdFactor;
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        // Check initial state
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [thresholdFactor]);

    return isScrolled;
};
