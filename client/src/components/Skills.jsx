import React, { useState } from 'react'
import './Skills.css'

const fallbackSkills = [
    { category: 'Programming Languages', icon: '💻', items: ['Java', 'Python', 'C', 'C++'] },
    { category: 'Web Development', icon: '🌐', items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js'] },
    { category: 'Database', icon: '🗄️', items: ['MySQL', 'MongoDB'] },
    { category: 'Cybersecurity Tools', icon: '🔐', items: ['Kali Linux', 'Nmap', 'Wireshark'] },
    { category: 'Concepts', icon: '🧠', items: ['Data Structures & Algorithms', 'Problem Solving', 'OOP'] },
]

export default function Skills() {
    const [skills] = useState(fallbackSkills)

    return (
        <section className="skills" id="skills">
            <div className="container">
                <h2 className="section-title">Skills &amp; Technologies</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">My technical toolkit — built through projects and practice</p>

                <div className="skills__grid">
                    {skills.map((group, i) => (
                        <div className="skills__group card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="skills__group-header">
                                <span className="skills__group-icon">{group.icon}</span>
                                <h3 className="skills__group-title">{group.category}</h3>
                            </div>
                            <div className="skills__badges">
                                {group.items.map((skill, j) => (
                                    <span className="skills__badge" key={j} style={{ animationDelay: `${i * 0.1 + j * 0.05}s` }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
