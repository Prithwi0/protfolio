import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/animations.css';

/**
 * Wrapper component for individual items in a list with staggered animation
 * @param {React.ReactNode} children - Item content
 * @param {number} index - Index of item in list (for stagger calculation)
 * @param {string} animationType - Type of animation
 * @param {number} staggerDelay - Delay between animations per item (ms)
 * @param {Object} animationProps - Additional props for animation
 */
const AnimatedItem = ({
    children,
    index = 0,
    animationType = 'fadeUp',
    staggerDelay = 100,
    className = '',
    animationProps = {}
}) => {
    const delay = index * staggerDelay;

    const animationRef = useScrollAnimation({
        animationType,
        delay,
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
        ...animationProps
    });

    return (
        <div
            ref={animationRef}
            className={`stagger-item animate-on-scroll ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimatedItem;
