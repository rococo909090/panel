import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './ToolCalculator.css'

const CostEstimator = () => {
  const [damageType, setDamageType] = useState('dent')
  const [area, setArea] = useState('')
  const [severity, setSeverity] = useState('light')
  const [includePaint, setIncludePaint] = useState(true)

  const baseRates = {
    dent: { light: 50, medium: 100, heavy: 200 },
    scratch: { light: 30, medium: 60, heavy: 120 },
    rust: { light: 80, medium: 150, heavy: 300 },
    collision: { light: 150, medium: 300, heavy: 600 }
  }

  const calculateCost = () => {
    if (!area) return null

    const a = parseFloat(area)
    if (isNaN(a) || a <= 0) return null

    const baseRate = baseRates[damageType][severity]
    const materialCost = baseRate * (a / 100) // Cost per 100cm²
    const laborCost = materialCost * 1.5 // Labor is 1.5x material
    const paintCost = includePaint ? materialCost * 0.3 : 0
    const total = materialCost + laborCost + paintCost

    return {
      materialCost: materialCost.toFixed(2),
      laborCost: laborCost.toFixed(2),
      paintCost: paintCost.toFixed(2),
      total: total.toFixed(2)
    }
  }

  const result = calculateCost()

  return (
    <div className="tool-calculator">
      <div className="calculator-card card">
        <h2>Cost Estimator</h2>
        <p className="calculator-description">
          Estimate the cost of repairs based on damage type, area, and severity.
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
              Include Paint & Clear Coat
            </label>
          </div>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="calculator-results"
          >
            <h3>Cost Breakdown</h3>
            <div className="results-grid">
              <div className="result-item">
                <span className="result-label">Materials:</span>
                <span className="result-value">${result.materialCost}</span>
              </div>
              <div className="result-item">
                <span className="result-label">Labor:</span>
                <span className="result-value">${result.laborCost}</span>
              </div>
              {includePaint && (
                <div className="result-item">
                  <span className="result-label">Paint & Clear:</span>
                  <span className="result-value">${result.paintCost}</span>
                </div>
              )}
              <div className="result-item total">
                <span className="result-label">Total Estimated Cost:</span>
                <span className="result-value">${result.total}</span>
              </div>
            </div>
            <p className="disclaimer">
              * This is an estimate. Actual costs may vary based on location, shop rates, and specific circumstances.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default CostEstimator

