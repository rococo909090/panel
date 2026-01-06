import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBook, FaVideo, FaMousePointer, FaQuestionCircle, FaCalculator, FaImages } from 'react-icons/fa'
import './Home.css'

const Home = () => {
  const features = [
    {
      icon: <FaBook />,
      title: 'Interactive Tutorials',
      description: 'Step-by-step guides with interactive elements to learn panel beating techniques',
      link: '/tutorials',
      color: '#e63946'
    },
    {
      icon: <FaVideo />,
      title: 'Video Library',
      description: 'Watch professional demonstrations and learn from expert panel beaters',
      link: '/videos',
      color: '#457b9d'
    },
    {
      icon: <FaMousePointer />,
      title: 'Interactive Demos',
      description: 'Hands-on interactive demonstrations with drag-and-drop and clickable elements',
      link: '/interactive',
      color: '#a8dadc'
    },
    {
      icon: <FaQuestionCircle />,
      title: 'Quizzes & Assessments',
      description: 'Test your knowledge with interactive quizzes and track your progress',
      link: '/quizzes',
      color: '#f1faee'
    },
    {
      icon: <FaCalculator />,
      title: 'Tools & Calculators',
      description: 'Practical calculators for damage assessment, costs, and material estimates',
      link: '/tools',
      color: '#ffb703'
    },
    {
      icon: <FaImages />,
      title: 'Before/After Gallery',
      description: 'Explore real repair projects with interactive before/after comparisons',
      link: '/gallery',
      color: '#fb8500'
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-content"
        >
          <h1 className="hero-title">Learn Panel Beating</h1>
          <p className="hero-subtitle">
            Master automotive panel beating through interactive tutorials, videos, and hands-on practice
          </p>
          <Link to="/tutorials" className="btn btn-primary hero-cta">
            Start Learning
          </Link>
        </motion.div>
      </section>

      <section className="section">
        <h2 className="section-title">Learn Through Interaction</h2>
        <p className="section-subtitle">
          Our platform emphasizes hands-on learning with interactive elements that help you understand and remember
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="feature-card card"
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <Link to={feature.link} className="feature-link">
                Explore →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section highlight-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="highlight-content"
        >
          <h2 className="section-title">Why Interactive Learning?</h2>
          <div className="highlights">
            <div className="highlight-item">
              <h3>Hands-On Practice</h3>
              <p>Interact with tools, diagrams, and processes to build muscle memory</p>
            </div>
            <div className="highlight-item">
              <h3>Immediate Feedback</h3>
              <p>Get instant feedback on quizzes and interactive exercises</p>
            </div>
            <div className="highlight-item">
              <h3>Progress Tracking</h3>
              <p>Track your learning progress and earn achievements</p>
            </div>
            <div className="highlight-item">
              <h3>Real-World Examples</h3>
              <p>Learn from actual repair projects in our gallery</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home

