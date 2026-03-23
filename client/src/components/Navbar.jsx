import React, { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Practice Platform', href: '#coding' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [active, setActive] = useState('home')
    const [hoveredLink, setHoveredLink] = useState(null)

    useEffect(() => {
        const sections = ['home', 'about', 'education', 'skills', 'certifications', 'projects', 'coding', 'contact']
        const observedElements = new Set()
        
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActive(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        
        // Function to scan for sections and observe them
        const scanSections = () => {
            sections.forEach(id => {
                if (!observedElements.has(id)) {
                    const el = document.getElementById(id)
                    if (el) {
                        observer.observe(el)
                        observedElements.add(id)
                    }
                }
            })
        }

        // Initial scan
        scanSections()
        
        // Re-scan periodically to catch lazy-loaded components
        const scanInterval = setInterval(scanSections, 1000)

        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
            // Fallback for top of page
            if (window.scrollY < 100) {
                setActive('home')
            }
        }

        window.addEventListener('scroll', handleScroll)
        
        return () => {
            observer.disconnect()
            clearInterval(scanInterval)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleNavClick = (href) => {
        setMenuOpen(false)
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}>
            <div className="navbar__backdrop"></div>
            <div className="navbar__container">
                <a 
                    className="navbar__logo" 
                    onClick={() => handleNavClick('#home')} 
                    href="#home"
                >
                    <img src="/mypic.jpeg" alt="Logo" className="navbar__profile-pic" />
                    <span className="navbar__logo-bracket">&lt;</span>
                    <span className="navbar__logo-text">PR</span>
                    <span className="navbar__logo-bracket">/&gt;</span>
                </a>

                <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href} className="navbar__link-item">
                            <a
                                href={link.href}
                                className={`navbar__link ${active === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                                onMouseEnter={() => setHoveredLink(link.href.replace('#', ''))}
                                onMouseLeave={() => setHoveredLink(null)}
                            >
                                <span className="navbar__link-text">{link.label}</span>
                                <span className="navbar__link-underline"></span>
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}
