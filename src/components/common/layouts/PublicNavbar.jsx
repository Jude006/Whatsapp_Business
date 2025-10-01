// src/components/layout/PublicNavbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PublicNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="px-4 mx-auto md:w-[95%]  sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-500">
                <span className="text-lg font-bold text-white font-heading">G</span>
              </div>
              <span className="text-xl font-semibold text-gray-900 font-heading">
                Gentle-Tools
              </span>
            </Link>
          </div>

          <div className="items-center hidden space-x-8 md:flex">
            <Link 
              to="/" 
              className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
            >
              Features
            </Link>
            <Link 
              to="/pricing" 
              className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="items-center hidden space-x-4 md:flex">
            <Link 
              to="/auth/login" 
              className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
            >
              Sign In
            </Link>
            <Link 
              to="/auth/register" 
              className="btn-primary"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="py-4 border-t border-gray-200 md:hidden">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col pt-4 space-y-3 border-t border-gray-200">
                <Link 
                  to="/auth/login" 
                  className="font-medium text-gray-600 transition-colors duration-200 hover:text-primary-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  to="/auth/register" 
                  className="text-center btn-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PublicNavbar;