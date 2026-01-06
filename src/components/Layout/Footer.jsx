import React from 'react'
import { Link } from 'react-router-dom'
import { FaWrench, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <FaWrench />
              <span>Panel Beating Pro</span>
            </div>
            <p>Learn automotive panel beating through interactive tutorials, videos, and hands-on practice.</p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/tutorials">Tutorials</Link></li>
              <li><Link to="/videos">Videos</Link></li>
              <li><Link to="/interactive">Interactive</Link></li>
              <li><Link to="/quizzes">Quizzes</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/tools">Tools & Calculators</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Panel Beating Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

