import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-gray-800 hover:text-gray-700">
              Logo
            </NavLink>
          </div>

          {/* Make sure links are always visible */}
          <div className="flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-red-700" : "text-gray-600 hover:text-gray-900"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-red-700" : "text-gray-600 hover:text-gray-900"
              }
            >
              About
            </NavLink>
            <NavLink 
              to="/github" 
              className={({ isActive }) => 
                isActive ? "text-red-700" : "text-gray-600 hover:text-gray-900"
              }
            >
              Github
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
