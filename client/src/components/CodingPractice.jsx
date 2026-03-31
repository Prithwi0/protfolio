import React from 'react'
import AnimatedItem from './AnimatedItem'
import './CodingPractice.css'

export default function CodingPractice() {
    const stats = [
        { platform: 'LeetCode', count: '150+', label: 'Problems Solved', icon: '📝', link: 'https://leetcode.com/u/prithwirajroy431/' },
        { platform: 'TryHackMe', count: '40+ Days', label: 'Learning Streak', icon: '🔥', link: 'https://tryhackme.com/p/prithwirajroy431' },
        { platform: 'TryHackMe', count: '40+', label: 'Rooms Completed', icon: '🛡️', link: 'https://tryhackme.com/p/prithwirajroy431' }
    ]

    const focuses = ['Arrays & Strings', 'Linked Lists', 'Trees & Graphs', 'Dynamic Programming', 'Hashing']

    return (
        <section className="coding-practice" id="coding">
            <div className="container">
                <h2 className="section-title">Practice Platform</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">Continuous problem solving &amp; algorithmic thinking</p>

                <div className="coding__content">
                    <div className="coding__stats">
                        {stats.map((stat, i) => (
                            <AnimatedItem 
                                key={i} 
                                index={i} 
                                animationType="scaleUp" 
                                staggerDelay={150}
                            >
                                <a href={stat.link} target="_blank" rel="noopener noreferrer" className="coding__stat-card card" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div className="coding__stat-icon">{stat.icon}</div>
                                    <div className="coding__stat-info">
                                        <h3 className="coding__platform">{stat.platform}</h3>
                                        <div className="coding__count">{stat.count}</div>
                                        <p className="coding__label">{stat.label}</p>
                                    </div>
                                </a>
                            </AnimatedItem>
                        ))}
                    </div>

                    <div className="coding__focus">
                        <h3 className="coding__focus-title">Current Focus Areas</h3>
                        <div className="coding__tags">
                            {focuses.map((focus, i) => (
                                <AnimatedItem 
                                    key={i} 
                                    index={i} 
                                    animationType="slideUp" 
                                    staggerDelay={80}
                                >
                                    <span className="coding__tag">
                                        {focus}
                                    </span>
                                </AnimatedItem>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}
