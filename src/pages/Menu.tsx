import React from 'react'
import { Utensils } from 'lucide-react'

const Menu: React.FC = () => {
  return (
    <div className="menu-page">
      <h1 className="text-3xl font-bold mb-6 flex items-center">
        <Utensils className="mr-2" /> Fakeaway Menu
      </h1>
      <p className="mb-8 text-lg">
        Explore our delicious menu options, all delivered in eco-friendly, reusable containers!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample menu items */}
        {['Veggie Delight', 'Chicken Curry', 'Fish & Chips', 'Vegan Buddha Bowl', 'Beef Stir Fry', 'Margherita Pizza'].map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{item}</h3>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu