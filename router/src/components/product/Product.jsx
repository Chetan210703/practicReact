import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const { userId } = useParams()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-gray-500 mb-4">
        User ID: {userId || 'Guest Mode'}
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img 
              src="https://cdn.prod.website-files.com/64022de562115a8189fe542a/6616718fe4a871d7278a2037_Product-Concept-What-Is-It-And-How-Can-You-Best-Use-It.jpg" 
              alt="Product"
              className="w-full rounded-lg"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-4">Product Name</h1>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <div className="text-2xl font-bold mb-4">
              $99.99
            </div>
            
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Product Details</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
            <li>Feature 4</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Product
