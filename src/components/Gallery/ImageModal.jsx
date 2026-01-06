import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import './ImageModal.css'

const ImageModal = ({ isOpen, onClose, image, title }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
          {title && <h2 className="modal-title">{title}</h2>}
          <div className="modal-image">
            {image || <div className="image-placeholder">Image Placeholder</div>}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ImageModal

