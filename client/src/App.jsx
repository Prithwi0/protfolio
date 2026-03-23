import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';
import MatrixRain from './components/MatrixRain';
import './index.css';
import './styles/animations.css';

// Lazy load section components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Certifications = lazy(() => import('./components/Certifications'));
const Projects = lazy(() => import('./components/Projects'));
const CodingPractice = lazy(() => import('./components/CodingPractice'));
const Contact = lazy(() => import('./components/Contact'));

// Loading fallback component
const LoadingFallback = () => (
    <div style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
        <p>Loading...</p>
    </div>
);

function App() {
    return (
        <div className="app-container">
            <MatrixRain />
            <Navbar />
            <main>
                <Suspense fallback={<LoadingFallback />}>
                    <AnimatedSection animationType="slideUp">
                        <Hero />
                    </AnimatedSection>
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <AnimatedSection animationType="slideUp">
                        <About />
                    </AnimatedSection>
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <AnimatedSection animationType="slideUp">
                        <Education />
                    </AnimatedSection>
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <AnimatedSection animationType="slideUp">
                        <Skills />
                    </AnimatedSection>
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <AnimatedSection animationType="slideUp">
                        <Certifications />
                    </AnimatedSection>
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <AnimatedSection animationType="slideUp">
                        <Projects />
                    </AnimatedSection>
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <AnimatedSection animationType="slideUp">
                        <CodingPractice />
                    </AnimatedSection>
                </Suspense>
                <Suspense fallback={<LoadingFallback />}>
                    <AnimatedSection animationType="slideUp">
                        <Contact />
                    </AnimatedSection>
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}

export default App;
