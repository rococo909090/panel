import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheck, FaChevronDown, FaWrench } from 'react-icons/fa'
import './InteractiveStep.css'

const InteractiveStep = ({ interactive, stepId, onComplete, isComplete }) => {
  const [revealedItems, setRevealedItems] = useState(new Set())
  const [checkedItems, setCheckedItems] = useState(new Set())
  const [selectedTools, setSelectedTools] = useState(new Set())
  const [matchedPairs, setMatchedPairs] = useState({})
  const [expanded, setExpanded] = useState(false)

  const handleReveal = (index) => {
    setRevealedItems(prev => new Set([...prev, index]))
    if (revealedItems.size + 1 === interactive.items.length) {
      onComplete()
    }
  }

  const handleCheck = (index) => {
    setCheckedItems(prev => {
      const newSet = new Set([...prev, index])
      if (newSet.size === interactive.items.length) {
        onComplete()
      }
      return newSet
    })
  }

  const handleToolSelect = (tool) => {
    setSelectedTools(prev => {
      const newSet = new Set([...prev])
      if (newSet.has(tool)) {
        newSet.delete(tool)
      } else {
        newSet.add(tool)
      }
      if (newSet.size === interactive.tools.length) {
        onComplete()
      }
      return newSet
    })
  }

  const handleMatch = (tool, use) => {
    setMatchedPairs(prev => {
      const newPairs = { ...prev, [tool]: use }
      if (Object.keys(newPairs).length === interactive.pairs.length) {
        onComplete()
      }
      return newPairs
    })
  }

  if (interactive.type === 'reveal') {
    return (
      <div className="interactive-reveal">
        <h3 className="interactive-title">Click to reveal information:</h3>
        <div className="reveal-items">
          {interactive.items.map((item, index) => (
            <motion.div
              key={index}
              className={`reveal-item ${revealedItems.has(index) ? 'revealed' : ''}`}
              onClick={() => !revealedItems.has(index) && handleReveal(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {revealedItems.has(index) ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <strong>{item.label}</strong>
                  <p>{item.description}</p>
                </motion.div>
              ) : (
                <span>Click to reveal</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (interactive.type === 'checklist') {
    return (
      <div className="interactive-checklist">
        <h3 className="interactive-title">Check off items as you review them:</h3>
        <div className="checklist-items">
          {interactive.items.map((item, index) => (
            <motion.div
              key={index}
              className={`checklist-item ${checkedItems.has(index) ? 'checked' : ''}`}
              onClick={() => handleCheck(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="checkbox">
                {checkedItems.has(index) && <FaCheck />}
              </div>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (interactive.type === 'tool-selector') {
    return (
      <div className="interactive-tool-selector">
        <h3 className="interactive-title">Select the tools needed for this step:</h3>
        <div className="tool-grid">
          {interactive.tools.map((tool, index) => (
            <motion.div
              key={index}
              className={`tool-item ${selectedTools.has(tool) ? 'selected' : ''}`}
              onClick={() => handleToolSelect(tool)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWrench />
              <span>{tool}</span>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  if (interactive.type === 'tool-matching') {
    return (
      <div className="interactive-matching">
        <h3 className="interactive-title">Match each tool to its use:</h3>
        <div className="matching-container">
          <div className="tools-column">
            <h4>Tools</h4>
            {interactive.pairs.map((pair, index) => (
              <motion.div
                key={index}
                className={`tool-option ${matchedPairs[pair.tool] ? 'matched' : ''}`}
                onClick={() => !matchedPairs[pair.tool] && setExpanded(!expanded)}
                whileHover={{ scale: 1.02 }}
              >
                {pair.tool}
              </motion.div>
            ))}
          </div>
          <div className="uses-column">
            <h4>Uses</h4>
            {interactive.pairs.map((pair, index) => (
              <motion.div
                key={index}
                className={`use-option ${Object.values(matchedPairs).includes(pair.use) ? 'matched' : ''}`}
                onClick={() => {
                  const tool = Object.keys(matchedPairs).find(t => matchedPairs[t] === pair.use)
                  if (!tool) {
                    const firstUnmatched = interactive.pairs.find(p => !matchedPairs[p.tool])
                    if (firstUnmatched) {
                      handleMatch(firstUnmatched.tool, pair.use)
                    }
                  }
                }}
                whileHover={{ scale: 1.02 }}
              >
                {pair.use}
              </motion.div>
            ))}
          </div>
        </div>
        {Object.keys(matchedPairs).length > 0 && (
          <div className="matched-pairs">
            <h4>Matched:</h4>
            {Object.entries(matchedPairs).map(([tool, use]) => (
              <div key={tool} className="matched-pair">
                <strong>{tool}</strong> → {use}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  if (interactive.type === 'step-by-step') {
    return (
      <div className="interactive-steps">
        <h3 className="interactive-title">Follow these steps:</h3>
        <div className="steps-list">
          {interactive.steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="step-number">{index + 1}</div>
              <div className="step-text">{step}</div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

export default InteractiveStep

