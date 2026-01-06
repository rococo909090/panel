import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { quizzes } from '../data/quizData'
import QuizCard from '../components/Quizzes/QuizCard'
import QuizQuestion from '../components/Quizzes/QuizQuestion'
import QuizResults from '../components/Quizzes/QuizResults'
import useProgress from '../hooks/useProgress'
import './Quizzes.css'

const Quizzes = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const { isQuizComplete, markQuizComplete } = useProgress()

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }))
  }

  const handleNext = () => {
    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      calculateScore()
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    let score = 0
    selectedQuiz.questions.forEach(question => {
      if (question.type === 'multiple-choice' || question.type === 'true-false') {
        if (answers[question.id] === question.correct) {
          score++
        }
      } else if (question.type === 'matching') {
        // For matching, check if all pairs are correct
        const allCorrect = question.pairs.every(pair => {
          return answers[question.id] && answers[question.id][pair.item] === pair.match
        })
        if (allCorrect) score++
      }
    })
    const percentage = (score / selectedQuiz.questions.length) * 100
    markQuizComplete(selectedQuiz.id, percentage)
    return { score, total: selectedQuiz.questions.length, percentage }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  const handleBackToQuizzes = () => {
    setSelectedQuiz(null)
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults && selectedQuiz) {
    const results = calculateScore()
    return (
      <QuizResults
        quiz={selectedQuiz}
        results={results}
        answers={answers}
        onRestart={handleRestart}
        onBack={handleBackToQuizzes}
      />
    )
  }

  if (selectedQuiz) {
    return (
      <div className="quiz-page">
        <section className="section">
          <div className="quiz-header">
            <button onClick={handleBackToQuizzes} className="back-btn">
              ← Back to Quizzes
            </button>
            <h1 className="quiz-title">{selectedQuiz.title}</h1>
            <div className="quiz-progress">
              Question {currentQuestion + 1} of {selectedQuiz.questions.length}
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${((currentQuestion + 1) / selectedQuiz.questions.length) * 100}%` }}
              />
            </div>
          </div>

          <QuizQuestion
            question={selectedQuiz.questions[currentQuestion]}
            answer={answers[selectedQuiz.questions[currentQuestion].id]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            isLast={currentQuestion === selectedQuiz.questions.length - 1}
          />
        </section>
      </div>
    )
  }

  return (
    <div className="quizzes-page">
      <section className="section">
        <h1 className="section-title">Quizzes & Assessments</h1>
        <p className="section-subtitle">
          Test your knowledge with interactive quizzes and track your progress
        </p>

        <div className="quizzes-grid">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <QuizCard
                quiz={quiz}
                isComplete={isQuizComplete(quiz.id)}
                onClick={() => setSelectedQuiz(quiz)}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Quizzes

