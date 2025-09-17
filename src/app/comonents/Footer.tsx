import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdSpeed, MdAccessTime, MdSecurity } from 'react-icons/md'

const Footer = () => {
  const serviceHighlights = [
    { icon: <MdSpeed className="w-5 h-5" />, text: "Fast Service Delivery" },
    { icon: <MdAccessTime className="w-5 h-5" />, text: "On-Time Project Completion" },
    { icon: <MdSecurity className="w-5 h-5" />, text: "Secure & Reliable Solutions" }
  ];

  return (
    <footer className="bg-vibe py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Service Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 border-b border-gray-700 pb-8">
          {serviceHighlights.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-gray-300 group">
              <div className="text-casual group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <span className="text-sm group-hover:text-casual transition-colors duration-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright Text */}
          <div className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Ali Hamza. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href="https://github.com/YourGithubUsername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-casual transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/YourLinkedinUsername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-casual transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://wa.me/923245119133" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-casual transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer