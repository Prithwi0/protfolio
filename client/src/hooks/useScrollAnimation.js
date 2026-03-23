import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer API
 * @param {Object} options - Configuration options
 * @param {string} options.animationType - Type of animation: 'fade', 'slideUp', 'slideLeft', 'slideRight', 'scaleUp', 'rotateIn'
 * @param {number} options.delay - Animation delay in milliseconds (optional)
 * @param {number} options.threshold - Intersection threshold (0-1, default 0.1)
 * @param {string} options.rootMargin - Intersection observer margin (default '0px 0px -50px 0px')
 * @returns {Object} ref - React reference to attach to the element
 */
export const useScrollAnimation = ({
    animationType = 'fade',
    delay = 0,
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px'
} = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Apply animation type and initial hidden state immediately
        const defaultAnimationClass = 'scroll-animate-hidden';
        const visibleClass = 'scroll-animate-visible';
        const animationClass = `scroll-animate-${animationType}`;

        // Add classes immediately to prevent flashing
        element.classList.add(defaultAnimationClass);
        element.classList.add(animationClass);

        // Apply delay if specified using transitionDelay instead of animationDelay
        if (delay > 0) {
            element.style.transitionDelay = `${delay}ms`;
        }

        // Create Intersection Observer with rootMargin to trigger early
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Remove hidden class and add visible class for smooth transition
                        element.classList.remove(defaultAnimationClass);
                        element.classList.add(visibleClass);
                        
                        // Unobserve after triggering animation
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
    }, [animationType, delay, threshold, rootMargin]);

    return ref;
};

/**
 * Hook for staggered animations on a list of items
 * @param {Array} items - Array of items to animate
 * @param {Object} options - Configuration options
 * @returns {Function} getAnimationProps - Function to get props for each item
 */
export const useStaggeredAnimation = (items = [], {
    animationType = 'fade',
    staggerDelay = 100,
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px'
} = {}) => {
    const getAnimationProps = (index) => ({
        animationType,
        delay: index * staggerDelay,
        threshold,
        rootMargin
    });

    return getAnimationProps;
};
