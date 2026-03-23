import React from 'react'
import './About.css'

export default function About() {
    const highlights = [
        { icon: '🎓', label: 'Computer Science Student', desc: 'Pursuing a CS degree with a passion for software engineering and development.' },
        { icon: '⚡', label: 'DSA Enthusiast', desc: 'Deeply interested in Data Structures & Algorithms, solving complex problems efficiently.' },
        { icon: '🔐', label: 'Cybersecurity Learner', desc: 'Exploring ethical hacking, penetration testing, and security concepts using tools like Kali Linux.' },
        { icon: '🌐', label: 'Full Stack Developer', desc: 'Experience building web applications using the MERN stack and other modern technologies.' },
    ]

    return (
        <section className="about" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">Get to know me a little better</p>

                <div className="about__content">
                    <div className="about__left">
                        <div className="about__bio">
                            <div className="about__bio-header">
                                <div className="about__avatar">
                                    <span>PR</span>
                                </div>
                                <div>
                                    <h3 className="about__name">Prithwiraj Roy</h3>
                                    <p className="about__role">Software Developer &amp; CS Student</p>
                                </div>
                            </div>
                            <p className="about__text">
                                Hi! I'm <span className="highlight-text">Prithwiraj Roy</span>, a Computer Science student with a deep passion for software development, problem-solving, and technology. I thrive on turning complex problems into elegant, efficient solutions.
                            </p>
                            <p className="about__text">
                                My journey in tech spans <span className="highlight-text">full-stack web development</span> using the MERN stack, competitive programming with a focus on <span className="highlight-text">Data Structures &amp; Algorithms</span>, and a growing interest in <span className="highlight-text">Cybersecurity and ethical hacking</span>. I believe in continuous learning — every new challenge is an opportunity to grow.
                            </p>
                            <p className="about__text">
                                When I'm not coding, you'll find me exploring security concepts, contributing to projects, or practicing DSA problems on LeetCode or practicing on tryHackMe.
                            </p>
                            <div className="about__stats">
                                <div className="about__stat">
                                    <span className="about__stat-number">100+</span>
                                    <span className="about__stat-label">Problems Solved</span>
                                </div>
                                <div className="about__stat">
                                    <span className="about__stat-number">33+</span>
                                    <span className="about__stat-label">Rooms completed</span>
                                </div>
                                <div className="about__stat">
                                    <span className="about__stat-number">2+</span>
                                    <span className="about__stat-label">Projects Built</span>
                                </div>
                                <div className="about__stat">
                                    <span className="about__stat-number">5+</span>
                                    <span className="about__stat-label">Technologies</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="about__highlights">
                    {highlights.map((item, i) => (
                        <div className="about__card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="about__card-icon">{item.icon}</div>
                            <div>
                                <h4 className="about__card-title">{item.label}</h4>
                                <p className="about__card-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
