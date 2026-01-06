import React from 'react'
import { motion } from 'framer-motion'
import { FaTrophy, FaCheckCircle, FaTimesCircle, FaRedo } from 'react-icons/fa'
import './QuizResults.css'

const QuizResults = ({ quiz, results, answers, onRestart, onBack }) => {
  const getScoreColor = () => {
    if (results.percentage >= 80) return '#06d6a0'
    if (results.percentage >= 60) return '#ffb703'
    return '#e63946'
  }

  const getScoreMessage = () => {
    if (results.percentage >= 80) return 'Excellent!'
    if (results.percentage >= 60) return 'Good job!'
    return 'Keep practicing!'
  }

  return (
    <div className="quiz-results-page">
      <section className="section">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="results-card card"
        >
          <div className="results-header">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="trophy-icon"
              style={{ color: getScoreColor() }}
            >
              <FaTrophy />
            </motion.div>
            <h1 className="results-title">Quiz Complete!</h1>
            <div className="score-display" style={{ color: getScoreColor() }}>
              <span className="score-number">{results.percentage.toFixed(0)}%</span>
              <span className="score-text">{getScoreMessage()}</span>
            </div>
            <div className="score-details">
              You got {results.score} out of {results.total} questions correct
            </div>
          </div>

          <div className="results-breakdown">
            <h2>Question Breakdown</h2>
            <div className="questions-list">
              {quiz.questions.map((question, index) => {
                let isCorrect = false
                if (question.type === 'multiple-choice' || question.type === 'true-false') {
                  isCorrect = answers[question.id] === question.correct
                } else if (question.type === 'matching') {
                  isCorrect = question.pairs.every(pair => 
                    answers[question.id] && answers[question.id][pair.item] === pair.match
                  )
                }

                return (
                  <div key={question.id} className={`question-result ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="result-icon">
                      {isCorrect ? <FaCheckCircle /> : <FaTimesCircle />}
                    </div>
                    <div className="result-question">
                      <strong>Question {index + 1}:</strong> {question.question}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="results-actions">
            <button onClick={onRestart} className="btn btn-secondary">
              <FaRedo /> Retake Quiz
            </button>
            <button onClick={onBack} className="btn btn-primary">
              Back to Quizzes
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default QuizResults

