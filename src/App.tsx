import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Menu from './pages/Menu'
import HowItWorks from './pages/HowItWorks'
import Reviews from './pages/Reviews'
import Sustainability from './pages/Sustainability'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/sustainability" element={<Sustainability />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App