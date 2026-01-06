import React from 'react'
import { motion } from 'framer-motion'
import { FaEye } from 'react-icons/fa'
import './GalleryGrid.css'

const GalleryGrid = ({ items, onItemClick }) => {
  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="gallery-item card"
          onClick={() => onItemClick(item)}
        >
          <div className="gallery-image-placeholder">
            <div className="image-placeholder">
              <FaEye className="placeholder-icon" />
              <span>Before/After</span>
            </div>
            <div className="gallery-overlay">
              <span className="view-text">View Details</span>
            </div>
          </div>
          <div className="gallery-info">
            <h3 className="gallery-title">{item.title}</h3>
            <p className="gallery-category">{item.category}</p>
            <p className="gallery-description">{item.before.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default GalleryGrid

