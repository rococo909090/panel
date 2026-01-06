import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { tutorials } from '../data/tutorials'
import TutorialCard from '../components/Tutorials/TutorialCard'
import StepByStepTutorial from '../components/Tutorials/StepByStepTutorial'
import useProgress from '../hooks/useProgress'
import './Tutorials.css'

const Tutorials = () => {
  const [selectedTutorial, setSelectedTutorial] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { isTutorialComplete } = useProgress()

  const categories = ['All', ...new Set(tutorials.map(t => t.category))]

  const filteredTutorials = selectedCategory === 'All'
    ? tutorials
    : tutorials.filter(t => t.category === selectedCategory)

  if (selectedTutorial) {
    return (
      <StepByStepTutorial
        tutorial={selectedTutorial}
        onBack={() => setSelectedTutorial(null)}
      />
    )
  }

  return (
    <div className="tutorials-page">
      <section className="section">
        <h1 className="section-title">Interactive Tutorials</h1>
        <p className="section-subtitle">
          Learn panel beating through step-by-step interactive guides
        </p>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="tutorials-grid">
          {filteredTutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TutorialCard
                tutorial={tutorial}
                isComplete={isTutorialComplete(tutorial.id)}
                onClick={() => setSelectedTutorial(tutorial)}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Tutorials

