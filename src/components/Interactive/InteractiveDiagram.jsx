import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'
import './InteractiveDiagram.css'

const InteractiveDiagram = ({ onComplete }) => {
  const [selectedParts, setSelectedParts] = useState(new Set())
  const [activeInfo, setActiveInfo] = useState(null)

  const carParts = [
    {
      id: 'hood',
      name: 'Hood',
      position: { top: '10%', left: '50%', transform: 'translateX(-50%)' },
      damageTypes: ['Dents', 'Rust', 'Paint damage'],
      info: 'The hood is often damaged by hail, collisions, or rust. Common repairs include dent removal, rust treatment, and paint matching.'
    },
    {
      id: 'fender',
      name: 'Front Fender',
      position: { top: '25%', left: '15%' },
      damageTypes: ['Dents', 'Scratches', 'Collision damage'],
      info: 'Front fenders are prone to collision damage. Repair techniques include hammer and dolly work, body filler application, and paint matching.'
    },
    {
      id: 'door',
      name: 'Door Panel',
      position: { top: '40%', left: '10%' },
      damageTypes: ['Dents', 'Rust', 'Scratches'],
      info: 'Door panels can suffer from dents, rust (especially at the bottom), and scratches. Rust repair often requires cutting and welding new metal.'
    },
    {
      id: 'quarter',
      name: 'Rear Quarter Panel',
      position: { top: '35%', right: '10%' },
      damageTypes: ['Rust', 'Collision damage', 'Dents'],
      info: 'Rear quarter panels are complex to repair due to their shape. Rust is common in older vehicles and may require panel replacement.'
    },
    {
      id: 'roof',
      name: 'Roof',
      position: { top: '5%', left: '50%', transform: 'translateX(-50%)' },
      damageTypes: ['Hail damage', 'Dents', 'Rust'],
      info: 'Roof damage is often from hail. Paintless dent removal is ideal for small dents, while larger damage requires traditional repair methods.'
    },
    {
      id: 'bumper',
      name: 'Bumper',
      position: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
      damageTypes: ['Scratches', 'Cracks', 'Paint damage'],
      info: 'Bumpers are often plastic or metal. Scratches can be sanded and painted, while cracks may require replacement or plastic welding.'
    }
  ]

  const handlePartClick = (part) => {
    setSelectedParts(prev => {
      const newSet = new Set([...prev, part.id])
      if (newSet.size === carParts.length) {
        setTimeout(() => onComplete(), 500)
      }
      return newSet
    })
    setActiveInfo(part)
  }

  return (
    <div className="interactive-diagram">
      <div className="demo-instructions card">
        <h2>Interactive Car Diagram</h2>
        <p>Click on each highlighted car part to learn about common damage types and repair techniques. Click all parts to complete!</p>
        <div className="progress-info">
          Explored: {selectedParts.size} / {carParts.length} parts
        </div>
      </div>

      <div className="diagram-container">
        <div className="car-diagram">
          {carParts.map((part) => (
            <motion.button
              key={part.id}
              className={`car-part ${selectedParts.has(part.id) ? 'selected' : ''}`}
              style={part.position}
              onClick={() => handlePartClick(part)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: carParts.indexOf(part) * 0.1 }}
            >
              {selectedParts.has(part.id) && <FaCheck className="check-icon" />}
              <span className="part-label">{part.name}</span>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {activeInfo && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="part-info card"
            >
              <h3>{activeInfo.name}</h3>
              <p className="part-description">{activeInfo.info}</p>
              <div className="damage-types">
                <h4>Common Damage Types:</h4>
                <ul>
                  {activeInfo.damageTypes.map((type, index) => (
                    <li key={index}>{type}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => setActiveInfo(null)}
                className="close-btn"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {selectedParts.size === carParts.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="completion-message"
        >
          <h2>🎉 Great job! You've explored all car parts!</h2>
        </motion.div>
      )}
    </div>
  )
}

export default InteractiveDiagram

