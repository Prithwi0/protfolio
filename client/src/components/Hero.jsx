import React, { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
    const typedRef = useRef(null)
    const titles = ['DSA Enthusiast', 'Problem Solver', 'Cybersecurity Learner']
    let titleIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeoutId = null

    useEffect(() => {
        const type = () => {
            const el = typedRef.current
            if (!el) return
            const current = titles[titleIndex]
            if (!isDeleting) {
                el.textContent = current.substring(0, charIndex + 1)
                charIndex++
                if (charIndex === current.length) {
                    isDeleting = true
                    timeoutId = setTimeout(type, 1800)
                    return
                }
            } else {
                el.textContent = current.substring(0, charIndex - 1)
                charIndex--
                if (charIndex === 0) {
                    isDeleting = false
                    titleIndex = (titleIndex + 1) % titles.length
                }
            }
            timeoutId = setTimeout(type, isDeleting ? 60 : 100)
        }
        timeoutId = setTimeout(type, 500)
        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <section className="hero" id="home">
            <div className="hero__overlay"></div>
            <div className="container hero__content">
                <div className="hero__text">
                    <p className="hero__greeting">
                        <span className="hero__greeting-code">{'>'} hello world, I'm</span>
                    </p>
                    <h1 className="hero__name">Prithwiraj Roy</h1>
                    <div className="hero__title-wrapper">
                        <span className="hero__title-prefix">{'<'}</span>
                        <span className="hero__typed" ref={typedRef}></span>
                        <span className="hero__cursor">|</span>
                        <span className="hero__title-prefix"> /{'>'}</span>
                    </div>
                    <p className="hero__tagline">
                        &ldquo;Building efficient software and exploring the world of cybersecurity. Turning complex problems into elegant solutions.&rdquo;
                    </p>
                    <div className="hero__actions-container">
                        <div className="hero__actions">
                            <a href="#projects" className="btn btn-primary">
                                🚀 View Projects
                            </a>
                            <a href="/resume.pdf" download className="btn btn-outline">
                                📄 Download Resume
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                ✉ Contact Me
                            </a>
                        </div>
                        <div className="hero__social">
                            <a href="https://github.com/Prithwi0" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/prithwiraj-roy/" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="mailto:suklar999@gmail.com" className="hero__social-link" aria-label="Email">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__image-container">
                        <div className="hero__image-glow"></div>
                        <img 
                            src="/mypic.jpeg" 
                            alt="Prithwiraj Roy" 
                            className="hero__picture"
                        />
                        <div className="tech-badge tech-badge--1">DSA</div>
                        <div className="tech-badge tech-badge--2">Java</div>
                        <div className="tech-badge tech-badge--3">React</div>
                        <div className="tech-badge tech-badge--4">Cyber</div>
                    </div>
                </div>
            </div>
            <div className="hero__scroll">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel"></div>
                </div>
                <div className="hero__scroll-arrows">
                    <span></span>
                    <span></span>
                </div>
            </div>
        </section>
    )
}
