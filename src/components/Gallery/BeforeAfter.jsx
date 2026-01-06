import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './BeforeAfter.css'

const BeforeAfter = ({ item, compact = false }) => {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value)
  }

  if (compact) {
    return (
      <div className="beforeafter-compact card">
        <h3 className="beforeafter-title">{item.title}</h3>
        <div className="beforeafter-container-compact">
          <div className="beforeafter-slider-compact">
            <div
              className="slider-handle-compact"
              style={{ left: `${sliderPosition}%` }}
            />
            <div className="before-image-compact">
              <div className="image-label">Before</div>
            </div>
            <div
              className="after-image-compact"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="image-label">After</div>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="slider-input-compact"
            />
          </div>
        </div>
        <p className="beforeafter-category">{item.category}</p>
      </div>
    )
  }

  return (
    <div className="beforeafter-full">
      <div className="beforeafter-header card">
        <h1 className="beforeafter-title-full">{item.title}</h1>
        <span className="beforeafter-category-full">{item.category}</span>
      </div>

      <div className="beforeafter-container">
        <div className="beforeafter-slider">
          <div
            className="slider-handle"
            style={{ left: `${sliderPosition}%` }}
          >
            <FaChevronLeft />
            <FaChevronRight />
          </div>
          <div className="before-image">
            <div className="image-label">Before</div>
            <div className="image-info">
              <h3>Before Repair</h3>
              <p>{item.before.description}</p>
              <p><strong>Damage:</strong> {item.before.damage}</p>
            </div>
          </div>
          <div
            className="after-image"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <div className="image-label">After</div>
            <div className="image-info">
              <h3>After Repair</h3>
              <p>{item.after.description}</p>
              <p><strong>Result:</strong> {item.after.result}</p>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="slider-input"
          />
        </div>
      </div>

      <div className="repair-steps card">
        <h2>Repair Steps</h2>
        <ol className="steps-list">
          {item.steps.map((step, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {step}
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BeforeAfter

