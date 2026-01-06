import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './ToolCalculator.css'

const MaterialCalculator = () => {
  const [area, setArea] = useState('')
  const [fillerThickness, setFillerThickness] = useState('2')

  const calculateMaterials = () => {
    if (!area) return null

    const a = parseFloat(area)
    const thickness = parseFloat(fillerThickness)
    
    if (isNaN(a) || a <= 0 || isNaN(thickness) || thickness <= 0) return null

    // Calculations (approximate)
    const fillerVolume = (a * thickness) / 1000 // Convert to liters
    const fillerKg = fillerVolume * 1.2 // Approximate density
    const primerLiters = (a / 10000) * 0.15 // 0.15L per m²
    const paintLiters = (a / 10000) * 0.12 // 0.12L per m²
    const clearCoatLiters = (a / 10000) * 0.1 // 0.1L per m²

    return {
      filler: fillerKg.toFixed(2),
      primer: primerLiters.toFixed(3),
      paint: paintLiters.toFixed(3),
      clearCoat: clearCoatLiters.toFixed(3),
      sandpaper: Math.ceil(a / 500) // Sheets per 500cm²
    }
  }

  const result = calculateMaterials()

  return (
    <div className="tool-calculator">
      <div className="calculator-card card">
        <h2>Material Calculator</h2>
        <p className="calculator-description">
          Calculate the amount of materials needed for your repair project.
        </p>

        <div className="calculator-form">
          <div className="form-group">
            <label>Repair Area (cm²)</label>
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
            <label>Filler Thickness (mm)</label>
            <input
              type="number"
              value={fillerThickness}
              onChange={(e) => setFillerThickness(e.target.value)}
              placeholder="2"
              className="form-input"
              min="0.5"
              max="10"
              step="0.5"
            />
            <small className="form-hint">Typical thickness: 1-3mm</small>
          </div>
        </div>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="calculator-results"
          >
            <h3>Material Requirements</h3>
            <div className="results-grid">
              <div className="result-item">
                <span className="result-label">Body Filler:</span>
                <span className="result-value">{result.filler} kg</span>
              </div>
              <div className="result-item">
                <span className="result-label">Primer:</span>
                <span className="result-value">{result.primer} L</span>
              </div>
              <div className="result-item">
                <span className="result-label">Base Coat Paint:</span>
                <span className="result-value">{result.paint} L</span>
              </div>
              <div className="result-item">
                <span className="result-label">Clear Coat:</span>
                <span className="result-value">{result.clearCoat} L</span>
              </div>
              <div className="result-item">
                <span className="result-label">Sandpaper Sheets:</span>
                <span className="result-value">{result.sandpaper} sheets</span>
              </div>
            </div>
            <p className="disclaimer">
              * These are approximate values. Always buy slightly more to account for waste and multiple coats.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default MaterialCalculator

