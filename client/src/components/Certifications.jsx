import React from 'react'
import './Certifications.css'

export default function Certifications() {
    const certifications = [
        {
            title: 'NPTEL Internet of Things (IoT)',
            issuer: 'NPTEL / IIT',
            icon: '🌐',
            description: 'Comprehensive study of IoT concepts, architecture, and practical implementations.',
            link: 'https://docs.google.com/document/d/1Rd_NPKXXFqMRjv7JJip946aZD0A4ZAl7B6awSOfcD7E/edit?tab=t.0'
        },
        {
            title: 'Master in Data Structures and Algorithms',
            issuer: 'Summer Training Program',
            icon: '🧩',
            description: 'Intensive summer training focused on advanced DSA, problem-solving, and algorithmic optimization.',
            link: 'https://docs.google.com/document/d/1N6M7dgB-qZlqU7az6mLH3cIurad-OtFO-u88gEvtaXA/edit?pli=1&tab=t.0'
        },
        {
            title: 'Computational Theory: Language Principles & Finite Automata Theory',
            issuer: 'Infosys Springboard (2025)',
            icon: '⚙️',
            description: 'In-depth study of formal languages, automata theory, and computational logic.',
            link: 'https://docs.google.com/document/d/1pBRlUrKtl3vuiuNvFmieAV8bqiPUU7fallMoqZmWbK0/edit?tab=t.0'
        },
        {
            title: 'Master Generative AI & Generative AI tools (ChatGPT)',
            issuer: 'Udemy (2025)',
            icon: '🧠',
            description: 'Comprehensive certification on utilizing Generative AI tools and prompt engineering.',
            link: 'https://docs.google.com/document/d/1Xfm68poNbdsbP4gatMhQnBKQG1YTTwt5iJzRHR5tQ_U/edit?tab=t.0'
        }
    ]

    return (
        <section className="certifications" id="certifications">
            <div className="container">
                <h2 className="section-title">Certifications &amp; Training</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">Professional courses and specialized training programs</p>

                <div className="certifications__grid">
                    {certifications.map((cert, index) => (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certifications__card card" key={index} style={{ animationDelay: `${index * 0.2}s`, textDecoration: 'none', color: 'inherit' }}>
                            <div className="certifications__icon">{cert.icon}</div>
                            <div className="certifications__content">
                                <h3 className="certifications__title">{cert.title}</h3>
                                <p className="certifications__issuer">{cert.issuer}</p>
                                <p className="certifications__desc">{cert.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section >
    )
}
