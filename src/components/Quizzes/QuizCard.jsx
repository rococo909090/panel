import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaQuestionCircle } from 'react-icons/fa'
import './QuizCard.css'

const QuizCard = ({ quiz, isComplete, onClick }) => {
  return (
    <motion.div
      className={`quiz-card card ${isComplete ? 'completed' : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="quiz-card-header">
        <FaQuestionCircle className="quiz-icon" />
        {isComplete && <FaCheckCircle className="complete-badge" />}
      </div>
      <h3 className="quiz-card-title">{quiz.title}</h3>
      <p className="quiz-card-description">{quiz.description}</p>
      <div className="quiz-card-footer">
        <span className="quiz-category">{quiz.category}</span>
        <span className="quiz-questions">{quiz.questions.length} questions</span>
      </div>
    </motion.div>
  )
}

export default QuizCard

