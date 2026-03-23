import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations
 * SEPARATED from hover animations
 * Handles ONLY: opacity + translateY (vertical movement)
 * 
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1, default 0.1)
 * @param {string} options.rootMargin - Intersection observer margin (default '0px 0px -50px 0px')
 * @returns {Object} ref - React reference to attach to wrapper element
 */
export const useScrollReveal = ({
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px'
} = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Initial state - hidden
        element.classList.add('scroll-animate-wrapper');

        // Create Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Trigger reveal animation
                        entry.target.classList.add('scroll-animate-visible');
                        
                        // Unobserve to save performance and ensure animation runs only once
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin]);

    return ref;
};

/**
 * Staggered reveal animation hook
 * @param {Array} items - Array of items to animate
 * @param {Object} options - Configuration options
 * @returns {Function} getStaggerProps - Function to get props for each item
 */
export const useStaggeredReveal = (items = [], {
    staggerDelay = 100,
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px'
} = {}) => {
    const getStaggerProps = (index) => ({
        delay: index * staggerDelay,
        threshold,
        rootMargin
    });

    return getStaggerProps;
};
