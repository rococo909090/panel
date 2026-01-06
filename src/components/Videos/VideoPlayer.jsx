import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaClock } from 'react-icons/fa'
import './VideoPlayer.css'

const VideoPlayer = ({ video, onBack }) => {
  const [notes, setNotes] = useState('')
  const [timestamps, setTimestamps] = useState([])

  const addTimestamp = () => {
    const timestamp = new Date().toISOString().substr(11, 8)
    setTimestamps([...timestamps, { time: timestamp, note: notes }])
    setNotes('')
  }

  return (
    <div className="video-player-page">
      <div className="video-player-header">
        <button onClick={onBack} className="back-btn">
          <FaArrowLeft /> Back to Videos
        </button>
        <h1 className="video-player-title">{video.title}</h1>
      </div>

      <div className="video-player-container">
        <div className="video-main">
          <div className="video-wrapper">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-iframe"
            />
          </div>

          <div className="video-details card">
            <h2>About this video</h2>
            <p>{video.description}</p>
            <div className="video-stats">
              <span><FaClock /> Duration: {video.duration}</span>
              <span>Category: {video.category}</span>
            </div>
          </div>
        </div>

        <div className="video-sidebar">
          <div className="video-notes card">
            <h3>Video Notes</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes while watching..."
              className="notes-textarea"
            />
            <button onClick={addTimestamp} className="btn btn-primary">
              Add Timestamp
            </button>

            {timestamps.length > 0 && (
              <div className="timestamps-list">
                <h4>Timestamps</h4>
                {timestamps.map((ts, index) => (
                  <div key={index} className="timestamp-item">
                    <span className="timestamp-time">{ts.time}</span>
                    <span className="timestamp-note">{ts.note}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer

