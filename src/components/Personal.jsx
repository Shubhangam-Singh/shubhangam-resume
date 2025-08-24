import React from 'react'
export default function Personal(){
  return (
    <div className="card">
      <h2 className="section-title">Personal Details</h2>
      <div className="grid md:grid-cols-3 gap-4 text-gray-700">
        <div><span className="font-medium">Date of Birth:</span><p>28 March 2005</p></div>
        <div><span className="font-medium">Nationality:</span><p>Indian</p></div>
        <div><span className="font-medium">Gender:</span><p>Male</p></div>
      </div>
    </div>
  )
}
