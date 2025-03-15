import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>  
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Welcome to Our Website</h1>
          <p className="text-xl text-gray-600 mb-8">Discover amazing content and services</p>
          
          <div className="flex justify-center space-x-4">
            <Link 
              to="/about" 
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Learn More
            </Link>
            <Link
              to="/product"
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Our Product
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Feature 1</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Feature 2</h2>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Feature 3</h2>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
