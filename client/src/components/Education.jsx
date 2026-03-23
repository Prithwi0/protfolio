import React from 'react'
import SectionMatrixRain from './SectionMatrixRain'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Education.css'

export default function Education() {
    const educationList = [
        {
            institution: 'Lovely Professional University',
            location: 'Punjab, India',
            degree: 'Bachelor of Technology in Computer Science and Engineering',
            score: 'CGPA: 7.23',
            period: '2023 – Present',
            icon: '🎓'
        },
        {
            institution: 'Cooch Behar Rambhola High School',
            location: 'Cooch Behar, West Bengal',
            degree: 'Intermediate (12th Grade)',
            score: 'Percentage: 83%',
            period: '2022 – 2023',
            icon: '🏫'
        },
        {
            institution: 'Cooch Behar Rambhola High School',
            location: 'Cooch Behar, West Bengal',
            degree: 'Matriculation (10th Grade)',
            score: 'Percentage: 87%',
            period: '2020 – 2021',
            icon: '📚'
        }
    ]

    return (
        <section className="education" id="education">
            <SectionMatrixRain sectionId="education" />
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">Academic background and qualifications</p>

                <div className="education__timeline">
                    {educationList.map((item, index) => (
                        <EducationItemWithAnimation key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}

// Sub-component for individual education item with scroll reveal + hover animations
function EducationItemWithAnimation({ item }) {
    const wrapperRef = useScrollReveal({
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    })

    return (
        <div className="education__item">
            <div className="education__marker">
                <div className="education__icon">{item.icon}</div>
                <div className="education__line"></div>
            </div>
            {/* Wrapper div handles scroll reveal animation (opacity + translateY) */}
            <div ref={wrapperRef} className="education__item-wrapper">
                {/* Inner card div handles hover animation (scale only) */}
                <div className="education__content scroll-animate-card card">
                    <div className="education__header">
                        <h3 className="education__institution">{item.institution}</h3>
                        <span className="education__period">{item.period}</span>
                    </div>
                    <p className="education__location">{item.location}</p>
                    <h4 className="education__degree">{item.degree}</h4>
                    <p className="education__score">{item.score}</p>
                </div>
            </div>
        </div>
    )
}
