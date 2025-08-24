import React from 'react'
export default function Achievements(){
  const items = [
    'Qualified JEE Mains 2023 — 98.5 percentile',
    'Qualified KVPY SA (2022) — AIR 731',
    'Qualified NTSE Stage 1 (2021) — State Rank 15',
    'Qualified PRMO (2019, 2021)',
    'Qualified NSEJS (2019)'
  ]
  return (
    <div className="card">
      <h2 className="section-title">Achievements & Competitive Exams</h2>
      <div className="grid md:grid-cols-2 gap-3">
        {items.map((x,i)=>(
          <div key={i} className="flex items-start gap-3">
            <span className="text-blue-600 font-bold text-lg">•</span>
            <span className="text-gray-700">{x}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
