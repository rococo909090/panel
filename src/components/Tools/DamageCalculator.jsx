import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './ToolCalculator.css'

const DamageCalculator = () => {
  const [length, setLength] = useState('')
  const [width, setWidth] = useState('')
  const [depth, setDepth] = useState('')
  const [damageType, setDamageType] = useState('dent')

  const calculateSeverity = () => {
    if (!length || !width || !depth) return null

    const l = parseFloat(length)
    const w = parseFloat(width)
    const d = parseFloat(depth)

    if (isNaN(l) || isNaN(w) || isNaN(d)) return null

    const area = l * w
    const volume = area * d
    const severity = volume < 50 ? 'Light' : volume < 200 ? 'Medium' : 'Heavy'

    return {
      area: area.toFixed(2),
      volume: volume.toFixed(2),
      severity,
      estimatedTime: severity === 'Light' ? '2-4 hours' : severity === 'Medium' ? '4-8 hours' : '8-16 hours',
      complexity: severity === 'Light' ? 'Simple' : severity === 'Medium' ? 'Moderate' : 'Complex'
    }
  }

  const result = calculateSeverity()

  return (
    <div className="tool-calculator">
      <div className="calculator-card card">
        <h2>Damage Assessment Calculator</h2>
        <p className="calculator-description">
          Enter the dimensions of the damage to get an assessment of severity and estimated repair time.
        </p>

        <div className="calculator-form">
          <div className="form-group">
            <label>Damage Type</label>
            <select
              value={damageType}
              onChange={(e) => setDamageType(e.target.value)}
              className="form-input"
            >
              <option value="dent">Dent</option>
              <option value="scratch">Scratch</option>
              <option value="rust">Rust</option>
              <option value="collision">Collision Damage</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Length (cm)</label>
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                placeholder="0"
                className="form-input"
                min="0"
                step="0.1"
              />
            </div>

            <div className="form-group">
              <label>Width (cm)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="0"
                className="form-input"
                min="0"
                step="0.1"
              />
            </div>

            <div className="form-group">
              <label>Depth (cm)</label>
              <input
                type="number"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                placeholder="0"
                className="form-input"
                min="0"
                step="0.1"
              />
            </div>
          </div>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="calculator-results"
          >
            <h3>Assessment Results</h3>
            <div className="results-grid">
              <div className="result-item">
                <span className="result-label">Damage Area:</span>
                <span className="result-value">{result.area} cm²</span>
              </div>
              <div className="result-item">
                <span className="result-label">Severity:</span>
                <span className={`result-value severity-${result.severity.toLowerCase()}`}>
                  {result.severity}
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Complexity:</span>
                <span className="result-value">{result.complexity}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Estimated Time:</span>
                <span className="result-value">{result.estimatedTime}</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default DamageCalculator

