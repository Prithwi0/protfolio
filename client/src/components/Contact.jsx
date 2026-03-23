import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState({ type: '', message: '' })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Create mailto link with form data
        const subject = `Message from ${formData.name}`
        const body = `From: ${formData.email}\n\n${formData.message}`
        const mailtoLink = `mailto:suklar999@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        
        window.location.href = mailtoLink
        setStatus({ type: 'success', message: 'Opening your email client...' })
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="section-divider"></div>
                <p className="section-subtitle">Have a question or want to work together? Drop a message!</p>

                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__info-box card">
                            <span className="contact__info-icon">📧</span>
                            <div>
                                <h3>Email</h3>
                                <p>suklar999@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact__info-box card">
                            <span className="contact__info-icon">📍</span>
                            <div>
                                <h3>Location</h3>
                                <p>India</p>
                            </div>
                        </div>
                        <div className="contact__info-box card">
                            <span className="contact__info-icon">🤝</span>
                            <div>
                                <h3>Availability</h3>
                                <p>Open for opportunities</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact__form card" onSubmit={handleSubmit}>
                        <div className="contact__form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="your name"
                                required
                            />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="abc@example.com"
                                required
                            />
                        </div>
                        <div className="contact__form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can I help you?"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary contact__btn">
                            Send Message 🚀
                        </button>

                        {status.message && (
                            <div className={`contact__status contact__status--${status.type}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div >
        </section >
    )
}
