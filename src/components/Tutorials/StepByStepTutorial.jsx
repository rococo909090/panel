import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowLeft, FaArrowRight, FaCheck, FaChevronDown } from 'react-icons/fa'
import InteractiveStep from './InteractiveStep'
import useProgress from '../../hooks/useProgress'
import './StepByStepTutorial.css'

const StepByStepTutorial = ({ tutorial, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState(new Set())
  const { markTutorialComplete } = useProgress()

  const step = tutorial.steps[currentStep]
  const isLastStep = currentStep === tutorial.steps.length - 1
  const isFirstStep = currentStep === 0

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep(currentStep + 1)
    } else {
      markTutorialComplete(tutorial.id)
      onBack()
    }
  }

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1)
    }
  }

  const markStepComplete = (stepId) => {
    setCompletedSteps(prev => new Set([...prev, stepId]))
  }

  return (
    <div className="step-tutorial">
      <div className="step-tutorial-header">
        <button onClick={onBack} className="back-btn">
          <FaArrowLeft /> Back to Tutorials
        </button>
        <h1 className="tutorial-title">{tutorial.title}</h1>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentStep + 1) / tutorial.steps.length) * 100}%` }}
          />
        </div>
        <div className="step-indicator">
          Step {currentStep + 1} of {tutorial.steps.length}
        </div>
      </div>

      <div className="step-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="step-card card"
          >
            <h2 className="step-title">{step.title}</h2>
            <p className="step-content-text">{step.content}</p>

            {step.interactive && (
              <InteractiveStep
                interactive={step.interactive}
                stepId={step.id}
                onComplete={() => markStepComplete(step.id)}
                isComplete={completedSteps.has(step.id)}
              />
            )}

            <div className="step-navigation">
              <button
                onClick={handlePrevious}
                disabled={isFirstStep}
                className="btn btn-secondary"
              >
                <FaArrowLeft /> Previous
              </button>
              <button
                onClick={handleNext}
                className="btn btn-primary"
              >
                {isLastStep ? 'Complete Tutorial' : 'Next Step'} <FaArrowRight />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default StepByStepTutorial

