import React from 'react'

const App = () => {
  return (
   <div className="px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 font-heading">
            Dashboard
          </h1>
          <p className="mt-1 font-sans text-gray ">
            Welcome back! Here's your business overview
          </p>
        </div>
        <button className="btn-primary">
          New Broadcast
        </button>
      </div>
    </div> 
  )
}

export default App
