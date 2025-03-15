import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  const [contactForm, setContactForm] = useState({
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(contactForm)
  }

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Navigation Links - Left Side */}
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <NavLink 
              to="/" 
              className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              About Us
            </NavLink>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Contact Us
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 w-64 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder-gray-400"
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
              />
              <input
                type="text"
                placeholder="Your message"
                className="p-2 w-64 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 placeholder-gray-400"
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
              />
              <button 
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm">&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
