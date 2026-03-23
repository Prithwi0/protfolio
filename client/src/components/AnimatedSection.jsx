import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/animations.css';

/**
 * Wrapper component for scroll-triggered animations
 * @param {React.ReactNode} children - Content to animate
 * @param {string} animationType - Type of animation (fade, slideUp, slideLeft, slideRight, scaleUp, rotateIn)
 * @param {Object} animationProps - Additional props for useScrollAnimation hook
 */
const AnimatedSection = ({ 
    children, 
    animationType = 'slideUp',
    className = '',
    animationProps = {}
}) => {
    const animationRef = useScrollAnimation({
        animationType,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
        ...animationProps
    });

    return (
        <div 
            ref={animationRef}
            className={`animate-on-scroll ${className}`}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
