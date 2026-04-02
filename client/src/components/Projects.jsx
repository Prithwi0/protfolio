import React, { useState } from 'react'
import AnimatedItem from './AnimatedItem'
import './Projects.css'

const fallbackProjects = [
    {
        id: 1,
        title: 'Project Management App',
        description: 'A comprehensive project management web application built with the MERN stack (MongoDB, Express, React, Node.js). It provides teams with a centralized platform to manage projects, tasks, team members, and analytics.',
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind'],
        github: 'https://github.com/Prithwi0/project-management-app',
        liveDemo: null,
        icon: '📋'
    },
    {
        id: 2,
        title: 'AI Code Reviewer',
        description: 'A tool that analyzes code and provides automated feedback to improve code quality and detect potential issues using AI concepts.',
        technologies: ['Python', 'AI/ML Concepts', 'Web Technologies'],
        github: 'https://github.com/Prithwi0/AI_code-_reviewer',
        liveDemo: null,
        icon: '🤖'
    },
    {
        id: 3,
        title: 'Efficient Page Replacement Algorithm',
        description: 'A study and implementation of efficient page replacement algorithms (such as LRU, FIFO, or Optimal) for operating system memory management.',
        technologies: ['C/C++', 'OS Concepts', 'Algorithms'],
        github: 'https://github.com/Prithwi0/Efficient-page-replacement-simulator',
        liveDemo: null,
        icon: '🖥️'
    },
    {
        id: 4,
        title: 'Weather App',
        description: 'A weather forecasting web application that provides real-time weather updates and forecasts using a third-party weather API.',
        technologies: ['Python', 'Flask', 'API Integration', 'HTML', 'CSS'],
        github: 'https://github.com/Prithwi0/weather-forecast-app',
        liveDemo: null,
        icon: '🌤️'
    }
]

export default function Projects() {
    const [projects] = useState(fallbackProjects)

    return (
        <section className="projects" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">A selection of recent work and side projects</p>

                <div className="projects__grid">
                    {projects.map((project, index) => (
                        <AnimatedItem 
                            key={project.id} 
                            index={index} 
                            animationType="scaleUp" 
                            staggerDelay={150}
                        >
                            <div className="projects__card card">
                                <div className="projects__card-body">
                                    <div className="projects__card-header">
                                        <div className="projects__icon">{project.icon}</div>
                                        <div className="projects__links">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
                                            </a>
                                            )}
                                            {project.liveDemo && (
                                                <a href={project.liveDemo} target="_blank" rel="noreferrer" aria-label="Live Demo">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <h3 className="projects__title">{project.title}</h3>
                                    <p className="projects__description">{project.description}</p>
                                </div>
                                <div className="projects__footer">
                                    <div className="projects__tech-list">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="projects__tech-item">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>
            </div>
        </section >
    )
}
