import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './ToolCalculator.css'

const TimeEstimator = () => {
  const [damageType, setDamageType] = useState('dent')
  const [area, setArea] = useState('')
  const [severity, setSeverity] = useState('light')
  const [includePaint, setIncludePaint] = useState(true)

  const baseTimes = {
    dent: { light: 2, medium: 4, heavy: 8 },
    scratch: { light: 1, medium: 2, heavy: 4 },
    rust: { light: 3, medium: 6, heavy: 12 },
    collision: { light: 6, medium: 12, heavy: 24 }
  }

  const calculateTime = () => {
    if (!area) return null

    const a = parseFloat(area)
    if (isNaN(a) || a <= 0) return null

    const baseTime = baseTimes[damageType][severity]
    const areaMultiplier = Math.max(1, a / 100) // Scale with area
    const prepTime = baseTime * 0.3
    const repairTime = baseTime * areaMultiplier
    const paintTime = includePaint ? baseTime * 0.5 : 0
    const totalHours = prepTime + repairTime + paintTime

    const hours = Math.floor(totalHours)
    const minutes = Math.round((totalHours - hours) * 60)

    return {
      prep: prepTime.toFixed(1),
      repair: repairTime.toFixed(1),
      paint: paintTime.toFixed(1),
      total: totalHours.toFixed(1),
      hours,
      minutes,
      days: Math.ceil(totalHours / 8) // Assuming 8-hour work days
    }
  }

  const result = calculateTime()

  return (
    <div className="tool-calculator">
      <div className="calculator-card card">
        <h2>Time Estimator</h2>
        <p className="calculator-description">
          Estimate the time required to complete a repair based on damage type and complexity.
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

          <div className="form-group">
            <label>Damage Area (cm²)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="0"
              className="form-input"
              min="0"
              step="0.1"
            />
          </div>

          <div className="form-group">
            <label>Severity</label>
            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="form-input"
            >
              <option value="light">Light</option>
              <option value="medium">Medium</option>
              <option value="heavy">Heavy</option>
            </select>
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={includePaint}
                onChange={(e) => setIncludePaint(e.target.checked)}
              />
              Include Paint Application
            </label>
          </div>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="calculator-results"
          >
            <h3>Time Breakdown</h3>
            <div className="results-grid">
              <div className="result-item">
                <span className="result-label">Preparation:</span>
                <span className="result-value">{result.prep} hours</span>
              </div>
              <div className="result-item">
                <span className="result-label">Repair Work:</span>
                <span className="result-value">{result.repair} hours</span>
              </div>
              {includePaint && (
                <div className="result-item">
                  <span className="result-label">Paint Application:</span>
                  <span className="result-value">{result.paint} hours</span>
                </div>
              )}
              <div className="result-item total">
                <span className="result-label">Total Time:</span>
                <span className="result-value">
                  {result.hours}h {result.minutes}m ({result.total} hours)
                </span>
              </div>
              <div className="result-item">
                <span className="result-label">Estimated Work Days:</span>
                <span className="result-value">{result.days} day{result.days !== 1 ? 's' : ''}</span>
              </div>
            </div>
            <p className="disclaimer">
              * Times are estimates for experienced technicians. Actual time may vary based on skill level and specific circumstances.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default TimeEstimator

