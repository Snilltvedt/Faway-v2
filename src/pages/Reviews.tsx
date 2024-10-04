import React from 'react'
import { Star } from 'lucide-react'

const Reviews: React.FC = () => {
  const reviews = [
    { name: 'Sarah L.', rating: 5, comment: "I love how Fakeaway combines delicious food with eco-friendly practices. The reusable containers are high-quality and easy to return!" },
    { name: 'Mike T.', rating: 4, comment: "Great concept and tasty meals. The reward system for returning containers is a nice touch. Wish there were more vegan options though." },
    { name: 'Emily R.', rating: 5, comment: "Fakeaway has changed the way I think about takeout. It's convenient, environmentally friendly, and the food is always fresh and delicious." },
  ]

  return (
    <div className="reviews-page">
      <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
      <p className="mb-8 text-lg">
        Don't just take our word for it—see what our customers are saying! From the quality of our meals to the convenience of our reusable containers, hear from people who have made the switch to Fakeaway and love it!
      </p>
      <div className="user-reviews space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-semibold mr-2">{review.name}</h3>
              <div className="flex">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews