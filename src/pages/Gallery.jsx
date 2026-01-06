import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { galleryItems } from '../data/galleryData'
import GalleryGrid from '../components/Gallery/GalleryGrid'
import BeforeAfter from '../components/Gallery/BeforeAfter'
import ImageModal from '../components/Gallery/ImageModal'
import './Gallery.css'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'beforeafter'

  const categories = ['All', ...new Set(galleryItems.map(item => item.category))]

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

  if (selectedItem) {
    return (
      <div className="gallery-item-page">
        <section className="section">
          <button onClick={() => setSelectedItem(null)} className="back-btn">
            ← Back to Gallery
          </button>
          <BeforeAfter item={selectedItem} />
        </section>
      </div>
    )
  }

  return (
    <div className="gallery-page">
      <section className="section">
        <h1 className="section-title">Before/After Gallery</h1>
        <p className="section-subtitle">
          Explore real repair projects with interactive before/after comparisons
        </p>

        <div className="gallery-controls">
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="view-toggle">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
            <button
              className={`view-btn ${viewMode === 'beforeafter' ? 'active' : ''}`}
              onClick={() => setViewMode('beforeafter')}
            >
              Before/After View
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <GalleryGrid items={filteredItems} onItemClick={setSelectedItem} />
        ) : (
          <div className="beforeafter-grid">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BeforeAfter item={item} compact />
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Gallery

