import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCheck, FaWrench } from 'react-icons/fa'
import './DragDropDemo.css'

const DragDropDemo = ({ onComplete }) => {
  const [draggedItem, setDraggedItem] = useState(null)
  const [matches, setMatches] = useState({})

  const toolPairs = [
    { tool: 'Body Hammer', use: 'Shaping metal panels', id: 1 },
    { tool: 'Dolly', use: 'Supporting metal from behind', id: 2 },
    { tool: 'Body Filler', use: 'Filling small imperfections', id: 3 },
    { tool: 'Sanding Block', use: 'Smoothing surfaces', id: 4 },
    { tool: 'Angle Grinder', use: 'Cutting and grinding metal', id: 5 },
    { tool: 'Paint Gun', use: 'Applying primer and paint', id: 6 }
  ]

  const tools = toolPairs.map(pair => pair.tool)
  const uses = toolPairs.map(pair => pair.use).sort(() => Math.random() - 0.5)

  const handleDragStart = (tool) => {
    setDraggedItem(tool)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (use) => {
    if (draggedItem) {
      const correctPair = toolPairs.find(p => p.tool === draggedItem)
      if (correctPair && correctPair.use === use) {
        setMatches(prev => ({ ...prev, [draggedItem]: use }))
        if (Object.keys(matches).length + 1 === toolPairs.length) {
          setTimeout(() => onComplete(), 500)
        }
      } else {
        // Wrong match - provide feedback
        alert('That\'s not the correct match. Try again!')
      }
      setDraggedItem(null)
    }
  }

  const isMatched = (tool) => matches[tool]
  const isUseMatched = (use) => Object.values(matches).includes(use)

  return (
    <div className="drag-drop-demo">
      <div className="demo-instructions card">
        <h2>Tool Matching Game</h2>
        <p>Drag each tool from the left to its correct use on the right. Match all pairs to complete!</p>
      </div>

      <div className="drag-drop-container">
        <div className="tools-column">
          <h3>Tools</h3>
          <div className="tools-list">
            {tools.map((tool) => (
              <motion.div
                key={tool}
                draggable={!isMatched(tool)}
                onDragStart={() => handleDragStart(tool)}
                className={`tool-item ${isMatched(tool) ? 'matched' : ''}`}
                whileDrag={{ opacity: 0.5, scale: 0.9 }}
                whileHover={!isMatched(tool) ? { scale: 1.05 } : {}}
              >
                <FaWrench />
                <span>{tool}</span>
                {isMatched(tool) && <FaCheck className="check-icon" />}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="uses-column">
          <h3>Uses</h3>
          <div className="uses-list">
            {uses.map((use, index) => (
              <motion.div
                key={index}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(use)}
                className={`use-drop-zone ${isUseMatched(use) ? 'matched' : ''}`}
                whileHover={{ scale: 1.02 }}
              >
                {isUseMatched(use) ? (
                  <div className="matched-content">
                    {Object.keys(matches).find(key => matches[key] === use)} → {use}
                    <FaCheck className="check-icon" />
                  </div>
                ) : (
                  <div className="drop-hint">Drop tool here</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="progress-indicator">
        <div className="progress-text">
          Matched: {Object.keys(matches).length} / {toolPairs.length}
        </div>
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${(Object.keys(matches).length / toolPairs.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {Object.keys(matches).length === toolPairs.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="completion-message"
        >
          <h2>🎉 Excellent! All tools matched correctly!</h2>
        </motion.div>
      )}
    </div>
  )
}

export default DragDropDemo

