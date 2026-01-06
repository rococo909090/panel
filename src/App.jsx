import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './pages/Home'
import Tutorials from './pages/Tutorials'
import Videos from './pages/Videos'
import Interactive from './pages/Interactive'
import Quizzes from './pages/Quizzes'
import Tools from './pages/Tools'
import Gallery from './pages/Gallery'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/interactive" element={<Interactive />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

