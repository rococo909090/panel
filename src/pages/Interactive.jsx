import React, { useState } from 'react'
import { motion } from 'framer-motion'
import DragDropDemo from '../components/Interactive/DragDropDemo'
import InteractiveDiagram from '../components/Interactive/InteractiveDiagram'
import ToolSelector from '../components/Interactive/ToolSelector'
import useProgress from '../hooks/useProgress'
import './Interactive.css'

const Interactive = () => {
  const [activeDemo, setActiveDemo] = useState(null)
  const { markInteractiveComplete, isInteractiveComplete } = useProgress()

  const demos = [
    {
      id: 'tool-matching',
      title: 'Tool Matching Game',
      description: 'Drag and drop tools to match them with their uses',
      component: DragDropDemo,
      icon: '🔧'
    },
    {
      id: 'car-diagram',
      title: 'Interactive Car Diagram',
      description: 'Click on car body parts to learn about different damage types',
      component: InteractiveDiagram,
      icon: '🚗'
    },
    {
      id: 'tool-selector',
      title: 'Virtual Tool Selector',
      description: 'Select tools for different repair scenarios',
      component: ToolSelector,
      icon: '🛠️'
    }
  ]

  const handleComplete = (demoId) => {
    markInteractiveComplete(demoId)
  }

  if (activeDemo) {
    const DemoComponent = activeDemo.component
    return (
      <div className="interactive-demo-page">
        <div className="section">
          <button onClick={() => setActiveDemo(null)} className="back-btn">
            ← Back to Interactive Demos
          </button>
          <h1 className="section-title">{activeDemo.title}</h1>
          <DemoComponent onComplete={() => handleComplete(activeDemo.id)} />
        </div>
      </div>
    )
  }

  return (
    <div className="interactive-page">
      <section className="section">
        <h1 className="section-title">Interactive Demonstrations</h1>
        <p className="section-subtitle">
          Hands-on interactive demonstrations with drag-and-drop and clickable elements
        </p>

        <div className="demos-grid">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`demo-card card ${isInteractiveComplete(demo.id) ? 'completed' : ''}`}
              onClick={() => setActiveDemo(demo)}
            >
              <div className="demo-icon">{demo.icon}</div>
              <h3 className="demo-title">{demo.title}</h3>
              <p className="demo-description">{demo.description}</p>
              {isInteractiveComplete(demo.id) && (
                <div className="demo-badge">✓ Completed</div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Interactive

