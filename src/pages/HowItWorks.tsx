import React from 'react'
import { RecycleIcon, ShoppingBag, ArrowLeftRight } from 'lucide-react'

const HowItWorks: React.FC = () => {
  return (
    <div className="how-it-works-page">
      <h1 className="text-3xl font-bold mb-6">How It Works</h1>
      <p className="mb-8 text-lg">
        Learn how Fakeaway works and how you can enjoy tasty meals while helping reduce single-use waste. We deliver your food in reusable containers that you can either keep or return. Returning them is easy—drop them off at a participating restaurant or send them back via our prepaid postal service. Get rewards for every return!
      </p>
      <div className="process-overview grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <ShoppingBag size={48} className="mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">1. Order</h3>
          <p>Choose your meals from our delicious menu options.</p>
        </div>
        <div className="text-center">
          <Utensils size={48} className="mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">2. Enjoy</h3>
          <p>Receive your meal in our eco-friendly reusable containers.</p>
        </div>
        <div className="text-center">
          <ArrowLeftRight size={48} className="mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">3. Return</h3>
          <p>Return the containers to earn rewards and reduce waste.</p>
        </div>
      </div>
      <div className="rewards bg-green-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Rewards Program</h2>
        <p className="mb-4">
          Earn points for every container you return. Redeem your points for discounts on future orders or eco-friendly products!
        </p>
        <ul className="list-disc list-inside">
          <li>5 points for each container returned</li>
          <li>25 points = $5 off your next order</li>
          <li>100 points = Free meal</li>
        </ul>
      </div>
    </div>
  )
}

export default HowItWorks