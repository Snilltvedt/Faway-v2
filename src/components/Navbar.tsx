import React from 'react'
import { Link } from 'react-router-dom'
import { UtensilsCrossed } from 'lucide-react'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <UtensilsCrossed size={24} />
            <span className="text-xl font-bold">Fakeaway</span>
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-green-200">Menu</Link>
            <Link to="/how-it-works" className="hover:text-green-200">How It Works</Link>
            <Link to="/reviews" className="hover:text-green-200">Reviews</Link>
            <Link to="/sustainability" className="hover:text-green-200">Sustainability</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar