import React from 'react'
export default function Experience(){
  const exps = [
    { title:'Intern', company:'Local NGO', bullets:[
      'Supported community-focused tech initiatives and awareness programs.',
      'Volunteered with NSS/Environmental Club to organize events and drive community outreach.',
      'Improved communication materials and helped coordinate volunteer activities.'
    ]}
  ]
  return (
    <div className="card">
      <h2 className="section-title">Experience</h2>
      <div className="space-y-6">
        {exps.map((e,i)=>(
          <div key={i} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-800">{e.title}</h3>
            <p className="text-gray-600 font-medium">{e.company}</p>
            <p className="text-sm text-gray-500 mb-3">{e.duration}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {e.bullets.map((b,j)=><li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
      
    </div>
  )
}
