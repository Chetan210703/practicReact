import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          
          <div className="flex space-x-4">
            <Link 
              to="/" 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            >
              Back to Home
            </Link>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive 
                  ? "px-4 py-2 bg-green-600 text-white rounded"
                  : "px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
