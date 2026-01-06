import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa'
import './QuizQuestion.css'

const QuizQuestion = ({ question, answer, onAnswer, onNext, isLast }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(answer || null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [matchedPairs, setMatchedPairs] = useState(answer || {})

  const handleSelect = (optionIndex) => {
    if (question.type === 'multiple-choice' || question.type === 'true-false') {
      setSelectedAnswer(optionIndex)
      onAnswer(question.id, optionIndex)
      setShowFeedback(true)
    }
  }

  const handleMatch = (item, match) => {
    const newPairs = { ...matchedPairs, [item]: match }
    setMatchedPairs(newPairs)
    onAnswer(question.id, newPairs)
    
    // Check if all pairs are matched
    if (Object.keys(newPairs).length === question.pairs.length) {
      setShowFeedback(true)
    }
  }

  const isCorrect = () => {
    if (question.type === 'multiple-choice' || question.type === 'true-false') {
      return selectedAnswer === question.correct
    } else if (question.type === 'matching') {
      return question.pairs.every(pair => matchedPairs[pair.item] === pair.match)
    }
    return false
  }

  const getFeedback = () => {
    if (selectedAnswer === null && Object.keys(matchedPairs).length === 0) return null
    const correct = isCorrect()
    return {
      correct,
      message: correct ? 'Correct!' : 'Incorrect',
      explanation: question.explanation
    }
  }

  const feedback = getFeedback()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="question-card card"
    >
      <div className="question-header">
        <h2 className="question-text">{question.question}</h2>
      </div>

      <div className="question-content">
        {question.type === 'multiple-choice' || question.type === 'true-false' ? (
          <div className="options-list">
            {question.options.map((option, index) => (
              <motion.div
                key={index}
                className={`option-item ${selectedAnswer === index ? 'selected' : ''} ${
                  showFeedback && index === question.correct ? 'correct' : ''
                } ${showFeedback && selectedAnswer === index && index !== question.correct ? 'incorrect' : ''}`}
                onClick={() => !showFeedback && handleSelect(index)}
                whileHover={!showFeedback ? { scale: 1.02 } : {}}
                whileTap={!showFeedback ? { scale: 0.98 } : {}}
              >
                <div className="option-label">{String.fromCharCode(65 + index)}</div>
                <div className="option-text">{option}</div>
                {showFeedback && index === question.correct && (
                  <FaCheck className="feedback-icon correct-icon" />
                )}
                {showFeedback && selectedAnswer === index && index !== question.correct && (
                  <FaTimes className="feedback-icon incorrect-icon" />
                )}
              </motion.div>
            ))}
          </div>
        ) : question.type === 'matching' ? (
          <div className="matching-question">
            <div className="matching-columns">
              <div className="matching-left">
                <h4>Items</h4>
                {question.pairs.map((pair, index) => (
                  <motion.div
                    key={index}
                    className={`matching-item ${matchedPairs[pair.item] ? 'matched' : ''}`}
                    onClick={() => {
                      if (!matchedPairs[pair.item]) {
                        // Simple matching - click item then match
                        const firstUnmatched = question.pairs.find(p => !matchedPairs[p.item])
                        if (firstUnmatched) {
                          handleMatch(firstUnmatched.item, pair.match)
                        }
                      }
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {pair.item}
                  </motion.div>
                ))}
              </div>
              <div className="matching-right">
                <h4>Matches</h4>
                {question.pairs.map((pair, index) => (
                  <div
                    key={index}
                    className={`matching-option ${Object.values(matchedPairs).includes(pair.match) ? 'matched' : ''}`}
                  >
                    {pair.match}
                  </div>
                ))}
              </div>
            </div>
            {Object.keys(matchedPairs).length > 0 && (
              <div className="matched-display">
                <h4>Your Matches:</h4>
                {Object.entries(matchedPairs).map(([item, match]) => (
                  <div key={item} className="matched-pair">
                    {item} → {match}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : null}

        {showFeedback && feedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`feedback ${feedback.correct ? 'feedback-correct' : 'feedback-incorrect'}`}
          >
            <div className="feedback-header">
              {feedback.correct ? <FaCheck /> : <FaTimes />}
              <strong>{feedback.message}</strong>
            </div>
            <p className="feedback-explanation">{feedback.explanation}</p>
          </motion.div>
        )}
      </div>

      {showFeedback && (
        <div className="question-actions">
          <button onClick={onNext} className="btn btn-primary">
            {isLast ? 'View Results' : 'Next Question'} <FaArrowRight />
          </button>
        </div>
      )}
    </motion.div>
  )
}

export default QuizQuestion

