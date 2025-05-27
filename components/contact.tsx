"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const contactInfo = {
    email: "muthukumar.jayamurugan@gmail.com",
    phone: "+91-9094534141",
    location: "Bangalore, India",
  }

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would implement form submission logic here
    setFormSubmitted(true)
    // Reset form after submission
    setTimeout(() => {
      setFormSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-2xl font-bold text-primary-color mb-6">Get In Touch</h3>

            <div className="space-y-4">
              <div className="flex items-center">
                <i className="fas fa-envelope text-primary-color mr-3"></i>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-700 hover:text-primary-color transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center">
                <i className="fas fa-phone text-primary-color mr-3"></i>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-700 hover:text-primary-color transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-primary-color mr-3"></i>
                <span className="text-gray-700">{contactInfo.location}</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  className="text-gray-700 hover:text-primary-color transition-colors"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="text-gray-700 hover:text-primary-color transition-colors"
                  rel="noreferrer"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  className="text-gray-700 hover:text-primary-color transition-colors"
                  rel="noreferrer"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-2xl font-bold text-primary-color mb-6">Send Me a Message</h3>

            {!formSubmitted ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-color"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <i className="fas fa-check-circle text-green-500 text-5xl mb-4"></i>
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-gray-700">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
