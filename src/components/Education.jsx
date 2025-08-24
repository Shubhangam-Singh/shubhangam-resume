import React from 'react'
export default function Education(){
  const items = [
    { degree:'B.Tech, Computer Science & Engineering', institution:'VIT Vellore', period:'Expected Graduation: July 2027', grade:'GPA: 8.99 / 10' },
    { degree:'Class XII (CBSE)', institution:'MV Convent, Allahabad', period:'2023', grade:'Percentage: 93%' },
    { degree:"Class X (ICSE)", institution:"Boys' High School & College, Allahabad", period:'2021', grade:'Percentage: 95%' }
  ]
  return (
    <div className="card">
      <h2 className="section-title">Education</h2>
      <div className="space-y-6">
        {items.map((e,i)=>(
          <div key={i} className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold text-gray-800">{e.degree}</h3>
            <p className="text-gray-600 font-medium">{e.institution}</p>
            <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-500"><span>{e.period}</span><span className="font-medium text-blue-600">{e.grade}</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}
