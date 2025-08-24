import React from 'react'
export default function Projects(){
  return (
    <div className="card">
      <h2 className="section-title">Academic Projects</h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-800">Project Title — Short description</h3>
          <p className="text-gray-600 mt-1"><strong>Technologies:</strong> Python / Java / C++ / HTML/CSS/JS / MATLAB</p>
          <p className="text-gray-700 mt-2"><strong>Role & impact:</strong> Implemented algorithm X which improved performance by Y%.</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-lg font-semibold text-gray-800">Project Title — Short description</h3>
          <p className="text-gray-600 mt-1"><strong>Technologies:</strong> [To be added]</p>
          <p className="text-gray-700 mt-2"><strong>Role & impact:</strong> [To be added]</p>
        </div>
      </div>
    </div>
  )
}
