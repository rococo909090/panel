import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaWrench, FaHammer, FaPaintBrush, FaFileAlt } from 'react-icons/fa'
import './ToolSelector.css'

const ToolSelector = ({ onComplete }) => {
  const [selectedScenario, setSelectedScenario] = useState(null)
  const [selectedTools, setSelectedTools] = useState([])
  const [completedScenarios, setCompletedScenarios] = useState(new Set())

  const scenarios = [
    {
      id: 1,
      title: 'Small Dent Removal',
      description: 'You have a small dent (5cm diameter) on a door panel. Select the tools needed.',
      correctTools: ['Body Hammer', 'Dolly', 'Sanding Block'],
      icon: <FaHammer />
    },
    {
      id: 2,
      title: 'Rust Repair',
      description: 'There is rust damage on the lower door panel. What tools do you need?',
      correctTools: ['Angle Grinder', 'Welding Equipment', 'Body Filler', 'Primer'],
      icon: <FaWrench />
    },
    {
      id: 3,
      title: 'Paint Touch-up',
      description: 'You need to touch up a scratched area. Select the appropriate tools.',
      correctTools: ['Sanding Block', 'Primer', 'Paint Gun', 'Clear Coat'],
      icon: <FaPaintBrush />
    },
    {
      id: 4,
      title: 'Body Filler Application',
      description: 'After removing a dent, you need to apply body filler. What tools are required?',
      correctTools: ['Body Filler', 'Spatula', 'Sanding Block', 'Primer'],
      icon: <FaFileAlt />
    }
  ]

  const allTools = [
    'Body Hammer', 'Dolly', 'Body Filler', 'Sanding Block', 'Angle Grinder',
    'Welding Equipment', 'Primer', 'Paint Gun', 'Clear Coat', 'Spatula',
    'Body File', 'Orbital Sander', 'Paint Thinner', 'Masking Tape'
  ]

  const handleToolToggle = (tool) => {
    setSelectedTools(prev => {
      if (prev.includes(tool)) {
        return prev.filter(t => t !== tool)
      } else {
        return [...prev, tool]
      }
    })
  }

  const checkAnswer = () => {
    if (!selectedScenario) return

    const correctSet = new Set(selectedScenario.correctTools)
    const selectedSet = new Set(selectedTools)
    
    const isCorrect = 
      correctSet.size === selectedSet.size &&
      [...correctSet].every(tool => selectedSet.has(tool))

    if (isCorrect) {
      setCompletedScenarios(prev => new Set([...prev, selectedScenario.id]))
      if (completedScenarios.size + 1 === scenarios.length) {
        setTimeout(() => onComplete(), 500)
      }
      alert('Correct! You selected the right tools for this scenario.')
      setSelectedTools([])
      setSelectedScenario(null)
    } else {
      alert('Not quite right. Try again!')
    }
  }

  return (
    <div className="tool-selector">
      <div className="demo-instructions card">
        <h2>Virtual Tool Selector</h2>
        <p>Select a repair scenario, then choose the tools needed for that job. Complete all scenarios!</p>
        <div className="progress-info">
          Completed: {completedScenarios.size} / {scenarios.length} scenarios
        </div>
      </div>

      <div className="scenarios-grid">
        {scenarios.map((scenario) => (
          <motion.div
            key={scenario.id}
            className={`scenario-card card ${completedScenarios.has(scenario.id) ? 'completed' : ''} ${selectedScenario?.id === scenario.id ? 'active' : ''}`}
            onClick={() => {
              setSelectedScenario(scenario)
              setSelectedTools([])
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="scenario-icon">{scenario.icon}</div>
            <h3>{scenario.title}</h3>
            <p>{scenario.description}</p>
            {completedScenarios.has(scenario.id) && (
              <div className="completed-badge">
                <FaCheck /> Completed
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {selectedScenario && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="tool-selection card"
        >
          <h3>Select Tools for: {selectedScenario.title}</h3>
          <p className="scenario-description">{selectedScenario.description}</p>
          
          <div className="tools-grid">
            {allTools.map((tool) => (
              <motion.button
                key={tool}
                className={`tool-option ${selectedTools.includes(tool) ? 'selected' : ''}`}
                onClick={() => handleToolToggle(tool)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWrench />
                <span>{tool}</span>
                {selectedTools.includes(tool) && <FaCheck className="check-icon" />}
              </motion.button>
            ))}
          </div>

          <div className="selection-actions">
            <button
              onClick={checkAnswer}
              disabled={selectedTools.length === 0}
              className="btn btn-primary"
            >
              Check Answer
            </button>
            <button
              onClick={() => {
                setSelectedScenario(null)
                setSelectedTools([])
              }}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      )}

      {completedScenarios.size === scenarios.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="completion-message"
        >
          <h2>🎉 Excellent! You've completed all scenarios!</h2>
        </motion.div>
      )}
    </div>
  )
}

export default ToolSelector

