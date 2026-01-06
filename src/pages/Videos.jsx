import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaYoutube } from 'react-icons/fa'
import VideoPlayer from '../components/Videos/VideoPlayer'
import './Videos.css'

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videoCategories = [
    {
      id: 'basics',
      title: 'Basics',
      videos: [
        {
          id: 1,
          title: 'Introduction to Panel Beating',
          description: 'Learn the fundamentals of automotive panel beating',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          videoId: 'dQw4w9WgXcQ',
          duration: '10:30',
          category: 'Basics'
        },
        {
          id: 2,
          title: 'Essential Tools Explained',
          description: 'Overview of all the tools you need for panel beating',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          videoId: 'dQw4w9WgXcQ',
          duration: '15:20',
          category: 'Basics'
        }
      ]
    },
    {
      id: 'techniques',
      title: 'Techniques',
      videos: [
        {
          id: 3,
          title: 'Dent Removal Techniques',
          description: 'Professional methods for removing dents from panels',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          videoId: 'dQw4w9WgXcQ',
          duration: '18:45',
          category: 'Techniques'
        },
        {
          id: 4,
          title: 'Body Filler Application',
          description: 'How to properly apply and sand body filler',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          videoId: 'dQw4w9WgXcQ',
          duration: '12:15',
          category: 'Techniques'
        },
        {
          id: 5,
          title: 'Paint Matching Secrets',
          description: 'Tips for achieving perfect paint color matches',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          videoId: 'dQw4w9WgXcQ',
          duration: '14:30',
          category: 'Techniques'
        }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced',
      videos: [
        {
          id: 6,
          title: 'Rust Repair Masterclass',
          description: 'Complete guide to repairing rust damage',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          videoId: 'dQw4w9WgXcQ',
          duration: '25:00',
          category: 'Advanced'
        },
        {
          id: 7,
          title: 'Full Panel Replacement',
          description: 'Step-by-step panel replacement process',
          thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
          videoId: 'dQw4w9WgXcQ',
          duration: '30:45',
          category: 'Advanced'
        }
      ]
    }
  ]

  if (selectedVideo) {
    return (
      <VideoPlayer
        video={selectedVideo}
        onBack={() => setSelectedVideo(null)}
      />
    )
  }

  return (
    <div className="videos-page">
      <section className="section">
        <h1 className="section-title">Video Library</h1>
        <p className="section-subtitle">
          Watch professional demonstrations and learn from expert panel beaters
        </p>

        {videoCategories.map((category, catIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="video-category"
          >
            <h2 className="category-title">{category.title}</h2>
            <div className="videos-grid">
              {category.videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="video-card card"
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="video-thumbnail">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="play-overlay">
                      <FaPlay />
                    </div>
                    <div className="video-duration">{video.duration}</div>
                  </div>
                  <div className="video-info">
                    <h3 className="video-title">{video.title}</h3>
                    <p className="video-description">{video.description}</p>
                    <div className="video-meta">
                      <FaYoutube className="youtube-icon" />
                      <span>YouTube</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}

export default Videos

