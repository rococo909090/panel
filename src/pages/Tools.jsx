import React, { useState } from 'react'
import { motion } from 'framer-motion'
import DamageCalculator from '../components/Tools/DamageCalculator'
import CostEstimator from '../components/Tools/CostEstimator'
import MaterialCalculator from '../components/Tools/MaterialCalculator'
import TimeEstimator from '../components/Tools/TimeEstimator'
import { FaCalculator, FaDollarSign, FaBox, FaClock } from 'react-icons/fa'
import './Tools.css'

const Tools = () => {
  const [activeTool, setActiveTool] = useState(null)

  const tools = [
    {
      id: 'damage',
      title: 'Damage Assessment Calculator',
      description: 'Input damage dimensions to get repair estimates',
      icon: <FaCalculator />,
      component: DamageCalculator,
      color: '#e63946'
    },
    {
      id: 'cost',
      title: 'Cost Estimator',
      description: 'Calculate repair costs based on damage type and area',
      icon: <FaDollarSign />,
      component: CostEstimator,
      color: '#06d6a0'
    },
    {
      id: 'material',
      title: 'Material Calculator',
      description: 'Calculate filler, primer, and paint quantities needed',
      icon: <FaBox />,
      component: MaterialCalculator,
      color: '#457b9d'
    },
    {
      id: 'time',
      title: 'Time Estimator',
      description: 'Estimate repair time based on damage complexity',
      icon: <FaClock />,
      component: TimeEstimator,
      color: '#ffb703'
    }
  ]

  if (activeTool) {
    const ToolComponent = activeTool.component
    return (
      <div className="tool-page">
        <section className="section">
          <button onClick={() => setActiveTool(null)} className="back-btn">
            ← Back to Tools
          </button>
          <h1 className="section-title">{activeTool.title}</h1>
          <ToolComponent />
        </section>
      </div>
    )
  }

  return (
    <div className="tools-page">
      <section className="section">
        <h1 className="section-title">Tools & Calculators</h1>
        <p className="section-subtitle">
          Practical calculators for damage assessment, costs, and material estimates
        </p>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="tool-card card"
              onClick={() => setActiveTool(tool)}
            >
              <div className="tool-icon" style={{ color: tool.color }}>
                {tool.icon}
              </div>
              <h3 className="tool-title">{tool.title}</h3>
              <p className="tool-description">{tool.description}</p>
              <div className="tool-link">Use Calculator →</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Tools

