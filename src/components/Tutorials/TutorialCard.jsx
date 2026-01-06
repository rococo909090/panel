import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaBook } from 'react-icons/fa'
import './TutorialCard.css'

const TutorialCard = ({ tutorial, isComplete, onClick }) => {
  return (
    <motion.div
      className={`tutorial-card card ${isComplete ? 'completed' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="tutorial-card-header">
        <FaBook className="tutorial-icon" />
        {isComplete && <FaCheckCircle className="complete-badge" />}
      </div>
      <h3 className="tutorial-card-title">{tutorial.title}</h3>
      <p className="tutorial-card-description">{tutorial.description}</p>
      <div className="tutorial-card-footer">
        <span className="tutorial-category">{tutorial.category}</span>
        <span className="tutorial-steps">{tutorial.steps.length} steps</span>
      </div>
    </motion.div>
  )
}

export default TutorialCard

