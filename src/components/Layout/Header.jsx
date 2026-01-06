import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaWrench, FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/tutorials', label: 'Tutorials' },
    { path: '/videos', label: 'Videos' },
    { path: '/interactive', label: 'Interactive' },
    { path: '/quizzes', label: 'Quizzes' },
    { path: '/tools', label: 'Tools' },
    { path: '/gallery', label: 'Gallery' }
  ]

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <FaWrench className="logo-icon" />
          <span>Panel Beating Pro</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  )
}

export default Header

