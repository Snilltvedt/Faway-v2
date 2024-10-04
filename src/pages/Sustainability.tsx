import React from 'react'
import { Leaf, Recycle, BarChart } from 'lucide-react'

const Sustainability: React.FC = () => {
  return (
    <div className="sustainability-page">
      <h1 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h1>
      <p className="mb-8 text-lg">
        At Fakeaway, we are committed to reducing waste and promoting a sustainable future. By using high-quality reusable containers, we're cutting down on the millions of single-use containers that end up in landfills. Our goal is to help you enjoy delicious meals while minimizing your environmental impact.
      </p>
      <div className="sustainability-info grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <Leaf size={48} className="mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Eco-Friendly Containers</h3>
          <p>Our containers are made from durable, BPA-free materials that can be reused hundreds of times.</p>
        </div>
        <div className="text-center">
          <Recycle size={48} className="mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Circular Economy</h3>
          <p>We promote a circular economy by reusing containers and minimizing waste in the food delivery industry.</p>
        </div>
        <div className="text-center">
          <BarChart size={48} className="mx-auto mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Measurable Impact</h3>
          <p>Track your personal contribution to reducing waste and see the collective impact of our community.</p>
        </div>
      </div>
      <div className="bg-green-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Our Goals</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Eliminate 1 million single-use containers from landfills by 2025</li>
          <li>Achieve carbon neutrality in our operations by 2030</li>
          <li>Partner with 100% sustainable and local food suppliers by 2027</li>
        </ul>
      </div>
    </div>
  )
}

export default Sustainability